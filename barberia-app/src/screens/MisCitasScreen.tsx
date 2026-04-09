import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert, Image, Modal } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { theme, formatPrecio } from '../theme';
import { formatearPrecio } from '../context/ConfigContext';
import api from '../services/api';

export default function MisCitasScreen() {
  const [reservas, setReservas] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [reservaSeleccionada, setReservaSeleccionada] = useState<any>(null);
  const [fecha, setFecha] = useState<Date | null>(null);
  const [showPicker, setShowPicker] = useState(false);
  const [slots, setSlots] = useState<{ hora: string; disponible: boolean }[]>([]);
  const [horaSeleccionada, setHoraSeleccionada] = useState<string | null>(null);
  const [loadingSlots, setLoadingSlots] = useState(false);

  const cargarReservas = async () => {
    const { data } = await api.get('/reservas');
    setReservas(data);
  };

  useFocusEffect(useCallback(() => { cargarReservas(); }, []));

  const cancelar = async (id: number) => {
    Alert.alert('Cancelar cita', '¿Seguro que deseas cancelar?', [
      { text: 'No' },
      { text: 'Sí', onPress: async () => {
        await api.patch(`/reservas/${id}/cancelar`);
        cargarReservas();
      }}
    ]);
  };

  const abrirReprogramar = (reserva: any) => {
    setReservaSeleccionada(reserva);
    setFecha(null);
    setSlots([]);
    setHoraSeleccionada(null);
    setModalVisible(true);
  };

  const cargarSlots = async (fechaSeleccionada: Date) => {
    setLoadingSlots(true);
    try {
      const { data } = await api.get('/horarios/disponibles', {
        params: { barberoId: reservaSeleccionada.barbero.id, fecha: fechaSeleccionada.toISOString(), servicioId: reservaSeleccionada.servicio.id }
      });
      setSlots(data.slots);
      setHoraSeleccionada(null);
    } catch {
      Alert.alert('Error', 'No se pudieron cargar los horarios');
    } finally {
      setLoadingSlots(false);
    }
  };

  const handleReprogramar = async () => {
    if (!fecha || !horaSeleccionada) return Alert.alert('Completa los campos', 'Selecciona fecha y hora');
    const [h, m] = horaSeleccionada.split(':').map(Number);
    const fechaFinal = new Date(fecha);
    fechaFinal.setHours(h, m, 0, 0);
    try {
      await api.patch(`/reservas/${reservaSeleccionada.id}/reprogramar`, { fecha: fechaFinal });
      setModalVisible(false);
      cargarReservas();
      Alert.alert('✅ Reserva reprogramada', `Tu nueva cita es el ${fechaFinal.toLocaleString('es-ES', { dateStyle: 'medium', timeStyle: 'short' })}`);
    } catch {
      Alert.alert('Error', 'No se pudo reprogramar la reserva');
    }
  };

  const estadoColor: any = {
    pendiente: theme.colors.warning,
    en_proceso: '#4A90D9',
    cancelada: theme.colors.error,
    completada: theme.colors.success
  };

  const estadoLabel: any = {
    pendiente: '⏳ Pendiente',
    en_proceso: '🔄 En proceso',
    cancelada: '❌ Cancelada',
    completada: '✅ Completada'
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.brandRow}>
          <Image source={require('../../assets/icon.png')} style={styles.brandLogo} />
          <Text style={styles.brand}>THE BARBER</Text>
        </View>
        <Text style={styles.title}>Mis Reservas</Text>
      </View>

      <FlatList
        data={reservas}
        keyExtractor={(item: any) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyIcon}>📅</Text>
            <Text style={styles.emptyText}>No tienes reservas aún</Text>
            <Text style={styles.emptySubtext}>Reserva con uno de nuestros barberos</Text>
          </View>
        }
        renderItem={({ item }: any) => (
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>{item.barbero.nombre.charAt(0)}</Text>
              </View>
              <View style={styles.cardInfo}>
                <Text style={styles.barbero}>{item.barbero.nombre}</Text>
                <Text style={styles.servicio}>{item.servicio.nombre}</Text>
              </View>
              <Text style={styles.precio}>{formatearPrecio(item.servicio.precio)}</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.cardFooter}>
              <Text style={styles.fecha}>{new Date(item.fecha).toLocaleString('es-ES', { dateStyle: 'medium', timeStyle: 'short' })}</Text>
              <View style={styles.cardActions}>
                <Text style={[styles.estado, { color: estadoColor[item.estado] }]}>{estadoLabel[item.estado]}</Text>
                {item.estado === 'pendiente' && (
                  <>
                    <TouchableOpacity onPress={() => abrirReprogramar(item)} style={styles.reprogramarBtn}>
                      <Text style={styles.reprogramarText}>Reprogramar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => cancelar(item.id)} style={styles.cancelBtn}>
                      <Text style={styles.cancelText}>Cancelar</Text>
                    </TouchableOpacity>
                  </>
                )}
              </View>
            </View>
          </View>
        )}
      />
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Reprogramar Reserva</Text>
            {reservaSeleccionada && (
              <Text style={styles.modalSubtitle}>{reservaSeleccionada.barbero.nombre} · {reservaSeleccionada.servicio.nombre}</Text>
            )}

            <TouchableOpacity style={styles.datePicker} onPress={() => setShowPicker(true)}>
              <Text style={fecha ? styles.dateText : styles.datePlaceholder}>
                {fecha ? fecha.toLocaleDateString('es-ES', { dateStyle: 'full' }) : 'Seleccionar nueva fecha'}
              </Text>
              <Text>📅</Text>
            </TouchableOpacity>

            <DateTimePickerModal
              isVisible={showPicker}
              mode="date"
              minimumDate={new Date()}
              onConfirm={(date) => { setFecha(date); setShowPicker(false); cargarSlots(date); }}
              onCancel={() => setShowPicker(false)}
            />

            {loadingSlots && <Text style={styles.loadingText}>Cargando horarios...</Text>}

            {!loadingSlots && fecha && slots.length === 0 && (
              <Text style={styles.sinHorariosText}>Sin disponibilidad para este día</Text>
            )}

            {slots.length > 0 && (
              <>
                <Text style={styles.slotsLabel}>HORARIOS DISPONIBLES</Text>
                <View style={styles.slotsGrid}>
                  {slots.map((slot) => (
                    <TouchableOpacity
                      key={slot.hora}
                      disabled={!slot.disponible}
                      style={[styles.slot, !slot.disponible && styles.slotOcupado, horaSeleccionada === slot.hora && styles.slotSelected]}
                      onPress={() => setHoraSeleccionada(slot.hora)}
                    >
                      <Text style={[styles.slotText, !slot.disponible && styles.slotTextOcupado, horaSeleccionada === slot.hora && styles.slotTextSelected]}>
                        {slot.hora}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </>
            )}

            <View style={styles.modalBtns}>
              <TouchableOpacity style={styles.cancelModalBtn} onPress={() => setModalVisible(false)}>
                <Text style={styles.cancelModalText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.confirmarBtn} onPress={handleReprogramar}>
                <Text style={styles.confirmarText}>Confirmar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  header: { padding: 24, paddingTop: 48, borderBottomWidth: 1, borderBottomColor: theme.colors.lightGray, marginBottom: 16 },
  brandRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  brandLogo: { width: 28, height: 28, borderRadius: 6, marginRight: 8 },
  brand: { fontSize: 13, color: theme.colors.gold, letterSpacing: 3, fontWeight: 'bold' },
  title: { fontSize: 26, fontWeight: 'bold', color: theme.colors.white },
  card: { backgroundColor: theme.colors.card, marginHorizontal: 16, marginBottom: 12, borderRadius: 12, padding: 16, borderLeftWidth: 3, borderLeftColor: theme.colors.gold },
  cardHeader: { flexDirection: 'row', alignItems: 'center' },
  avatar: { width: 44, height: 44, borderRadius: 22, backgroundColor: theme.colors.gold, justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  avatarText: { fontSize: 18, fontWeight: 'bold', color: theme.colors.background },
  cardInfo: { flex: 1 },
  barbero: { fontSize: 15, fontWeight: 'bold', color: theme.colors.white },
  servicio: { color: theme.colors.gray, fontSize: 13, marginTop: 2 },
  precio: { color: theme.colors.gold, fontWeight: 'bold', fontSize: 16 },
  divider: { height: 1, backgroundColor: theme.colors.lightGray, marginVertical: 12 },
  cardFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  fecha: { color: theme.colors.gray, fontSize: 12 },
  cardActions: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  estado: { fontSize: 12, fontWeight: 'bold' },
  reprogramarBtn: { backgroundColor: '#1a2a3a', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 6, borderWidth: 1, borderColor: theme.colors.gold },
  reprogramarText: { color: theme.colors.gold, fontSize: 12, fontWeight: 'bold' },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'flex-end' },
  modalContent: { backgroundColor: theme.colors.card, borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 24 },
  modalTitle: { fontSize: 20, fontWeight: 'bold', color: theme.colors.gold, marginBottom: 6, textAlign: 'center' },
  modalSubtitle: { color: theme.colors.gray, fontSize: 13, textAlign: 'center', marginBottom: 16 },
  datePicker: { backgroundColor: theme.colors.background, padding: 14, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1, borderColor: theme.colors.lightGray, marginBottom: 12 },
  dateText: { fontSize: 14, color: theme.colors.white },
  datePlaceholder: { fontSize: 14, color: theme.colors.gray },
  sinHorariosText: { color: theme.colors.gray, fontStyle: 'italic', textAlign: 'center', marginVertical: 12 },
  loadingText: { color: theme.colors.gray, textAlign: 'center', marginVertical: 8 },
  slotsLabel: { fontSize: 11, fontWeight: 'bold', color: theme.colors.gold, letterSpacing: 2, marginBottom: 10 },
  slotsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 16 },
  slot: { paddingHorizontal: 14, paddingVertical: 10, borderRadius: 8, borderWidth: 1, borderColor: theme.colors.gold, backgroundColor: theme.colors.background },
  slotOcupado: { borderColor: theme.colors.lightGray, opacity: 0.4 },
  slotSelected: { backgroundColor: theme.colors.gold },
  slotText: { color: theme.colors.gold, fontWeight: 'bold', fontSize: 13 },
  slotTextOcupado: { color: theme.colors.gray },
  slotTextSelected: { color: theme.colors.background },
  modalBtns: { flexDirection: 'row', gap: 12, marginTop: 8 },
  cancelModalBtn: { flex: 1, padding: 14, borderRadius: 8, borderWidth: 1, borderColor: theme.colors.lightGray, alignItems: 'center' },
  cancelModalText: { color: theme.colors.gray, fontWeight: 'bold' },
  confirmarBtn: { flex: 1, backgroundColor: theme.colors.gold, padding: 14, borderRadius: 8, alignItems: 'center' },
  confirmarText: { color: theme.colors.background, fontWeight: 'bold' },
  cancelText: { color: theme.colors.error, fontSize: 12, fontWeight: 'bold' },
  empty: { alignItems: 'center', marginTop: 80 },
  emptyIcon: { fontSize: 48, marginBottom: 16 },
  emptyText: { color: theme.colors.white, fontSize: 18, fontWeight: 'bold' },
  emptySubtext: { color: theme.colors.gray, marginTop: 8 },
});

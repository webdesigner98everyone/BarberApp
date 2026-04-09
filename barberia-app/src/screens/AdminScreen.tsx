import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { theme, formatPrecio } from '../theme';
import { formatearPrecio } from '../context/ConfigContext';
import api from '../services/api';

export default function AdminScreen() {
  const [reservas, setReservas] = useState([]);
  const [filtro, setFiltro] = useState<'hoy' | 'todas'>('hoy');
  const [cumpleaneros, setCumpleaneros] = useState<any[]>([]);

  const cargar = async () => {
    const url = filtro === 'hoy' ? '/admin/reservas/hoy' : '/admin/reservas';
    const { data } = await api.get(url);
    setReservas(data);
  };

  const cargarCumpleanos = async () => {
    const { data } = await api.get('/admin/cumpleanos');
    setCumpleaneros(data);
  };

  useFocusEffect(useCallback(() => {
    cargar();
    cargarCumpleanos();
  }, [filtro]));

  const cancelar = (id: number) => {
    Alert.alert('Cancelar cita', '¿Seguro que deseas cancelar esta cita?', [
      { text: 'No' },
      { text: 'Sí', onPress: async () => {
        await api.patch(`/admin/reservas/${id}/cancelar`);
        cargar();
      }}
    ]);
  };

  const completar = (id: number) => {
    Alert.alert('Completar cita', '¿Marcar esta cita como completada?', [
      { text: 'Cancelar' },
      { text: 'Confirmar', onPress: async () => {
        await api.patch(`/admin/reservas/${id}/completar`);
        cargar();
      }}
    ]);
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
        <Text style={styles.title}>Panel Admin</Text>
      </View>

      <View style={styles.filtros}>
        <TouchableOpacity
          style={[styles.filtroBtn, filtro === 'hoy' && styles.filtroBtnActive]}
          onPress={() => setFiltro('hoy')}
        >
          <Text style={[styles.filtroText, filtro === 'hoy' && styles.filtroTextActive]}>Hoy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filtroBtn, filtro === 'todas' && styles.filtroBtnActive]}
          onPress={() => setFiltro('todas')}
        >
          <Text style={[styles.filtroText, filtro === 'todas' && styles.filtroTextActive]}>Todas</Text>
        </TouchableOpacity>
      </View>

      {cumpleaneros.length > 0 && (
        <View style={styles.cumpleBanner}>
          <Text style={styles.cumpleTitulo}>🎂 Cumpleaños hoy ({cumpleaneros.length})</Text>
          {cumpleaneros.map((c) => (
            <View key={c.id} style={styles.cumpleItem}>
              <Text style={styles.cumpleNombre}>{c.nombre}</Text>
              {c.telefono && <Text style={styles.cumpleTel}>📞 {c.telefono}</Text>}
            </View>
          ))}
        </View>
      )}

      <FlatList
        data={reservas}
        keyExtractor={(item: any) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyIcon}>📋</Text>
            <Text style={styles.emptyText}>No hay citas {filtro === 'hoy' ? 'hoy' : 'registradas'}</Text>
          </View>
        }
        renderItem={({ item }: any) => (
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>{item.usuario.nombre.charAt(0)}</Text>
              </View>
              <View style={styles.cardInfo}>
                <View style={styles.clienteRow}>
                  <Text style={styles.clienteLabel}>CLIENTE</Text>
                  <Text style={styles.cliente}>{item.usuario.nombre}</Text>
                </View>
                <View style={styles.clienteRow}>
                  <Text style={styles.clienteLabel}>BARBERO</Text>
                  <Text style={styles.barbero}>{item.barbero.nombre}</Text>
                </View>
                <View style={styles.clienteRow}>
                  <Text style={styles.clienteLabel}>SERVICIO</Text>
                  <Text style={styles.servicio}>{item.servicio.nombre} · {formatearPrecio(item.servicio.precio)}</Text>
                </View>
              </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.cardFooter}>
              <Text style={styles.fecha}>
                {new Date(item.fecha).toLocaleString('es-ES', { dateStyle: 'medium', timeStyle: 'short' })}
              </Text>
              <Text style={[styles.estado, { color: estadoColor[item.estado] }]}>
                {estadoLabel[item.estado]}
              </Text>
            </View>
            {(item.estado === 'pendiente' || item.estado === 'en_proceso') && (
              <View style={styles.actions}>
                <TouchableOpacity style={styles.completarBtn} onPress={() => completar(item.id)}>
                  <Text style={styles.completarText}>Completar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelarBtn} onPress={() => cancelar(item.id)}>
                  <Text style={styles.cancelarText}>Cancelar</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}
      />
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
  filtros: { flexDirection: 'row', marginHorizontal: 16, marginBottom: 16, backgroundColor: theme.colors.card, borderRadius: 10, padding: 4 },
  filtroBtn: { flex: 1, paddingVertical: 10, alignItems: 'center', borderRadius: 8 },
  filtroBtnActive: { backgroundColor: theme.colors.gold },
  filtroText: { color: theme.colors.gray, fontWeight: 'bold' },
  filtroTextActive: { color: theme.colors.background },
  card: { backgroundColor: theme.colors.card, marginHorizontal: 16, marginBottom: 12, borderRadius: 12, padding: 16, borderLeftWidth: 3, borderLeftColor: theme.colors.gold },
  cardHeader: { flexDirection: 'row', alignItems: 'flex-start' },
  avatar: { width: 44, height: 44, borderRadius: 22, backgroundColor: theme.colors.gold, justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  avatarText: { fontSize: 18, fontWeight: 'bold', color: theme.colors.background },
  cardInfo: { flex: 1 },
  clienteRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 4 },
  clienteLabel: { fontSize: 10, color: theme.colors.gold, fontWeight: 'bold', letterSpacing: 1, width: 60 },
  cliente: { fontSize: 14, fontWeight: 'bold', color: theme.colors.white, flex: 1 },
  barbero: { color: theme.colors.gray, fontSize: 13, flex: 1 },
  servicio: { color: theme.colors.gray, fontSize: 13, flex: 1 },
  divider: { height: 1, backgroundColor: theme.colors.lightGray, marginVertical: 12 },
  cardFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 },
  fecha: { color: theme.colors.gray, fontSize: 12 },
  actions: { flexDirection: 'row', gap: 8, marginTop: 10 },
  estado: { fontSize: 12, fontWeight: 'bold' },
  completarBtn: { flex: 1, backgroundColor: '#1a3a2a', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 6, borderWidth: 1, borderColor: theme.colors.success, alignItems: 'center' },
  completarText: { color: theme.colors.success, fontSize: 12, fontWeight: 'bold' },
  cancelarBtn: { flex: 1, backgroundColor: '#3a1a1a', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 6, borderWidth: 1, borderColor: theme.colors.error, alignItems: 'center' },
  cancelarText: { color: theme.colors.error, fontSize: 12, fontWeight: 'bold' },
  empty: { alignItems: 'center', marginTop: 80 },
  emptyIcon: { fontSize: 48, marginBottom: 16 },
  emptyText: { color: theme.colors.gray, fontSize: 16 },
  cumpleBanner: { backgroundColor: '#2a1a3a', marginHorizontal: 16, marginBottom: 16, borderRadius: 12, padding: 16, borderWidth: 1, borderColor: theme.colors.gold },
  cumpleTitulo: { color: theme.colors.gold, fontWeight: 'bold', fontSize: 15, marginBottom: 10 },
  cumpleItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 6, borderBottomWidth: 1, borderBottomColor: theme.colors.lightGray },
  cumpleNombre: { color: theme.colors.white, fontSize: 14, fontWeight: '600' },
  cumpleTel: { color: theme.colors.gray, fontSize: 13 },
});

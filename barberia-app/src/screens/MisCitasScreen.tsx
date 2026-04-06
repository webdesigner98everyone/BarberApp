import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { theme, formatPrecio } from '../theme';
import { useConfig, formatearPrecio } from '../context/ConfigContext';
import api from '../services/api';

export default function MisCitasScreen() {
  const config = useConfig();
  const [reservas, setReservas] = useState([]);

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

  const estadoColor: any = {
    pendiente: theme.colors.warning,
    cancelada: theme.colors.error,
    completada: theme.colors.success
  };

  const estadoLabel: any = {
    pendiente: '⏳ Pendiente',
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
              <Text style={styles.precio}>{formatearPrecio(item.servicio.precio, config)}</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.cardFooter}>
              <Text style={styles.fecha}>{new Date(item.fecha).toLocaleString('es-ES', { dateStyle: 'medium', timeStyle: 'short' })}</Text>
              <View style={styles.cardActions}>
                <Text style={[styles.estado, { color: estadoColor[item.estado] }]}>{estadoLabel[item.estado]}</Text>
                {item.estado === 'pendiente' && (
                  <TouchableOpacity onPress={() => cancelar(item.id)} style={styles.cancelBtn}>
                    <Text style={styles.cancelText}>Cancelar</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
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
  cancelBtn: { backgroundColor: '#3a1a1a', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 6, borderWidth: 1, borderColor: theme.colors.error },
  cancelText: { color: theme.colors.error, fontSize: 12, fontWeight: 'bold' },
  empty: { alignItems: 'center', marginTop: 80 },
  emptyIcon: { fontSize: 48, marginBottom: 16 },
  emptyText: { color: theme.colors.white, fontSize: 18, fontWeight: 'bold' },
  emptySubtext: { color: theme.colors.gray, marginTop: 8 },
});

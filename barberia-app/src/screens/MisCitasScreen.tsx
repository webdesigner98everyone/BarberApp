import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import api from '../services/api';

export default function MisCitasScreen() {
  const [reservas, setReservas] = useState([]);

  const cargarReservas = async () => {
    const { data } = await api.get('/reservas');
    setReservas(data);
  };

  useFocusEffect(useCallback(() => { cargarReservas(); }, []));

  const cancelar = async (id: number) => {
    Alert.alert('Cancelar', '¿Seguro que deseas cancelar?', [
      { text: 'No' },
      { text: 'Sí', onPress: async () => {
        await api.patch(`/reservas/${id}/cancelar`);
        cargarReservas();
      }}
    ]);
  };

  const estadoColor: any = { pendiente: '#f59e0b', cancelada: '#ef4444', completada: '#10b981' };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis citas</Text>
      <FlatList
        data={reservas}
        keyExtractor={(item: any) => item.id.toString()}
        ListEmptyComponent={<Text style={styles.empty}>No tienes citas aún</Text>}
        renderItem={({ item }: any) => (
          <View style={styles.card}>
            <Text style={styles.barbero}>{item.barbero.nombre}</Text>
            <Text style={styles.servicio}>{item.servicio.nombre} · ${item.servicio.precio}</Text>
            <Text style={styles.fecha}>{new Date(item.fecha).toLocaleString()}</Text>
            <View style={styles.row}>
              <Text style={[styles.estado, { color: estadoColor[item.estado] }]}>{item.estado}</Text>
              {item.estado === 'pendiente' && (
                <TouchableOpacity onPress={() => cancelar(item.id)}>
                  <Text style={styles.cancelar}>Cancelar</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  card: { backgroundColor: '#fff', padding: 16, borderRadius: 12, marginBottom: 12, elevation: 2 },
  barbero: { fontSize: 16, fontWeight: 'bold' },
  servicio: { color: '#444', marginTop: 4 },
  fecha: { color: '#666', marginTop: 4 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 },
  estado: { fontWeight: 'bold', textTransform: 'capitalize' },
  cancelar: { color: '#ef4444', fontWeight: 'bold' },
  empty: { textAlign: 'center', color: '#999', marginTop: 40 },
});

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import api from '../services/api';

export default function BookingScreen({ route, navigation }: any) {
  const { barbero } = route.params;
  const [servicios, setServicios] = useState([]);
  const [servicioId, setServicioId] = useState<number | null>(null);
  const [fecha, setFecha] = useState<Date | null>(null);
  const [showPicker, setShowPicker] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api.get('/servicios').then(({ data }) => setServicios(data));
  }, []);

  const handleReservar = async () => {
    if (!servicioId) return Alert.alert('Campo requerido', 'Por favor selecciona un servicio');
    if (!fecha) return Alert.alert('Campo requerido', 'Por favor selecciona una fecha y hora');

    const ahora = new Date();
    if (fecha <= ahora) return Alert.alert('Fecha inválida', 'La fecha debe ser futura');

    try {
      setLoading(true);
      await api.post('/reservas', { barberoId: barbero.id, servicioId, fecha });
      Alert.alert('✅ Reserva confirmada', `Tu cita con ${barbero.nombre} fue agendada`, [
        { text: 'Ver mis citas', onPress: () => navigation.navigate('Main', { screen: 'MisCitas' }) }
      ]);
    } catch {
      Alert.alert('Error', 'No se pudo crear la reserva, intenta de nuevo');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reservar con {barbero.nombre}</Text>
      <Text style={styles.especialidad}>{barbero.especialidad}</Text>

      <Text style={styles.label}>Selecciona un servicio:</Text>
      <FlatList
        data={servicios}
        keyExtractor={(item: any) => item.id.toString()}
        style={styles.list}
        renderItem={({ item }: any) => (
          <TouchableOpacity
            style={[styles.card, servicioId === item.id && styles.selected]}
            onPress={() => setServicioId(item.id)}
          >
            <Text style={styles.nombre}>{item.nombre}</Text>
            <Text style={styles.detalle}>${item.precio} · {item.duracion_minutos} min</Text>
            {servicioId === item.id && <Text style={styles.check}>✓</Text>}
          </TouchableOpacity>
        )}
      />

      <Text style={styles.label}>Fecha y hora:</Text>
      <TouchableOpacity style={styles.datePicker} onPress={() => setShowPicker(true)}>
        <Text style={fecha ? styles.dateText : styles.datePlaceholder}>
          {fecha ? fecha.toLocaleString('es-ES', { dateStyle: 'full', timeStyle: 'short' }) : 'Toca para seleccionar'}
        </Text>
        <Text>📅</Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={showPicker}
        mode="datetime"
        minimumDate={new Date()}
        onConfirm={(date) => { setFecha(date); setShowPicker(false); }}
        onCancel={() => setShowPicker(false)}
      />

      <TouchableOpacity style={[styles.btn, loading && styles.btnDisabled]} onPress={handleReservar} disabled={loading}>
        <Text style={styles.btnText}>{loading ? 'Reservando...' : 'Confirmar reserva'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f5f5f5' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 4 },
  especialidad: { color: '#666', marginBottom: 16 },
  label: { fontSize: 16, fontWeight: '600', marginBottom: 8, marginTop: 8 },
  list: { maxHeight: 220 },
  card: { backgroundColor: '#fff', padding: 14, borderRadius: 10, marginBottom: 8, borderWidth: 2, borderColor: 'transparent', flexDirection: 'row', alignItems: 'center' },
  selected: { borderColor: '#1a1a1a' },
  nombre: { fontSize: 15, fontWeight: 'bold', flex: 1 },
  detalle: { color: '#666' },
  check: { fontSize: 16, fontWeight: 'bold', marginLeft: 8 },
  datePicker: { backgroundColor: '#fff', padding: 14, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, borderWidth: 1, borderColor: '#ddd' },
  dateText: { fontSize: 15, color: '#1a1a1a', flex: 1 },
  datePlaceholder: { fontSize: 15, color: '#999', flex: 1 },
  btn: { backgroundColor: '#1a1a1a', padding: 16, borderRadius: 8, alignItems: 'center', marginTop: 8 },
  btnDisabled: { backgroundColor: '#666' },
  btnText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

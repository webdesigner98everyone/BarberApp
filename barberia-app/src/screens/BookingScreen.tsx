import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { theme } from '../theme';
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
    if (fecha <= new Date()) return Alert.alert('Fecha inválida', 'La fecha debe ser futura');

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
      <View style={styles.barberoBanner}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{barbero.nombre.charAt(0)}</Text>
        </View>
        <View>
          <Text style={styles.barberoNombre}>{barbero.nombre}</Text>
          <Text style={styles.barberoEsp}>{barbero.especialidad}</Text>
        </View>
      </View>

      <Text style={styles.label}>SELECCIONA UN SERVICIO</Text>
      <FlatList
        data={servicios}
        keyExtractor={(item: any) => item.id.toString()}
        style={styles.list}
        renderItem={({ item }: any) => (
          <TouchableOpacity
            style={[styles.card, servicioId === item.id && styles.selected]}
            onPress={() => setServicioId(item.id)}
          >
            <View style={styles.cardInfo}>
              <Text style={styles.servicioNombre}>{item.nombre}</Text>
              <Text style={styles.servicioDuracion}>{item.duracion_minutos} min</Text>
            </View>
            <Text style={styles.servicioPrecio}>${item.precio}</Text>
            {servicioId === item.id && <Text style={styles.check}> ✓</Text>}
          </TouchableOpacity>
        )}
      />

      <Text style={styles.label}>FECHA Y HORA</Text>
      <TouchableOpacity style={styles.datePicker} onPress={() => setShowPicker(true)}>
        <Text style={fecha ? styles.dateText : styles.datePlaceholder}>
          {fecha ? fecha.toLocaleString('es-ES', { dateStyle: 'full', timeStyle: 'short' }) : 'Toca para seleccionar'}
        </Text>
        <Text style={styles.dateIcon}>📅</Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={showPicker}
        mode="datetime"
        minimumDate={new Date()}
        onConfirm={(date) => { setFecha(date); setShowPicker(false); }}
        onCancel={() => setShowPicker(false)}
      />

      <TouchableOpacity style={[styles.btn, loading && styles.btnDisabled]} onPress={handleReservar} disabled={loading}>
        <Text style={styles.btnText}>{loading ? 'RESERVANDO...' : 'CONFIRMAR RESERVA'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background, padding: 16 },
  barberoBanner: { flexDirection: 'row', alignItems: 'center', backgroundColor: theme.colors.card, padding: 16, borderRadius: 12, marginBottom: 20, borderLeftWidth: 3, borderLeftColor: theme.colors.gold },
  avatar: { width: 48, height: 48, borderRadius: 24, backgroundColor: theme.colors.gold, justifyContent: 'center', alignItems: 'center', marginRight: 14 },
  avatarText: { fontSize: 20, fontWeight: 'bold', color: theme.colors.background },
  barberoNombre: { fontSize: 16, fontWeight: 'bold', color: theme.colors.white },
  barberoEsp: { color: theme.colors.gray, fontSize: 13 },
  label: { fontSize: 11, fontWeight: 'bold', color: theme.colors.gold, letterSpacing: 2, marginBottom: 10, marginTop: 4 },
  list: { maxHeight: 220, marginBottom: 8 },
  card: { backgroundColor: theme.colors.card, padding: 14, borderRadius: 10, marginBottom: 8, borderWidth: 1, borderColor: theme.colors.lightGray, flexDirection: 'row', alignItems: 'center' },
  selected: { borderColor: theme.colors.gold },
  cardInfo: { flex: 1 },
  servicioNombre: { fontSize: 15, fontWeight: 'bold', color: theme.colors.white },
  servicioDuracion: { color: theme.colors.gray, fontSize: 12, marginTop: 2 },
  servicioPrecio: { color: theme.colors.gold, fontWeight: 'bold', fontSize: 16 },
  check: { color: theme.colors.gold, fontWeight: 'bold', fontSize: 16 },
  datePicker: { backgroundColor: theme.colors.card, padding: 14, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, borderWidth: 1, borderColor: theme.colors.lightGray },
  dateText: { fontSize: 14, color: theme.colors.white, flex: 1 },
  datePlaceholder: { fontSize: 14, color: theme.colors.gray, flex: 1 },
  dateIcon: { fontSize: 18 },
  btn: { backgroundColor: theme.colors.gold, padding: 16, borderRadius: 8, alignItems: 'center', marginTop: 4 },
  btnDisabled: { backgroundColor: theme.colors.lightGray },
  btnText: { color: theme.colors.background, fontSize: 14, fontWeight: 'bold', letterSpacing: 2 },
});

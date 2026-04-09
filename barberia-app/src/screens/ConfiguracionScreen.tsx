import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert, ActivityIndicator, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme';
import api from '../services/api';

const DIAS = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

export default function ConfiguracionScreen({ navigation }: any) {
  const [nombreBarberia, setNombreBarberia] = useState('');
  const [diasDescanso, setDiasDescanso] = useState<number[]>([]);
  const [mensajeBienvenida, setMensajeBienvenida] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api.get('/configuracion').then(({ data }) => {
      setNombreBarberia(data.nombre_barberia);
      setDiasDescanso(data.dias_descanso ? data.dias_descanso.split(',').map(Number) : []);
      setMensajeBienvenida(data.mensaje_bienvenida ?? '');
    });
  }, []);

  const toggleDia = (dia: number) => {
    setDiasDescanso((prev) => prev.includes(dia) ? prev.filter((d) => d !== dia) : [...prev, dia]);
  };

  const handleGuardar = async () => {
    if (!nombreBarberia.trim()) return Alert.alert('Error', 'El nombre de la barbería es requerido');
    try {
      setLoading(true);
      await api.put('/admin/configuracion', {
        nombre_barberia: nombreBarberia,
        duracion_turno: 30,
        dias_descanso: diasDescanso.join(','),
        mensaje_bienvenida: mensajeBienvenida
      });
      Alert.alert('✅ Configuración guardada', 'Los cambios se verán al reiniciar la app');
    } catch {
      Alert.alert('Error', 'No se pudo guardar la configuración');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }} keyboardShouldPersistTaps="always">
      <View style={styles.header}>
        <View style={styles.brandRow}>
          <Image source={require('../../assets/icon.png')} style={styles.brandLogo} />
          <Text style={styles.brand}>THE BARBER</Text>
        </View>
        <Text style={styles.title}>Configuración</Text>
      </View>

      <Text style={styles.sectionTitle}>INFORMACIÓN DEL NEGOCIO</Text>
      <TextInput
        style={styles.input}
        value={nombreBarberia}
        onChangeText={setNombreBarberia}
        placeholder="Ej: The Barber"
        placeholderTextColor={theme.colors.gray}
      />

      <Text style={styles.sectionTitle}>DÍAS DE DESCANSO</Text>
      <Text style={styles.sublabel}>Días en que no se trabaja</Text>
      <View style={styles.chipRow}>
        {DIAS.map((dia, i) => (
          <TouchableOpacity
            key={i}
            style={[styles.chip, diasDescanso.includes(i) && styles.chipDescanso]}
            onPress={() => toggleDia(i)}
          >
            <Text style={[styles.chipText, diasDescanso.includes(i) && styles.chipTextSelected]}>{dia}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>MENSAJE DE BIENVENIDA</Text>
      <Text style={styles.sublabel}>Texto que verá el cliente al entrar</Text>
      <TextInput
        style={[styles.input, { height: 80, textAlignVertical: 'top' }]}
        value={mensajeBienvenida}
        onChangeText={setMensajeBienvenida}
        placeholder="Ej: ¡Bienvenido! Reserva tu cita con nosotros"
        placeholderTextColor={theme.colors.gray}
        multiline
      />

      <TouchableOpacity style={[styles.btn, loading && styles.btnDisabled]} onPress={handleGuardar} disabled={loading}>
        {loading ? <ActivityIndicator color={theme.colors.background} /> : <Text style={styles.btnText}>GUARDAR CONFIGURACIÓN</Text>}
      </TouchableOpacity>

      <TouchableOpacity style={styles.adminBtn} onPress={() => navigation.navigate('GestionAdmins')}>
        <Ionicons name="people" size={20} color={theme.colors.gold} />
        <Text style={styles.adminBtnText}>Gestión de Administradores</Text>
        <Ionicons name="chevron-forward" size={18} color={theme.colors.gray} />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background, padding: 16 },
  header: { paddingTop: 32, borderBottomWidth: 1, borderBottomColor: theme.colors.lightGray, marginBottom: 24, paddingBottom: 16 },
  brandRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  brandLogo: { width: 28, height: 28, borderRadius: 6, marginRight: 8 },
  brand: { fontSize: 13, color: theme.colors.gold, letterSpacing: 3, fontWeight: 'bold' },
  title: { fontSize: 26, fontWeight: 'bold', color: theme.colors.white },
  sectionTitle: { fontSize: 11, fontWeight: 'bold', color: theme.colors.gold, letterSpacing: 2, marginBottom: 12, marginTop: 8 },
  sublabel: { color: theme.colors.gray, fontSize: 13, marginBottom: 12 },
  chipRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 20 },
  chip: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, borderWidth: 1, borderColor: theme.colors.lightGray, backgroundColor: theme.colors.card },
  chipSelected: { backgroundColor: theme.colors.gold, borderColor: theme.colors.gold },
  chipDescanso: { backgroundColor: theme.colors.error, borderColor: theme.colors.error },
  chipText: { color: theme.colors.gray, fontWeight: 'bold', fontSize: 13 },
  chipTextSelected: { color: theme.colors.background },
  label: { fontSize: 12, color: theme.colors.gray, fontWeight: '600', marginBottom: 6, letterSpacing: 1 },
  input: { backgroundColor: theme.colors.card, borderRadius: 8, padding: 14, color: theme.colors.white, borderWidth: 1, borderColor: theme.colors.lightGray, marginBottom: 20, fontSize: 15 },
  monedaCard: { backgroundColor: theme.colors.card, borderRadius: 10, padding: 14, marginBottom: 8, borderWidth: 1, borderColor: theme.colors.lightGray, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  monedaCardSelected: { borderColor: theme.colors.gold },
  monedaLabel: { color: theme.colors.gray, fontSize: 14 },
  monedaLabelSelected: { color: theme.colors.white, fontWeight: 'bold' },
  check: { color: theme.colors.gold, fontWeight: 'bold', fontSize: 16 },
  btn: { backgroundColor: theme.colors.gold, padding: 16, borderRadius: 8, alignItems: 'center', marginTop: 24 },
  btnDisabled: { backgroundColor: theme.colors.lightGray },
  btnText: { color: theme.colors.background, fontSize: 14, fontWeight: 'bold', letterSpacing: 2 },
  adminBtn: { flexDirection: 'row', alignItems: 'center', backgroundColor: theme.colors.card, padding: 16, borderRadius: 12, marginTop: 16, borderWidth: 1, borderColor: theme.colors.lightGray, gap: 12 },
  adminBtnText: { flex: 1, color: theme.colors.white, fontSize: 15, fontWeight: '600' },
});

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme';
import api from '../services/api';

const MONEDAS = [
  { moneda: 'COP', simbolo: '$', separador_miles: '.', separador_decimal: ',', label: '🇨🇴 Peso colombiano (COP)' },
  { moneda: 'USD', simbolo: '$', separador_miles: ',', separador_decimal: '.', label: '🇺🇸 Dólar americano (USD)' },
  { moneda: 'EUR', simbolo: '€', separador_miles: '.', separador_decimal: ',', label: '🇪🇺 Euro (EUR)' },
  { moneda: 'MXN', simbolo: '$', separador_miles: ',', separador_decimal: '.', label: '🇲🇽 Peso mexicano (MXN)' },
  { moneda: 'GBP', simbolo: '£', separador_miles: ',', separador_decimal: '.', label: '🇬🇧 Libra esterlina (GBP)' },
];

export default function ConfiguracionScreen({ navigation }: any) {
  const [nombreBarberia, setNombreBarberia] = useState('');
  const [monedaSeleccionada, setMonedaSeleccionada] = useState('COP');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api.get('/configuracion').then(({ data }) => {
      setNombreBarberia(data.nombre_barberia);
      setMonedaSeleccionada(data.moneda);
    });
  }, []);

  const handleGuardar = async () => {
    if (!nombreBarberia.trim()) return Alert.alert('Error', 'El nombre de la barbería es requerido');
    const moneda = MONEDAS.find((m) => m.moneda === monedaSeleccionada)!;
    try {
      setLoading(true);
      await api.put('/admin/configuracion', {
        nombre_barberia: nombreBarberia,
        moneda: moneda.moneda,
        simbolo: moneda.simbolo,
        separador_miles: moneda.separador_miles,
        separador_decimal: moneda.separador_decimal
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
        <Text style={styles.brand}>✂️ THE BARBER</Text>
        <Text style={styles.title}>Configuración</Text>
      </View>

      <Text style={styles.sectionTitle}>INFORMACIÓN DEL NEGOCIO</Text>
      <Text style={styles.label}>Nombre de la barbería</Text>
      <TextInput
        style={styles.input}
        value={nombreBarberia}
        onChangeText={setNombreBarberia}
        placeholder="Ej: The Barber"
        placeholderTextColor={theme.colors.gray}
      />

      <Text style={styles.sectionTitle}>MONEDA</Text>
      <Text style={styles.sublabel}>Selecciona la moneda de tu país</Text>

      {MONEDAS.map((m) => (
        <TouchableOpacity
          key={m.moneda}
          style={[styles.monedaCard, monedaSeleccionada === m.moneda && styles.monedaCardSelected]}
          onPress={() => setMonedaSeleccionada(m.moneda)}
        >
          <Text style={[styles.monedaLabel, monedaSeleccionada === m.moneda && styles.monedaLabelSelected]}>
            {m.label}
          </Text>
          {monedaSeleccionada === m.moneda && <Text style={styles.check}>✓</Text>}
        </TouchableOpacity>
      ))}

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
  brand: { fontSize: 13, color: theme.colors.gold, letterSpacing: 3, fontWeight: 'bold', marginBottom: 8 },
  title: { fontSize: 26, fontWeight: 'bold', color: theme.colors.white },
  sectionTitle: { fontSize: 11, fontWeight: 'bold', color: theme.colors.gold, letterSpacing: 2, marginBottom: 12, marginTop: 8 },
  sublabel: { color: theme.colors.gray, fontSize: 13, marginBottom: 12 },
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

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert, TextInput } from 'react-native';
import { theme } from '../theme';
import api from '../services/api';

const DIAS = [
  { label: 'Lunes', value: 1 },
  { label: 'Martes', value: 2 },
  { label: 'Miércoles', value: 3 },
  { label: 'Jueves', value: 4 },
  { label: 'Viernes', value: 5 },
  { label: 'Sábado', value: 6 },
  { label: 'Domingo', value: 0 },
];

interface HorarioDia {
  dia_semana: number;
  hora_inicio: string;
  hora_fin: string;
  activo: boolean;
}

export default function BarberoPerfil({ route, navigation }: any) {
  const { barbero } = route.params;
  const [horarios, setHorarios] = useState<HorarioDia[]>(
    DIAS.map((d) => ({ dia_semana: d.value, hora_inicio: '09:00', hora_fin: '18:00', activo: false }))
  );
  const [loading, setLoading] = useState(false);
  const [diasDescanso, setDiasDescanso] = useState<number[]>([]);

  useEffect(() => {
    api.get(`/admin/barberos/${barbero.id}/horarios`).then(({ data }) => {
      setHorarios(DIAS.map((d) => {
        const existente = data.find((h: any) => h.dia_semana === d.value);
        return {
          dia_semana: d.value,
          hora_inicio: existente?.hora_inicio ?? '09:00',
          hora_fin: existente?.hora_fin ?? '18:00',
          activo: !!existente
        };
      }));
    });
    api.get('/configuracion').then(({ data }) => {
      setDiasDescanso(data.dias_descanso ? data.dias_descanso.split(',').map(Number) : []);
    });
  }, []);

  const toggleDia = (dia: number) => {
    setHorarios((prev) => prev.map((h) => h.dia_semana === dia ? { ...h, activo: !h.activo } : h));
  };

  const updateHora = (dia: number, campo: 'hora_inicio' | 'hora_fin', valor: string) => {
    setHorarios((prev) => prev.map((h) => h.dia_semana === dia ? { ...h, [campo]: valor } : h));
  };

  const handleGuardar = async () => {
    const activos = horarios.filter((h) => h.activo);
    if (activos.length === 0) return Alert.alert('Error', 'Activa al menos un día');

    const horaValida = /^([01]\d|2[0-3]):([0-5]\d)$/;
    for (const h of activos) {
      if (!horaValida.test(h.hora_inicio) || !horaValida.test(h.hora_fin)) {
        return Alert.alert('Error', 'Formato de hora inválido. Usa HH:MM');
      }
      if (h.hora_inicio >= h.hora_fin) {
        return Alert.alert('Error', 'La hora de inicio debe ser menor a la hora fin');
      }
    }

    try {
      setLoading(true);
      await api.post(`/admin/barberos/${barbero.id}/horarios`, { horarios: activos });
      Alert.alert('✅ Horarios guardados', `Horarios de ${barbero.nombre} actualizados`, [
        { text: 'OK', onPress: () => navigation.goBack() }
      ]);
    } catch {
      Alert.alert('Error', 'No se pudieron guardar los horarios');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 32 }}>
      <View style={styles.perfil}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{barbero.nombre.charAt(0)}</Text>
        </View>
        <Text style={styles.nombre}>{barbero.nombre}</Text>
        <Text style={styles.especialidad}>{barbero.especialidad}</Text>
      </View>

      <Text style={styles.sectionTitle}>HORARIOS DE TRABAJO</Text>
      <Text style={styles.sectionSubtitle}>Activa los días y define el horario</Text>

      {DIAS.map((dia) => {
        const horario = horarios.find((h) => h.dia_semana === dia.value)!;
        const esDescanso = diasDescanso.includes(dia.value);
        return (
          <View key={dia.value} style={[styles.diaCard, horario.activo && styles.diaCardActivo, esDescanso && styles.diaCardDescanso]}>
            <TouchableOpacity style={styles.diaHeader} onPress={() => !esDescanso && toggleDia(dia.value)} disabled={esDescanso}>
              <View style={[styles.toggle, horario.activo && styles.toggleActivo, esDescanso && styles.toggleDescanso]}>
                <Text style={styles.toggleText}>{esDescanso ? '✕' : horario.activo ? '✓' : ''}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={[styles.diaLabel, horario.activo && styles.diaLabelActivo, esDescanso && styles.diaLabelDescanso]}>{dia.label}</Text>
                {esDescanso && <Text style={styles.descansoTag}>Día de descanso</Text>}
              </View>
            </TouchableOpacity>

            {horario.activo && (
              <View style={styles.horasRow}>
                <View style={styles.horaInput}>
                  <Text style={styles.horaLabel}>DESDE</Text>
                  <TextInput
                    style={styles.input}
                    value={horario.hora_inicio}
                    onChangeText={(v) => updateHora(dia.value, 'hora_inicio', v)}
                    placeholder="09:00"
                    placeholderTextColor={theme.colors.gray}
                    maxLength={5}
                  />
                </View>
                <Text style={styles.horaSeparador}>→</Text>
                <View style={styles.horaInput}>
                  <Text style={styles.horaLabel}>HASTA</Text>
                  <TextInput
                    style={styles.input}
                    value={horario.hora_fin}
                    onChangeText={(v) => updateHora(dia.value, 'hora_fin', v)}
                    placeholder="18:00"
                    placeholderTextColor={theme.colors.gray}
                    maxLength={5}
                  />
                </View>
              </View>
            )}
          </View>
        );
      })}

      <TouchableOpacity style={[styles.btn, loading && styles.btnDisabled]} onPress={handleGuardar} disabled={loading}>
        <Text style={styles.btnText}>{loading ? 'GUARDANDO...' : 'GUARDAR HORARIOS'}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background, padding: 16 },
  perfil: { alignItems: 'center', paddingVertical: 24, borderBottomWidth: 1, borderBottomColor: theme.colors.lightGray, marginBottom: 24 },
  avatar: { width: 72, height: 72, borderRadius: 36, backgroundColor: theme.colors.gold, justifyContent: 'center', alignItems: 'center', marginBottom: 12 },
  avatarText: { fontSize: 30, fontWeight: 'bold', color: theme.colors.background },
  nombre: { fontSize: 22, fontWeight: 'bold', color: theme.colors.white },
  especialidad: { color: theme.colors.gray, marginTop: 4 },
  sectionTitle: { fontSize: 11, fontWeight: 'bold', color: theme.colors.gold, letterSpacing: 2, marginBottom: 4 },
  sectionSubtitle: { color: theme.colors.gray, fontSize: 13, marginBottom: 16 },
  diaCard: { backgroundColor: theme.colors.card, borderRadius: 10, marginBottom: 8, padding: 14, borderWidth: 1, borderColor: theme.colors.lightGray },
  diaCardActivo: { borderColor: theme.colors.gold },
  diaCardDescanso: { borderColor: theme.colors.error, opacity: 0.6 },
  diaHeader: { flexDirection: 'row', alignItems: 'center' },
  toggle: { width: 24, height: 24, borderRadius: 6, borderWidth: 2, borderColor: theme.colors.lightGray, justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  toggleActivo: { backgroundColor: theme.colors.gold, borderColor: theme.colors.gold },
  toggleText: { color: theme.colors.background, fontWeight: 'bold', fontSize: 12 },
  diaLabel: { fontSize: 15, color: theme.colors.gray, fontWeight: '600' },
  diaLabelActivo: { color: theme.colors.white },
  diaLabelDescanso: { color: theme.colors.error },
  toggleDescanso: { backgroundColor: theme.colors.error, borderColor: theme.colors.error },
  descansoTag: { fontSize: 11, color: theme.colors.error, marginTop: 2 },
  horasRow: { flexDirection: 'row', alignItems: 'center', marginTop: 12 },
  horaInput: { flex: 1 },
  horaLabel: { fontSize: 10, color: theme.colors.gold, fontWeight: 'bold', letterSpacing: 1, marginBottom: 4 },
  input: { backgroundColor: theme.colors.background, borderRadius: 8, padding: 10, color: theme.colors.white, borderWidth: 1, borderColor: theme.colors.lightGray, textAlign: 'center', fontSize: 16 },
  horaSeparador: { color: theme.colors.gold, fontWeight: 'bold', fontSize: 18, marginHorizontal: 12 },
  btn: { backgroundColor: theme.colors.gold, padding: 16, borderRadius: 8, alignItems: 'center', marginTop: 24 },
  btnDisabled: { backgroundColor: theme.colors.lightGray },
  btnText: { color: theme.colors.background, fontSize: 14, fontWeight: 'bold', letterSpacing: 2 },
});

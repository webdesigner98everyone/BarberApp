import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme';
import { useConfig, formatearPrecio } from '../context/ConfigContext';
import api from '../services/api';

export default function EstadisticasScreen() {
  const config = useConfig();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useFocusEffect(useCallback(() => {
    setLoading(true);
    api.get('/admin/estadisticas')
      .then(({ data }) => setData(data))
      .finally(() => setLoading(false));
  }, []));

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color={theme.colors.gold} />
      </View>
    );
  }

  const maxDia = Math.max(...data.citasPorDia.map((d: any) => d.total), 1);

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <View style={styles.header}>
        <Text style={styles.brand}>✂️ THE BARBER</Text>
        <Text style={styles.title}>Estadísticas</Text>
        <Text style={styles.subtitle}>Resumen del mes actual</Text>
      </View>

      {/* Resumen general */}
      <Text style={styles.sectionTitle}>RESUMEN DEL MES</Text>
      <View style={styles.tarjetasRow}>
        <View style={[styles.tarjeta, { borderTopColor: theme.colors.gold }]}>
          <Ionicons name="calendar" size={24} color={theme.colors.gold} />
          <Text style={styles.tarjetaNumero}>{data.resumen.totalMes}</Text>
          <Text style={styles.tarjetaLabel}>Total citas</Text>
        </View>
        <View style={[styles.tarjeta, { borderTopColor: theme.colors.success }]}>
          <Ionicons name="checkmark-circle" size={24} color={theme.colors.success} />
          <Text style={styles.tarjetaNumero}>{data.resumen.completadas}</Text>
          <Text style={styles.tarjetaLabel}>Completadas</Text>
        </View>
        <View style={[styles.tarjeta, { borderTopColor: theme.colors.error }]}>
          <Ionicons name="close-circle" size={24} color={theme.colors.error} />
          <Text style={styles.tarjetaNumero}>{data.resumen.canceladas}</Text>
          <Text style={styles.tarjetaLabel}>Canceladas</Text>
        </View>
        <View style={[styles.tarjeta, { borderTopColor: theme.colors.warning }]}>
          <Ionicons name="time" size={24} color={theme.colors.warning} />
          <Text style={styles.tarjetaNumero}>{data.resumen.pendientes}</Text>
          <Text style={styles.tarjetaLabel}>Pendientes</Text>
        </View>
      </View>

      {/* Ingresos */}
      <View style={styles.ingresosCard}>
        <Ionicons name="cash" size={28} color={theme.colors.gold} />
        <View style={styles.ingresosInfo}>
          <Text style={styles.ingresosLabel}>Ingresos estimados del mes</Text>
          <Text style={styles.ingresosValor}>{formatearPrecio(data.resumen.ingresosMes, config)}</Text>
          <Text style={styles.ingresosSubtexto}>Basado en citas completadas</Text>
        </View>
      </View>

      {/* Top especialistas */}
      <Text style={styles.sectionTitle}>🏆 TOP ESPECIALISTAS</Text>
      {data.topEspecialistas.length === 0 ? (
        <Text style={styles.sinDatos}>Sin datos este mes</Text>
      ) : (
        data.topEspecialistas.map((e: any, i: number) => (
          <View key={i} style={styles.rankCard}>
            <View style={[styles.rankBadge, i === 0 && styles.rankBadgeOro]}>
              <Text style={styles.rankNumero}>{i + 1}</Text>
            </View>
            <Text style={styles.rankNombre}>{e.nombre}</Text>
            <View style={styles.rankBarContainer}>
              <View style={[styles.rankBar, { width: `${(e.total / data.topEspecialistas[0].total) * 100}%` }]} />
            </View>
            <Text style={styles.rankTotal}>{e.total}</Text>
          </View>
        ))
      )}

      {/* Top servicios */}
      <Text style={styles.sectionTitle}>✂️ TOP SERVICIOS</Text>
      {data.topServicios.length === 0 ? (
        <Text style={styles.sinDatos}>Sin datos este mes</Text>
      ) : (
        data.topServicios.map((s: any, i: number) => (
          <View key={i} style={styles.rankCard}>
            <View style={[styles.rankBadge, i === 0 && styles.rankBadgeOro]}>
              <Text style={styles.rankNumero}>{i + 1}</Text>
            </View>
            <Text style={styles.rankNombre}>{s.nombre}</Text>
            <View style={styles.rankBarContainer}>
              <View style={[styles.rankBar, { width: `${(s.total / data.topServicios[0].total) * 100}%` }]} />
            </View>
            <Text style={styles.rankTotal}>{s.total}</Text>
          </View>
        ))
      )}

      {/* Citas por día */}
      <Text style={styles.sectionTitle}>📅 CITAS POR DÍA</Text>
      <View style={styles.barChart}>
        {data.citasPorDia.map((d: any, i: number) => (
          <View key={i} style={styles.barColumn}>
            <Text style={styles.barValue}>{d.total > 0 ? d.total : ''}</Text>
            <View style={styles.barWrapper}>
              <View style={[styles.bar, { height: d.total > 0 ? `${(d.total / maxDia) * 100}%` : '2%' }]} />
            </View>
            <Text style={styles.barLabel}>{d.dia}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  loading: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.background },
  header: { padding: 24, paddingTop: 48, borderBottomWidth: 1, borderBottomColor: theme.colors.lightGray, marginBottom: 16 },
  brand: { fontSize: 13, color: theme.colors.gold, letterSpacing: 3, fontWeight: 'bold', marginBottom: 8 },
  title: { fontSize: 26, fontWeight: 'bold', color: theme.colors.white },
  subtitle: { color: theme.colors.gray, marginTop: 4 },
  sectionTitle: { fontSize: 11, fontWeight: 'bold', color: theme.colors.gold, letterSpacing: 2, marginHorizontal: 16, marginTop: 20, marginBottom: 12 },
  tarjetasRow: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 12, gap: 8 },
  tarjeta: { flex: 1, minWidth: '45%', backgroundColor: theme.colors.card, borderRadius: 12, padding: 14, alignItems: 'center', borderTopWidth: 3 },
  tarjetaNumero: { fontSize: 28, fontWeight: 'bold', color: theme.colors.white, marginTop: 8 },
  tarjetaLabel: { color: theme.colors.gray, fontSize: 12, marginTop: 4 },
  ingresosCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: theme.colors.card, marginHorizontal: 16, marginTop: 12, borderRadius: 12, padding: 16, borderLeftWidth: 3, borderLeftColor: theme.colors.gold, gap: 16 },
  ingresosInfo: { flex: 1 },
  ingresosLabel: { color: theme.colors.gray, fontSize: 12 },
  ingresosValor: { color: theme.colors.gold, fontSize: 24, fontWeight: 'bold', marginTop: 4 },
  ingresosSubtexto: { color: theme.colors.gray, fontSize: 11, marginTop: 2 },
  rankCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: theme.colors.card, marginHorizontal: 16, marginBottom: 8, borderRadius: 10, padding: 12, gap: 10 },
  rankBadge: { width: 28, height: 28, borderRadius: 14, backgroundColor: theme.colors.lightGray, justifyContent: 'center', alignItems: 'center' },
  rankBadgeOro: { backgroundColor: theme.colors.gold },
  rankNumero: { color: theme.colors.background, fontWeight: 'bold', fontSize: 13 },
  rankNombre: { color: theme.colors.white, fontSize: 13, fontWeight: '600', width: 110 },
  rankBarContainer: { flex: 1, height: 6, backgroundColor: theme.colors.lightGray, borderRadius: 3, overflow: 'hidden' },
  rankBar: { height: 6, backgroundColor: theme.colors.gold, borderRadius: 3 },
  rankTotal: { color: theme.colors.gold, fontWeight: 'bold', fontSize: 14, width: 24, textAlign: 'right' },
  barChart: { flexDirection: 'row', marginHorizontal: 16, backgroundColor: theme.colors.card, borderRadius: 12, padding: 16, height: 160, alignItems: 'flex-end' },
  barColumn: { flex: 1, alignItems: 'center', height: '100%', justifyContent: 'flex-end' },
  barWrapper: { width: '60%', height: '80%', justifyContent: 'flex-end' },
  bar: { width: '100%', backgroundColor: theme.colors.gold, borderRadius: 4 },
  barValue: { color: theme.colors.gold, fontSize: 10, fontWeight: 'bold', marginBottom: 2 },
  barLabel: { color: theme.colors.gray, fontSize: 10, marginTop: 4 },
  sinDatos: { color: theme.colors.gray, textAlign: 'center', marginVertical: 16, fontStyle: 'italic' },
});

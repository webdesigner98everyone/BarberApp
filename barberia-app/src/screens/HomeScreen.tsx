import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { theme } from '../theme';
import api from '../services/api';

export default function HomeScreen({ navigation }: any) {
  const [barberos, setBarberos] = useState([]);

  useEffect(() => {
    api.get('/barberos').then(({ data }) => setBarberos(data));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.brand}>✂️ THE BARBER</Text>
        <Text style={styles.title}>Nuestros Barberos</Text>
        <Text style={styles.subtitle}>Selecciona tu especialista</Text>
      </View>

      <FlatList
        data={barberos}
        keyExtractor={(item: any) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }: any) => (
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Booking', { barbero: item })}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{item.nombre.charAt(0)}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.nombre}>{item.nombre}</Text>
              <Text style={styles.especialidad}>{item.especialidad}</Text>
            </View>
            <View style={styles.arrow}>
              <Text style={styles.arrowText}>→</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  header: { padding: 24, paddingTop: 48, borderBottomWidth: 1, borderBottomColor: theme.colors.lightGray, marginBottom: 16 },
  brand: { fontSize: 13, color: theme.colors.gold, letterSpacing: 3, fontWeight: 'bold', marginBottom: 8 },
  title: { fontSize: 26, fontWeight: 'bold', color: theme.colors.white },
  subtitle: { color: theme.colors.gray, marginTop: 4 },
  card: { flexDirection: 'row', alignItems: 'center', backgroundColor: theme.colors.card, marginHorizontal: 16, marginBottom: 12, borderRadius: 12, padding: 16, borderLeftWidth: 3, borderLeftColor: theme.colors.gold },
  avatar: { width: 48, height: 48, borderRadius: 24, backgroundColor: theme.colors.gold, justifyContent: 'center', alignItems: 'center', marginRight: 14 },
  avatarText: { fontSize: 20, fontWeight: 'bold', color: theme.colors.background },
  info: { flex: 1 },
  nombre: { fontSize: 16, fontWeight: 'bold', color: theme.colors.white },
  especialidad: { color: theme.colors.gray, marginTop: 2, fontSize: 13 },
  arrow: { backgroundColor: theme.colors.lightGray, width: 32, height: 32, borderRadius: 16, justifyContent: 'center', alignItems: 'center' },
  arrowText: { color: theme.colors.gold, fontWeight: 'bold' },
});

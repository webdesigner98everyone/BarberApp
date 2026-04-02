import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import api from '../services/api';

export default function HomeScreen({ navigation }: any) {
  const [barberos, setBarberos] = useState([]);

  useEffect(() => {
    api.get('/barberos').then(({ data }) => setBarberos(data));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Elige tu barbero</Text>
      <FlatList
        data={barberos}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={({ item }: any) => (
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Booking', { barbero: item })}>
            <Text style={styles.nombre}>{item.nombre}</Text>
            <Text style={styles.especialidad}>{item.especialidad}</Text>
            <Text style={styles.arrow}>→</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16, marginTop: 8 },
  card: { backgroundColor: '#fff', padding: 16, borderRadius: 12, marginBottom: 12, flexDirection: 'row', alignItems: 'center', elevation: 2 },
  nombre: { fontSize: 16, fontWeight: 'bold', flex: 1 },
  especialidad: { color: '#666', flex: 1 },
  arrow: { fontSize: 18, color: '#1a1a1a' },
});

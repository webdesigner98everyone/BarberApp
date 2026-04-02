import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { theme } from '../theme';
import api from '../services/api';

export default function HomeScreen({ navigation }: any) {
  const [barberos, setBarberos] = useState([]);
  const [rol, setRol] = useState<string | null>(null);
  const [esCumpleanos, setEsCumpleanos] = useState(false);
  const [nombreUsuario, setNombreUsuario] = useState('');

  useFocusEffect(useCallback(() => {
    api.get('/barberos').then(({ data }) => setBarberos(data));
    AsyncStorage.getItem('usuario').then((u) => {
      if (u) {
        const usuario = JSON.parse(u);
        setRol(usuario.rol);
        setNombreUsuario(usuario.nombre);
      }
    });
    api.get('/perfil').then(({ data }) => setEsCumpleanos(data.esCumpleanos));
  }, []));

  const handlePress = (barbero: any) => {
    if (rol === 'admin') return;
    navigation.navigate('Booking', { barbero });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.brand}>✂️ THE BARBER</Text>
        <Text style={styles.title}>Nuestros Barberos</Text>
        <Text style={styles.subtitle}>Selecciona tu especialista</Text>
      </View>

      {esCumpleanos && (
        <View style={styles.cumpleBanner}>
          <Text style={styles.cumpleEmoji}>🎂🎉</Text>
          <View style={styles.cumpleTextos}>
            <Text style={styles.cumpleTitulo}>¡Feliz cumpleaños, {nombreUsuario.split(' ')[0]}!</Text>
            <Text style={styles.cumpleSubtitulo}>Hoy es tu día especial. ¡Lúcete con un nuevo look!</Text>
          </View>
        </View>
      )}

      <FlatList
        data={barberos}
        keyExtractor={(item: any) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }: any) => (
          <TouchableOpacity style={[styles.card, rol === 'admin' && styles.cardDisabled]} onPress={() => handlePress(item)}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{item.nombre.charAt(0)}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.nombre}>{item.nombre}</Text>
              <Text style={styles.especialidad}>{item.especialidad}</Text>
            </View>
            {rol !== 'admin' && (
              <View style={styles.arrow}>
                <Text style={styles.arrowText}>→</Text>
              </View>
            )}
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
  cardDisabled: { opacity: 0.6, borderLeftColor: theme.colors.gray },
  cumpleBanner: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#2a1a3a', marginHorizontal: 16, marginBottom: 16, borderRadius: 12, padding: 16, borderWidth: 1, borderColor: '#C9A84C', gap: 12 },
  cumpleEmoji: { fontSize: 36 },
  cumpleTextos: { flex: 1 },
  cumpleTitulo: { fontSize: 16, fontWeight: 'bold', color: theme.colors.gold },
  cumpleSubtitulo: { color: theme.colors.gray, fontSize: 12, marginTop: 4 },
  avatar: { width: 48, height: 48, borderRadius: 24, backgroundColor: theme.colors.gold, justifyContent: 'center', alignItems: 'center', marginRight: 14 },
  avatarText: { fontSize: 20, fontWeight: 'bold', color: theme.colors.background },
  info: { flex: 1 },
  nombre: { fontSize: 16, fontWeight: 'bold', color: theme.colors.white },
  especialidad: { color: theme.colors.gray, marginTop: 2, fontSize: 13 },
  arrow: { backgroundColor: theme.colors.lightGray, width: 32, height: 32, borderRadius: 16, justifyContent: 'center', alignItems: 'center' },
  arrowText: { color: theme.colors.gold, fontWeight: 'bold' },
});

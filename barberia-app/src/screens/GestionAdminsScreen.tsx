import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert, ActivityIndicator, FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { theme } from '../theme';
import api from '../services/api';

export default function GestionAdminsScreen() {
  const [admins, setAdmins] = useState<any[]>([]);
  const [busqueda, setBusqueda] = useState('');
  const [resultados, setResultados] = useState<any[]>([]);
  const [buscando, setBuscando] = useState(false);
  const [adminActualId, setAdminActualId] = useState<number | null>(null);

  useFocusEffect(useCallback(() => {
    cargarAdmins();
    AsyncStorage.getItem('usuario').then((u) => {
      if (u) setAdminActualId(JSON.parse(u).id);
    });
  }, []));

  const cargarAdmins = async () => {
    const { data } = await api.get('/admin/admins');
    setAdmins(data);
  };

  const buscarUsuario = async (texto: string) => {
    setBusqueda(texto);
    if (texto.length < 2) { setResultados([]); return; }
    setBuscando(true);
    try {
      const { data } = await api.get(`/admin/usuarios/buscar?q=${texto}`);
      setResultados(data);
    } finally {
      setBuscando(false);
    }
  };

  const promoverAdmin = (usuario: any) => {
    Alert.alert('Promover a admin', `¿Deseas darle permisos de administrador a ${usuario.nombre}?`, [
      { text: 'Cancelar' },
      { text: 'Confirmar', onPress: async () => {
        await api.post('/admin/admins', { usuarioId: usuario.id });
        setBusqueda('');
        setResultados([]);
        cargarAdmins();
      }}
    ]);
  };

  const removerAdmin = (admin: any) => {
    if (admin.id === adminActualId) return Alert.alert('Error', 'No puedes removerte a ti mismo');
    Alert.alert('Remover admin', `¿Quitar permisos de admin a ${admin.nombre}?`, [
      { text: 'Cancelar' },
      { text: 'Remover', style: 'destructive', onPress: async () => {
        await api.delete(`/admin/admins/${admin.id}`);
        cargarAdmins();
      }}
    ]);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }} keyboardShouldPersistTaps="always">
      <View style={styles.header}>
        <Text style={styles.brand}>✂️ THE BARBER</Text>
        <Text style={styles.title}>Administradores</Text>
      </View>

      <Text style={styles.sectionTitle}>ADMINS ACTUALES</Text>
      {admins.map((admin) => (
        <View key={admin.id} style={styles.adminCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{admin.nombre.charAt(0)}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.nombre}>{admin.nombre}</Text>
            <Text style={styles.email}>{admin.email}</Text>
          </View>
          {admin.id !== adminActualId ? (
            <TouchableOpacity style={styles.removeBtn} onPress={() => removerAdmin(admin)}>
              <Ionicons name="person-remove" size={18} color={theme.colors.error} />
            </TouchableOpacity>
          ) : (
            <View style={styles.youBadge}>
              <Text style={styles.youText}>Tú</Text>
            </View>
          )}
        </View>
      ))}

      <Text style={styles.sectionTitle}>AGREGAR NUEVO ADMIN</Text>
      <Text style={styles.sublabel}>Busca un usuario cliente para promoverlo a admin</Text>

      <View style={styles.searchRow}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar por nombre o email..."
          placeholderTextColor={theme.colors.gray}
          value={busqueda}
          onChangeText={buscarUsuario}
        />
        {buscando && <ActivityIndicator color={theme.colors.gold} style={{ marginLeft: 8 }} />}
      </View>

      {resultados.map((usuario) => (
        <TouchableOpacity key={usuario.id} style={styles.resultCard} onPress={() => promoverAdmin(usuario)}>
          <View style={styles.avatarSmall}>
            <Text style={styles.avatarSmallText}>{usuario.nombre.charAt(0)}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.nombre}>{usuario.nombre}</Text>
            <Text style={styles.email}>{usuario.email}</Text>
          </View>
          <Ionicons name="person-add" size={20} color={theme.colors.gold} />
        </TouchableOpacity>
      ))}

      {busqueda.length >= 2 && resultados.length === 0 && !buscando && (
        <Text style={styles.sinResultados}>No se encontraron usuarios clientes</Text>
      )}
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
  adminCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: theme.colors.card, borderRadius: 12, padding: 14, marginBottom: 8, borderLeftWidth: 3, borderLeftColor: theme.colors.gold },
  avatar: { width: 44, height: 44, borderRadius: 22, backgroundColor: theme.colors.gold, justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  avatarText: { fontSize: 18, fontWeight: 'bold', color: theme.colors.background },
  avatarSmall: { width: 36, height: 36, borderRadius: 18, backgroundColor: theme.colors.lightGray, justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  avatarSmallText: { fontSize: 14, fontWeight: 'bold', color: theme.colors.white },
  info: { flex: 1 },
  nombre: { fontSize: 15, fontWeight: 'bold', color: theme.colors.white },
  email: { color: theme.colors.gray, fontSize: 12, marginTop: 2 },
  removeBtn: { padding: 8 },
  youBadge: { backgroundColor: theme.colors.lightGray, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  youText: { color: theme.colors.gold, fontSize: 12, fontWeight: 'bold' },
  searchRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  searchInput: { flex: 1, backgroundColor: theme.colors.card, borderRadius: 8, padding: 12, color: theme.colors.white, borderWidth: 1, borderColor: theme.colors.lightGray },
  resultCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: theme.colors.card, borderRadius: 10, padding: 12, marginBottom: 8, borderWidth: 1, borderColor: theme.colors.lightGray },
  sinResultados: { color: theme.colors.gray, textAlign: 'center', marginTop: 16, fontStyle: 'italic' },
});

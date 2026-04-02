import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert, TextInput, Modal } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { theme } from '../theme';
import api from '../services/api';

interface Barbero {
  id: number;
  nombre: string;
  especialidad: string;
  foto: string | null;
}

const BarberoModal = ({ visible, barbero, onClose, onSave }: any) => {
  const [nombre, setNombre] = useState(barbero?.nombre ?? '');
  const [especialidad, setEspecialidad] = useState(barbero?.especialidad ?? '');

  React.useEffect(() => {
    setNombre(barbero?.nombre ?? '');
    setEspecialidad(barbero?.especialidad ?? '');
  }, [barbero]);

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>{barbero ? 'Editar Barbero' : 'Nuevo Barbero'}</Text>

          <Text style={styles.label}>Nombre</Text>
          <TextInput style={styles.input} value={nombre} onChangeText={setNombre} placeholder="Nombre completo" placeholderTextColor={theme.colors.gray} />

          <Text style={styles.label}>Especialidad</Text>
          <TextInput style={styles.input} value={especialidad} onChangeText={setEspecialidad} placeholder="Ej: Corte clásico" placeholderTextColor={theme.colors.gray} />

          <View style={styles.modalBtns}>
            <TouchableOpacity style={styles.cancelModalBtn} onPress={onClose}>
              <Text style={styles.cancelModalText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.saveBtn} onPress={() => onSave({ nombre, especialidad })}>
              <Text style={styles.saveBtnText}>Guardar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default function BarberosAdminScreen({ navigation }: any) {
  const [barberos, setBarberos] = useState<Barbero[]>([]);
  const [filtro, setFiltro] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [barberoEditando, setBarberoEditando] = useState<Barbero | null>(null);

  const cargar = async () => {
    const { data } = await api.get('/admin/barberos');
    setBarberos(data);
  };

  useFocusEffect(useCallback(() => { cargar(); }, []));

  const barberosFiltrados = barberos.filter((b) =>
    b.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
    b.especialidad.toLowerCase().includes(filtro.toLowerCase())
  );

  const handleSave = async ({ nombre, especialidad }: any) => {
    if (!nombre.trim() || !especialidad.trim()) return Alert.alert('Error', 'Todos los campos son requeridos');
    try {
      if (barberoEditando) {
        await api.put(`/admin/barberos/${barberoEditando.id}`, { nombre, especialidad });
      } else {
        await api.post('/admin/barberos', { nombre, especialidad });
      }
      setModalVisible(false);
      setBarberoEditando(null);
      cargar();
    } catch {
      Alert.alert('Error', 'No se pudo guardar el barbero');
    }
  };

  const handleEliminar = (barbero: Barbero) => {
    Alert.alert('Eliminar barbero', `¿Seguro que deseas eliminar a ${barbero.nombre}?`, [
      { text: 'Cancelar' },
      { text: 'Eliminar', style: 'destructive', onPress: async () => {
        try {
          await api.delete(`/admin/barberos/${barbero.id}`);
          cargar();
        } catch (error: any) {
          Alert.alert('No se puede eliminar', error.response?.data?.error ?? 'Error al eliminar el barbero');
        }
      }}
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.brand}>✂️ THE BARBER</Text>
        <Text style={styles.title}>Barberos</Text>
      </View>

      <View style={styles.searchRow}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar barbero..."
          placeholderTextColor={theme.colors.gray}
          value={filtro}
          onChangeText={setFiltro}
        />
        <TouchableOpacity style={styles.addBtn} onPress={() => { setBarberoEditando(null); setModalVisible(true); }}>
          <Text style={styles.addBtnText}>+ Nuevo</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={barberosFiltrados}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyText}>No se encontraron barberos</Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{item.nombre.charAt(0)}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.nombre}>{item.nombre}</Text>
              <Text style={styles.especialidad}>{item.especialidad}</Text>
            </View>
            <View style={styles.acciones}>
              <TouchableOpacity style={styles.perfilBtn} onPress={() => navigation.navigate('BarberoPerfil', { barbero: item })}>
                <Text style={styles.perfilText}>🕐</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.editBtn} onPress={() => { setBarberoEditando(item); setModalVisible(true); }}>
                <Text style={styles.editText}>✏️</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.deleteBtn} onPress={() => handleEliminar(item)}>
                <Text style={styles.deleteText}>🗑️</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <BarberoModal
        visible={modalVisible}
        barbero={barberoEditando}
        onClose={() => { setModalVisible(false); setBarberoEditando(null); }}
        onSave={handleSave}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  header: { padding: 24, paddingTop: 48, borderBottomWidth: 1, borderBottomColor: theme.colors.lightGray, marginBottom: 16 },
  brand: { fontSize: 13, color: theme.colors.gold, letterSpacing: 3, fontWeight: 'bold', marginBottom: 8 },
  title: { fontSize: 26, fontWeight: 'bold', color: theme.colors.white },
  searchRow: { flexDirection: 'row', marginHorizontal: 16, marginBottom: 16, gap: 8 },
  searchInput: { flex: 1, backgroundColor: theme.colors.card, borderRadius: 8, padding: 12, color: theme.colors.white, borderWidth: 1, borderColor: theme.colors.lightGray },
  addBtn: { backgroundColor: theme.colors.gold, paddingHorizontal: 16, borderRadius: 8, justifyContent: 'center' },
  addBtnText: { color: theme.colors.background, fontWeight: 'bold' },
  card: { flexDirection: 'row', alignItems: 'center', backgroundColor: theme.colors.card, marginHorizontal: 16, marginBottom: 10, borderRadius: 12, padding: 14, borderLeftWidth: 3, borderLeftColor: theme.colors.gold },
  avatar: { width: 44, height: 44, borderRadius: 22, backgroundColor: theme.colors.gold, justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  avatarText: { fontSize: 18, fontWeight: 'bold', color: theme.colors.background },
  info: { flex: 1 },
  nombre: { fontSize: 15, fontWeight: 'bold', color: theme.colors.white },
  especialidad: { color: theme.colors.gray, fontSize: 13, marginTop: 2 },
  acciones: { flexDirection: 'row', gap: 8 },
  perfilBtn: { backgroundColor: '#1a2a3a', padding: 8, borderRadius: 8 },
  perfilText: { fontSize: 16 },
  editBtn: { backgroundColor: theme.colors.lightGray, padding: 8, borderRadius: 8 },
  editText: { fontSize: 16 },
  deleteBtn: { backgroundColor: '#3a1a1a', padding: 8, borderRadius: 8 },
  deleteText: { fontSize: 16 },
  empty: { alignItems: 'center', marginTop: 60 },
  emptyText: { color: theme.colors.gray, fontSize: 15 },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'flex-end' },
  modalContent: { backgroundColor: theme.colors.card, borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 24 },
  modalTitle: { fontSize: 20, fontWeight: 'bold', color: theme.colors.gold, marginBottom: 20, textAlign: 'center' },
  label: { fontSize: 12, color: theme.colors.gray, fontWeight: '600', marginBottom: 6, letterSpacing: 1 },
  input: { backgroundColor: theme.colors.background, borderRadius: 8, padding: 12, color: theme.colors.white, borderWidth: 1, borderColor: theme.colors.lightGray, marginBottom: 16 },
  modalBtns: { flexDirection: 'row', gap: 12, marginTop: 8 },
  cancelModalBtn: { flex: 1, padding: 14, borderRadius: 8, borderWidth: 1, borderColor: theme.colors.lightGray, alignItems: 'center' },
  cancelModalText: { color: theme.colors.gray, fontWeight: 'bold' },
  saveBtn: { flex: 1, backgroundColor: theme.colors.gold, padding: 14, borderRadius: 8, alignItems: 'center' },
  saveBtnText: { color: theme.colors.background, fontWeight: 'bold' },
});

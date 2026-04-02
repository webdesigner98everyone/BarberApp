import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert, TextInput, Modal } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { theme, formatPrecio } from '../theme';
import { useConfig, formatearPrecio } from '../context/ConfigContext';
import api from '../services/api';

interface Servicio {
  id: number;
  nombre: string;
  precio: number;
  duracion_minutos: number;
}

const ServicioModal = ({ visible, servicio, onClose, onSave }: any) => {
  const [nombre, setNombre] = useState(servicio?.nombre ?? '');
  const [precio, setPrecio] = useState(servicio?.precio?.toString() ?? '');
  const [duracion, setDuracion] = useState(servicio?.duracion_minutos?.toString() ?? '');

  React.useEffect(() => {
    setNombre(servicio?.nombre ?? '');
    setPrecio(servicio?.precio?.toString() ?? '');
    setDuracion(servicio?.duracion_minutos?.toString() ?? '');
  }, [servicio]);

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>{servicio ? 'Editar Servicio' : 'Nuevo Servicio'}</Text>

          <Text style={styles.label}>Nombre</Text>
          <TextInput style={styles.input} value={nombre} onChangeText={setNombre} placeholder="Ej: Corte de cabello" placeholderTextColor={theme.colors.gray} />

          <Text style={styles.label}>Precio ($)</Text>
          <TextInput style={styles.input} value={precio} onChangeText={setPrecio} placeholder="Ej: 15" placeholderTextColor={theme.colors.gray} keyboardType="numeric" />

          <Text style={styles.label}>Duración (minutos)</Text>
          <TextInput style={styles.input} value={duracion} onChangeText={setDuracion} placeholder="Ej: 30" placeholderTextColor={theme.colors.gray} keyboardType="numeric" />

          <View style={styles.modalBtns}>
            <TouchableOpacity style={styles.cancelModalBtn} onPress={onClose}>
              <Text style={styles.cancelModalText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.saveBtn} onPress={() => onSave({ nombre, precio, duracion_minutos: duracion })}>
              <Text style={styles.saveBtnText}>Guardar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default function ServiciosAdminScreen() {
  const config = useConfig();
  const [servicios, setServicios] = useState<Servicio[]>([]);
  const [filtro, setFiltro] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [servicioEditando, setServicioEditando] = useState<Servicio | null>(null);

  const cargar = async () => {
    const { data } = await api.get('/admin/servicios');
    setServicios(data);
  };

  useFocusEffect(useCallback(() => { cargar(); }, []));

  const serviciosFiltrados = servicios.filter((s) =>
    s.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  const handleSave = async ({ nombre, precio, duracion_minutos }: any) => {
    if (!nombre.trim() || !precio || !duracion_minutos) return Alert.alert('Error', 'Todos los campos son requeridos');
    try {
      if (servicioEditando) {
        await api.put(`/admin/servicios/${servicioEditando.id}`, { nombre, precio, duracion_minutos });
      } else {
        await api.post('/admin/servicios', { nombre, precio: Number(precio), duracion_minutos: Number(duracion_minutos) });
      }
      setModalVisible(false);
      setServicioEditando(null);
      cargar();
    } catch {
      Alert.alert('Error', 'No se pudo guardar el servicio');
    }
  };

  const handleEliminar = (servicio: Servicio) => {
    Alert.alert('Eliminar servicio', `¿Seguro que deseas eliminar "${servicio.nombre}"?`, [
      { text: 'Cancelar' },
      { text: 'Eliminar', style: 'destructive', onPress: async () => {
        try {
          await api.delete(`/admin/servicios/${servicio.id}`);
          cargar();
        } catch (error: any) {
          Alert.alert('No se puede eliminar', error.response?.data?.error ?? 'Error al eliminar el servicio');
        }
      }}
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.brand}>✂️ THE BARBER</Text>
        <Text style={styles.title}>Servicios</Text>
      </View>

      <View style={styles.searchRow}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar servicio..."
          placeholderTextColor={theme.colors.gray}
          value={filtro}
          onChangeText={setFiltro}
        />
        <TouchableOpacity style={styles.addBtn} onPress={() => { setServicioEditando(null); setModalVisible(true); }}>
          <Text style={styles.addBtnText}>+ Nuevo</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={serviciosFiltrados}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyText}>No se encontraron servicios</Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.iconContainer}>
              <Text style={styles.icon}>✂️</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.nombre}>{item.nombre}</Text>
              <Text style={styles.detalle}>{item.duracion_minutos} min · {formatearPrecio(item.precio, config)}</Text>
            </View>
            <View style={styles.acciones}>
              <TouchableOpacity style={styles.editBtn} onPress={() => { setServicioEditando(item); setModalVisible(true); }}>
                <Text style={styles.editText}>✏️</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.deleteBtn} onPress={() => handleEliminar(item)}>
                <Text style={styles.deleteText}>🗑️</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <ServicioModal
        visible={modalVisible}
        servicio={servicioEditando}
        onClose={() => { setModalVisible(false); setServicioEditando(null); }}
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
  iconContainer: { width: 44, height: 44, borderRadius: 22, backgroundColor: theme.colors.lightGray, justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  icon: { fontSize: 20 },
  info: { flex: 1 },
  nombre: { fontSize: 15, fontWeight: 'bold', color: theme.colors.white },
  detalle: { color: theme.colors.gold, fontSize: 13, marginTop: 2 },
  acciones: { flexDirection: 'row', gap: 8 },
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

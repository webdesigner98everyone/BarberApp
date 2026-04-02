import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert, TextInput, Modal, SectionList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { theme, formatPrecio } from '../theme';
import { useConfig, formatearPrecio } from '../context/ConfigContext';
import api from '../services/api';

interface Servicio {
  id: number;
  nombre: string;
  precio: number;
  duracion_minutos: number;
  categoria: string;
  activo: boolean;
  predefinido: boolean;
}

const ServicioModal = ({ visible, servicio, onClose, onSave }: any) => {
  const [nombre, setNombre] = useState(servicio?.nombre ?? '');
  const [precio, setPrecio] = useState(servicio?.precio?.toString() ?? '');
  const [duracion, setDuracion] = useState(servicio?.duracion_minutos?.toString() ?? '');
  const [categoria, setCategoria] = useState(servicio?.categoria ?? 'General');

  const CATEGORIAS = ['Cabello', 'Barba', 'Uñas', 'Tratamientos', 'General'];

  React.useEffect(() => {
    setNombre(servicio?.nombre ?? '');
    setPrecio(servicio?.precio?.toString() ?? '');
    setDuracion(servicio?.duracion_minutos?.toString() ?? '');
    setCategoria(servicio?.categoria ?? 'General');
  }, [servicio]);

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>{servicio ? 'Editar Servicio' : 'Nuevo Servicio'}</Text>

          <Text style={styles.label}>Nombre</Text>
          <TextInput style={styles.input} value={nombre} onChangeText={setNombre} placeholder="Ej: Corte de cabello" placeholderTextColor={theme.colors.gray} />

          <Text style={styles.label}>Precio</Text>
          <TextInput style={styles.input} value={precio} onChangeText={setPrecio} placeholder="Ej: 15000" placeholderTextColor={theme.colors.gray} keyboardType="numeric" />

          <Text style={styles.label}>Duración (minutos)</Text>
          <TextInput style={styles.input} value={duracion} onChangeText={setDuracion} placeholder="Ej: 30" placeholderTextColor={theme.colors.gray} keyboardType="numeric" />

          <Text style={styles.label}>Categoría</Text>
          <View style={styles.categoriasRow}>
            {CATEGORIAS.map((c) => (
              <TouchableOpacity
                key={c}
                style={[styles.categoriaChip, categoria === c && styles.categoriaChipSelected]}
                onPress={() => setCategoria(c)}
              >
                <Text style={[styles.categoriaChipText, categoria === c && styles.categoriaChipTextSelected]}>{c}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.modalBtns}>
            <TouchableOpacity style={styles.cancelModalBtn} onPress={onClose}>
              <Text style={styles.cancelModalText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.saveBtn} onPress={() => onSave({ nombre, precio, duracion_minutos: duracion, categoria })}>
              <Text style={styles.saveBtnText}>Guardar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const CATEGORIA_ICONS: any = {
  'Cabello': 'cut',
  'Barba': 'man',
  'Uñas': 'hand-left',
  'Tratamientos': 'sparkles',
  'General': 'grid',
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
    s.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
    s.categoria.toLowerCase().includes(filtro.toLowerCase())
  );

  const secciones = Object.entries(
    serviciosFiltrados.reduce((acc: any, s) => {
      if (!acc[s.categoria]) acc[s.categoria] = [];
      acc[s.categoria].push(s);
      return acc;
    }, {})
  ).map(([titulo, data]) => ({ titulo, data }));

  const handleToggle = async (servicio: Servicio) => {
    try {
      await api.patch(`/admin/servicios/${servicio.id}/toggle`);
      cargar();
    } catch {
      Alert.alert('Error', 'No se pudo actualizar el servicio');
    }
  };

  const handleSave = async ({ nombre, precio, duracion_minutos, categoria }: any) => {
    if (!nombre.trim() || !precio || !duracion_minutos) return Alert.alert('Error', 'Todos los campos son requeridos');
    try {
      if (servicioEditando) {
        await api.put(`/admin/servicios/${servicioEditando.id}`, { nombre, precio, duracion_minutos, categoria });
      } else {
        await api.post('/admin/servicios', { nombre, precio: Number(precio), duracion_minutos: Number(duracion_minutos), categoria, activo: true });
      }
      setModalVisible(false);
      setServicioEditando(null);
      cargar();
    } catch {
      Alert.alert('Error', 'No se pudo guardar el servicio');
    }
  };

  const handleEliminar = (servicio: Servicio) => {
    if (servicio.predefinido) return Alert.alert('No permitido', 'Los servicios predefinidos no se pueden eliminar, solo desactivar');
    Alert.alert('Eliminar servicio', `¿Seguro que deseas eliminar "${servicio.nombre}"?`, [
      { text: 'Cancelar' },
      { text: 'Eliminar', style: 'destructive', onPress: async () => {
        try {
          await api.delete(`/admin/servicios/${servicio.id}`);
          cargar();
        } catch (error: any) {
          Alert.alert('No se puede eliminar', error.response?.data?.error ?? 'Error al eliminar');
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

      <SectionList
        sections={secciones as any}
        keyExtractor={(item: any) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderSectionHeader={({ section: { titulo } }: any) => (
          <View style={styles.seccionHeader}>
            <Ionicons name={CATEGORIA_ICONS[titulo] ?? 'grid'} size={16} color={theme.colors.gold} />
            <Text style={styles.seccionTitulo}>{titulo}</Text>
          </View>
        )}
        renderItem={({ item }: any) => (
          <View style={[styles.card, !item.activo && styles.cardInactivo]}>
            <TouchableOpacity style={[styles.toggle, item.activo && styles.toggleActivo]} onPress={() => handleToggle(item)}>
              {item.activo && <Ionicons name="checkmark" size={14} color={theme.colors.background} />}
            </TouchableOpacity>
            <View style={styles.info}>
              <Text style={[styles.nombre, !item.activo && styles.nombreInactivo]}>{item.nombre}</Text>
              <Text style={styles.detalle}>{item.duracion_minutos} min · {item.precio > 0 ? formatearPrecio(item.precio, config) : 'Sin precio'}</Text>
            </View>
            <View style={styles.acciones}>
              <TouchableOpacity style={styles.editBtn} onPress={() => { setServicioEditando(item); setModalVisible(true); }}>
                <Ionicons name="pencil" size={16} color={theme.colors.white} />
              </TouchableOpacity>
              {!item.predefinido && (
                <TouchableOpacity style={styles.deleteBtn} onPress={() => handleEliminar(item)}>
                  <Ionicons name="trash" size={16} color={theme.colors.error} />
                </TouchableOpacity>
              )}
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
  seccionHeader: { flexDirection: 'row', alignItems: 'center', gap: 8, paddingHorizontal: 16, paddingVertical: 8, backgroundColor: theme.colors.background },
  seccionTitulo: { color: theme.colors.gold, fontWeight: 'bold', fontSize: 12, letterSpacing: 2 },
  card: { flexDirection: 'row', alignItems: 'center', backgroundColor: theme.colors.card, marginHorizontal: 16, marginBottom: 8, borderRadius: 10, padding: 12, borderLeftWidth: 3, borderLeftColor: theme.colors.gold },
  cardInactivo: { borderLeftColor: theme.colors.lightGray, opacity: 0.6 },
  toggle: { width: 24, height: 24, borderRadius: 6, borderWidth: 2, borderColor: theme.colors.lightGray, justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  toggleActivo: { backgroundColor: theme.colors.gold, borderColor: theme.colors.gold },
  info: { flex: 1 },
  nombre: { fontSize: 14, fontWeight: 'bold', color: theme.colors.white },
  nombreInactivo: { color: theme.colors.gray },
  detalle: { color: theme.colors.gray, fontSize: 12, marginTop: 2 },
  acciones: { flexDirection: 'row', gap: 8 },
  editBtn: { backgroundColor: theme.colors.lightGray, padding: 8, borderRadius: 8 },
  deleteBtn: { backgroundColor: '#3a1a1a', padding: 8, borderRadius: 8 },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'flex-end' },
  modalContent: { backgroundColor: theme.colors.card, borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 24 },
  modalTitle: { fontSize: 20, fontWeight: 'bold', color: theme.colors.gold, marginBottom: 20, textAlign: 'center' },
  label: { fontSize: 12, color: theme.colors.gray, fontWeight: '600', marginBottom: 6, letterSpacing: 1 },
  input: { backgroundColor: theme.colors.background, borderRadius: 8, padding: 12, color: theme.colors.white, borderWidth: 1, borderColor: theme.colors.lightGray, marginBottom: 16 },
  categoriasRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 16 },
  categoriaChip: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, borderWidth: 1, borderColor: theme.colors.lightGray },
  categoriaChipSelected: { backgroundColor: theme.colors.gold, borderColor: theme.colors.gold },
  categoriaChipText: { color: theme.colors.gray, fontSize: 12 },
  categoriaChipTextSelected: { color: theme.colors.background, fontWeight: 'bold' },
  modalBtns: { flexDirection: 'row', gap: 12, marginTop: 8 },
  cancelModalBtn: { flex: 1, padding: 14, borderRadius: 8, borderWidth: 1, borderColor: theme.colors.lightGray, alignItems: 'center' },
  cancelModalText: { color: theme.colors.gray, fontWeight: 'bold' },
  saveBtn: { flex: 1, backgroundColor: theme.colors.gold, padding: 14, borderRadius: 8, alignItems: 'center' },
  saveBtnText: { color: theme.colors.background, fontWeight: 'bold' },
});

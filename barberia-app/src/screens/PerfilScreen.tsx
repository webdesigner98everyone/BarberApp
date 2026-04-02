import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert, ActivityIndicator, Image, KeyboardAvoidingView, Platform } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import { theme } from '../theme';
import api from '../services/api';

export default function PerfilScreen() {
  const [perfil, setPerfil] = useState<any>(null);
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [loadingPerfil, setLoadingPerfil] = useState(false);
  const [loadingFoto, setLoadingFoto] = useState(false);
  const [passwordActual, setPasswordActual] = useState('');
  const [passwordNueva, setPasswordNueva] = useState('');
  const [passwordConfirmar, setPasswordConfirmar] = useState('');
  const [loadingPass, setLoadingPass] = useState(false);

  useEffect(() => {
    api.get('/perfil').then(({ data }) => {
      setPerfil(data);
      setNombre(data.nombre ?? '');
      setTelefono(data.telefono ?? '');
      setFechaNacimiento(data.fecha_nacimiento ? new Date(data.fecha_nacimiento) : null);
    });
  }, []);

  const handleSeleccionarFoto = async () => {
    const permiso = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permiso.granted) return Alert.alert('Permiso requerido', 'Necesitamos acceso a tu galería');

    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: 'images',
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.3,
      base64: true
    });

    if (!resultado.canceled && resultado.assets[0]) {
      const asset = resultado.assets[0];
      try {
        setLoadingFoto(true);
        const base64 = `data:image/jpeg;base64,${asset.base64}`;
        const { data } = await api.put('/perfil', { nombre, telefono, fecha_nacimiento: fechaNacimiento, foto_url: base64 });
        await AsyncStorage.setItem('usuario', JSON.stringify({ ...perfil, nombre: data.nombre, foto_url: data.foto_url }));
        setPerfil({ ...data });
        Alert.alert('✅ Foto actualizada');
      } catch {
        Alert.alert('Error', 'No se pudo actualizar la foto');
      } finally {
        setLoadingFoto(false);
      }
    }
  };

  const handleGuardarPerfil = async () => {
    if (!nombre.trim()) return Alert.alert('Error', 'El nombre es requerido');
    try {
      setLoadingPerfil(true);
      const { data } = await api.put('/perfil', { nombre, telefono, fecha_nacimiento: fechaNacimiento, foto_url: perfil.foto_url });
      await AsyncStorage.setItem('usuario', JSON.stringify({ ...perfil, nombre: data.nombre }));
      setPerfil(data);
      Alert.alert('✅ Perfil actualizado');
    } catch {
      Alert.alert('Error', 'No se pudo actualizar el perfil');
    } finally {
      setLoadingPerfil(false);
    }
  };

  const handleCambiarPassword = async () => {
    if (!passwordActual || !passwordNueva || !passwordConfirmar)
      return Alert.alert('Error', 'Todos los campos son requeridos');
    if (passwordNueva !== passwordConfirmar)
      return Alert.alert('Error', 'Las contraseñas no coinciden');
    if (passwordNueva.length < 6)
      return Alert.alert('Error', 'Mínimo 6 caracteres');
    try {
      setLoadingPass(true);
      await api.patch('/perfil/password', { passwordActual, passwordNueva });
      setPasswordActual('');
      setPasswordNueva('');
      setPasswordConfirmar('');
      Alert.alert('✅ Contraseña actualizada');
    } catch (error: any) {
      Alert.alert('Error', error.response?.data?.error ?? 'No se pudo cambiar la contraseña');
    } finally {
      setLoadingPass(false);
    }
  };

  if (!perfil) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color={theme.colors.gold} />
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: theme.colors.background }}
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === 'android' ? -500 : 0}
    >
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 40 }}
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
      >
      <View style={styles.header}>
        <TouchableOpacity style={styles.avatarContainer} onPress={handleSeleccionarFoto} disabled={loadingFoto}>
          {perfil.foto_url ? (
            <Image source={{ uri: perfil.foto_url }} style={styles.avatarImage} />
          ) : (
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{perfil.nombre.charAt(0).toUpperCase()}</Text>
            </View>
          )}
          <View style={styles.editFotoBtn}>
            {loadingFoto ? <ActivityIndicator size="small" color={theme.colors.background} /> : <Text style={styles.editFotoText}>📷</Text>}
          </View>
        </TouchableOpacity>
        <Text style={styles.nombre}>{perfil.nombre}</Text>
        <Text style={styles.email}>{perfil.email}</Text>
        <View style={styles.rolBadge}>
          <Text style={styles.rolText}>{perfil.rol === 'admin' ? '⚙️ Admin' : '👤 Cliente'}</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>INFORMACIÓN PERSONAL</Text>

      <Text style={styles.label}>Nombre</Text>
      <TextInput style={styles.input} value={nombre} onChangeText={setNombre} placeholderTextColor={theme.colors.gray} />

      <Text style={styles.label}>Email</Text>
      <TextInput style={[styles.input, styles.inputDisabled]} value={perfil.email} editable={false} />

      <Text style={styles.label}>Teléfono</Text>
      <TextInput
        style={styles.input}
        value={telefono}
        onChangeText={setTelefono}
        placeholder="Ej: 3001234567"
        placeholderTextColor={theme.colors.gray}
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>Fecha de nacimiento</Text>
      <TouchableOpacity style={styles.datePicker} onPress={() => setShowDatePicker(true)}>
        <Text style={fechaNacimiento ? styles.dateText : styles.datePlaceholder}>
          {fechaNacimiento ? fechaNacimiento.toLocaleDateString('es-ES', { dateStyle: 'long' }) : 'Seleccionar fecha'}
        </Text>
        <Text>📅</Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={showDatePicker}
        mode="date"
        maximumDate={new Date()}
        onConfirm={(date) => { setFechaNacimiento(date); setShowDatePicker(false); }}
        onCancel={() => setShowDatePicker(false)}
      />

      <Text style={styles.miembroDesde}>
        Miembro desde {new Date(perfil.createdAt).toLocaleDateString('es-ES', { dateStyle: 'long' })}
      </Text>

      <TouchableOpacity style={[styles.btn, loadingPerfil && styles.btnDisabled]} onPress={handleGuardarPerfil} disabled={loadingPerfil}>
        {loadingPerfil ? <ActivityIndicator color={theme.colors.background} /> : <Text style={styles.btnText}>GUARDAR CAMBIOS</Text>}
      </TouchableOpacity>

      <View style={styles.divider} />

      <Text style={styles.sectionTitle}>CAMBIAR CONTRASEÑA</Text>

      <Text style={styles.label}>Contraseña actual</Text>
      <TextInput style={styles.input} value={passwordActual} onChangeText={setPasswordActual} secureTextEntry placeholder="••••••" placeholderTextColor={theme.colors.gray} />

      <Text style={styles.label}>Nueva contraseña</Text>
      <TextInput style={styles.input} value={passwordNueva} onChangeText={setPasswordNueva} secureTextEntry placeholder="••••••" placeholderTextColor={theme.colors.gray} />

      <Text style={styles.label}>Confirmar nueva contraseña</Text>
      <TextInput style={styles.input} value={passwordConfirmar} onChangeText={setPasswordConfirmar} secureTextEntry placeholder="••••••" placeholderTextColor={theme.colors.gray} />

      <TouchableOpacity style={[styles.btnOutline, loadingPass && styles.btnDisabled]} onPress={handleCambiarPassword} disabled={loadingPass}>
        {loadingPass ? <ActivityIndicator color={theme.colors.gold} /> : <Text style={styles.btnOutlineText}>CAMBIAR CONTRASEÑA</Text>}
      </TouchableOpacity>
    </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background, padding: 16 },
  loading: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.background },
  header: { alignItems: 'center', paddingVertical: 24, borderBottomWidth: 1, borderBottomColor: theme.colors.lightGray, marginBottom: 24 },
  avatarContainer: { position: 'relative', marginBottom: 12 },
  avatar: { width: 90, height: 90, borderRadius: 45, backgroundColor: theme.colors.gold, justifyContent: 'center', alignItems: 'center' },
  avatarImage: { width: 90, height: 90, borderRadius: 45, borderWidth: 2, borderColor: theme.colors.gold },
  avatarText: { fontSize: 36, fontWeight: 'bold', color: theme.colors.background },
  editFotoBtn: { position: 'absolute', bottom: 0, right: 0, backgroundColor: theme.colors.card, borderRadius: 14, width: 28, height: 28, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: theme.colors.gold },
  editFotoText: { fontSize: 14 },
  nombre: { fontSize: 22, fontWeight: 'bold', color: theme.colors.white },
  email: { color: theme.colors.gray, marginTop: 4 },
  rolBadge: { marginTop: 8, backgroundColor: theme.colors.card, paddingHorizontal: 12, paddingVertical: 4, borderRadius: 20, borderWidth: 1, borderColor: theme.colors.gold },
  rolText: { color: theme.colors.gold, fontSize: 12, fontWeight: 'bold' },
  sectionTitle: { fontSize: 11, fontWeight: 'bold', color: theme.colors.gold, letterSpacing: 2, marginBottom: 16 },
  label: { fontSize: 12, color: theme.colors.gray, fontWeight: '600', marginBottom: 6, letterSpacing: 1 },
  input: { backgroundColor: theme.colors.card, borderRadius: 8, padding: 14, color: theme.colors.white, borderWidth: 1, borderColor: theme.colors.lightGray, marginBottom: 16, fontSize: 15 },
  inputDisabled: { opacity: 0.5 },
  datePicker: { backgroundColor: theme.colors.card, borderRadius: 8, padding: 14, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1, borderColor: theme.colors.lightGray, marginBottom: 8 },
  dateText: { color: theme.colors.white, fontSize: 15 },
  datePlaceholder: { color: theme.colors.gray, fontSize: 15 },
  miembroDesde: { color: theme.colors.gray, fontSize: 12, textAlign: 'center', marginVertical: 16, fontStyle: 'italic' },
  btn: { backgroundColor: theme.colors.gold, padding: 16, borderRadius: 8, alignItems: 'center', marginBottom: 8 },
  btnDisabled: { backgroundColor: theme.colors.lightGray },
  btnText: { color: theme.colors.background, fontSize: 14, fontWeight: 'bold', letterSpacing: 2 },
  divider: { height: 1, backgroundColor: theme.colors.lightGray, marginVertical: 24 },
  btnOutline: { borderWidth: 1, borderColor: theme.colors.gold, padding: 16, borderRadius: 8, alignItems: 'center' },
  btnOutlineText: { color: theme.colors.gold, fontSize: 14, fontWeight: 'bold', letterSpacing: 2 },
});

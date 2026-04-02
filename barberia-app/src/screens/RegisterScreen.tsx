import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, ScrollView, Image } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme';
import api from '../services/api';

export default function RegisterScreen({ navigation }: any) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmar, setConfirmar] = useState('');
  const [foto, setFoto] = useState<string | null>(null);
  const [codigoAdmin, setCodigoAdmin] = useState('');
  const [mostrarCodigo, setMostrarCodigo] = useState(false);
  const [errores, setErrores] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [exitoso, setExitoso] = useState(false);

  const emailRef = useRef<TextInput>(null);
  const telefonoRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const confirmarRef = useRef<TextInput>(null);

  const handleSeleccionarFoto = async () => {
    const permiso = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permiso.granted) return;
    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: 'images',
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.3,
      base64: true
    });
    if (!resultado.canceled && resultado.assets[0].base64) {
      setFoto(`data:image/jpeg;base64,${resultado.assets[0].base64}`);
    }
  };

  const validar = () => {
    const e: any = {};
    if (!nombre.trim()) e.nombre = 'El nombre es requerido';
    if (!email.trim()) e.email = 'El email es requerido';
    else if (!/\S+@\S+\.\S+/.test(email)) e.email = 'Email inválido';
    if (!telefono.trim()) e.telefono = 'El teléfono es requerido';
    else if (!/^\d{7,15}$/.test(telefono)) e.telefono = 'Teléfono inválido';
    if (!fechaNacimiento) e.fechaNacimiento = 'La fecha de nacimiento es requerida';
    if (!password.trim()) e.password = 'La contraseña es requerida';
    else if (password.length < 6) e.password = 'Mínimo 6 caracteres';
    if (password !== confirmar) e.confirmar = 'Las contraseñas no coinciden';
    setErrores(e);
    return Object.keys(e).length === 0;
  };

  const handleRegister = async () => {
    if (!validar()) return;
    try {
      setLoading(true);
      await api.post('/auth/register', { nombre, email, telefono, fecha_nacimiento: fechaNacimiento, password, foto_url: foto, codigo_admin: codigoAdmin || undefined });
      setExitoso(true);
      setTimeout(() => navigation.navigate('Login'), 2500);
    } catch {
      setErrores({ general: 'Este email ya está registrado' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="always"
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.title}>CREAR CUENTA</Text>
        <Text style={styles.subtitle}>Únete a The Barber</Text>
      </View>

      {exitoso && (
        <View style={styles.successBox}>
          <Text style={styles.successText}>✅ ¡Cuenta creada exitosamente!</Text>
          <Text style={styles.successSubtext}>Redirigiendo al inicio de sesión...</Text>
        </View>
      )}

      {errores.general && (
        <View style={styles.errorBox}>
          <Text style={styles.errorBoxText}>{errores.general}</Text>
        </View>
      )}

      <Text style={styles.label}>Foto de perfil (opcional)</Text>
      <TouchableOpacity style={styles.fotoContainer} onPress={handleSeleccionarFoto}>
        {foto ? (
          <Image source={{ uri: foto }} style={styles.fotoPreview} />
        ) : (
          <View style={styles.fotoPlaceholder}>
            <Text style={styles.fotoIcon}>📷</Text>
            <Text style={styles.fotoTexto}>Toca para agregar foto</Text>
          </View>
        )}
      </TouchableOpacity>

      <Text style={styles.label}>Nombre completo</Text>
      <TextInput
        style={[styles.input, errores.nombre && styles.inputError]}
        placeholder="Tu nombre completo"
        placeholderTextColor={theme.colors.gray}
        value={nombre}
        onChangeText={setNombre}
        returnKeyType="next"
        onSubmitEditing={() => emailRef.current?.focus()}
        blurOnSubmit={false}
      />
      {errores.nombre && <Text style={styles.error}>{errores.nombre}</Text>}

      <Text style={styles.label}>Email</Text>
      <TextInput
        ref={emailRef}
        style={[styles.input, errores.email && styles.inputError]}
        placeholder="tucorreo@email.com"
        placeholderTextColor={theme.colors.gray}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        returnKeyType="next"
        onSubmitEditing={() => telefonoRef.current?.focus()}
        blurOnSubmit={false}
      />
      {errores.email && <Text style={styles.error}>{errores.email}</Text>}

      <Text style={styles.label}>Teléfono</Text>
      <TextInput
        ref={telefonoRef}
        style={[styles.input, errores.telefono && styles.inputError]}
        placeholder="Ej: 3001234567"
        placeholderTextColor={theme.colors.gray}
        value={telefono}
        onChangeText={setTelefono}
        keyboardType="phone-pad"
        returnKeyType="next"
        onSubmitEditing={() => setShowDatePicker(true)}
        blurOnSubmit={false}
      />
      {errores.telefono && <Text style={styles.error}>{errores.telefono}</Text>}

      <Text style={styles.label}>Fecha de nacimiento</Text>
      <TouchableOpacity
        style={[styles.datePicker, errores.fechaNacimiento && styles.inputError]}
        onPress={() => setShowDatePicker(true)}
      >
        <Text style={fechaNacimiento ? styles.dateText : styles.datePlaceholder}>
          {fechaNacimiento ? fechaNacimiento.toLocaleDateString('es-ES', { dateStyle: 'long' }) : 'Seleccionar fecha'}
        </Text>
        <Text>📅</Text>
      </TouchableOpacity>
      {errores.fechaNacimiento && <Text style={styles.error}>{errores.fechaNacimiento}</Text>}

      <DateTimePickerModal
        isVisible={showDatePicker}
        mode="date"
        maximumDate={new Date()}
        onConfirm={(date) => { setFechaNacimiento(date); setShowDatePicker(false); }}
        onCancel={() => setShowDatePicker(false)}
      />

      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        ref={passwordRef}
        style={[styles.input, errores.password && styles.inputError]}
        placeholder="••••••"
        placeholderTextColor={theme.colors.gray}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        returnKeyType="next"
        onSubmitEditing={() => confirmarRef.current?.focus()}
        blurOnSubmit={false}
      />
      {errores.password && <Text style={styles.error}>{errores.password}</Text>}

      <Text style={styles.label}>Confirmar contraseña</Text>
      <TextInput
        ref={confirmarRef}
        style={[styles.input, errores.confirmar && styles.inputError]}
        placeholder="Repite tu contraseña"
        placeholderTextColor={theme.colors.gray}
        value={confirmar}
        onChangeText={setConfirmar}
        secureTextEntry
        returnKeyType="done"
        onSubmitEditing={handleRegister}
      />
      {errores.confirmar && <Text style={styles.error}>{errores.confirmar}</Text>}

      <TouchableOpacity onPress={() => setMostrarCodigo(!mostrarCodigo)} style={styles.codigoToggle}>
        <Ionicons name={mostrarCodigo ? 'chevron-up' : 'chevron-down'} size={16} color={theme.colors.gold} />
        <Text style={styles.codigoToggleText}>¿Eres administrador de una barbería?</Text>
      </TouchableOpacity>

      {mostrarCodigo && (
        <>
          <Text style={styles.label}>Código de administrador</Text>
          <TextInput
            style={styles.input}
            value={codigoAdmin}
            onChangeText={setCodigoAdmin}
            placeholder="Ingresa el código"
            placeholderTextColor={theme.colors.gray}
            autoCapitalize="characters"
          />
        </>
      )}

      <TouchableOpacity style={[styles.btn, loading && styles.btnDisabled]} onPress={handleRegister} disabled={loading}>
        {loading ? <ActivityIndicator color={theme.colors.background} /> : <Text style={styles.btnText}>REGISTRARSE</Text>}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>¿Ya tienes cuenta? <Text style={styles.linkBold}>Inicia sesión</Text></Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 24, backgroundColor: theme.colors.background },
  header: { alignItems: 'center', marginBottom: 32 },
  title: { fontSize: 26, fontWeight: 'bold', color: theme.colors.gold, letterSpacing: 4 },
  subtitle: { color: theme.colors.gray, fontSize: 14, marginTop: 4 },
  label: { fontSize: 12, fontWeight: '600', marginBottom: 6, color: theme.colors.gray, letterSpacing: 1 },
  input: { borderWidth: 1, borderColor: theme.colors.lightGray, borderRadius: 8, padding: 14, marginBottom: 4, fontSize: 15, color: theme.colors.white, backgroundColor: theme.colors.card },
  inputError: { borderColor: theme.colors.error },
  error: { color: theme.colors.error, fontSize: 12, marginBottom: 10 },
  errorBox: { backgroundColor: '#3a1a1a', padding: 12, borderRadius: 8, marginBottom: 16, borderWidth: 1, borderColor: theme.colors.error },
  errorBoxText: { color: theme.colors.error, textAlign: 'center' },
  datePicker: { borderWidth: 1, borderColor: theme.colors.lightGray, borderRadius: 8, padding: 14, marginBottom: 4, backgroundColor: theme.colors.card, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  dateText: { color: theme.colors.white, fontSize: 15 },
  datePlaceholder: { color: theme.colors.gray, fontSize: 15 },
  btn: { backgroundColor: theme.colors.gold, padding: 16, borderRadius: 8, alignItems: 'center', marginTop: 8, marginBottom: 16 },
  btnDisabled: { backgroundColor: theme.colors.lightGray },
  btnText: { color: theme.colors.background, fontSize: 15, fontWeight: 'bold', letterSpacing: 2 },
  link: { textAlign: 'center', color: theme.colors.gray },
  linkBold: { fontWeight: 'bold', color: theme.colors.gold },
  successBox: { backgroundColor: '#1a3a2a', padding: 16, borderRadius: 8, marginBottom: 16, borderWidth: 1, borderColor: theme.colors.success, alignItems: 'center' },
  successText: { color: theme.colors.success, fontWeight: 'bold', fontSize: 16 },
  successSubtext: { color: theme.colors.success, fontSize: 12, marginTop: 4, opacity: 0.8 },
  fotoContainer: { marginBottom: 16, alignItems: 'center' },
  fotoPreview: { width: 90, height: 90, borderRadius: 45, borderWidth: 2, borderColor: theme.colors.gold },
  fotoPlaceholder: { width: 90, height: 90, borderRadius: 45, backgroundColor: theme.colors.card, borderWidth: 2, borderColor: theme.colors.lightGray, borderStyle: 'dashed', justifyContent: 'center', alignItems: 'center' },
  fotoIcon: { fontSize: 24 },
  fotoTexto: { color: theme.colors.gray, fontSize: 10, marginTop: 4, textAlign: 'center' },
  codigoToggle: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 12, paddingVertical: 8 },
  codigoToggleText: { color: theme.colors.gold, fontSize: 13, fontWeight: '600' },
});

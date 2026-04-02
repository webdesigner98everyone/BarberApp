import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { theme } from '../theme';
import api from '../services/api';

export default function RegisterScreen({ navigation }: any) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmar, setConfirmar] = useState('');
  const [errores, setErrores] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const validar = () => {
    const e: any = {};
    if (!nombre.trim()) e.nombre = 'El nombre es requerido';
    if (!email.trim()) e.email = 'El email es requerido';
    else if (!/\S+@\S+\.\S+/.test(email)) e.email = 'Email inválido';
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
      await api.post('/auth/register', { nombre, email, password });
      navigation.navigate('Login');
    } catch {
      setErrores({ general: 'Este email ya está registrado' });
    } finally {
      setLoading(false);
    }
  };

  const Campo = ({ label, value, onChange, error, props = {} }: any) => (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, error && styles.inputError]}
        value={value}
        placeholderTextColor={theme.colors.gray}
        onChangeText={(v) => { onChange(v); setErrores((p: any) => ({ ...p, [label.toLowerCase()]: null })); }}
        {...props}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>CREAR CUENTA</Text>
        <Text style={styles.subtitle}>Únete a The Barber</Text>
      </View>

      {errores.general && (
        <View style={styles.errorBox}>
          <Text style={styles.errorBoxText}>{errores.general}</Text>
        </View>
      )}

      <Campo label="Nombre" value={nombre} onChange={setNombre} error={errores.nombre} props={{ placeholder: 'Tu nombre completo' }} />
      <Campo label="Email" value={email} onChange={setEmail} error={errores.email} props={{ placeholder: 'tucorreo@email.com', keyboardType: 'email-address', autoCapitalize: 'none' }} />
      <Campo label="Contraseña" value={password} onChange={setPassword} error={errores.password} props={{ placeholder: '••••••', secureTextEntry: true }} />
      <Campo label="Confirmar contraseña" value={confirmar} onChange={setConfirmar} error={errores.confirmar} props={{ placeholder: 'Repite tu contraseña', secureTextEntry: true }} />

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
  container: { flexGrow: 1, justifyContent: 'center', padding: 24, backgroundColor: theme.colors.background },
  header: { alignItems: 'center', marginBottom: 32 },
  title: { fontSize: 26, fontWeight: 'bold', color: theme.colors.gold, letterSpacing: 4 },
  subtitle: { color: theme.colors.gray, fontSize: 14, marginTop: 4 },
  label: { fontSize: 12, fontWeight: '600', marginBottom: 6, color: theme.colors.gray, letterSpacing: 1 },
  input: { borderWidth: 1, borderColor: theme.colors.lightGray, borderRadius: 8, padding: 14, marginBottom: 4, fontSize: 15, color: theme.colors.white, backgroundColor: theme.colors.card },
  inputError: { borderColor: theme.colors.error },
  error: { color: theme.colors.error, fontSize: 12, marginBottom: 10 },
  errorBox: { backgroundColor: '#3a1a1a', padding: 12, borderRadius: 8, marginBottom: 16, borderWidth: 1, borderColor: theme.colors.error },
  errorBoxText: { color: theme.colors.error, textAlign: 'center' },
  btn: { backgroundColor: theme.colors.gold, padding: 16, borderRadius: 8, alignItems: 'center', marginTop: 8, marginBottom: 16 },
  btnDisabled: { backgroundColor: theme.colors.lightGray },
  btnText: { color: theme.colors.background, fontSize: 15, fontWeight: 'bold', letterSpacing: 2 },
  link: { textAlign: 'center', color: theme.colors.gray },
  linkBold: { fontWeight: 'bold', color: theme.colors.gold },
});

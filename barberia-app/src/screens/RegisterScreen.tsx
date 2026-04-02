import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
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

  const campo = (label: string, value: string, onChange: any, error: string, props: any = {}) => (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, error && styles.inputError]}
        value={value}
        onChangeText={(v) => { onChange(v); setErrores((p: any) => ({ ...p, [label.toLowerCase()]: null })); }}
        {...props}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear cuenta</Text>

      {errores.general && <View style={styles.errorBox}><Text style={styles.errorBoxText}>{errores.general}</Text></View>}

      {campo('Nombre', nombre, setNombre, errores.nombre, { placeholder: 'Tu nombre completo' })}
      {campo('Email', email, setEmail, errores.email, { placeholder: 'tucorreo@email.com', keyboardType: 'email-address', autoCapitalize: 'none' })}
      {campo('Contraseña', password, setPassword, errores.password, { placeholder: '••••••', secureTextEntry: true })}
      {campo('Confirmar', confirmar, setConfirmar, errores.confirmar, { placeholder: 'Repite tu contraseña', secureTextEntry: true })}

      <TouchableOpacity style={[styles.btn, loading && styles.btnDisabled]} onPress={handleRegister} disabled={loading}>
        {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.btnText}>Registrarse</Text>}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>¿Ya tienes cuenta? <Text style={styles.linkBold}>Inicia sesión</Text></Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#fff' },
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 24 },
  label: { fontSize: 14, fontWeight: '600', marginBottom: 4, color: '#333' },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 12, marginBottom: 4, fontSize: 16 },
  inputError: { borderColor: '#ef4444' },
  error: { color: '#ef4444', fontSize: 12, marginBottom: 10 },
  errorBox: { backgroundColor: '#fee2e2', padding: 12, borderRadius: 8, marginBottom: 16 },
  errorBoxText: { color: '#ef4444', textAlign: 'center' },
  btn: { backgroundColor: '#1a1a1a', padding: 16, borderRadius: 8, alignItems: 'center', marginTop: 8, marginBottom: 16 },
  btnDisabled: { backgroundColor: '#666' },
  btnText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  link: { textAlign: 'center', color: '#666' },
  linkBold: { fontWeight: 'bold', color: '#1a1a1a' },
});

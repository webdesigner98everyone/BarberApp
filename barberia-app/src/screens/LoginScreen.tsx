import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errores, setErrores] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const validar = () => {
    const e: any = {};
    if (!email.trim()) e.email = 'El email es requerido';
    else if (!/\S+@\S+\.\S+/.test(email)) e.email = 'Email inválido';
    if (!password.trim()) e.password = 'La contraseña es requerida';
    else if (password.length < 6) e.password = 'Mínimo 6 caracteres';
    setErrores(e);
    return Object.keys(e).length === 0;
  };

  const handleLogin = async () => {
    if (!validar()) return;
    try {
      setLoading(true);
      const { data } = await api.post('/auth/login', { email, password });
      await AsyncStorage.setItem('token', data.token);
      await AsyncStorage.setItem('usuario', JSON.stringify(data.usuario));
      navigation.replace('Main');
    } catch {
      setErrores({ general: 'Email o contraseña incorrectos' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>✂️</Text>
      <Text style={styles.title}>Barbería</Text>
      <Text style={styles.subtitle}>Inicia sesión para reservar</Text>

      {errores.general && <View style={styles.errorBox}><Text style={styles.errorBoxText}>{errores.general}</Text></View>}

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={[styles.input, errores.email && styles.inputError]}
        placeholder="tucorreo@email.com"
        value={email}
        onChangeText={(v) => { setEmail(v); setErrores((p: any) => ({ ...p, email: null })); }}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {errores.email && <Text style={styles.error}>{errores.email}</Text>}

      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        style={[styles.input, errores.password && styles.inputError]}
        placeholder="••••••"
        value={password}
        onChangeText={(v) => { setPassword(v); setErrores((p: any) => ({ ...p, password: null })); }}
        secureTextEntry
      />
      {errores.password && <Text style={styles.error}>{errores.password}</Text>}

      <TouchableOpacity style={[styles.btn, loading && styles.btnDisabled]} onPress={handleLogin} disabled={loading}>
        {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.btnText}>Ingresar</Text>}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>¿No tienes cuenta? <Text style={styles.linkBold}>Regístrate</Text></Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#fff' },
  logo: { fontSize: 48, textAlign: 'center' },
  title: { fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginBottom: 4 },
  subtitle: { color: '#666', textAlign: 'center', marginBottom: 32 },
  label: { fontSize: 14, fontWeight: '600', marginBottom: 4, color: '#333' },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 12, marginBottom: 4, fontSize: 16 },
  inputError: { borderColor: '#ef4444' },
  error: { color: '#ef4444', fontSize: 12, marginBottom: 12 },
  errorBox: { backgroundColor: '#fee2e2', padding: 12, borderRadius: 8, marginBottom: 16 },
  errorBoxText: { color: '#ef4444', textAlign: 'center' },
  btn: { backgroundColor: '#1a1a1a', padding: 16, borderRadius: 8, alignItems: 'center', marginTop: 16, marginBottom: 16 },
  btnDisabled: { backgroundColor: '#666' },
  btnText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  link: { textAlign: 'center', color: '#666' },
  linkBold: { fontWeight: 'bold', color: '#1a1a1a' },
});

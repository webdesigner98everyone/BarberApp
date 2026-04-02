import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, ScrollView, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { theme } from '../theme';
import api from '../services/api';

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errores, setErrores] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const passwordRef = useRef<TextInput>(null);

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
    Keyboard.dismiss();
    if (!validar()) return;
    try {
      setLoading(true);
      const { data } = await api.post('/auth/login', { email, password });
      await AsyncStorage.setItem('token', data.token);
      await AsyncStorage.setItem('usuario', JSON.stringify(data.usuario));
      navigation.replace('Main', { rol: data.usuario.rol });
    } catch {
      setErrores({ general: 'Email o contraseña incorrectos' });
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
        <Text style={styles.logo}>✂️</Text>
        <Text style={styles.title}>THE BARBER</Text>
        <Text style={styles.subtitle}>Tu estilo, tu identidad</Text>
      </View>

      {errores.general && (
        <View style={styles.errorBox}>
          <Text style={styles.errorBoxText}>{errores.general}</Text>
        </View>
      )}

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={[styles.input, errores.email && styles.inputError]}
        placeholder="tucorreo@email.com"
        placeholderTextColor={theme.colors.gray}
        value={email}
        onChangeText={(v) => { setEmail(v); setErrores((p: any) => ({ ...p, email: null })); }}
        keyboardType="email-address"
        autoCapitalize="none"
        returnKeyType="next"
        onSubmitEditing={() => passwordRef.current?.focus()}
        blurOnSubmit={false}
      />
      {errores.email && <Text style={styles.error}>{errores.email}</Text>}

      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        ref={passwordRef}
        style={[styles.input, errores.password && styles.inputError]}
        placeholder="••••••"
        placeholderTextColor={theme.colors.gray}
        value={password}
        onChangeText={(v) => { setPassword(v); setErrores((p: any) => ({ ...p, password: null })); }}
        secureTextEntry
        returnKeyType="done"
        onSubmitEditing={handleLogin}
      />
      {errores.password && <Text style={styles.error}>{errores.password}</Text>}

      <TouchableOpacity style={[styles.btn, loading && styles.btnDisabled]} onPress={handleLogin} disabled={loading}>
        {loading ? <ActivityIndicator color={theme.colors.background} /> : <Text style={styles.btnText}>INGRESAR</Text>}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>¿No tienes cuenta? <Text style={styles.linkBold}>Regístrate</Text></Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: 'center', padding: 24, backgroundColor: theme.colors.background },
  header: { alignItems: 'center', marginBottom: 40 },
  logo: { fontSize: 56 },
  title: { fontSize: 32, fontWeight: 'bold', color: theme.colors.gold, letterSpacing: 4, marginTop: 8 },
  subtitle: { color: theme.colors.gray, fontSize: 14, marginTop: 4, letterSpacing: 1 },
  label: { fontSize: 12, fontWeight: '600', marginBottom: 6, color: theme.colors.gray, letterSpacing: 1 },
  input: { borderWidth: 1, borderColor: theme.colors.lightGray, borderRadius: 8, padding: 14, marginBottom: 4, fontSize: 15, color: theme.colors.white, backgroundColor: theme.colors.card },
  inputError: { borderColor: theme.colors.error },
  error: { color: theme.colors.error, fontSize: 12, marginBottom: 12 },
  errorBox: { backgroundColor: '#3a1a1a', padding: 12, borderRadius: 8, marginBottom: 16, borderWidth: 1, borderColor: theme.colors.error },
  errorBoxText: { color: theme.colors.error, textAlign: 'center' },
  btn: { backgroundColor: theme.colors.gold, padding: 16, borderRadius: 8, alignItems: 'center', marginTop: 16, marginBottom: 16 },
  btnDisabled: { backgroundColor: theme.colors.lightGray },
  btnText: { color: theme.colors.background, fontSize: 15, fontWeight: 'bold', letterSpacing: 2 },
  link: { textAlign: 'center', color: theme.colors.gray },
  linkBold: { fontWeight: 'bold', color: theme.colors.gold },
});

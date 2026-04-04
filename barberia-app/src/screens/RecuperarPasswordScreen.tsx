import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { theme } from '../theme';
import { apiPublica } from '../services/api';

export default function RecuperarPasswordScreen({ navigation }: any) {
  const [paso, setPaso] = useState<1 | 2>(1);
  const [email, setEmail] = useState('');
  const [passwordNueva, setPasswordNueva] = useState('');
  const [confirmar, setConfirmar] = useState('');
  const [errores, setErrores] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const passwordRef = useRef<TextInput>(null);
  const confirmarRef = useRef<TextInput>(null);

  const verificarEmail = async () => {
    if (!email.trim()) return setErrores({ email: 'El email es requerido' });
    if (!/\S+@\S+\.\S+/.test(email)) return setErrores({ email: 'Email inválido' });
    try {
      setLoading(true);
      await apiPublica.post('/perfil/verificar-email', { email });
      setErrores({});
      setPaso(2);
    } catch (error: any) {
      setErrores({ email: error.response?.data?.error ?? 'No existe una cuenta con este email' });
    } finally {
      setLoading(false);
    }
  };

  const handleRecuperar = async () => {
    const e: any = {};
    if (!passwordNueva.trim()) e.passwordNueva = 'La contraseña es requerida';
    else if (passwordNueva.length < 6) e.passwordNueva = 'Mínimo 6 caracteres';
    if (passwordNueva !== confirmar) e.confirmar = 'Las contraseñas no coinciden';
    if (Object.keys(e).length > 0) return setErrores(e);

    try {
      setLoading(true);
      await apiPublica.post('/perfil/recuperar', { email, passwordNueva, confirmar });
      Alert.alert('✅ Contraseña actualizada', 'Ya puedes iniciar sesión con tu nueva contraseña', [
        { text: 'Iniciar sesión', onPress: () => navigation.replace('Login') }
      ]);
    } catch (error: any) {
      setErrores({ general: error.response?.data?.error ?? 'Error al actualizar la contraseña' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="always">
      <View style={styles.header}>
        <Text style={styles.logo}>🔐</Text>
        <Text style={styles.title}>RECUPERAR CONTRASEÑA</Text>
        <Text style={styles.subtitle}>
          {paso === 1 ? 'Ingresa tu email registrado' : 'Crea tu nueva contraseña'}
        </Text>
      </View>

      <View style={styles.pasos}>
        <View style={[styles.paso, paso >= 1 && styles.pasoActivo]}>
          <Text style={[styles.pasoNum, paso >= 1 && styles.pasoNumActivo]}>1</Text>
          <Text style={[styles.pasoLabel, paso >= 1 && styles.pasoLabelActivo]}>Email</Text>
        </View>
        <View style={[styles.pasoDivider, paso >= 2 && styles.pasoDividerActivo]} />
        <View style={[styles.paso, paso >= 2 && styles.pasoActivo]}>
          <Text style={[styles.pasoNum, paso >= 2 && styles.pasoNumActivo]}>2</Text>
          <Text style={[styles.pasoLabel, paso >= 2 && styles.pasoLabelActivo]}>Nueva contraseña</Text>
        </View>
      </View>

      {errores.general && (
        <View style={styles.errorBox}>
          <Text style={styles.errorBoxText}>{errores.general}</Text>
        </View>
      )}

      {paso === 1 && (
        <>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={[styles.input, errores.email && styles.inputError]}
            placeholder="tucorreo@email.com"
            placeholderTextColor={theme.colors.gray}
            value={email}
            onChangeText={(v) => { setEmail(v); setErrores({}); }}
            keyboardType="email-address"
            autoCapitalize="none"
            returnKeyType="done"
            onSubmitEditing={verificarEmail}
          />
          {errores.email && <Text style={styles.error}>{errores.email}</Text>}

          <TouchableOpacity style={[styles.btn, loading && styles.btnDisabled]} onPress={verificarEmail} disabled={loading}>
            {loading ? <ActivityIndicator color={theme.colors.background} /> : <Text style={styles.btnText}>CONTINUAR</Text>}
          </TouchableOpacity>
        </>
      )}

      {paso === 2 && (
        <>
          <Text style={styles.emailConfirmado}>📧 {email}</Text>

          <Text style={styles.label}>Nueva contraseña</Text>
          <TextInput
            ref={passwordRef}
            style={[styles.input, errores.passwordNueva && styles.inputError]}
            placeholder="••••••"
            placeholderTextColor={theme.colors.gray}
            value={passwordNueva}
            onChangeText={(v) => { setPasswordNueva(v); setErrores({}); }}
            secureTextEntry
            returnKeyType="next"
            onSubmitEditing={() => confirmarRef.current?.focus()}
            blurOnSubmit={false}
          />
          {errores.passwordNueva && <Text style={styles.error}>{errores.passwordNueva}</Text>}

          <Text style={styles.label}>Confirmar contraseña</Text>
          <TextInput
            ref={confirmarRef}
            style={[styles.input, errores.confirmar && styles.inputError]}
            placeholder="••••••"
            placeholderTextColor={theme.colors.gray}
            value={confirmar}
            onChangeText={(v) => { setConfirmar(v); setErrores({}); }}
            secureTextEntry
            returnKeyType="done"
            onSubmitEditing={handleRecuperar}
          />
          {errores.confirmar && <Text style={styles.error}>{errores.confirmar}</Text>}

          <TouchableOpacity style={[styles.btn, loading && styles.btnDisabled]} onPress={handleRecuperar} disabled={loading}>
            {loading ? <ActivityIndicator color={theme.colors.background} /> : <Text style={styles.btnText}>ACTUALIZAR CONTRASEÑA</Text>}
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setPaso(1)}>
            <Text style={styles.link}>← Cambiar email</Text>
          </TouchableOpacity>
        </>
      )}

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Volver al inicio de sesión</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: 'center', padding: 24, backgroundColor: theme.colors.background },
  header: { alignItems: 'center', marginBottom: 32 },
  logo: { fontSize: 48, marginBottom: 12 },
  title: { fontSize: 22, fontWeight: 'bold', color: theme.colors.gold, letterSpacing: 3, textAlign: 'center' },
  subtitle: { color: theme.colors.gray, fontSize: 14, marginTop: 8, textAlign: 'center' },
  pasos: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 32 },
  paso: { alignItems: 'center' },
  pasoActivo: {},
  pasoNum: { width: 32, height: 32, borderRadius: 16, backgroundColor: theme.colors.lightGray, color: theme.colors.gray, textAlign: 'center', lineHeight: 32, fontWeight: 'bold' },
  pasoNumActivo: { backgroundColor: theme.colors.gold, color: theme.colors.background },
  pasoLabel: { color: theme.colors.gray, fontSize: 11, marginTop: 4 },
  pasoLabelActivo: { color: theme.colors.gold },
  pasoDivider: { width: 60, height: 2, backgroundColor: theme.colors.lightGray, marginHorizontal: 8, marginBottom: 16 },
  pasoDividerActivo: { backgroundColor: theme.colors.gold },
  emailConfirmado: { color: theme.colors.gold, textAlign: 'center', marginBottom: 20, fontSize: 14 },
  label: { fontSize: 12, fontWeight: '600', marginBottom: 6, color: theme.colors.gray, letterSpacing: 1 },
  input: { borderWidth: 1, borderColor: theme.colors.lightGray, borderRadius: 8, padding: 14, marginBottom: 4, fontSize: 15, color: theme.colors.white, backgroundColor: theme.colors.card },
  inputError: { borderColor: theme.colors.error },
  error: { color: theme.colors.error, fontSize: 12, marginBottom: 12 },
  errorBox: { backgroundColor: '#3a1a1a', padding: 12, borderRadius: 8, marginBottom: 16, borderWidth: 1, borderColor: theme.colors.error },
  errorBoxText: { color: theme.colors.error, textAlign: 'center' },
  btn: { backgroundColor: theme.colors.gold, padding: 16, borderRadius: 8, alignItems: 'center', marginTop: 8, marginBottom: 16 },
  btnDisabled: { backgroundColor: theme.colors.lightGray },
  btnText: { color: theme.colors.background, fontSize: 14, fontWeight: 'bold', letterSpacing: 2 },
  link: { textAlign: 'center', color: theme.colors.gray, marginTop: 8 },
});

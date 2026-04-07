import React, { useEffect, useState, useRef } from 'react';
import { TouchableOpacity, Text, Alert, ActivityIndicator, View, Image, AppState } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme';
import { registrarPushToken } from '../services/notificaciones';
import { navigationRef } from '../services/api';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import RecuperarPasswordScreen from '../screens/RecuperarPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import BookingScreen from '../screens/BookingScreen';
import MisCitasScreen from '../screens/MisCitasScreen';
import AdminScreen from '../screens/AdminScreen';
import BarberosAdminScreen from '../screens/BarberosAdminScreen';
import BarberoPerfil from '../screens/BarberoPerfil';
import PerfilScreen from '../screens/PerfilScreen';
import ServiciosAdminScreen from '../screens/ServiciosAdminScreen';
import ConfiguracionScreen from '../screens/ConfiguracionScreen';
import EstadisticasScreen from '../screens/EstadisticasScreen';
import GestionAdminsScreen from '../screens/GestionAdminsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function LogoutTab() {
  return null;
}

function ClienteTabs({ navigation }: any) {
  const handleLogout = () => {
    Alert.alert('Cerrar sesión', '¿Seguro que deseas salir?', [
      { text: 'Cancelar' },
      { text: 'Salir', onPress: async () => {
        await AsyncStorage.clear();
        navigation.replace('Login');
      }}
    ]);
  };

  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: theme.colors.gold,
      tabBarInactiveTintColor: theme.colors.gray,
      tabBarStyle: { backgroundColor: theme.colors.card, borderTopColor: theme.colors.lightGray },
      headerShown: false
    }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Especialistas', tabBarIcon: ({ color, size }) => <Ionicons name="cut" color={color} size={size} /> }} />
      <Tab.Screen name="MisCitas" component={MisCitasScreen} options={{ title: 'Mis Reservas', tabBarIcon: ({ color, size }) => <Ionicons name="calendar" color={color} size={size} /> }} />
      <Tab.Screen name="Perfil" component={PerfilScreen} options={{ title: 'Perfil', tabBarIcon: ({ color, size }) => <Ionicons name="person" color={color} size={size} /> }} />
      <Tab.Screen
        name="Salir"
        component={LogoutTab}
        options={{
          title: 'Salir',
          tabBarButton: () => (
            <TouchableOpacity onPress={handleLogout} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingBottom: 4 }}>
              <Ionicons name="log-out-outline" size={22} color={theme.colors.error} />
              <Text style={{ fontSize: 10, color: theme.colors.error, fontWeight: 'bold', marginTop: 2 }}>Salir</Text>
            </TouchableOpacity>
          )
        }}
      />
    </Tab.Navigator>
  );
}

function AdminTabs({ navigation }: any) {
  const handleLogout = () => {
    Alert.alert('Cerrar sesión', '¿Seguro que deseas salir?', [
      { text: 'Cancelar' },
      { text: 'Salir', onPress: async () => {
        await AsyncStorage.clear();
        navigation.replace('Login');
      }}
    ]);
  };

  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: theme.colors.gold,
      tabBarInactiveTintColor: theme.colors.gray,
      tabBarStyle: { backgroundColor: theme.colors.card, borderTopColor: theme.colors.lightGray },
      headerShown: false
    }}>
      <Tab.Screen name="Admin" component={AdminScreen} options={{ title: 'Citas', tabBarIcon: ({ color, size }) => <Ionicons name="calendar" color={color} size={size} /> }} />
      <Tab.Screen name="Estadisticas" component={EstadisticasScreen} options={{ title: 'Stats', tabBarIcon: ({ color, size }) => <Ionicons name="bar-chart" color={color} size={size} /> }} />
      <Tab.Screen name="Barberos" component={BarberosAdminScreen} options={{ title: 'Especialistas', tabBarIcon: ({ color, size }) => <Ionicons name="cut" color={color} size={size} /> }} />
      <Tab.Screen name="Servicios" component={ServiciosAdminScreen} options={{ title: 'Servicios', tabBarIcon: ({ color, size }) => <Ionicons name="pricetag" color={color} size={size} /> }} />
      <Tab.Screen name="Configuracion" component={ConfiguracionScreen} options={{ title: 'Config', tabBarIcon: ({ color, size }) => <Ionicons name="settings" color={color} size={size} /> }} />
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Ver App', tabBarIcon: ({ color, size }) => <Ionicons name="eye" color={color} size={size} /> }} />
      <Tab.Screen name="Perfil" component={PerfilScreen} options={{ title: 'Perfil', tabBarIcon: ({ color, size }) => <Ionicons name="person" color={color} size={size} /> }} />
      <Tab.Screen
        name="Salir"
        component={LogoutTab}
        options={{
          title: 'Salir',
          tabBarButton: () => (
            <TouchableOpacity onPress={handleLogout} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingBottom: 4 }}>
              <Ionicons name="log-out-outline" size={22} color={theme.colors.error} />
              <Text style={{ fontSize: 10, color: theme.colors.error, fontWeight: 'bold', marginTop: 2 }}>Salir</Text>
            </TouchableOpacity>
          )
        }}
      />
    </Tab.Navigator>
  );
}

const INACTIVIDAD_MS = 5 * 60 * 1000; // 5 minutos

export default function AppNavigator() {
  const [loading, setLoading] = useState(true);
  const [autenticado, setAutenticado] = useState(false);
  const [rol, setRol] = useState<string | null>(null);
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const iniciar = async () => {
      const [tokenEntry, usuarioEntry, tsEntry] = await AsyncStorage.multiGet(['token', 'usuario', 'ultimaActividad']);
      const token = tokenEntry[1];
      const usuario = usuarioEntry[1] ? JSON.parse(usuarioEntry[1]) : null;
      const ts = tsEntry[1];

      // Si hay timestamp guardado significa que la app fue cerrada forzadamente
      if (token && ts) {
        await AsyncStorage.clear();
        setAutenticado(false);
        setRol(null);
        setLoading(false);
        return;
      }

      setAutenticado(!!token);
      setRol(usuario?.rol ?? 'cliente');
      if (token) registrarPushToken();
      setLoading(false);
    };
    iniciar();
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', async (nextState) => {
      if (appState.current === 'active' && nextState === 'background') {
        await AsyncStorage.setItem('ultimaActividad', Date.now().toString());
      }
      if (appState.current === 'background' && nextState === 'active') {
        const token = await AsyncStorage.getItem('token');
        const ts = await AsyncStorage.getItem('ultimaActividad');
        if (token && ts) {
          if (Date.now() - Number(ts) >= INACTIVIDAD_MS) {
            await AsyncStorage.clear();
            if (navigationRef.isReady()) navigationRef.reset({ index: 0, routes: [{ name: 'Login' as never }] });
            return;
          }
          // Volvió dentro del tiempo permitido, limpiar timestamp
          await AsyncStorage.removeItem('ultimaActividad');
        }
      }
      appState.current = nextState;
    });
    return () => subscription.remove();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.background }}>
        <Image source={require('../../assets/icon.png')} style={{ width: 130, height: 130, borderRadius: 28, marginBottom: 16 }} />
        <ActivityIndicator size="large" color={theme.colors.gold} />
      </View>
    );
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={autenticado ? 'Main' : 'Login'}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="RecuperarPassword" component={RecuperarPasswordScreen} options={{ headerShown: true, title: 'Recuperar Contraseña', headerStyle: { backgroundColor: theme.colors.card }, headerTintColor: theme.colors.gold }} />
        <Stack.Screen name="Main">
          {({ navigation, route }: any) => {
            const rolFinal = route.params?.rol ?? rol;
            return rolFinal === 'admin'
              ? <AdminTabs navigation={navigation} />
              : <ClienteTabs navigation={navigation} />;
          }}
        </Stack.Screen>
        <Stack.Screen name="Booking" component={BookingScreen} options={{ headerShown: true, title: 'Nueva Reserva', headerStyle: { backgroundColor: theme.colors.card }, headerTintColor: theme.colors.gold }} />
        <Stack.Screen name="BarberoPerfil" component={BarberoPerfil} options={{ headerShown: true, title: 'Perfil Especialista', headerStyle: { backgroundColor: theme.colors.card }, headerTintColor: theme.colors.gold }} />
        <Stack.Screen name="GestionAdmins" component={GestionAdminsScreen} options={{ headerShown: true, title: 'Gestión de Admins', headerStyle: { backgroundColor: theme.colors.card }, headerTintColor: theme.colors.gold }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

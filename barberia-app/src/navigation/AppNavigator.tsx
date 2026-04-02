import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text, Alert, ActivityIndicator, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { theme } from '../theme';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import BookingScreen from '../screens/BookingScreen';
import MisCitasScreen from '../screens/MisCitasScreen';
import AdminScreen from '../screens/AdminScreen';
import BarberosAdminScreen from '../screens/BarberosAdminScreen';
import BarberoPerfil from '../screens/BarberoPerfil';
import PerfilScreen from '../screens/PerfilScreen';
import ServiciosAdminScreen from '../screens/ServiciosAdminScreen';
import ConfiguracionScreen from '../screens/ConfiguracionScreen';

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
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Barberos' }} />
      <Tab.Screen name="MisCitas" component={MisCitasScreen} options={{ title: 'Mis Citas' }} />
      <Tab.Screen name="Perfil" component={PerfilScreen} options={{ title: 'Perfil' }} />
      <Tab.Screen
        name="Salir"
        component={LogoutTab}
        options={{
          title: 'Salir',
          tabBarButton: () => (
            <TouchableOpacity onPress={handleLogout} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingBottom: 4 }}>
              <Text style={{ fontSize: 20, marginBottom: 2 }}>🚪</Text>
              <Text style={{ fontSize: 10, color: theme.colors.error, fontWeight: 'bold' }}>Salir</Text>
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
      <Tab.Screen name="Admin" component={AdminScreen} options={{ title: 'Citas' }} />
      <Tab.Screen name="Barberos" component={BarberosAdminScreen} options={{ title: 'Barberos' }} />
      <Tab.Screen name="Servicios" component={ServiciosAdminScreen} options={{ title: 'Servicios' }} />
      <Tab.Screen name="Configuracion" component={ConfiguracionScreen} options={{ title: 'Config' }} />
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Ver App' }} />
      <Tab.Screen name="Perfil" component={PerfilScreen} options={{ title: 'Perfil' }} />
      <Tab.Screen
        name="Salir"
        component={LogoutTab}
        options={{
          title: 'Salir',
          tabBarButton: () => (
            <TouchableOpacity onPress={handleLogout} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingBottom: 4 }}>
              <Text style={{ fontSize: 20, marginBottom: 2 }}>🚪</Text>
              <Text style={{ fontSize: 10, color: theme.colors.error, fontWeight: 'bold' }}>Salir</Text>
            </TouchableOpacity>
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  const [loading, setLoading] = useState(true);
  const [autenticado, setAutenticado] = useState(false);
  const [rol, setRol] = useState<string | null>(null);

  useEffect(() => {
    AsyncStorage.multiGet(['token', 'usuario']).then(([tokenEntry, usuarioEntry]) => {
      const token = tokenEntry[1];
      const usuario = usuarioEntry[1] ? JSON.parse(usuarioEntry[1]) : null;
      setAutenticado(!!token);
      setRol(usuario?.rol ?? 'cliente');
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.background }}>
        <Text style={{ fontSize: 48, marginBottom: 16 }}>✂️</Text>
        <ActivityIndicator size="large" color={theme.colors.gold} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={autenticado ? 'Main' : 'Login'}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Main">
          {({ navigation, route }: any) => {
            const rolFinal = route.params?.rol ?? rol;
            return rolFinal === 'admin'
              ? <AdminTabs navigation={navigation} />
              : <ClienteTabs navigation={navigation} />;
          }}
        </Stack.Screen>
        <Stack.Screen name="Booking" component={BookingScreen} options={{ headerShown: true, title: 'Nueva Reserva', headerStyle: { backgroundColor: theme.colors.card }, headerTintColor: theme.colors.gold }} />
        <Stack.Screen name="BarberoPerfil" component={BarberoPerfil} options={{ headerShown: true, title: 'Perfil Barbero', headerStyle: { backgroundColor: theme.colors.card }, headerTintColor: theme.colors.gold }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

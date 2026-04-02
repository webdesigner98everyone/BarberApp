import React from 'react';
import { TouchableOpacity, Text, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import BookingScreen from '../screens/BookingScreen';
import MisCitasScreen from '../screens/MisCitasScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function LogoutTab() {
  return null;
}

function MainTabs({ navigation }: any) {
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
    <Tab.Navigator screenOptions={{ tabBarActiveTintColor: '#1a1a1a' }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Barberos' }} />
      <Tab.Screen name="MisCitas" component={MisCitasScreen} options={{ title: 'Mis Citas' }} />
      <Tab.Screen
        name="Salir"
        component={LogoutTab}
        options={{
          title: 'Salir',
          tabBarButton: () => (
            <TouchableOpacity onPress={handleLogout} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingBottom: 4 }}>
              <Text style={{ fontSize: 20, marginBottom: 2 }}></Text>
              <Text style={{ fontSize: 10, color: '#ef4444', fontWeight: 'bold' }}>Salir</Text>
            </TouchableOpacity>
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Main" component={MainTabs} />
        <Stack.Screen name="Booking" component={BookingScreen} options={{ headerShown: true, title: 'Nueva Reserva' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

const HEADERS = { 'ngrok-skip-browser-warning': 'true' };

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  headers: HEADERS
});

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      await AsyncStorage.clear();
      if (navigationRef.isReady()) navigationRef.reset({ index: 0, routes: [{ name: 'Login' as never }] });
    }
    return Promise.reject(error);
  }
);

export const apiPublica = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  headers: HEADERS
});

export default api;

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

export const apiPublica = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  headers: HEADERS
});

export default api;

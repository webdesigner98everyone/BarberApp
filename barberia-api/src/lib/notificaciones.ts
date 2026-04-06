import axios from 'axios';

export const enviarNotificacion = async (pushToken: string, titulo: string, mensaje: string, data?: any) => {
  if (!pushToken || !pushToken.startsWith('ExponentPushToken')) return;

  try {
    const res = await axios.post('https://exp.host/--/api/v2/push/send', {
      to: pushToken,
      title: titulo,
      body: mensaje,
      data: data ?? {},
      sound: 'default',
      priority: 'high'
    });
    console.log('Respuesta Expo push:', JSON.stringify(res.data));
  } catch (error) {
    console.error('Error enviando notificación:', error);
  }
};

export const enviarNotificacionesMultiples = async (tokens: string[], titulo: string, mensaje: string, data?: any) => {
  const tokensValidos = tokens.filter((t) => t && t.startsWith('ExponentPushToken'));
  if (tokensValidos.length === 0) return;

  try {
    const res = await axios.post('https://exp.host/--/api/v2/push/send', tokensValidos.map((token) => ({
      to: token,
      title: titulo,
      body: mensaje,
      data: data ?? {},
      sound: 'default',
      priority: 'high'
    })));
    console.log('Respuesta Expo push múltiple:', JSON.stringify(res.data));
  } catch (error) {
    console.error('Error enviando notificaciones:', error);
  }
};

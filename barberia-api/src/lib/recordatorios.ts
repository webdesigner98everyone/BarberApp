import cron from 'node-cron';
import prisma from './prisma';
import { enviarNotificacion } from './notificaciones';

export const iniciarRecordatorios = () => {
  cron.schedule('* * * * *', async () => {
    const ahora = new Date();
    const en15 = new Date(ahora.getTime() + 15 * 60 * 1000);
    const en5 = new Date(ahora.getTime() + 5 * 60 * 1000);
    const margen = 60 * 1000; // 1 minuto de margen

    const reservas = await prisma.reserva.findMany({
      where: {
        estado: 'pendiente',
        OR: [
          { notif15: false, fecha: { gte: new Date(en15.getTime() - margen), lte: new Date(en15.getTime() + margen) } },
          { notif5: false, fecha: { gte: new Date(en5.getTime() - margen), lte: new Date(en5.getTime() + margen) } },
        ]
      },
      include: { usuario: true, barbero: true, servicio: true }
    });

    for (const reserva of reservas) {
      if (!reserva.usuario.pushToken) continue;

      const diff = reserva.fecha.getTime() - ahora.getTime();
      const minutos = Math.round(diff / 60000);

      if (!reserva.notif15 && minutos >= 13 && minutos <= 17) {
        await enviarNotificacion(
          reserva.usuario.pushToken,
          '⏰ Tu cita es pronto',
          `En 15 minutos tienes cita con ${reserva.barbero.nombre} - ${reserva.servicio.nombre}`
        );
        await prisma.reserva.update({ where: { id: reserva.id }, data: { notif15: true } });
      }

      if (!reserva.notif5 && minutos >= 3 && minutos <= 7) {
        await enviarNotificacion(
          reserva.usuario.pushToken,
          '🔔 ¡Tu cita es en 5 minutos!',
          `Ya casi es tu turno con ${reserva.barbero.nombre} - ${reserva.servicio.nombre}`
        );
        await prisma.reserva.update({ where: { id: reserva.id }, data: { notif5: true } });
      }
    }
  });

  console.log('Recordatorios de citas activos ✅');
};

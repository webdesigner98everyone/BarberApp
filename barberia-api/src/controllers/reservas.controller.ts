import { Request, Response } from 'express';
import prisma from '../lib/prisma';
import { enviarNotificacion, enviarNotificacionesMultiples } from '../lib/notificaciones';

export const getReservas = async (req: Request, res: Response) => {
  const usuarioId = (req as any).usuario.id;
  const reservas = await prisma.reserva.findMany({
    where: { usuarioId },
    include: { barbero: true, servicio: true }
  });
  res.json(reservas);
};

export const createReserva = async (req: Request, res: Response) => {
  const usuario = (req as any).usuario;
  if (usuario.rol === 'admin') return res.status(403).json({ error: 'Los administradores no pueden crear reservas' });

  const { barberoId, servicioId, fecha } = req.body;
  const reserva = await prisma.reserva.create({
    data: { usuarioId: usuario.id, barberoId, servicioId, fecha: new Date(fecha), barberiaId: Number(usuario.barberiaId) },
    include: { barbero: true, servicio: true, usuario: true }
  });

  // Notificar a todos los admins de la barbería
  const admins = await prisma.usuario.findMany({
    where: { barberiaId: Number(usuario.barberiaId), rol: 'admin', pushToken: { not: null } }
  });
  console.log('Admins encontrados:', admins.length);
  console.log('Tokens:', admins.map((a) => a.pushToken));
  const tokens = admins.map((a) => a.pushToken!).filter(Boolean);
  await enviarNotificacionesMultiples(
    tokens,
    '📅 Nueva reserva',
    `${reserva.usuario.nombre} reservó con ${reserva.barbero.nombre} - ${reserva.servicio.nombre}`
  );
  console.log('Notificación enviada a', tokens.length, 'admins');

  res.json(reserva);
};

export const cancelarReserva = async (req: Request, res: Response) => {
  const { id } = req.params;
  const reserva = await prisma.reserva.update({
    where: { id: Number(id) },
    data: { estado: 'cancelada' },
    include: { usuario: true, barbero: true, servicio: true }
  });

  if (reserva.usuario.pushToken) {
    await enviarNotificacion(
      reserva.usuario.pushToken,
      '❌ Cita cancelada',
      `Tu cita con ${reserva.barbero.nombre} - ${reserva.servicio.nombre} fue cancelada`
    );
  }

  res.json(reserva);
};

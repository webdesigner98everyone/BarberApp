import { Request, Response } from 'express';
import prisma from '../lib/prisma';

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
    include: { barbero: true, servicio: true }
  });
  res.json(reserva);
};

export const cancelarReserva = async (req: Request, res: Response) => {
  const { id } = req.params;
  const reserva = await prisma.reserva.update({
    where: { id: Number(id) },
    data: { estado: 'cancelada' }
  });
  res.json(reserva);
};

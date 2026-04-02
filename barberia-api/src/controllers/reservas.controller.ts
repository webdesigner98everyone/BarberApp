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
  const usuarioId = (req as any).usuario.id;
  const { barberoId, servicioId, fecha } = req.body;
  const reserva = await prisma.reserva.create({
    data: { usuarioId, barberoId, servicioId, fecha: new Date(fecha) },
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

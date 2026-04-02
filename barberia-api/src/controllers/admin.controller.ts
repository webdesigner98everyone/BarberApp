import { Request, Response } from 'express';
import prisma from '../lib/prisma';

export const getCumpleanosHoy = async (_req: Request, res: Response) => {
  const hoy = new Date();
  const mes = hoy.getMonth() + 1;
  const dia = hoy.getDate();

  const usuarios = await prisma.usuario.findMany({
    where: {
      fecha_nacimiento: { not: null },
      rol: 'cliente'
    },
    select: { id: true, nombre: true, email: true, telefono: true, fecha_nacimiento: true }
  });

  const cumpleaneros = usuarios.filter((u) => {
    if (!u.fecha_nacimiento) return false;
    const fn = new Date(u.fecha_nacimiento);
    return fn.getMonth() + 1 === mes && fn.getDate() === dia;
  });

  res.json(cumpleaneros);
};

export const getReservasHoy = async (_req: Request, res: Response) => {
  const hoy = new Date();
  const inicio = new Date(hoy);
  inicio.setHours(0, 0, 0, 0);
  const fin = new Date(hoy);
  fin.setHours(23, 59, 59, 999);

  const reservas = await prisma.reserva.findMany({
    where: { fecha: { gte: inicio, lte: fin } },
    include: { usuario: { select: { nombre: true } }, barbero: true, servicio: true },
    orderBy: { fecha: 'asc' }
  });

  res.json(reservas);
};

export const getTodasReservas = async (_req: Request, res: Response) => {
  const reservas = await prisma.reserva.findMany({
    include: { usuario: { select: { nombre: true } }, barbero: true, servicio: true },
    orderBy: { fecha: 'desc' },
    take: 50
  });

  res.json(reservas);
};

export const completarReserva = async (req: Request, res: Response) => {
  const { id } = req.params;
  const reserva = await prisma.reserva.update({
    where: { id: Number(id) },
    data: { estado: 'completada' }
  });
  res.json(reserva);
};

export const cancelarReservaAdmin = async (req: Request, res: Response) => {
  const { id } = req.params;
  const reserva = await prisma.reserva.update({
    where: { id: Number(id) },
    data: { estado: 'cancelada' }
  });
  res.json(reserva);
};

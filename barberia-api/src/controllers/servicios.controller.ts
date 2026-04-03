import { Request, Response } from 'express';
import prisma from '../lib/prisma';

export const getServicios = async (req: Request, res: Response) => {
  const barberiaId = (req as any).usuario?.barberiaId;
  const servicios = await prisma.servicio.findMany({
    where: { barberiaId: Number(barberiaId), activo: true }
  });
  res.json(servicios);
};

export const createServicio = async (req: Request, res: Response) => {
  const barberiaId = (req as any).usuario?.barberiaId;
  const { nombre, precio, duracion_minutos, categoria } = req.body;
  const servicio = await prisma.servicio.create({
    data: { nombre, precio, duracion_minutos, categoria: categoria ?? 'General', barberiaId: Number(barberiaId) }
  });
  res.json(servicio);
};

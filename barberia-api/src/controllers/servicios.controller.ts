import { Request, Response } from 'express';
import prisma from '../lib/prisma';

export const getServicios = async (_req: Request, res: Response) => {
  const servicios = await prisma.servicio.findMany();
  res.json(servicios);
};

export const createServicio = async (req: Request, res: Response) => {
  const { nombre, precio, duracion_minutos } = req.body;
  const servicio = await prisma.servicio.create({
    data: { nombre, precio, duracion_minutos }
  });
  res.json(servicio);
};

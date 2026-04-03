import { Request, Response } from 'express';
import prisma from '../lib/prisma';

export const getBarberos = async (req: Request, res: Response) => {
  const barberiaId = (req as any).usuario?.barberiaId;
  const barberos = await prisma.barbero.findMany({ where: { barberiaId: Number(barberiaId) } });
  res.json(barberos);
};

export const createBarbero = async (req: Request, res: Response) => {
  const barberiaId = (req as any).usuario?.barberiaId;
  const { nombre, especialidad, foto, categorias } = req.body;
  const barbero = await prisma.barbero.create({
    data: { nombre, especialidad, foto, categorias: categorias ?? 'Cabello', barberiaId: Number(barberiaId) }
  });
  res.json(barbero);
};

import { Request, Response } from 'express';
import prisma from '../lib/prisma';

export const getBarberos = async (_req: Request, res: Response) => {
  const barberos = await prisma.barbero.findMany();
  res.json(barberos);
};

export const createBarbero = async (req: Request, res: Response) => {
  const { nombre, especialidad, foto } = req.body;
  const barbero = await prisma.barbero.create({
    data: { nombre, especialidad, foto }
  });
  res.json(barbero);
};

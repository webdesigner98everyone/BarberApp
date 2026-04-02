import { Request, Response } from 'express';
import prisma from '../lib/prisma';

export const getConfiguracion = async (_req: Request, res: Response) => {
  let config = await prisma.configuracion.findFirst();
  if (!config) {
    config = await prisma.configuracion.create({
      data: { nombre_barberia: 'The Barber', moneda: 'COP', simbolo: '$', separador_miles: '.', separador_decimal: ',' }
    });
  }
  res.json(config);
};

export const updateConfiguracion = async (req: Request, res: Response) => {
  const { nombre_barberia, moneda, simbolo, separador_miles, separador_decimal } = req.body;
  let config = await prisma.configuracion.findFirst();
  if (!config) {
    config = await prisma.configuracion.create({
      data: { nombre_barberia, moneda, simbolo, separador_miles, separador_decimal }
    });
  } else {
    config = await prisma.configuracion.update({
      where: { id: config.id },
      data: { nombre_barberia, moneda, simbolo, separador_miles, separador_decimal }
    });
  }
  res.json(config);
};

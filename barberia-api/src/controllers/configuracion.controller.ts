import { Request, Response } from 'express';
import prisma from '../lib/prisma';

export const getConfiguracion = async (req: Request, res: Response) => {
  const barberiaId = (req as any).usuario?.barberiaId;
  let config = await prisma.configuracion.findFirst({ where: { barberiaId: Number(barberiaId) } });
  if (!config) {
    config = await prisma.configuracion.create({
      data: { nombre_barberia: 'The Barber', moneda: 'COP', simbolo: '$', separador_miles: '.', separador_decimal: ',', barberiaId: Number(barberiaId) }
    });
  }
  res.json(config);
};

export const updateConfiguracion = async (req: Request, res: Response) => {
  const barberiaId = (req as any).usuario?.barberiaId;
  const { nombre_barberia, duracion_turno, dias_descanso, mensaje_bienvenida } = req.body;
  let config = await prisma.configuracion.findFirst({ where: { barberiaId: Number(barberiaId) } });
  if (!config) {
    config = await prisma.configuracion.create({
      data: { nombre_barberia, moneda: 'COP', simbolo: '$', separador_miles: '.', separador_decimal: ',', duracion_turno, dias_descanso, mensaje_bienvenida, barberiaId: Number(barberiaId) }
    });
  } else {
    config = await prisma.configuracion.update({
      where: { id: config.id },
      data: { nombre_barberia, duracion_turno, dias_descanso, mensaje_bienvenida }
    });
  }
  res.json(config);
};

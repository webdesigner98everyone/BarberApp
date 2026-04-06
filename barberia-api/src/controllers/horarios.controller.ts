import { Request, Response } from 'express';
import prisma from '../lib/prisma';

export const getHorariosDisponibles = async (req: Request, res: Response) => {
  const { barberoId, fecha } = req.query;

  if (!barberoId || !fecha) return res.status(400).json({ error: 'barberoId y fecha son requeridos' });

  const fechaDate = new Date(fecha as string);
  const diaSemana = fechaDate.getDay();

  const horario = await prisma.horario.findFirst({
    where: { barberoId: Number(barberoId), dia_semana: diaSemana }
  });

  if (!horario) return res.json({ slots: [] });

  const slots: string[] = [];
  const [hIni, mIni] = horario.hora_inicio.split(':').map(Number);
  const [hFin, mFin] = horario.hora_fin.split(':').map(Number);

  let current = hIni * 60 + mIni;
  const end = hFin * 60 + mFin;

  while (current < end) {
    const h = Math.floor(current / 60).toString().padStart(2, '0');
    const m = (current % 60).toString().padStart(2, '0');
    slots.push(`${h}:${m}`);
    current += 30;
  }

  const inicioDia = new Date(fechaDate);
  inicioDia.setHours(0, 0, 0, 0);
  const finDia = new Date(fechaDate);
  finDia.setHours(23, 59, 59, 999);

  const reservas = await prisma.reserva.findMany({
    where: { barberoId: Number(barberoId), fecha: { gte: inicioDia, lte: finDia }, estado: 'pendiente' }
  });

  const ocupados = reservas.map((r) => {
    const f = new Date(r.fecha);
    return `${f.getHours().toString().padStart(2, '0')}:${f.getMinutes().toString().padStart(2, '0')}`;
  });

  const disponibles = slots.map((slot) => ({ hora: slot, disponible: !ocupados.includes(slot) }));
  res.json({ slots: disponibles });
};

export const seedHorarios = async (_req: Request, res: Response) => {
  const barberos = await prisma.barbero.findMany();
  for (const barbero of barberos) {
    for (let dia = 1; dia <= 6; dia++) {
      await prisma.horario.upsert({
        where: { barberoId_dia_semana: { barberoId: barbero.id, dia_semana: dia } },
        update: {},
        create: { barberoId: barbero.id, dia_semana: dia, hora_inicio: '09:00', hora_fin: '18:00', barberiaId: barbero.barberiaId }
      });
    }
  }
  res.json({ message: 'Horarios creados ✅' });
};

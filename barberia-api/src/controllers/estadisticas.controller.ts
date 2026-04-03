import { Request, Response } from 'express';
import prisma from '../lib/prisma';

export const getEstadisticas = async (req: Request, res: Response) => {
  const barberiaId = Number((req as any).usuario.barberiaId);
  const ahora = new Date();
  const inicioMes = new Date(ahora.getFullYear(), ahora.getMonth(), 1);
  const finMes = new Date(ahora.getFullYear(), ahora.getMonth() + 1, 0, 23, 59, 59);

  const [totalMes, completadas, canceladas, pendientes] = await Promise.all([
    prisma.reserva.count({ where: { barberiaId, fecha: { gte: inicioMes, lte: finMes } } }),
    prisma.reserva.count({ where: { barberiaId, fecha: { gte: inicioMes, lte: finMes }, estado: 'completada' } }),
    prisma.reserva.count({ where: { barberiaId, fecha: { gte: inicioMes, lte: finMes }, estado: 'cancelada' } }),
    prisma.reserva.count({ where: { barberiaId, fecha: { gte: inicioMes, lte: finMes }, estado: 'pendiente' } }),
  ]);

  const reservasCompletadas = await prisma.reserva.findMany({
    where: { barberiaId, fecha: { gte: inicioMes, lte: finMes }, estado: 'completada' },
    include: { servicio: true }
  });
  const ingresosMes = reservasCompletadas.reduce((acc, r) => acc + r.servicio.precio, 0);

  const topEspecialistas = await prisma.reserva.groupBy({
    by: ['barberoId'],
    where: { barberiaId, fecha: { gte: inicioMes, lte: finMes } },
    _count: { id: true },
    orderBy: { _count: { id: 'desc' } },
    take: 5
  });

  const especialistasConNombre = await Promise.all(
    topEspecialistas.map(async (e) => {
      const barbero = await prisma.barbero.findUnique({ where: { id: e.barberoId } });
      return { nombre: barbero?.nombre ?? 'Desconocido', total: e._count.id };
    })
  );

  const topServicios = await prisma.reserva.groupBy({
    by: ['servicioId'],
    where: { barberiaId, fecha: { gte: inicioMes, lte: finMes } },
    _count: { id: true },
    orderBy: { _count: { id: 'desc' } },
    take: 5
  });

  const serviciosConNombre = await Promise.all(
    topServicios.map(async (s) => {
      const servicio = await prisma.servicio.findUnique({ where: { id: s.servicioId } });
      return { nombre: servicio?.nombre ?? 'Desconocido', total: s._count.id };
    })
  );

  const todasReservasMes = await prisma.reserva.findMany({
    where: { barberiaId, fecha: { gte: inicioMes, lte: finMes } }
  });

  const DIAS = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  const citasPorDia = DIAS.map((dia, index) => ({
    dia,
    total: todasReservasMes.filter((r) => new Date(r.fecha).getDay() === index).length
  }));

  res.json({ resumen: { totalMes, completadas, canceladas, pendientes, ingresosMes }, topEspecialistas: especialistasConNombre, topServicios: serviciosConNombre, citasPorDia });
};

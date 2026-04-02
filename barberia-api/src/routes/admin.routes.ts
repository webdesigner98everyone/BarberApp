import { Router } from 'express';
import { getReservasHoy, getTodasReservas, completarReserva, cancelarReservaAdmin, getCumpleanosHoy } from '../controllers/admin.controller';
import { authMiddleware } from '../middlewares/auth.middleware';
import { adminMiddleware } from '../middlewares/admin.middleware';
import { getBarberos, createBarbero } from '../controllers/barberos.controller';

const router = Router();

router.use(authMiddleware);
router.use(adminMiddleware);

router.get('/reservas/hoy', getReservasHoy);
router.get('/reservas', getTodasReservas);
router.patch('/reservas/:id/completar', completarReserva);
router.patch('/reservas/:id/cancelar', cancelarReservaAdmin);
router.get('/cumpleanos', getCumpleanosHoy);
router.get('/barberos', getBarberos);
router.post('/barberos', createBarbero);
router.put('/barberos/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, especialidad, foto } = req.body;
  const barbero = await (await import('../lib/prisma')).default.barbero.update({
    where: { id: Number(id) },
    data: { nombre, especialidad, foto }
  });
  res.json(barbero);
});
router.delete('/barberos/:id', async (req, res) => {
  const { id } = req.params;
  const prisma = (await import('../lib/prisma')).default;
  const pendientes = await prisma.reserva.count({ where: { barberoId: Number(id), estado: 'pendiente' } });
  if (pendientes > 0) return res.status(400).json({ error: `Este barbero tiene ${pendientes} cita(s) pendiente(s). Cancélalas primero antes de eliminarlo.` });
  await prisma.reserva.deleteMany({ where: { barberoId: Number(id) } });
  await prisma.horario.deleteMany({ where: { barberoId: Number(id) } });
  await prisma.barbero.delete({ where: { id: Number(id) } });
  res.json({ message: 'Barbero eliminado' });
});
router.get('/barberos/:id/horarios', async (req, res) => {
  const { id } = req.params;
  const prisma = (await import('../lib/prisma')).default;
  const horarios = await prisma.horario.findMany({ where: { barberoId: Number(id) } });
  res.json(horarios);
});
router.post('/barberos/:id/horarios', async (req, res) => {
  const { id } = req.params;
  const { horarios } = req.body;
  const prisma = (await import('../lib/prisma')).default;
  for (const h of horarios) {
    await prisma.horario.upsert({
      where: { barberoId_dia_semana: { barberoId: Number(id), dia_semana: h.dia_semana } },
      update: { hora_inicio: h.hora_inicio, hora_fin: h.hora_fin },
      create: { barberoId: Number(id), dia_semana: h.dia_semana, hora_inicio: h.hora_inicio, hora_fin: h.hora_fin }
    });
  }
  await prisma.horario.deleteMany({
    where: {
      barberoId: Number(id),
      dia_semana: { notIn: horarios.map((h: any) => h.dia_semana) }
    }
  });
  res.json({ message: 'Horarios guardados ✅' });
});

export default router;

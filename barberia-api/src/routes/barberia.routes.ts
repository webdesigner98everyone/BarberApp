import { Router } from 'express';
import { getBarberos, createBarbero } from '../controllers/barberos.controller';
import { getHorariosDisponibles, seedHorarios } from '../controllers/horarios.controller';
import { getConfiguracion } from '../controllers/configuracion.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();

router.use(authMiddleware);

router.get('/barberos', getBarberos);
router.post('/barberos', createBarbero);
router.get('/barberos/:id/servicios', async (req, res) => {
  const { id } = req.params;
  const prisma = (await import('../lib/prisma')).default;
  const barbero = await prisma.barbero.findUnique({ where: { id: Number(id) } });
  if (!barbero) return res.status(404).json({ error: 'Especialista no encontrado' });
  const categorias = barbero.categorias.split(',').map((c: string) => c.trim());
  const servicios = await prisma.servicioActivo.findMany({
    where: { activo: true, categoria: { in: categorias }, barberiaId: barbero.barberiaId }
  });
  res.json(servicios);
});
router.get('/servicios', async (req, res) => {
  const barberiaId = (req as any).usuario?.barberiaId;
  const prisma = (await import('../lib/prisma')).default;
  const servicios = await prisma.servicioActivo.findMany({
    where: { barberiaId: Number(barberiaId), activo: true }
  });
  res.json(servicios);
});
router.get('/horarios/disponibles', getHorariosDisponibles);
router.post('/horarios/seed', seedHorarios);
router.get('/configuracion', getConfiguracion);

export default router;

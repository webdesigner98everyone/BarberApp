import { Router } from 'express';
import { getReservasHoy, getTodasReservas, completarReserva, cancelarReservaAdmin, getCumpleanosHoy } from '../controllers/admin.controller';
import { authMiddleware } from '../middlewares/auth.middleware';
import { adminMiddleware } from '../middlewares/admin.middleware';
import { getBarberos, createBarbero } from '../controllers/barberos.controller';
import { getServicios, createServicio } from '../controllers/servicios.controller';
import { getConfiguracion, updateConfiguracion } from '../controllers/configuracion.controller';
import { getEstadisticas } from '../controllers/estadisticas.controller';

const router = Router();
router.use(authMiddleware);
router.use(adminMiddleware);

// Reservas
router.get('/reservas/hoy', getReservasHoy);
router.get('/reservas', getTodasReservas);
router.patch('/reservas/:id/completar', completarReserva);
router.patch('/reservas/:id/cancelar', cancelarReservaAdmin);
router.get('/cumpleanos', getCumpleanosHoy);

// Estadísticas
router.get('/estadisticas', getEstadisticas);

// Configuración
router.get('/configuracion', getConfiguracion);
router.put('/configuracion', updateConfiguracion);

// Admins
router.get('/admins', async (req, res) => {
  const barberiaId = (req as any).usuario.barberiaId;
  const prisma = (await import('../lib/prisma')).default;
  const admins = await prisma.usuario.findMany({
    where: { rol: 'admin', barberiaId: Number(barberiaId) },
    select: { id: true, nombre: true, email: true, createdAt: true }
  });
  res.json(admins);
});
router.post('/admins', async (req, res) => {
  const { usuarioId } = req.body;
  const prisma = (await import('../lib/prisma')).default;
  const usuario = await prisma.usuario.update({
    where: { id: Number(usuarioId) },
    data: { rol: 'admin' },
    select: { id: true, nombre: true, email: true }
  });
  res.json(usuario);
});
router.delete('/admins/:id', async (req, res) => {
  const { id } = req.params;
  const adminId = (req as any).usuario.id;
  if (Number(id) === adminId) return res.status(400).json({ error: 'No puedes eliminarte a ti mismo como admin' });
  const prisma = (await import('../lib/prisma')).default;
  await prisma.usuario.update({ where: { id: Number(id) }, data: { rol: 'cliente' } });
  res.json({ message: 'Admin removido' });
});
router.get('/usuarios/buscar', async (req, res) => {
  const { q } = req.query;
  const barberiaId = (req as any).usuario.barberiaId;
  const prisma = (await import('../lib/prisma')).default;
  const usuarios = await prisma.usuario.findMany({
    where: { rol: 'cliente', barberiaId: Number(barberiaId), OR: [{ nombre: { contains: q as string } }, { email: { contains: q as string } }] },
    select: { id: true, nombre: true, email: true },
    take: 10
  });
  res.json(usuarios);
});

// Barberos
router.get('/barberos', getBarberos);
router.post('/barberos', createBarbero);
router.put('/barberos/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, especialidad, foto, categorias } = req.body;
  const prisma = (await import('../lib/prisma')).default;
  const barbero = await prisma.barbero.update({ where: { id: Number(id) }, data: { nombre, especialidad, foto, categorias } });
  res.json(barbero);
});
router.delete('/barberos/:id', async (req, res) => {
  const { id } = req.params;
  const prisma = (await import('../lib/prisma')).default;
  const pendientes = await prisma.reserva.count({ where: { barberoId: Number(id), estado: 'pendiente' } });
  if (pendientes > 0) return res.status(400).json({ error: `Este especialista tiene ${pendientes} cita(s) pendiente(s). Cancélalas primero.` });
  await prisma.reserva.deleteMany({ where: { barberoId: Number(id) } });
  await prisma.horario.deleteMany({ where: { barberoId: Number(id) } });
  await prisma.barbero.delete({ where: { id: Number(id) } });
  res.json({ message: 'Especialista eliminado' });
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
  const barberiaId = (req as any).usuario.barberiaId;
  const prisma = (await import('../lib/prisma')).default;
  for (const h of horarios) {
    await prisma.horario.upsert({
      where: { barberoId_dia_semana: { barberoId: Number(id), dia_semana: h.dia_semana } },
      update: { hora_inicio: h.hora_inicio, hora_fin: h.hora_fin },
      create: { barberoId: Number(id), dia_semana: h.dia_semana, hora_inicio: h.hora_inicio, hora_fin: h.hora_fin, barberiaId: Number(barberiaId) }
    });
  }
  await prisma.horario.deleteMany({ where: { barberoId: Number(id), dia_semana: { notIn: horarios.map((h: any) => h.dia_semana) } } });
  res.json({ message: 'Horarios guardados ✅' });
});

// Servicios
router.get('/servicios', async (req, res) => {
  const barberiaId = (req as any).usuario.barberiaId;
  const prisma = (await import('../lib/prisma')).default;

  // Servicios activos de esta barberia
  const activos = await prisma.servicioActivo.findMany({
    where: { barberiaId: Number(barberiaId) }
  });

  // Catalogo global - excluir los que ya tiene activos
  const catalogoIdsActivos = activos.filter((s) => s.catalogoId).map((s) => s.catalogoId!);
  const catalogo = await prisma.servicioCatalogo.findMany({
    where: { id: { notIn: catalogoIdsActivos } }
  });

  // Combinar: activos propios + catalogo no activado aun
  const resultado = [
    ...activos,
    ...catalogo.map((c) => ({
      id: null,
      catalogoId: c.id,
      nombre: c.nombre,
      precio: 0,
      duracion_minutos: c.duracion_minutos,
      categoria: c.categoria,
      activo: false,
      predefinido: true,
      barberiaId: Number(barberiaId)
    }))
  ].sort((a, b) => a.categoria.localeCompare(b.categoria) || a.nombre.localeCompare(b.nombre));

  res.json(resultado);
});
router.post('/servicios', async (req, res) => {
  const barberiaId = (req as any).usuario.barberiaId;
  const { nombre, precio, duracion_minutos, categoria, catalogoId } = req.body;
  const prisma = (await import('../lib/prisma')).default;
  const servicio = await prisma.servicioActivo.create({
    data: { nombre, precio: Number(precio), duracion_minutos: Number(duracion_minutos), categoria: categoria ?? 'General', barberiaId: Number(barberiaId), activo: true, catalogoId: catalogoId ?? null }
  });
  res.json(servicio);
});
router.put('/servicios/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, precio, duracion_minutos, categoria } = req.body;
  const prisma = (await import('../lib/prisma')).default;
  const servicio = await prisma.servicioActivo.update({ where: { id: Number(id) }, data: { nombre, precio: Number(precio), duracion_minutos: Number(duracion_minutos), categoria } });
  res.json(servicio);
});
router.patch('/servicios/:id/toggle', async (req, res) => {
  const barberiaId = (req as any).usuario.barberiaId;
  const { id } = req.params;
  const { catalogoId, nombre, precio, duracion_minutos, categoria } = req.body;
  const prisma = (await import('../lib/prisma')).default;

  // Si id es null viene del catalogo, hay que crearlo
  if (!id || id === 'null') {
    const nuevo = await prisma.servicioActivo.create({
      data: { catalogoId: Number(catalogoId), nombre, precio: Number(precio) || 0, duracion_minutos: Number(duracion_minutos), categoria, barberiaId: Number(barberiaId), activo: true }
    });
    return res.json(nuevo);
  }

  const servicio = await prisma.servicioActivo.findUnique({ where: { id: Number(id) } });
  if (!servicio) return res.status(404).json({ error: 'Servicio no encontrado' });

  // Si se desactiva un servicio del catalogo, eliminarlo directamente
  if (servicio.catalogoId) {
    await prisma.servicioActivo.delete({ where: { id: Number(id) } });
    return res.json({ deleted: true });
  }

  const updated = await prisma.servicioActivo.update({ where: { id: Number(id) }, data: { activo: !servicio.activo } });
  res.json(updated);
});
router.delete('/servicios/:id', async (req, res) => {
  const { id } = req.params;
  const prisma = (await import('../lib/prisma')).default;
  const servicio = await prisma.servicioActivo.findUnique({ where: { id: Number(id) } });
  if (!servicio) return res.status(404).json({ error: 'Servicio no encontrado' });
  if (servicio.catalogoId) return res.status(400).json({ error: 'Los servicios del catálogo no se pueden eliminar, solo desactivar' });
  const pendientes = await prisma.reserva.count({ where: { servicioId: Number(id), estado: 'pendiente' } });
  if (pendientes > 0) return res.status(400).json({ error: `Este servicio tiene ${pendientes} cita(s) pendiente(s). Cancélalas primero.` });
  await prisma.servicioActivo.delete({ where: { id: Number(id) } });
  res.json({ message: 'Servicio eliminado' });
});

export default router;

import { Router } from 'express';
import { getBarberos, createBarbero } from '../controllers/barberos.controller';
import { getServicios, createServicio } from '../controllers/servicios.controller';
import { getHorariosDisponibles, seedHorarios } from '../controllers/horarios.controller';

const router = Router();

router.get('/barberos', getBarberos);
router.post('/barberos', createBarbero);
router.get('/servicios', getServicios);
router.post('/servicios', createServicio);
router.get('/horarios/disponibles', getHorariosDisponibles);
router.post('/horarios/seed', seedHorarios);

export default router;

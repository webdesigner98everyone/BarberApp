import { Router } from 'express';
import { getBarberos, createBarbero } from '../controllers/barberos.controller';
import { getServicios, createServicio } from '../controllers/servicios.controller';

const router = Router();

router.get('/barberos', getBarberos);
router.post('/barberos', createBarbero);
router.get('/servicios', getServicios);
router.post('/servicios', createServicio);

export default router;

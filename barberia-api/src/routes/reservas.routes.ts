import { Router } from 'express';
import { getReservas, createReserva, cancelarReserva, reprogramarReserva } from '../controllers/reservas.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();

router.use(authMiddleware);
router.get('/', getReservas);
router.post('/', createReserva);
router.patch('/:id/cancelar', cancelarReserva);
router.patch('/:id/reprogramar', reprogramarReserva);

export default router;

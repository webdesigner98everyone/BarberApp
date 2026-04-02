import { Router } from 'express';
import { getPerfil, updatePerfil, cambiarPassword } from '../controllers/perfil.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();

router.use(authMiddleware);
router.get('/', getPerfil);
router.put('/', updatePerfil);
router.patch('/password', cambiarPassword);

export default router;

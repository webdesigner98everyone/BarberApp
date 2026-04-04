import { Router } from 'express';
import { getPerfil, updatePerfil, cambiarPassword, recuperarPassword } from '../controllers/perfil.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();

router.post('/verificar-email', async (req, res) => {
  const { email } = req.body;
  const prisma = (await import('../lib/prisma')).default;
  const usuario = await prisma.usuario.findUnique({ where: { email } });
  if (!usuario) return res.status(404).json({ error: 'No existe una cuenta con este email' });
  res.json({ message: 'Email válido' });
});
router.post('/recuperar', recuperarPassword);
router.use(authMiddleware);
router.get('/', getPerfil);
router.put('/', updatePerfil);
router.patch('/password', cambiarPassword);

export default router;

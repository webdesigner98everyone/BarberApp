import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes';
import barberiaRoutes from './routes/barberia.routes';
import reservasRoutes from './routes/reservas.routes';
import adminRoutes from './routes/admin.routes';
import perfilRoutes from './routes/perfil.routes';
import { iniciarRecordatorios } from './lib/recordatorios';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.get('/', (_req, res) => {
  res.json({ message: 'API Barbería funcionando ✅' });
});

app.use('/api/auth', authRoutes);
app.use('/api/perfil', perfilRoutes);
app.use('/api', barberiaRoutes);
app.use('/api/reservas', reservasRoutes);
app.use('/api/admin', adminRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  iniciarRecordatorios();
});

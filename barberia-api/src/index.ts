import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes';
import barberiaRoutes from './routes/barberia.routes';
import reservasRoutes from './routes/reservas.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.json({ message: 'API Barbería funcionando ✅' });
});

app.use('/api/auth', authRoutes);
app.use('/api', barberiaRoutes);
app.use('/api/reservas', reservasRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

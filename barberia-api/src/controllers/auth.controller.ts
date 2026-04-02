import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../lib/prisma';

export const register = async (req: Request, res: Response) => {
  const { nombre, email, password, telefono, fecha_nacimiento, foto_url, codigo_admin } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const rol = codigo_admin && codigo_admin === process.env.ADMIN_CODE ? 'admin' : 'cliente';
  const usuario = await prisma.usuario.create({
    data: { nombre, email, password: hash, telefono, foto_url, fecha_nacimiento: fecha_nacimiento ? new Date(fecha_nacimiento) : undefined, rol }
  });
  res.json({ id: usuario.id, nombre: usuario.nombre, email: usuario.email, rol: usuario.rol });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const usuario = await prisma.usuario.findUnique({ where: { email } });
  if (!usuario) return res.status(401).json({ error: 'Credenciales inválidas' });

  const valido = await bcrypt.compare(password, usuario.password);
  if (!valido) return res.status(401).json({ error: 'Credenciales inválidas' });

  const token = jwt.sign(
    { id: usuario.id, rol: usuario.rol },
    process.env.JWT_SECRET as string,
    { expiresIn: '7d' }
  );
  res.json({ token, usuario: { id: usuario.id, nombre: usuario.nombre, rol: usuario.rol } });
};

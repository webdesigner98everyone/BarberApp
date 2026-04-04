import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import prisma from '../lib/prisma';

export const getPerfil = async (req: Request, res: Response) => {
  const id = (req as any).usuario.id;
  const usuario = await prisma.usuario.findUnique({
    where: { id },
    select: { id: true, nombre: true, email: true, telefono: true, foto_url: true, fecha_nacimiento: true, rol: true, createdAt: true, barberiaId: true, barberia: { select: { nombre: true, codigo: true } } }
  });

  const esCumpleanos = usuario?.fecha_nacimiento
    ? new Date(usuario.fecha_nacimiento).getMonth() === new Date().getMonth() &&
      new Date(usuario.fecha_nacimiento).getDate() === new Date().getDate()
    : false;

  res.json({ ...usuario, esCumpleanos });
};

export const updatePerfil = async (req: Request, res: Response) => {
  const id = (req as any).usuario.id;
  const { nombre, telefono, foto_url, fecha_nacimiento } = req.body;
  const usuario = await prisma.usuario.update({
    where: { id },
    data: { nombre, telefono, foto_url, fecha_nacimiento: fecha_nacimiento ? new Date(fecha_nacimiento) : undefined },
    select: { id: true, nombre: true, email: true, telefono: true, foto_url: true, fecha_nacimiento: true, rol: true, createdAt: true }
  });
  res.json(usuario);
};

export const cambiarPassword = async (req: Request, res: Response) => {
  const id = (req as any).usuario.id;
  const { passwordActual, passwordNueva } = req.body;

  const usuario = await prisma.usuario.findUnique({ where: { id } });
  if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });

  const valido = await bcrypt.compare(passwordActual, usuario.password);
  if (!valido) return res.status(400).json({ error: 'La contraseña actual es incorrecta' });
  if (passwordNueva.length < 6) return res.status(400).json({ error: 'Mínimo 6 caracteres' });

  const hash = await bcrypt.hash(passwordNueva, 10);
  await prisma.usuario.update({ where: { id }, data: { password: hash } });
  res.json({ message: 'Contraseña actualizada ✅' });
};

export const recuperarPassword = async (req: Request, res: Response) => {
  const { email, passwordNueva, confirmar } = req.body;

  if (!email?.trim()) return res.status(400).json({ error: 'El email es requerido' });
  if (!passwordNueva?.trim()) return res.status(400).json({ error: 'La nueva contraseña es requerida' });
  if (passwordNueva.length < 6) return res.status(400).json({ error: 'Mínimo 6 caracteres' });
  if (passwordNueva !== confirmar) return res.status(400).json({ error: 'Las contraseñas no coinciden' });

  const usuario = await prisma.usuario.findUnique({ where: { email } });
  if (!usuario) return res.status(404).json({ error: 'No existe una cuenta con este email' });

  const hash = await bcrypt.hash(passwordNueva, 10);
  await prisma.usuario.update({ where: { id: usuario.id }, data: { password: hash } });
  res.json({ message: 'Contraseña actualizada correctamente' });
};

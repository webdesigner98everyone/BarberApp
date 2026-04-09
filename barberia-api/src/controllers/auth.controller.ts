import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../lib/prisma';

const generarCodigo = (nombre: string): string => {
  const base = nombre.toUpperCase().replace(/\s+/g, '').substring(0, 6);
  const random = Math.floor(1000 + Math.random() * 9000);
  return `${base}${random}`;
};

export const register = async (req: Request, res: Response) => {
  const { nombre, email, password, telefono, fecha_nacimiento, foto_url, esPropietario, nombreBarberia, codigoBarberia } = req.body;
  const hash = await bcrypt.hash(password, 10);

  if (esPropietario) {
    if (!nombreBarberia?.trim()) return res.status(400).json({ error: 'El nombre de la barbería es requerido' });

    const codigo = generarCodigo(nombreBarberia);
    const barberia = await prisma.barberia.create({
      data: {
        nombre: nombreBarberia,
        codigo,
        configuracion: {
          create: { nombre_barberia: nombreBarberia, moneda: 'COP', simbolo: '$', separador_miles: '.', separador_decimal: ',' }
        }
      }
    });

    const usuario = await prisma.usuario.create({
      data: { nombre, email, password: hash, telefono, foto_url, fecha_nacimiento: fecha_nacimiento ? new Date(fecha_nacimiento) : undefined, rol: 'admin', barberiaId: barberia.id }
    });

    return res.json({ id: usuario.id, nombre: usuario.nombre, email: usuario.email, rol: usuario.rol, barberia: { id: barberia.id, nombre: barberia.nombre, codigo: barberia.codigo } });
  }

  if (!codigoBarberia?.trim()) return res.status(400).json({ error: 'El código de barbería es requerido' });

  const barberia = await prisma.barberia.findUnique({ where: { codigo: codigoBarberia.toUpperCase() } });
  if (!barberia) return res.status(400).json({ error: 'Código de barbería inválido' });

  const usuario = await prisma.usuario.create({
    data: { nombre, email, password: hash, telefono, foto_url, fecha_nacimiento: fecha_nacimiento ? new Date(fecha_nacimiento) : undefined, rol: 'cliente', barberiaId: barberia.id }
  });

  res.json({ id: usuario.id, nombre: usuario.nombre, email: usuario.email, rol: usuario.rol, barberia: { id: barberia.id, nombre: barberia.nombre } });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const usuario = await prisma.usuario.findUnique({ where: { email }, include: { barberia: true } });
  if (!usuario) return res.status(401).json({ error: 'Credenciales inválidas' });

  const valido = await bcrypt.compare(password, usuario.password);
  if (!valido) return res.status(401).json({ error: 'Credenciales inválidas' });

  const token = jwt.sign(
    { id: usuario.id, rol: usuario.rol, barberiaId: usuario.barberiaId },
    process.env.JWT_SECRET as string,
    { expiresIn: '7d' }
  );
  res.json({ token, usuario: { id: usuario.id, nombre: usuario.nombre, rol: usuario.rol, barberiaId: usuario.barberiaId, barberia: usuario.barberia } });
};

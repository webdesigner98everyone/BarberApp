import { Request, Response, NextFunction } from 'express';

export const adminMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const usuario = (req as any).usuario;
  if (usuario?.rol !== 'admin') {
    return res.status(403).json({ error: 'Acceso denegado' });
  }
  next();
};

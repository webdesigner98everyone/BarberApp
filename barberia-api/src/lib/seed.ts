import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

async function main() {
  await prisma.barbero.createMany({
    data: [
      { nombre: 'Carlos López', especialidad: 'Corte clásico' },
      { nombre: 'Miguel Torres', especialidad: 'Barba y degradado' },
      { nombre: 'Andrés Ruiz', especialidad: 'Corte moderno' },
    ]
  });

  await prisma.servicio.createMany({
    data: [
      { nombre: 'Corte de cabello', precio: 15.00, duracion_minutos: 30 },
      { nombre: 'Arreglo de barba', precio: 10.00, duracion_minutos: 20 },
      { nombre: 'Corte + Barba', precio: 22.00, duracion_minutos: 50 },
      { nombre: 'Degradado', precio: 18.00, duracion_minutos: 40 },
    ]
  });

  console.log('✅ Datos de prueba insertados');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());

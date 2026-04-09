import prisma from './prisma';

const CATALOGO = [
  { nombre: 'Corte clásico', duracion_minutos: 30, categoria: 'Cabello' },
  { nombre: 'Corte moderno', duracion_minutos: 30, categoria: 'Cabello' },
  { nombre: 'Degradado', duracion_minutos: 40, categoria: 'Cabello' },
  { nombre: 'Corte + Lavado', duracion_minutos: 45, categoria: 'Cabello' },
  { nombre: 'Tinte de cabello', duracion_minutos: 90, categoria: 'Cabello' },
  { nombre: 'Mechas/Highlights', duracion_minutos: 120, categoria: 'Cabello' },
  { nombre: 'Alisado', duracion_minutos: 120, categoria: 'Cabello' },
  { nombre: 'Arreglo de barba', duracion_minutos: 20, categoria: 'Barba' },
  { nombre: 'Afeitado con navaja', duracion_minutos: 30, categoria: 'Barba' },
  { nombre: 'Diseño de barba', duracion_minutos: 30, categoria: 'Barba' },
  { nombre: 'Corte + Barba', duracion_minutos: 50, categoria: 'Barba' },
  { nombre: 'Manicure básico', duracion_minutos: 30, categoria: 'Uñas' },
  { nombre: 'Manicure con esmaltado', duracion_minutos: 45, categoria: 'Uñas' },
  { nombre: 'Pedicure básico', duracion_minutos: 40, categoria: 'Uñas' },
  { nombre: 'Pedicure con esmaltado', duracion_minutos: 60, categoria: 'Uñas' },
  { nombre: 'Hidratación capilar', duracion_minutos: 45, categoria: 'Tratamientos' },
  { nombre: 'Keratina', duracion_minutos: 120, categoria: 'Tratamientos' },
  { nombre: 'Mascarilla facial', duracion_minutos: 30, categoria: 'Tratamientos' },
  { nombre: 'Limpieza facial', duracion_minutos: 45, categoria: 'Tratamientos' },
];

async function seedCatalogo() {
  console.log('Poblando catálogo global...');
  for (const servicio of CATALOGO) {
    await prisma.servicioCatalogo.upsert({
      where: { nombre: servicio.nombre },
      update: {},
      create: servicio
    });
  }
  console.log('Catálogo global creado ✅');
  await prisma.$disconnect();
}

seedCatalogo();

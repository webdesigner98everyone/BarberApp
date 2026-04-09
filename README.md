# ✂️ The Barber - BarberApp

Aplicación móvil para gestión de citas en barberías, construida con React Native + Expo y Node.js + Express + MySQL. Soporta múltiples barberías (multi-tenant) con panel de administración completo.

---

## 📱 Screenshots

> Coming soon

---

## 🚀 Features

### 👤 Clientes
- 🔐 Registro e inicio de sesión con JWT
- 💈 Explorar barberos disponibles y sus especialidades
- 🛎️ Reservar citas seleccionando barbero, servicio, fecha y hora
- 📅 Ver y gestionar citas próximas
- ❌ Cancelar citas pendientes
- 👤 Editar perfil con foto, teléfono y fecha de nacimiento
- 🔔 Notificaciones push (recordatorios 15 y 5 min antes de la cita)
- 🔑 Recuperación de contraseña

### 🏪 Administrador de Barbería
- 📊 Dashboard con estadísticas (citas del día, ingresos, servicios populares)
- 💇 Gestión de barberos (crear, editar, asignar categorías)
- 🗓️ Configuración de horarios por barbero y día de la semana
- 📋 Catálogo global de servicios predefinidos (activar/desactivar)
- ➕ Crear servicios propios personalizados
- 💰 Configurar precios por servicio
- ⚙️ Configuración de barbería (moneda, duración de turnos, días de descanso, mensaje de bienvenida)
- 👥 Gestión de administradores
- 📱 Gestión de reservas (confirmar, completar, cancelar)

### 🏢 Multi-Tenant
- Cada barbería opera de forma independiente con su propio código de acceso
- Datos aislados por barbería (barberos, servicios, reservas, horarios)
- Configuración personalizada por barbería

---

## 🛠️ Tech Stack

### Mobile App (`barberia-app/`)
| Tecnología | Uso |
|---|---|
| React Native + Expo SDK 54 | Framework móvil |
| TypeScript | Tipado estático |
| React Navigation | Navegación (Native Stack + Bottom Tabs) |
| Axios | Cliente HTTP |
| AsyncStorage | Almacenamiento local |
| Expo Notifications | Notificaciones push |
| Expo Image Picker | Selección de fotos |
| DateTimePicker | Selector de fecha/hora |

### Backend API (`barberia-api/`)
| Tecnología | Uso |
|---|---|
| Node.js + Express 5 | Servidor HTTP |
| TypeScript | Tipado estático |
| Prisma ORM | Acceso a base de datos |
| MySQL | Base de datos relacional |
| JWT | Autenticación |
| bcryptjs | Hash de contraseñas |
| node-cron | Tareas programadas (recordatorios) |
| Expo Server SDK (axios) | Envío de notificaciones push |

### Infraestructura
| Servicio | Uso |
|---|---|
| Railway | Hosting del backend + MySQL en producción |
| EAS Build | Compilación de la app en la nube |
| Firebase App Distribution | Distribución de APK a testers |
| Firebase Cloud Messaging | Notificaciones push |

---

## 📁 Project Structure

```
BarberApp/
├── barberia-api/                → REST API (Node.js + Express)
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── admin.controller.ts
│   │   │   ├── auth.controller.ts
│   │   │   ├── barberos.controller.ts
│   │   │   ├── configuracion.controller.ts
│   │   │   ├── estadisticas.controller.ts
│   │   │   ├── horarios.controller.ts
│   │   │   ├── perfil.controller.ts
│   │   │   ├── reservas.controller.ts
│   │   │   └── servicios.controller.ts
│   │   ├── routes/
│   │   │   ├── admin.routes.ts
│   │   │   ├── auth.routes.ts
│   │   │   ├── barberia.routes.ts
│   │   │   ├── perfil.routes.ts
│   │   │   └── reservas.routes.ts
│   │   ├── middlewares/
│   │   │   ├── auth.middleware.ts
│   │   │   └── admin.middleware.ts
│   │   ├── lib/
│   │   │   ├── prisma.ts
│   │   │   ├── notificaciones.ts
│   │   │   ├── recordatorios.ts
│   │   │   └── seedCatalogo.ts
│   │   └── index.ts
│   └── prisma/
│       └── schema.prisma
│
└── barberia-app/                → Mobile App (React Native + Expo)
    ├── src/
    │   ├── screens/
    │   │   ├── HomeScreen.tsx
    │   │   ├── LoginScreen.tsx
    │   │   ├── RegisterScreen.tsx
    │   │   ├── RecuperarPasswordScreen.tsx
    │   │   ├── BookingScreen.tsx
    │   │   ├── MisCitasScreen.tsx
    │   │   ├── PerfilScreen.tsx
    │   │   ├── AdminScreen.tsx
    │   │   ├── BarberosAdminScreen.tsx
    │   │   ├── BarberoPerfil.tsx
    │   │   ├── ServiciosAdminScreen.tsx
    │   │   ├── ConfiguracionScreen.tsx
    │   │   ├── EstadisticasScreen.tsx
    │   │   └── GestionAdminsScreen.tsx
    │   ├── navigation/
    │   │   └── AppNavigator.tsx
    │   ├── services/
    │   │   ├── api.ts
    │   │   └── notificaciones.ts
    │   ├── context/
    │   │   └── ConfigContext.tsx
    │   └── components/
    │       └── SplashScreen.tsx
    ├── assets/
    └── App.tsx
```

---

## 🗄️ Database Schema

```
Barberia ──┬── Usuario (clientes y admins)
           ├── Barbero
           ├── ServicioActivo ←── ServicioCatalogo (catálogo global)
           ├── Reserva
           ├── Horario
           └── Configuracion
```

### Modelos principales
- **Barberia** → Cada barbería con nombre y código único
- **Usuario** → Clientes y administradores con roles
- **Barbero** → Especialistas con categorías y horarios
- **ServicioCatalogo** → Servicios predefinidos globales (compartidos entre barberías)
- **ServicioActivo** → Servicios habilitados por barbería (del catálogo o propios)
- **Reserva** → Citas con estado (pendiente, confirmada, completada, cancelada)
- **Horario** → Disponibilidad por barbero y día de la semana
- **Configuracion** → Ajustes personalizados por barbería

---

## ⚙️ Getting Started

### Prerequisites
- Node.js v18+
- MySQL
- Expo CLI (`npm install -g expo-cli`)
- EAS CLI (`npm install -g eas-cli`)

### Backend setup

```bash
cd barberia-api
npm install
```

Crea un archivo `.env`:
```env
DATABASE_URL="mysql://root:@localhost:3306/barberia_db"
JWT_SECRET="tu_clave_secreta"
PORT=3000
```

```bash
npx prisma migrate dev
npx ts-node src/lib/seedCatalogo.ts   # Poblar catálogo de servicios
npm run dev
```

### Mobile app setup

```bash
cd barberia-app
npm install
```

Crea un archivo `.env`:
```env
EXPO_PUBLIC_API_URL=http://TU_IP:3000/api
```

```bash
npx expo start
```

### Build de desarrollo (APK)
```bash
eas build --platform android --profile development
```

### Build para distribución (APK)
```bash
eas build --platform android --profile preview
```

---

## 🌐 Production

| Componente | URL |
|---|---|
| API Backend | Hosted on Railway (URL privada) |
| Base de datos | MySQL en Railway |
| App Distribution | Firebase App Distribution |

---

## 📡 API Endpoints

### Auth (`/api/auth`)
| Método | Ruta | Descripción |
|---|---|---|
| POST | `/register` | Registrar usuario/barbería |
| POST | `/login` | Iniciar sesión |
| POST | `/recuperar-password` | Recuperar contraseña |

### Reservas (`/api/reservas`)
| Método | Ruta | Descripción |
|---|---|---|
| GET | `/` | Listar reservas del usuario |
| POST | `/` | Crear nueva reserva |
| PATCH | `/:id/cancelar` | Cancelar reserva |
| PATCH | `/:id/confirmar` | Confirmar reserva (admin) |
| PATCH | `/:id/completar` | Completar reserva (admin) |

### Admin (`/api/admin`)
| Método | Ruta | Descripción |
|---|---|---|
| GET | `/barberos` | Listar barberos |
| POST | `/barberos` | Crear barbero |
| PUT | `/barberos/:id` | Editar barbero |
| DELETE | `/barberos/:id` | Eliminar barbero |
| GET | `/servicios` | Listar servicios activos + catálogo |
| POST | `/servicios` | Crear servicio propio |
| PUT | `/servicios/:id` | Editar servicio |
| DELETE | `/servicios/:id` | Eliminar servicio propio |
| POST | `/servicios/:id/toggle` | Activar/desactivar servicio del catálogo |
| GET | `/horarios/:barberoId` | Obtener horarios de barbero |
| POST | `/horarios` | Guardar horarios |
| GET | `/estadisticas` | Obtener estadísticas |
| GET | `/admins` | Listar administradores |
| POST | `/admins` | Crear administrador |
| DELETE | `/admins/:id` | Eliminar administrador |

### Perfil (`/api/perfil`)
| Método | Ruta | Descripción |
|---|---|---|
| GET | `/` | Obtener perfil |
| PUT | `/` | Actualizar perfil |

### Configuración (`/api/barberia`)
| Método | Ruta | Descripción |
|---|---|---|
| GET | `/configuracion` | Obtener configuración |
| PUT | `/configuracion` | Actualizar configuración |

---

## 👨‍💻 Author

**Luis Alberto Forero Guzman** - Full Stack Developer

---

## 📄 License

This project is private and not licensed for public use.

# ✂️ BarberApp

Mobile app for barbershop appointment management, built with React Native + Expo for the frontend and Node.js + Express + MySQL for the backend.

---

## 📱 Screenshots

> Coming soon

---

## 🚀 Features

- 🔐 User authentication (register & login with JWT)
- 💈 Browse available barbers and their specialties
- 🛎️ Book appointments by selecting barber, service, date & time
- 📅 View and manage your upcoming appointments
- ❌ Cancel pending appointments
- 🚪 Secure logout

---

## 🛠️ Tech Stack

### Mobile App
- React Native + Expo
- TypeScript
- React Navigation (Native Stack + Bottom Tabs)
- Axios
- AsyncStorage

### Backend API
- Node.js + Express
- TypeScript
- Prisma ORM
- MySQL
- JWT Authentication
- bcryptjs

---

## 📁 Project Structure

BarberApp/
├── barberia-api/ → REST API (Node.js + Express)
│ ├── src/
│ │ ├── controllers/
│ │ ├── routes/
│ │ ├── middlewares/
│ │ └── lib/
│ └── prisma/
│
└── barberia-app/ → Mobile App (React Native)
└── src/
├── screens/
├── navigation/
└── services/


---

## ⚙️ Getting Started

### Prerequisites
- Node.js v18+
- MySQL (XAMPP recommended)
- Expo Go app on your phone

### Backend setup
```bash
cd barberia-api
npm install
# Configure your .env file
# DATABASE_URL="mysql://root:@localhost:3306/barberia_db"
# JWT_SECRET="your_secret"
npx prisma migrate dev
npm run dev

👨‍💻 Author
Luis Alberto Forero Guzman - Full Stack Developer

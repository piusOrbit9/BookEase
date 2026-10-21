# 📅 BookEase

**Appointment Booking — Make scheduling effortless.**

BookEase is a full-stack appointment-booking application built with React, Node.js, Express, and MongoDB.

### ✨ Features

- Appointment scheduling and management
- REST API with request validation
- MongoDB persistence using Mongoose
- Seed data for local development

### 🛠️ Tech Stack

**Frontend:** React, Vite
**Backend:** Node.js, Express.js
**Database:** MongoDB, Mongoose
**Validation:** Zod

### 🚀 Run Locally

**1. Start the backend**

```bash
cd backend
cp .env.example .env
npm install
npm run seed
npm run dev
```

Configure `MONGODB_URI` in `backend/.env` before starting the server.

**2. Start the frontend** in a separate terminal:

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173`.

**API:** `http://localhost:4000/api`
**Health Check:** `/health` — verify the actual route in your backend configuration.

### 🌐 Deployment

- **Frontend:** Vercel or Netlify
- **Backend:** Render or Railway
- **Database:** MongoDB Atlas

Configure `VITE_API_URL`, `MONGODB_URI`, and `CLIENT_ORIGIN` in the appropriate environment settings. Never commit secrets.

### 🔮 Future Improvements

- User authentication and authorization
- Automated tests
- Production-ready booking validation
- Deployment screenshots and project case study

### 📌 Project Status

Portfolio project for demonstrating full-stack development. Not intended for production use without additional security and booking-flow validation.

---

Built as part of **Piu's Orbit — Ideas Built to Take Off.** 🚀

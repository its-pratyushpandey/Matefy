<div align="center">

# 🌍 Matefy - Global Language Exchange Platform

*Connect • Learn • Grow Together*

[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Latest-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Latest-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![Express](https://img.shields.io/badge/Express-4.21.0-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Stream](https://img.shields.io/badge/Stream-Powered-005FFF?style=for-the-badge&logo=streamlit&logoColor=white)](https://getstream.io/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)](https://daisyui.com/)

![Demo Screenshot](./frontend/public/screenshot-for-readme.png)

---

🚀 **[Live Demo Coming Soon](#)** | 📖 **[Repository](https://github.com/its-pratyushpandey/Matefy)**

</div>

---

## ✨ About Matefy

Matefy is a global language exchange platform fostering real-time connections through **chat** and **video calls**. It’s built to help learners:
- **Connect** with native speakers 🌐
- **Learn** cultural nuances 🎓
- **Grow** international friendships 🤝

> **Mission:** Breaking down language barriers, one conversation at a time.

---

## 🚀 Key Features

### 🔐 **Authentication**
- JWT-based secure login
- Profile customization with avatars
- Protected routes with middleware

### 👥 **Friend System**
- Smart recommendations and real-time notifications
- Advanced search by language, location, and interests
- Friend request management with tracking

### 💬 **Messaging**
- Instant messaging powered by Stream Chat
- Typing indicators, message reactions, and persistence

### 📹 **Video Calling**
- 1-on-1 HD video calls with professional controls
- Integrated from the chat interface

### 🎨 **UI/UX**
- 32 themes with DaisyUI
- Fully responsive design
- Dark/Light mode with smooth animations

---

## 🛠️ Tech Stack

### Frontend
- **React** | **Vite** | **TailwindCSS** | **DaisyUI**
- State management with **Zustand**

### Backend
- **Node.js** | **Express** | **MongoDB**
- JWT Authentication | Real-time integration with **Stream**

### Architecture
```
📁 Frontend
├── 🎨 TailwindCSS + DaisyUI
├── 🔄 Zustand for state management
└── 📡 API management with TanStack Query

📁 Backend
├── 🔐 JWT Authentication & Authorization
├── 🗄️ MongoDB with Mongoose ODM
└── 💬 Stream Chat & Video SDK
```

---

## ⚡ Quick Start

### 1️⃣ Clone & Install
```bash
git clone https://github.com/its-pratyushpandey/Matefy.git
cd Matefy
npm install && cd backend && npm install && cd ../frontend && npm install
```

### 2️⃣ Environment Setup
#### Backend (`backend/.env`)
```env
PORT=5001
MONGO_URI=mongodb://localhost:27017/matefy
JWT_SECRET_KEY=your_secret_key
STREAM_API_KEY=your_api_key
STREAM_API_SECRET=your_api_secret
```
#### Frontend (`frontend/.env`)
```env
VITE_STREAM_API_KEY=your_api_key
```

### 3️⃣ Run the App
```bash
# Backend (http://localhost:5001)
cd backend && npm run dev

# Frontend (http://localhost:5173)
cd frontend && npm run dev
```

---

## 📱 Screenshots

<div align="center">

### 🏠 **Dashboard**
![Home Page](docs/images/home-page.png)

### 💬 **Real-time Chat**
![Chat](docs/images/chat-page.png)

### 📹 **Video Calling**
![Video Call](docs/images/video-call.png)

### 👥 **Friends Management**
![Friends Page](docs/images/friends-page.png)

### 🔔 **Notifications**
![Notifications](docs/images/notifications.png)

### 🎨 **Themes**
![Themes](docs/images/themes-showcase.png)

</div>

---

## 🔧 Customization

### Add a New Theme
1. Add it to `frontend/src/constants/index.js`:
```javascript
export const THEMES = [..., { name: "custom-theme", colors: ["#primary", "#secondary"] }];
```
2. Add it in `tailwind.config.js`:
```javascript
daisyui: { themes: ["custom-theme"] },
```

### Add a New Language
Update `frontend/src/constants/index.js`:
```javascript
export const LANGUAGES = [..., "New Language"];
export const LANGUAGE_TO_FLAG = { "new language": "flag-code" };
```

---

## 🧪 Testing

### Run Tests
```bash
# Backend
cd backend && npm test

# Frontend
cd frontend && npm test
```

---

## 🚀 Deployment

### Vercel Deployment
```bash
npm i -g vercel
vercel --prod
```

### Railway Deployment
```bash
npm i -g @railway/cli
railway deploy
```

---

## 🛡️ Security

- **JWT tokens** with HTTP-only cookies
- **CSRF Protection** and password hashing
- **Rate Limiting** and CORS configuration

---

## 🤝 Contributing

1. **Fork the repo** and create a branch: `git checkout -b feature/your-feature`
2. **Write code and tests**
3. **Commit changes**: `git commit -m 'Add feature'`
4. **Push and create a PR**

---

## 📞 Support

- **Email**: support@matefy.app
- **Discord**: [Join](https://discord.gg/matefy)
- **Issues**: [GitHub](https://github.com/its-pratyushpandey/Matefy/issues)

---

## 📄 License

Matefy is licensed under the **MIT License**. See [LICENSE](LICENSE).

<div align="center">

**Made with ❤️ by the Matefy Team**

*Breaking language barriers, one conversation at a time* 🌍

[⬆️ Back to Top](#-matefy---global-language-exchange-platform)

</div>

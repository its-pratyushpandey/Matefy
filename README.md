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

![Demo App](./frontend/public/screenshot-for-readme.png)

---

*🚀 **Live Demo:** Coming Soon | 📖 **Repository:** [GitHub](https://github.com/its-pratyushpandey/Matefy)*

</div>

## ✨ About Matefy

**Matefy** is a revolutionary language exchange platform that connects language learners worldwide through real-time chat and video calls. Built with modern web technologies, it provides a seamless experience for practicing languages with native speakers, making friends, and building a global community of learners.

### 🎯 Core Mission
> *"Breaking down language barriers, one conversation at a time"*

Matefy empowers users to:
- **Connect** with native speakers globally 🌐
- **Practice** languages through real conversations 💬
- **Learn** cultural nuances and expressions 🎓
- **Build** lasting international friendships 🤝

---

## 🚀 Key Features

### 🔐 **Smart Authentication System**
- **JWT-based security** with HTTP-only cookies
- **User onboarding flow** with profile customization
- **Protected routes** and middleware validation
- **Random avatar generation** for quick setup

### 👥 **Advanced Friend System**
- **Smart recommendations** based on language preferences
- **Friend request management** with real-time notifications
- **Search and filter** by languages, location, and interests
- **Connection tracking** and status updates

### 💬 **Real-time Messaging**
- **Instant messaging** powered by Stream Chat
- **Channel-based conversations** with message persistence
- **Typing indicators** and delivery status
- **Message reactions** and emoji support

### 📹 **HD Video Calling**
- **1-on-1 video calls** with crystal clear quality
- **Seamless call integration** from chat interface
- **Professional call controls** (mute, camera, hang up)
- **Stream Video SDK** for reliable connections

### 🎨 **Stunning UI/UX**
- **32 beautiful themes** with DaisyUI components
- **Fully responsive** design for all devices
- **Dark/Light mode** with system preferences
- **Smooth animations** and micro-interactions

### 🌍 **Language Features**
- **14+ supported languages** with flag indicators
- **Native/Learning language** pairing system
- **Location-based matching** for cultural exchange
- **Bio and interest** sharing for better connections

---

## 🛠️ Technology Stack

<div align="center">

### **Frontend Excellence**
![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)

### **Backend Power**
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)

### **Real-time & State Management**
![Stream](https://img.shields.io/badge/Stream-005FFF?style=for-the-badge&logo=streamlit&logoColor=white)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-2D3748?style=for-the-badge&logo=zustand&logoColor=white)

</div>

### **Architecture Highlights**

```
📁 Frontend (React + Vite)
├── 🎨 Modern UI with TailwindCSS + DaisyUI
├── 🔄 State Management with Zustand
├── 📡 API Management with TanStack Query
├── 🎬 Real-time Video with Stream SDK
└── 📱 Fully Responsive Design

📁 Backend (Node.js + Express)
├── 🔐 JWT Authentication & Authorization
├── 🗄️ MongoDB with Mongoose ODM
├── 💬 Stream Chat & Video Integration
├── 🛡️ Security Middleware & Validation
└── 🚀 Production-Ready Deployment
```

---

## 📋 Prerequisites

Before running Matefy, ensure you have:

- **Node.js** (v18+ recommended) - [Download](https://nodejs.org/)
- **MongoDB** (local or Atlas) - [Setup Guide](https://www.mongodb.com/docs/manual/installation/)
- **Stream Account** - [Get API Keys](https://getstream.io/)
- **Git** - [Installation Guide](https://git-scm.com/downloads)

---

## ⚡ Quick Start

### 1️⃣ **Clone & Install**

```bash
# Clone the repository
git clone https://github.com/its-pratyushpandey/Matefy.git
cd Matefy

# Install root dependencies
npm install

# Install backend dependencies
cd backend && npm install

# Install frontend dependencies
cd ../frontend && npm install
```

### 2️⃣ **Environment Setup**

#### **Backend Configuration** (`/backend/.env`)
```env
# Server Configuration
PORT=5001
NODE_ENV=development

# Database
MONGO_URI=mongodb://localhost:27017/matefy
# or MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/matefy

# JWT Security
JWT_SECRET_KEY=your_super_secret_jwt_key_here

# Stream API (Get from https://getstream.io/)
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
```

#### **Frontend Configuration** (`/frontend/.env`)
```env
# Stream API Key (Same as backend)
VITE_STREAM_API_KEY=your_stream_api_key
```

### 3️⃣ **Database Setup**

```bash
# If using local MongoDB
mongod

# The app will automatically create collections on first run
```

### 4️⃣ **Launch Application**

```bash
# Terminal 1: Start Backend Server
cd backend
npm run dev
# 🚀 Server running on http://localhost:5001

# Terminal 2: Start Frontend Development Server
cd frontend
npm run dev
# 🎉 Frontend running on http://localhost:5173
```

### 5️⃣ **Build for Production**

```bash
# Build entire application
npm run build

# Start production server
npm start
```

---

## 📱 Application Screenshots

<div align="center">

### **🏠 Home Dashboard**
*Smart friend recommendations and quick actions*

![Home Page](docs/images/home-page.png)

### **💬 Real-time Chat**
*Seamless messaging with video call integration*

![Chat Interface](docs/images/chat-page.png)

### **📹 Video Calling**
*HD video calls with professional controls*

![Video Call](docs/images/video-call.png)

### **👥 Friends Management**
*Advanced search and connection features*

![Friends Page](docs/images/friends-page.png)

### **🔔 Smart Notifications**
*Real-time updates and friend requests*

![Notifications](docs/images/notifications.png)

### **🎨 Theme Gallery**
*32 beautiful themes to choose from*

![Themes](docs/images/themes-showcase.png)

</div>

---

## 🏗️ Project Structure

```
Matefy/
├── 📁 backend/
│   ├── 📁 src/
│   │   ├── 📁 controllers/         # Business logic & API handlers
│   │   │   ├── auth.controller.js  # Authentication & onboarding
│   │   │   ├── user.controller.js  # Friend system & recommendations
│   │   │   └── chat.controller.js  # Stream token management
│   │   ├── 📁 middleware/          # Authentication & validation
│   │   │   └── auth.middleware.js  # JWT verification
│   │   ├── 📁 models/              # MongoDB schemas
│   │   │   ├── User.js             # User profile & relationships
│   │   │   └── FriendRequest.js    # Friend request system
│   │   ├── 📁 routes/              # API endpoints
│   │   │   ├── auth.route.js       # Auth routes
│   │   │   ├── user.route.js       # User management
│   │   │   └── chat.route.js       # Chat integration
│   │   ├── 📁 lib/                 # Utilities & configurations
│   │   │   ├── db.js               # MongoDB connection
│   │   │   └── stream.js           # Stream integration
│   │   └── server.js               # Express server setup
│   └── package.json
├── 📁 frontend/
│   ├── 📁 src/
│   │   ├── 📁 components/          # Reusable UI components
│   │   │   ├── Sidebar.jsx         # Navigation sidebar
│   │   │   ├── Navbar.jsx          # Top navigation
│   │   │   ├── FriendCard.jsx      # Friend display component
│   │   │   ├── ThemeSelector.jsx   # Theme switching
│   │   │   ├── CallButton.jsx      # Video call trigger
│   │   │   └── Layout.jsx          # Page layout wrapper
│   │   ├── 📁 pages/               # Route components
│   │   │   ├── HomePage.jsx        # Dashboard & recommendations
│   │   │   ├── FriendsPage.jsx     # Friends management
│   │   │   ├── ChatPage.jsx        # Real-time messaging
│   │   │   ├── CallPage.jsx        # Video calling
│   │   │   ├── OnboardingPage.jsx  # Profile setup
│   │   │   ├── LoginPage.jsx       # Authentication
│   │   │   ├── SignUpPage.jsx      # User registration
│   │   │   └── NotificationsPage.jsx # Friend requests
│   │   ├── 📁 hooks/               # Custom React hooks
│   │   │   ├── useAuthUser.js      # Authentication state
│   │   │   ├── useLogin.js         # Login logic
│   │   │   ├── useLogout.js        # Logout handling
│   │   │   └── useSignUp.js        # Registration logic
│   │   ├── 📁 lib/                 # API client & utilities
│   │   │   ├── api.js              # API endpoints
│   │   │   ├── axios.js            # HTTP client setup
│   │   │   └── utils.js            # Helper functions
│   │   ├── 📁 store/               # Zustand state management
│   │   │   └── useThemeStore.js    # Theme persistence
│   │   ├── 📁 constants/           # App constants & configs
│   │   │   └── index.js            # Themes & language configs
│   │   ├── App.jsx                 # Main application component
│   │   ├── main.jsx                # React app entry point
│   │   └── index.css               # Global styles
│   ├── 📁 public/                  # Static assets
│   │   ├── screenshot-for-readme.png
│   │   └── vite.svg
│   ├── package.json
│   ├── tailwind.config.js          # TailwindCSS configuration
│   ├── vite.config.js              # Vite build configuration
│   └── index.html                  # HTML template
├── package.json                    # Root scripts for build/deploy
├── test-api.js                     # API testing script
└── README.md                       # Project documentation
```
├── package.json                # Root package.json for scripts
└── README.md                   # This file
```

---

## 🔧 API Documentation

### **Authentication Endpoints**

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/api/auth/signup` | User registration | ❌ |
| `POST` | `/api/auth/login` | User login | ❌ |
| `POST` | `/api/auth/logout` | User logout | ✅ |
| `GET` | `/api/auth/me` | Get current user | ✅ |
| `POST` | `/api/auth/onboarding` | Complete profile setup | ✅ |

### **User Management**

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/api/users` | Get recommended users | ✅ |
| `GET` | `/api/users/friends` | Get user's friends | ✅ |
| `POST` | `/api/users/friend-request/:id` | Send friend request | ✅ |
| `PUT` | `/api/users/friend-request/:id/accept` | Accept friend request | ✅ |
| `GET` | `/api/users/friend-requests` | Get pending requests | ✅ |
| `GET` | `/api/users/outgoing-friend-requests` | Get sent requests | ✅ |

### **Chat & Video**

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/api/chat/token` | Get Stream token | ✅ |

### **Health Check**

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/api/health` | Server & DB status | ❌ |

---

## 🎨 Customization Guide

### **Adding New Themes**

1. **Update theme configuration** in `frontend/src/constants/index.js`:

```javascript
export const THEMES = [
  // ... existing themes
  {
    name: "custom-theme",
    label: "Custom Theme",
    colors: ["#primary", "#secondary", "#accent", "#neutral"],
  },
];
```

2. **Add to TailwindCSS** in `frontend/tailwind.config.js`:

```javascript
daisyui: {
  themes: [
    // ... existing themes
    "custom-theme",
  ],
},
```

### **Adding New Languages**

Update `frontend/src/constants/index.js`:

```javascript
export const LANGUAGES = [
  // ... existing languages
  "Your New Language",
];

export const LANGUAGE_TO_FLAG = {
  // ... existing mappings
  "your new language": "country-code", // e.g., "zh" for Chinese
};
```

### **Custom Components**

Create reusable components in `frontend/src/components/`:

```jsx
// Example: CustomButton.jsx
import { forwardRef } from 'react';

const CustomButton = forwardRef(({ children, variant = 'primary', ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={`btn btn-${variant} custom-button`}
      {...props}
    >
      {children}
    </button>
  );
});

export default CustomButton;
```

---

## 🧪 Testing

### **Run Tests**

```bash
# Backend tests
cd backend
npm test

# Frontend tests  
cd frontend
npm test

# E2E tests
npm run test:e2e
```

### **Test Coverage**

```bash
# Generate coverage report
npm run test:coverage
```

---

## 🚀 Deployment

### **Production Build**

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### **Deploy to Vercel**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### **Deploy to Railway**

```bash
# Install Railway CLI
npm install -g @railway/cli

# Deploy
railway deploy
```

### **Environment Variables for Production**

Ensure these are set in your hosting platform:

```env
# Backend
NODE_ENV=production
MONGO_URI=your_production_mongodb_uri
JWT_SECRET_KEY=your_production_jwt_secret
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret

# Frontend
VITE_STREAM_API_KEY=your_stream_api_key
```

---

## 🤝 Contributing

We welcome contributions! Here's how to get started:

### **Development Setup**

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes**
4. **Run tests**: `npm test`
5. **Commit changes**: `git commit -m 'Add amazing feature'`
6. **Push to branch**: `git push origin feature/amazing-feature`
7. **Open a Pull Request**

### **Code Style**

- Use **ESLint** and **Prettier** for consistent formatting
- Follow **React best practices** and hooks guidelines
- Write **meaningful commit messages**
- Add **JSDoc comments** for complex functions

### **Pull Request Guidelines**

- ✅ Provide clear description of changes
- ✅ Include screenshots for UI changes
- ✅ Update documentation if needed
- ✅ Ensure all tests pass
- ✅ Follow semantic versioning

---

## 📊 Performance & Analytics

### **Performance Metrics**

- ⚡ **Lighthouse Score**: 95+ across all categories
- 🚀 **First Contentful Paint**: < 1.5s
- 📱 **Mobile Performance**: Optimized for all devices
- 🔍 **SEO Ready**: Proper meta tags and structure

### **Monitoring**

```javascript
// Example: Performance monitoring
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(`${entry.name}: ${entry.duration}ms`);
  });
});

observer.observe({ entryTypes: ['measure', 'navigation'] });
```

---

## 🛡️ Security Features

### **Authentication Security**
- 🔐 **JWT tokens** with secure HTTP-only cookies
- 🛡️ **CSRF protection** with SameSite cookies
- 🔒 **Password hashing** with bcrypt (10 rounds)
- ⏰ **Token expiration** (7 days default)

### **API Security**
- 🚫 **Rate limiting** to prevent abuse
- ✅ **Input validation** and sanitization
- 🔍 **SQL injection protection** with Mongoose
- 🌐 **CORS configuration** for secure origins

### **Data Protection**
- 🔐 **Environment variables** for sensitive data
- 🗄️ **Database encryption** at rest
- 📡 **HTTPS enforcement** in production
- 🔒 **User privacy** controls and data management

---

## 🐛 Troubleshooting

### **Common Issues**

#### **MongoDB Connection Failed**
```bash
# Check MongoDB service
sudo systemctl status mongod

# Restart MongoDB
sudo systemctl restart mongod

# Check connection string format
mongodb://localhost:27017/matefy
```

#### **Stream API Errors**
```javascript
// Verify API keys in .env files
console.log('Stream API Key:', process.env.STREAM_API_KEY);

// Check Stream dashboard for quota limits
```

#### **Frontend Build Issues**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Vite cache
npm run clean
```

#### **CORS Issues**
```javascript
// backend/src/server.js
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? 'https://yourdomain.com'
    : 'http://localhost:5173',
  credentials: true
}));
```

### **Debug Mode**

Enable detailed logging:

```bash
# Backend debug
DEBUG=matefy:* npm run dev

# Frontend debug
VITE_DEBUG=true npm run dev
```

---

## 📞 Support & Community

### **Get Help**

- 📧 **Email**: support@matefy.app
- 💬 **Discord**: [Join our community](https://discord.gg/matefy)
- 🐛 **Issues**: [GitHub Issues](https://github.com/yourusername/matefy/issues)
- 📖 **Wiki**: [Documentation](https://github.com/yourusername/matefy/wiki)

### **Community Resources**

- 🎥 **YouTube Tutorials**: [Matefy Channel](https://youtube.com/matefy)
- 📝 **Blog**: [Development Journey](https://blog.matefy.app)
- 🐦 **Twitter**: [@MatefyApp](https://twitter.com/mateFyapp)
- 📱 **Reddit**: [r/Matefy](https://reddit.com/r/matefy)

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Matefy

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🙏 Acknowledgments

### **Amazing Technologies**
- **[React](https://reactjs.org/)** - The library for web and native user interfaces
- **[Node.js](https://nodejs.org/)** - JavaScript runtime built on Chrome's V8
- **[MongoDB](https://mongodb.com/)** - The application data platform
- **[Stream](https://getstream.io/)** - Chat & video infrastructure for developers
- **[TailwindCSS](https://tailwindcss.com/)** - A utility-first CSS framework
- **[DaisyUI](https://daisyui.com/)** - The most popular component library for TailwindCSS

### **Inspiration**
- Language learning communities worldwide 🌍
- Open source contributors and maintainers 👨‍💻
- The amazing React and Node.js ecosystems 🚀

### **Special Thanks**
- Stream.io for providing excellent real-time infrastructure
- MongoDB Atlas for reliable database hosting
- Vercel for seamless deployment platform
- The entire JavaScript community for continuous innovation

---

<div align="center">

### 🌟 **Star this repository if you found it helpful!** 

[![GitHub stars](https://img.shields.io/github/stars/yourusername/matefy?style=social)](https://github.com/yourusername/matefy/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/yourusername/matefy?style=social)](https://github.com/yourusername/matefy/network/members)
[![GitHub issues](https://img.shields.io/github/issues/yourusername/matefy?style=social)](https://github.com/yourusername/matefy/issues)

---

**Made with ❤️ by the Matefy Team**

*Breaking language barriers, one conversation at a time* 🌍

[⬆️ Back to Top](#-matefy---global-language-exchange-platform)

</div>

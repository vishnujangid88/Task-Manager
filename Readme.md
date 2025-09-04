# 🚀 Task Manager

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/vishnujangid88/Task-Manager)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Tech Stack](https://img.shields.io/badge/stack-MERN-blue)](https://github.com/vishnujangid88/Task-Manager)

A modern, full-stack web application for personal task management, built with React and Node.js.

## 🌐 Live Demo

- **Frontend:** [https://taskmanager-demo.vercel.app](https://taskmanager-demo.vercel.app)
- **API:** [https://api.taskmanager-demo.vercel.app](https://api.taskmanager-demo.vercel.app)
- **Repository:** [https://github.com/vishnujangid88/Task-Manager](https://github.com/vishnujangid88/Task-Manager)

## ✨ Features

- **🔐 User Authentication:** Secure JWT-based login and registration with protected routes
- **📊 Dashboard:** Task statistics, recent activity, and personalized welcome
- **📝 Task Management:** Create, edit, delete, and mark tasks as complete/incomplete
- **🔍 Advanced Filtering:** Search, sort, and filter tasks by priority and due date
- **👤 User Profile:** View and edit profile information, change password, account statistics
- **🎨 Theming:** Light/dark mode toggle for personalized experience
- **📱 Responsive Design:** Mobile-first approach with modern Material-UI components
- **🔔 User Experience:** Toast notifications, loading spinners, and error boundaries
- **⚡ Real-time:** Live connection status and instant updates

## 🛠️ Tech Stack

### Frontend
- **React** + **TypeScript** + **Vite**
- **Material-UI** for component library
- **Axios** for API integration
- **Context API** for state management

### Backend
- **Node.js** + **Express.js**
- **MongoDB** with **Mongoose**
- **JWT** for authentication
- **bcrypt** for password hashing

## 🗂️ Project Structure

```
Task-Manager/
├── backend/              # Node.js/Express/MongoDB API
│   ├── config/          # Database and environment configuration
│   ├── controllers/     # Route controllers and business logic
│   ├── middleware/      # Authentication and validation middleware
│   ├── models/          # MongoDB/Mongoose data models
│   ├── routes/          # API route definitions
│   └── server.js        # Express server entry point
├── frontend/             # React + Vite client application
│   ├── src/
│   │   ├── assets/      # Static assets and images
│   │   ├── components/  # Reusable React components
│   │   ├── context/     # React Context providers
│   │   ├── css/         # Stylesheets and themes
│   │   ├── pages/       # Page components and routing
│   │   └── App.jsx      # Main application component
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## ⚡ Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB database
- npm or yarn package manager

### 1. Clone the Repository
```bash
git clone https://github.com/vishnujangid88/Task-Manager.git
cd Task-Manager
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
PORT=5000
```

Start the backend server:
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```

### 4. Access the Application
- **Frontend:** [http://localhost:5173](http://localhost:5173)
- **Backend API:** [http://localhost:5000](http://localhost:5000)

## 🔗 API Documentation

| Method | Endpoint                    | Description                     | Auth Required |
|--------|-----------------------------|--------------------------------|---------------|
| POST   | `/api/auth/register`        | Register a new user            | ❌            |
| POST   | `/api/auth/login`           | Login user                     | ❌            |
| GET    | `/api/auth/profile`         | Get current user profile       | ✅            |
| PUT    | `/api/auth/profile`         | Update user profile            | ✅            |
| PUT    | `/api/auth/change-password` | Change user password           | ✅            |
| GET    | `/api/auth/stats`           | Get account statistics         | ✅            |
| GET    | `/api/tasks`                | Get all user tasks             | ✅            |
| POST   | `/api/tasks`                | Create a new task              | ✅            |
| GET    | `/api/tasks/:id`            | Get specific task details      | ✅            |
| PUT    | `/api/tasks/:id`            | Update a task                  | ✅            |
| DELETE | `/api/tasks/:id`            | Delete a task                  | ✅            |
| GET    | `/api/health`               | API health check               | ❌            |

## 🧩 Component Architecture

```
App
├── Navbar                # Navigation and user menu
├── PrivateRoute         # Authentication wrapper
├── Dashboard            # Main dashboard view
│   ├── TaskList         # Display and manage tasks
│   └── TaskForm         # Create/edit task form
├── Authentication
│   ├── Login            # User login page
│   └── Register         # User registration page
├── Profile              # User profile management
├── Settings             # Application settings
└── Welcome              # Landing/welcome page
```

## 🌐 Deployment

### Backend Deployment
Recommended platforms:
- **Vercel** (Serverless functions)
- **Render** (Full-stack hosting)
- **Heroku** (Container deployment)

### Frontend Deployment
Recommended platforms:
- **Vercel** (React/Vite optimized)
- **Netlify** (Static site hosting)

### Environment Variables
Ensure these environment variables are set in production:
```env
MONGO_URI=your_production_mongodb_uri
JWT_SECRET=your_secure_jwt_secret
NODE_ENV=production
CORS_ORIGIN=your_frontend_domain
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork** the repository
2. **Create** your feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Development Guidelines
- Follow existing code style and conventions
- Write clear commit messages
- Add tests for new features
- Update documentation as needed

## ❓ Troubleshooting

**Q: Why can't I login/register?**
A: Check your MongoDB connection string and ensure the JWT secret is properly set in your `.env` file.

**Q: How do I enable dark mode?**
A: Navigate to Settings and use the theme toggle switch.

**Q: Tasks aren't saving/loading?**
A: Verify your backend server is running and check the browser console for API connection errors.

**Q: How do I deploy this application?**
A: Follow the deployment section above, ensuring all environment variables are properly configured.

## 📧 Support

- **Email:** [jangidharsh62@gmail.com](mailto:jangidharsh62@gmail.com)
- **Issues:** [GitHub Issues](https://github.com/vishnujangid88/Task-Manager/issues)
- **Discussions:** [GitHub Discussions](https://github.com/vishnujangid88/Task-Manager/discussions)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/vishnujangid88">Vishnu Jangid</a>
</p>


# Personal Task Manager Application

A comprehensive web application for personal task management, built with React (frontend) and Node.js/Express/MongoDB (backend).

---

## Assignment Overview
This project fulfills the requirements for a modern Personal Task Manager web application, demonstrating proficiency in React, routing, API integration, backend connectivity, and UI/UX best practices.

**Live Demo:** _[Add your deployed URL here]_  
**GitHub Repo:** [https://github.com/vishnujangid88/Task-Manager](https://github.com/vishnujangid88/Task-Manager)

---


## ✨ Core Features
- **User Authentication**: Login, registration, protected routes, JWT
- **Dashboard**: Task statistics, recent tasks, quick actions, welcome message
- **Task Management**: CRUD, filters, search, sort, priority, due date, completion
- **User Profile**: View/edit info, change password, account stats
- **Settings**: Theme toggle (light/dark mode)
- **Responsive UI/UX**: Mobile-first, modern design, loading spinners, toast notifications, error boundaries
- **API Integration**: Axios instance, interceptors, token handling, error handling

---


## 🗂️ Folder Structure
```
Task-Manager/
├── backend/      # Node.js/Express/MongoDB API
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── ...
├── frontend/     # React + Vite + Material-UI client
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── css/
│   │   ├── pages/
│   │   └── ...
│   └── ...
└── README.md
```

---


## ⚡ Quick Start

### 1. Clone the repository
```sh
git clone https://github.com/vishnujangid88/Task-Manager.git
cd Task-Manager
```

### 2. Backend Setup
```sh
cd backend
npm install
```
Create a `.env` file in `backend/`:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development
PORT=5000
```
Start the backend server:
```sh
npm run dev
```

### 3. Frontend Setup
```sh
cd ../frontend
npm install
npm run dev
```
Frontend: [http://localhost:5173](http://localhost:5173)  
Backend: [http://localhost:5000](http://localhost:5000)

---

	# Task-Manager

	[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/vishnujangid88/Task-Manager)
	[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
	[![Tech Stack](https://img.shields.io/badge/stack-MERN-blue)](https://github.com/vishnujangid88/Task-Manager)

	<p align="center">
		<img src="frontend/src/assets/logo.png" alt="Task Manager Logo" width="120" />
	</p>

	<p align="center">
		<b>A modern, full-stack web app for personal task management.</b><br>
		<i>React + TypeScript + Vite | Node.js + Express + MongoDB</i>
	</p>

	---

	## 🚀 Demo

	![Demo GIF](frontend/src/assets/demo.gif)

	---

	## ✨ Features

	- Secure user authentication (JWT, protected routes)
	- Dashboard with task stats, recent activity
	- Create, edit, delete, mark complete/incomplete tasks
	- Filter, search, and sort tasks
	- User profile: view/edit info, change password
	- Theme toggle (light/dark mode)
	- Responsive, modern UI (Material-UI)
	- Toast notifications, error boundaries
	- Real-time connection status

	---

	## 🗂️ Folder Structure

	```
	Task-Manager/
	├── backend/      # Node.js/Express/MongoDB API
	│   ├── config/
	│   ├── controllers/
	│   ├── middleware/
	│   ├── models/
	│   ├── routes/
	│   └── ...
	├── frontend/     # React + Vite + Material-UI client
	│   ├── src/
	│   │   ├── assets/
	│   │   ├── components/
	│   │   ├── context/
	│   │   ├── css/
	│   │   ├── pages/
	│   │   └── ...
	│   └── ...
	└── README.md
	```

	---

	## ⚡ Quick Start

	### 1. Clone the repository

	```sh
	git clone https://github.com/vishnujangid88/Task-Manager.git
	cd Task-Manager
	```

	### 2. Backend Setup

	```sh
	cd backend
	npm install
	```

	Create a `.env` file in `backend/`:

	```env
	MONGO_URI=your_mongodb_connection_string
	JWT_SECRET=your_jwt_secret
	NODE_ENV=development
	PORT=5000
	```

	Start the backend server:

	```sh
	npm run dev
	```

	### 3. Frontend Setup

	```sh
	cd ../frontend
	npm install
	npm run dev
	```

	Frontend: [http://localhost:5173](http://localhost:5173)  
	Backend: [http://localhost:5000](http://localhost:5000)

	---


	## 🔗 API Documentation

	| Method | Endpoint                  | Description                       |
	|--------|---------------------------|-----------------------------------|
	| POST   | /api/auth/register        | Register a new user               |
	| POST   | /api/auth/login           | Login user                        |
	| GET    | /api/auth/profile         | Get current user profile          |
	| PUT    | /api/auth/profile         | Update user profile               |
	| PUT    | /api/auth/change-password | Change password                   |
	| GET    | /api/auth/stats           | Get account statistics            |
	| GET    | /api/tasks                | Get all tasks                     |
	| POST   | /api/tasks                | Create a new task                 |
	| GET    | /api/tasks/:id            | Get task details                  |
	| PUT    | /api/tasks/:id            | Update a task                     |
	| DELETE | /api/tasks/:id            | Delete a task                     |
	| GET    | /api/health               | Health check                      |

	---

	---


	## 🧩 Component Hierarchy

	```mermaid
	graph TD
		App
		Navbar --> App
		PrivateRoute --> App
		Dashboard --> App
		TaskList --> Dashboard
		TaskForm --> Dashboard
		Login --> App
		Register --> App
		Profile --> App
		Settings --> App
		Welcome --> App
	```

	---

	---


	## 🌐 Deployment
	- Backend: Render, Heroku, Vercel
	- Frontend: Vercel, Netlify
	- Set CORS and environment variables as needed

	---

	---


	## 👥 Contributing
	Contributions are welcome! Please open issues or submit pull requests for improvements, bug fixes, or new features.

	---

	---


	## ❓ FAQ

	**Q: Why can't I login/register?**  
	A: Check your MongoDB connection string and JWT secret in `.env`.

	**Q: How do I change the theme?**  
	A: Use the theme toggle in Settings.

	**Q: How do I deploy?**  
	A: See the Deployment section above.

	---

	## 📧 Support
	For questions, contact [maintainer](mailto:vishnujangid88@gmail.com) or open an issue.

	---

	## 📄 License
	MIT

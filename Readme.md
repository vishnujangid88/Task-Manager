# Task Manager

A comprehensive web application for personal task management, built with React (frontend) and Node.js/Express/MongoDB (backend).

## Features
- User authentication (login, register, protected routes)
- Dashboard with task statistics and recent tasks
- Task management: create, edit, delete, mark complete/incomplete
- Task list view with filters, search, and sorting
- User profile: view/edit info, change password, account stats
- Settings: theme toggle (light/dark mode)
- Responsive, modern UI (Material-UI)
- API integration with Axios
- Error boundaries and robust error handling
- Toast notifications and loading spinners

## Folder Structure
```
Personal-Task-Manager-Application/
  backend/        # Node.js/Express/MongoDB API
  frontend/       # React + Material-UI client
```

## Setup Instructions
### Backend
1. Install dependencies:
	```bash
	cd backend
	npm install
	```
2. Create a `.env` file with:

### Frontend
1. Install dependencies:
	```bash
	cd frontend
	npm install
	```

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

	| Method | Endpoint                | Description                       |
	|--------|-------------------------|-----------------------------------|
	| POST   | /api/auth/register      | Register a new user               |
	| POST   | /api/auth/login         | Login user                        |
	| GET    | /api/auth/profile       | Get current user profile          |
	| PUT    | /api/auth/profile       | Update user profile               |
	| PUT    | /api/auth/change-password| Change password                  |
	| GET    | /api/auth/stats         | Get account statistics            |
	| GET    | /api/tasks              | Get all tasks                     |
	| POST   | /api/tasks              | Create a new task                 |
	| PUT    | /api/tasks/:id          | Update a task                     |
	| DELETE | /api/tasks/:id          | Delete a task                     |
	| GET    | /api/health             | Health check                      |

	---

	## 🧩 Component Hierarchy

	```
	App
	├── Navbar
	├── PrivateRoute
	├── Dashboard
	│   ├── TaskList
	│   ├── TaskForm
	├── Login
	├── Register
	├── Profile
	├── Settings
	├── Welcome
	```

	---

	## 🌐 Deployment

	- Backend: Render, Heroku, Vercel
	- Frontend: Vercel, Netlify
	- Set CORS and environment variables as needed

	---

	## 👥 Contributing

	Contributions are welcome! Please open issues or submit pull requests for improvements, bug fixes, or new features.

	1. Fork the repo
	2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
	3. Commit your changes (`git commit -m 'Add some feature'`)
	4. Push to the branch (`git push origin feature/AmazingFeature`)
	5. Open a Pull Request

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
## Component Hierarchy
```
App
├── Navbar
├── PrivateRoute
├── Dashboard
│   ├── TaskList
│   ├── TaskForm
├── Login
├── Register
├── Profile
├── Settings
├── Welcome
```

## Deployment
- Deploy backend (e.g., Render, Heroku, Vercel)
- Deploy frontend (e.g., Vercel, Netlify)
- Set CORS and environment variables accordingly

## License
MIT

---
For more details, see code comments and API docs in the repository.

### Environment Variables

Create a `.env` file in the `backend/` directory:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
```

### Installation

#### 1. Clone the repository

```sh
git clone https://github.com/yourusername/mern-task-manager.git
cd mern-task-manager
```

#### 2. Install backend dependencies

```sh
cd backend
npm install
```

#### 3. Install frontend dependencies

```sh
cd ../frontend
npm install
```

### Running the Application

#### 1. Start the backend server

```sh
cd backend
npm run dev
```

#### 2. Start the frontend development server

```sh
cd ../frontend
npm run dev
```

- The frontend will be available at [http://localhost:5173](http://localhost:5173)
- The backend API runs at [http://localhost:5000](http://localhost:5000)

### API Endpoints

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/logout` - Logout user
- `GET /api/auth/profile` - Get current user profile (protected)
- `PUT /api/auth/profile` - Update current user profile (protected)
- `PUT /api/auth/change-password` - Change current user's password (protected)
- `GET /api/auth/stats` - Get account statistics for the logged-in user (protected)
- `GET /api/tasks` - Get all tasks for logged-in user (protected)
- `POST /api/tasks` - Create a new task (protected)
- `PUT /api/tasks/:id` - Update a task (protected, includes title, description, priority, due date, and completion status)
- `DELETE /api/tasks/:id` - Delete a task (protected)

### Folder Structure

```
mern-task-manager/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── app.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── App.tsx
│   │   ├── index.tsx
│   │   └── vite.config.ts
│   ├── .env
│   ├── package.json
│   └── tsconfig.json
├── .gitignore
└── README.md

```

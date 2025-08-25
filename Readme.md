# Personal Task Manager Application

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
	```env
	MONGO_URI=your_mongodb_connection_string
	JWT_SECRET=your_jwt_secret
	NODE_ENV=development
	PORT=5000
	```
3. Start the backend:
	```bash
	npm run dev
	```

### Frontend
1. Install dependencies:
	```bash
	cd frontend
	npm install
	```
2. Start the frontend:
	```bash
	npm run dev
	```

## API Endpoints
- `POST /api/auth/login` — Login
- `POST /api/auth/register` — Register
- `GET /api/auth/profile` — Get user profile
- `PUT /api/auth/profile` — Update profile
- `PUT /api/auth/change-password` — Change password
- `GET /api/auth/stats` — Account statistics
- `GET /api/tasks` — Get all tasks
- `POST /api/tasks` — Create task
- `PUT /api/tasks/:id` — Update task
- `DELETE /api/tasks/:id` — Delete task
- `GET /api/health` — Health check

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


import Welcome from './pages/Welcome';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';
// import './App.css';
import Profile from './pages/profile';
import Settings from './pages/Settings';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { useContext } from 'react';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
// import backgroundImg from './assets/background.jpg';

import ErrorBoundary from './components/ErrorBoundary';
const backgroundImg = '';


function App() {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.theme || 'light';
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <AuthProvider>
          <Router>
            <CssBaseline />
            <Navbar />
            <ToastContainer 
              position="top-center"
              autoClose={1000}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme={theme === 'dark' ? 'dark' : 'light'}
            />
            <Box
              sx={{
                minHeight: '100vh',
                backgroundImage: `url(${backgroundImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                transition: 'background 0.3s',
                pt: 8,
              }}
            >
              <Container maxWidth="md" sx={{ bgcolor: theme === 'dark' ? 'rgba(24,26,27,0.95)' : 'rgba(245,246,250,0.95)', borderRadius: 3, boxShadow: 3, py: 4 }}>
                <Routes>
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/dashboard" element={<PrivateRoute />}>
                    <Route index element={<Dashboard />} />
                  </Route>
                  <Route path="/profile" element={<PrivateRoute />}>
                    <Route index element={<Profile />} />
                  </Route>
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/" element={<Welcome />} />
                </Routes>
              </Container>
            </Box>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const PrivateRoute = () => {
  const { user, loading } = useContext(AuthContext);
  if (loading) return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="40vh">
      <CircularProgress color="primary" />
    </Box>
  );
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
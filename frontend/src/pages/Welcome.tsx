import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

const Welcome = () => {
  return (
    <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} alignItems="center" justifyContent="center" minHeight="80vh" sx={{ fontFamily: 'Inter, Arial, sans-serif' }}>
      <Paper elevation={6} sx={{ p: 4, borderRadius: 4, minWidth: 320, maxWidth: 480, mr: { md: 6 }, mb: { xs: 4, md: 0 } }}>
        <Typography variant="h3" fontWeight={700} mb={2} color="primary">Welcome to Task Manager</Typography>
        <Typography variant="body1" mb={3}>
          Organize your life with our beautiful and intuitive task management application. Create, manage, and track your tasks with ease. Stay productive and never miss a deadline again.
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center" mb={2}>
          <Button component={RouterLink} to="/register" variant="contained" color="primary" size="large" sx={{ fontWeight: 600 }}>
            Get Started
          </Button>
          <Button component={RouterLink} to="/login" variant="outlined" color="secondary" size="large" sx={{ fontWeight: 600 }}>
            Sign In
          </Button>
        </Stack>
      </Paper>
      <Box flex={1}>
        <Stack spacing={3}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 3, textAlign: 'center' }}>
            <Typography variant="h5" fontWeight={600} mb={1}>📊 Analytics Dashboard</Typography>
            <Typography variant="body2">Track your productivity with detailed insights</Typography>
          </Paper>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 3, textAlign: 'center' }}>
            <Typography variant="h5" fontWeight={600} mb={1}>⚡ Lightning Fast</Typography>
            <Typography variant="body2">Built for speed and efficiency</Typography>
          </Paper>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 3, textAlign: 'center' }}>
            <Typography variant="h5" fontWeight={600} mb={1}>🎯 Goal Oriented</Typography>
            <Typography variant="body2">Stay focused on what matters most</Typography>
          </Paper>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 3, textAlign: 'center' }}>
            <Typography variant="h5" fontWeight={600} mb={1}>📝 Easy Task Creation</Typography>
            <Typography variant="body2">Create tasks quickly with titles and descriptions</Typography>
          </Paper>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 3, textAlign: 'center' }}>
            <Typography variant="h5" fontWeight={600} mb={1}>✅ Track Progress</Typography>
            <Typography variant="body2">Mark tasks as complete and track your productivity</Typography>
          </Paper>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 3, textAlign: 'center' }}>
            <Typography variant="h5" fontWeight={600} mb={1}>🔒 Secure & Private</Typography>
            <Typography variant="body2">Your tasks are private and securely stored</Typography>
          </Paper>
        </Stack>
      </Box>
    </Box>
  );
};

export default Welcome;
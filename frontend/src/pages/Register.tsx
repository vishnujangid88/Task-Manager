import React, { useState, useContext } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import AuthContext from '../context/AuthContext';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';

const FeatureBox = styled(Box)(({ theme }) => ({
  display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8,
  fontSize: 16, color: theme.palette.text.secondary
}));

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const success = await register(username, email, password);
    if (success) {
      toast.success('Registration successful!');
      navigate('/dashboard');
    } else {
      toast.error('Registration failed. Please try again.');
    }
    setLoading(false);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh" sx={{ fontFamily: 'Inter, Arial, sans-serif' }}>
      <Paper elevation={6} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, width: { xs: '100%', md: 700 }, borderRadius: 4, overflow: 'hidden' }}>
        <Box flex={1} bgcolor="secondary.main" color="secondary.contrastText" p={4} display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start">
          <Typography variant="h4" fontWeight={700} gutterBottom>Join Task Manager</Typography>
          <Typography variant="body1" mb={2}>
            Create your account and start organizing your tasks like never before. Join thousands of users who trust us with their productivity.
          </Typography>
          <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.2)' }} />
          <FeatureBox><span>🚀</span> Get started in seconds</FeatureBox>
          <FeatureBox><span>💼</span> Professional task management</FeatureBox>
          <FeatureBox><span>🎯</span> Achieve your goals faster</FeatureBox>
        </Box>
        <Box flex={1} p={4} display="flex" flexDirection="column" justifyContent="center" alignItems="center" bgcolor="background.paper">
          <Typography variant="h5" fontWeight={600} mb={2}>Create Account</Typography>
          <Box component="form" onSubmit={handleSubmit} width="100%" maxWidth={320}>
            <TextField
              label="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              disabled={loading}
              fullWidth
              margin="normal"
              autoComplete="username"
            />
            <TextField
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
              fullWidth
              margin="normal"
              autoComplete="email"
            />
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
              fullWidth
              margin="normal"
              autoComplete="new-password"
            />
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              fullWidth
              sx={{ mt: 2, fontWeight: 600 }}
              disabled={loading}
              startIcon={loading ? <CircularProgress size={20} color="inherit" /> : null}
            >
              {loading ? 'Creating account...' : 'Create Account'}
            </Button>
          </Box>
          <Box mt={3} textAlign="center">
            <Typography variant="body2">Already have an account?</Typography>
            <Button component={RouterLink} to="/login" color="primary" sx={{ mt: 1 }}>
              Sign in here
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Register;
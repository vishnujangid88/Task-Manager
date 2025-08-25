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

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const success = await login(email, password);
    if (success) {
      toast.success('Login successful!');
      navigate('/dashboard');
    } else {
      toast.error('Login failed. Invalid credentials.');
    }
    setLoading(false);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh" sx={{ fontFamily: 'Inter, Arial, sans-serif' }}>
      <Paper elevation={6} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, width: { xs: '100%', md: 700 }, borderRadius: 4, overflow: 'hidden' }}>
        <Box flex={1} bgcolor="primary.main" color="primary.contrastText" p={4} display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start">
          <Typography variant="h4" fontWeight={700} gutterBottom>Welcome Back!</Typography>
          <Typography variant="body1" mb={2}>
            Sign in to your account and continue managing your tasks efficiently. Your productivity journey continues here.
          </Typography>
          <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.2)' }} />
          <FeatureBox><span>⚡</span> Lightning fast task management</FeatureBox>
          <FeatureBox><span>🔒</span> Secure and private workspace</FeatureBox>
          <FeatureBox><span>📊</span> Track your productivity</FeatureBox>
        </Box>
        <Box flex={1} p={4} display="flex" flexDirection="column" justifyContent="center" alignItems="center" bgcolor="background.paper">
          <Typography variant="h5" fontWeight={600} mb={2}>Sign In</Typography>
          <Box component="form" onSubmit={handleSubmit} width="100%" maxWidth={320}>
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
              autoComplete="current-password"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2, fontWeight: 600 }}
              disabled={loading}
              startIcon={loading ? <CircularProgress size={20} color="inherit" /> : null}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </Button>
          </Box>
          <Box mt={3} textAlign="center">
            <Typography variant="body2">Don't have an account?</Typography>
            <Button component={RouterLink} to="/register" color="secondary" sx={{ mt: 1 }}>
              Create one here
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
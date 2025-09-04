import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import CircularProgress from '@mui/material/CircularProgress';

interface ConnectionStatusProps {
  className?: string;
}

const ConnectionStatus = ({ className = '' }: ConnectionStatusProps) => {
  const [status, setStatus] = useState<'checking' | 'connected' | 'disconnected'>('checking');
  const [lastChecked, setLastChecked] = useState<Date | null>(null);

  const checkConnection = async () => {
    try {
      setStatus('checking');
      const response = await axios.get('/api/auth/profile', { timeout: 5000 });
      setStatus('connected');
      setLastChecked(new Date());
    } catch (error) {
      // Try a simple health check endpoint
      try {
        await axios.get('/api/health', { timeout: 5000 });
        setStatus('connected');
      } catch {
        setStatus('disconnected');
      }
      setLastChecked(new Date());
    }
  };

  useEffect(() => {
    checkConnection();
    const interval = setInterval(checkConnection, 30000); // Check every 30 seconds
    return () => clearInterval(interval);
  }, []);

  const getStatusText = () => {
    switch (status) {
      case 'checking':
        return '🔄 Checking connection...';
      case 'connected':
        return '✅ Backend Connected';
      case 'disconnected':
        return '❌ Backend Disconnected';
      default:
        return 'Unknown status';
    }
  };

  const getStatusClass = () => {
    return `connection-status ${status} ${className}`;
  };

  return (
    <Box display="flex" alignItems="center" gap={2} sx={{ cursor: 'pointer' }} onClick={checkConnection}>
      <Chip
        label={
          status === 'checking' ? (
            <><CircularProgress size={16} color="info" sx={{ mr: 1 }} /> Checking...</>
          ) : status === 'connected' ? '✅ Backend Connected' : '❌ Backend Disconnected'
        }
        color={status === 'connected' ? 'success' : status === 'disconnected' ? 'error' : 'default'}
        variant="outlined"
        sx={{ fontWeight: 600, fontSize: '1rem' }}
      />
      {lastChecked && (
        <Typography variant="caption" color="text.secondary">
          Last checked: {lastChecked.toLocaleTimeString()}
        </Typography>
      )}
    </Box>
  );
};

export default ConnectionStatus;
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

const Settings = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error('Settings component must be used within a ThemeProvider');
  }
  const { theme, toggleTheme } = themeContext;
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh" sx={{ fontFamily: 'Inter, Arial, sans-serif' }}>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 4, minWidth: 320, textAlign: 'center' }}>
        <Typography variant="h5" fontWeight={700} mb={2}>Theme Selection</Typography>
        <Typography variant="body1" mb={2}>
          Current theme: <span style={{ fontWeight: 600, textTransform: 'capitalize' }}>{theme}</span>
        </Typography>
        <Button
          variant="contained"
          color={theme === 'light' ? 'secondary' : 'primary'}
          onClick={toggleTheme}
          sx={{ fontWeight: 600 }}
        >
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </Button>
      </Paper>
    </Box>
  );
};

export default Settings;

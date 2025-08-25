import { useContext, useState, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import type { AuthContextType } from "../context/AuthContext";
import { toast } from "react-toastify";
import api from "../api/axios";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

interface User {
  _id: string;
  username: string;
  email: string;
}

interface AccountStats {
  totalTasks: number;
  completedTasks: number;
  pendingTasks: number;
}

const Profile = () => {
  const { user, updateProfile, changePassword } = useContext(AuthContext as React.Context<AuthContextType>);
  const [username, setUsername] = useState(user?.username || "");
  const [email, setEmail] = useState(user?.email || "");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isUpdatingProfile, setIsUpdatingProfile] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [accountStats, setAccountStats] = useState<AccountStats | null>(null);
  const [statsLoading, setStatsLoading] = useState(true);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  useEffect(() => {
    if (user) {
      fetchAccountStats();
    }
  }, [user]);

  const fetchAccountStats = async () => {
    setStatsLoading(true);
    try {
  const res = await api.get<AccountStats>('/auth/stats');
      setAccountStats(res.data);
    } catch (err) {
      console.error("Failed to fetch account stats:", err);
      toast.error("❌ Failed to load account statistics.");
    } finally {
      setStatsLoading(false);
    }
  };

  const handleProfileUpdate = async () => {
    if (!username.trim()) return toast.error("❌ Username cannot be empty");
    if (!validateEmail(email)) return toast.error("❌ Please enter a valid email");

    setIsUpdatingProfile(true);
    try {
      const success = await updateProfile(username.trim(), email);
      success
        ? toast.success("✅ Profile updated successfully!")
        : toast.error("❌ Failed to update profile. Please try again.");
    } catch {
      toast.error("❌ An error occurred while updating profile");
    } finally {
      setIsUpdatingProfile(false);
    }
  };

  const handleChangePassword = async () => {
    if (!oldPassword) return toast.error("❌ Please enter your current password");
    if (newPassword.length < 6) return toast.error("❌ New password must be at least 6 characters");

    setIsChangingPassword(true);
    try {
      const success = await changePassword(oldPassword, newPassword);
      if (success) {
        toast.success("🔒 Password changed successfully!");
        setOldPassword("");
        setNewPassword("");
      } else {
        toast.error("❌ Failed to change password. Please check your old password.");
      }
    } catch {
      toast.error("❌ An error occurred while changing password");
    } finally {
      setIsChangingPassword(false);
    }
  };

  if (!user)
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <Typography variant="h6" color="text.secondary">Please log in first.</Typography>
      </Box>
    );

  return (
    <Box sx={{ fontFamily: 'Inter, Arial, sans-serif' }}>
      <Typography variant="h4" fontWeight={700} mb={3} textAlign="center">User Profile</Typography>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} justifyContent="center" alignItems="flex-start">
        <Paper elevation={4} sx={{ p: 3, borderRadius: 4, minWidth: 280 }}>
          <Typography variant="h6" fontWeight={600} mb={2}>Edit Profile</Typography>
          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            sx={{ mb: 2 }}
          />
          <Button variant="contained" color="primary" onClick={handleProfileUpdate} disabled={isUpdatingProfile} fullWidth>
            {isUpdatingProfile ? <CircularProgress size={20} color="inherit" sx={{ mr: 1 }} /> : null}
            {isUpdatingProfile ? "Saving..." : "Save Changes"}
          </Button>
        </Paper>

        <Paper elevation={4} sx={{ p: 3, borderRadius: 4, minWidth: 280 }}>
          <Typography variant="h6" fontWeight={600} mb={2}>Change Password</Typography>
          <TextField
            label="Current Password"
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="New Password"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            fullWidth
            sx={{ mb: 2 }}
          />
          <Button variant="contained" color="secondary" onClick={handleChangePassword} disabled={isChangingPassword} fullWidth>
            {isChangingPassword ? <CircularProgress size={20} color="inherit" sx={{ mr: 1 }} /> : null}
            {isChangingPassword ? "Updating..." : "Update Password"}
          </Button>
        </Paper>

        <Paper elevation={4} sx={{ p: 3, borderRadius: 4, minWidth: 280 }}>
          <Typography variant="h6" fontWeight={600} mb={2}>Account Statistics</Typography>
          {statsLoading ? (
            <Box display="flex" alignItems="center" justifyContent="center" py={2}>
              <CircularProgress color="primary" />
              <Typography variant="body2" ml={2}>Loading stats...</Typography>
            </Box>
          ) : accountStats ? (
            <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
              <Box textAlign="center">
                <Typography variant="h5" fontWeight={700}>{accountStats.totalTasks}</Typography>
                <Typography variant="body2">Total Tasks</Typography>
              </Box>
              <Box textAlign="center">
                <Typography variant="h5" fontWeight={700}>{accountStats.completedTasks}</Typography>
                <Typography variant="body2">Completed</Typography>
              </Box>
              <Box textAlign="center">
                <Typography variant="h5" fontWeight={700}>{accountStats.pendingTasks}</Typography>
                <Typography variant="body2">Pending</Typography>
              </Box>
            </Stack>
          ) : (
            <Typography variant="body2" color="text.secondary">No statistics available.</Typography>
          )}
        </Paper>
      </Stack>
    </Box>
  );
};

export default Profile;

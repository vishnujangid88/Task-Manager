import React, { useState, useEffect, useContext } from 'react';
import api from '../api/axios';
import { toast } from 'react-toastify';
import AuthContext from '../context/AuthContext';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import CheckIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import UndoIcon from '@mui/icons-material/Undo';

interface Task {
  _id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority?: 'low' | 'medium' | 'high'; // New: Task priority
  dueDate?: string; // New: Task due date
}

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [newTaskPriority, setNewTaskPriority] = useState<'low' | 'medium' | 'high'>('medium'); // New state for priority
  const [newTaskDueDate, setNewTaskDueDate] = useState(''); // New state for due date
  const [loading, setLoading] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedDescription, setEditedDescription] = useState('');
  const [editedPriority, setEditedPriority] = useState<'low' | 'medium' | 'high'>('medium'); // New state for edited priority
  const [editedDueDate, setEditedDueDate] = useState(''); // New state for edited due date
  const [searchQuery, setSearchQuery] = useState(''); // New state for search query

  useEffect(() => {
    if (user) fetchTasks();
  }, [user]);

  const fetchTasks = async () => {
    try {
      setLoading(true);
  const res = await api.get<Task[]>('/tasks');
      setTasks(res.data);
    } catch (err) {
      toast.error('Failed to fetch tasks.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) {
      toast.error('Please enter a task title.');
      return;
    }
    
    try {
  await api.post('/tasks', {
        title: newTaskTitle,
        description: newTaskDescription,
        priority: newTaskPriority,
        dueDate: newTaskDueDate,
      });
      setNewTaskTitle('');
      setNewTaskDescription('');
      setNewTaskPriority('medium'); // Reset to default
      setNewTaskDueDate(''); // Reset
      toast.success('Task created successfully!');
      fetchTasks();
    } catch (err) {
      toast.error('Failed to create task.');
      console.error(err);
    }
  };

  const handleUpdateTask = async (id: string, completed: boolean) => {
    try {
  await api.put(`/tasks/${id}`, { completed });
      toast.success('Task status updated successfully!');
      fetchTasks();
    } catch (err) {
      toast.error('Failed to update task status.');
      console.error(err);
    }
  };

  const handleEditClick = (task: Task) => {
    setEditingTaskId(task._id);
    setEditedTitle(task.title);
    setEditedDescription(task.description || '');
    setEditedPriority(task.priority || 'medium'); // Set for editing
    setEditedDueDate(task.dueDate || ''); // Set for editing
  };

  const handleSaveEdit = async (id: string) => {
    if (!editedTitle.trim()) {
      toast.error('Task title cannot be empty.');
      return;
    }

    try {
  await api.put(`/tasks/${id}`, {
        title: editedTitle.trim(),
        description: editedDescription.trim(),
        priority: editedPriority,
        dueDate: editedDueDate,
      });
      toast.success('Task updated successfully!');
      setEditingTaskId(null);
      setEditedTitle('');
      setEditedDescription('');
      setEditedPriority('medium'); // Reset
      setEditedDueDate(''); // Reset
      fetchTasks();
    } catch (err) {
      toast.error('Failed to save task changes.');
      console.error(err);
    }
  };

  const handleCancelEdit = () => {
    setEditingTaskId(null);
    setEditedTitle('');
    setEditedDescription('');
    setEditedPriority('medium'); // Reset
    setEditedDueDate(''); // Reset
  };

  const handleDeleteTask = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this task?')) {
      return;
    }
    
    try {
  await api.delete(`/tasks/${id}`);
      toast.success('Task deleted successfully!');
      fetchTasks();
    } catch (err) {
      toast.error('Failed to delete task.');
      console.error(err);
    }
  };

  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (task.description && task.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (task.priority && task.priority.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (task.dueDate && task.dueDate.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={4} minHeight="80vh" sx={{ fontFamily: 'Inter, Arial, sans-serif' }}>
      <Paper elevation={3} sx={{ p: 3, minWidth: 220, bgcolor: 'background.paper', borderRadius: 4, mb: { xs: 2, md: 0 } }}>
        <Typography variant="h6" fontWeight={700} gutterBottom>Overview</Typography>
        <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center" mb={2}>
          <Chip label={`Total: ${totalTasks}`} color="primary" />
          <Chip label={`Completed: ${completedTasks}`} color="success" />
          <Chip label={`Pending: ${totalTasks - completedTasks}`} color="warning" />
        </Stack>
      </Paper>

      <Box flex={1}>
        <Paper elevation={3} sx={{ p: 3, borderRadius: 4, mb: 3 }}>
          <Typography variant="h5" fontWeight={700} mb={1}>Welcome back, {user?.username || 'Guest'}!</Typography>
          <Typography variant="body2" mb={2}>Manage your tasks efficiently and stay productive</Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="subtitle1" fontWeight={600} mb={1}>Create New Task</Typography>
          <Box component="form" onSubmit={handleCreateTask} display="flex" flexWrap="wrap" gap={2} alignItems="center">
            <TextField
              label="Task Title"
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              required
              disabled={loading}
              sx={{ flex: 2, minWidth: 180 }}
            />
            <TextField
              label="Description (Optional)"
              value={newTaskDescription}
              onChange={(e) => setNewTaskDescription(e.target.value)}
              disabled={loading}
              sx={{ flex: 2, minWidth: 180 }}
            />
            <TextField
              label="Due Date"
              type="date"
              value={newTaskDueDate}
              onChange={(e) => setNewTaskDueDate(e.target.value)}
              disabled={loading}
              sx={{ flex: 1, minWidth: 120 }}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Priority"
              select
              SelectProps={{ native: true }}
              value={newTaskPriority}
              onChange={(e) => setNewTaskPriority(e.target.value as 'low' | 'medium' | 'high')}
              disabled={loading}
              sx={{ flex: 1, minWidth: 120 }}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </TextField>
            <Button type="submit" variant="contained" color="primary" disabled={loading} sx={{ minWidth: 120 }}>
              Add Task
            </Button>
          </Box>
        </Paper>

        <Paper elevation={3} sx={{ p: 3, borderRadius: 4 }}>
          <Typography variant="h6" fontWeight={700} mb={2}>Your Tasks</Typography>
          <TextField
            label="Search tasks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            fullWidth
            sx={{ mb: 2 }}
          />
          {loading ? (
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" py={4}>
              <CircularProgress color="primary" />
              <Typography variant="body2" mt={2}>Loading tasks...</Typography>
            </Box>
          ) : filteredTasks.length === 0 ? (
            <Box textAlign="center" py={4}>
              <Typography variant="h6" fontWeight={600}>No tasks yet or no matches found!</Typography>
              <Typography variant="body2">Create your first task above or try a different search query.</Typography>
            </Box>
          ) : (
            <Stack spacing={2}>
              {filteredTasks.map((task) => (
                <Paper key={task._id} elevation={2} sx={{ p: 2, borderRadius: 3, bgcolor: task.completed ? 'grey.100' : 'background.paper', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box flex={1}>
                    {editingTaskId === task._id ? (
                      <Box display="flex" flexWrap="wrap" gap={2} alignItems="center">
                        <TextField
                          value={editedTitle}
                          onChange={(e) => setEditedTitle(e.target.value)}
                          label="Title"
                          sx={{ minWidth: 120 }}
                        />
                        <TextField
                          value={editedDescription}
                          onChange={(e) => setEditedDescription(e.target.value)}
                          label="Description"
                          sx={{ minWidth: 120 }}
                        />
                        <TextField
                          label="Due Date"
                          type="date"
                          value={editedDueDate}
                          onChange={(e) => setEditedDueDate(e.target.value)}
                          sx={{ minWidth: 120 }}
                          InputLabelProps={{ shrink: true }}
                        />
                        <TextField
                          label="Priority"
                          select
                          SelectProps={{ native: true }}
                          value={editedPriority}
                          onChange={(e) => setEditedPriority(e.target.value as 'low' | 'medium' | 'high')}
                          sx={{ minWidth: 120 }}
                        >
                          <option value="low">Low</option>
                          <option value="medium">Medium</option>
                          <option value="high">High</option>
                        </TextField>
                      </Box>
                    ) : (
                      <Box>
                        <Typography variant="subtitle1" fontWeight={600} display="inline">
                          {task.title}
                        </Typography>
                        {task.priority && (
                          <Chip label={task.priority} color={task.priority === 'high' ? 'error' : task.priority === 'medium' ? 'warning' : 'default'} size="small" sx={{ ml: 1 }} />
                        )}
                        {task.description && (
                          <Typography variant="body2" color="text.secondary" mt={0.5}>{task.description}</Typography>
                        )}
                        {task.dueDate && (
                          <Typography variant="caption" color="text.secondary">Due: {new Date(task.dueDate).toLocaleDateString()}</Typography>
                        )}
                      </Box>
                    )}
                  </Box>
                  <Box display="flex" gap={1} alignItems="center">
                    {editingTaskId === task._id ? (
                      <>
                        <Tooltip title="Save">
                          <IconButton color="primary" onClick={() => handleSaveEdit(task._id)}>
                            <CheckIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Cancel">
                          <IconButton color="warning" onClick={handleCancelEdit}>
                            <UndoIcon />
                          </IconButton>
                        </Tooltip>
                      </>
                    ) : (
                      <>
                        <Tooltip title={task.completed ? 'Mark Incomplete' : 'Mark Complete'}>
                          <IconButton color={task.completed ? 'warning' : 'success'} onClick={() => handleUpdateTask(task._id, !task.completed)}>
                            <CheckIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Edit">
                          <IconButton color="info" onClick={() => handleEditClick(task)}>
                            <EditIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                          <IconButton color="error" onClick={() => handleDeleteTask(task._id)}>
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      </>
                    )}
                  </Box>
                </Paper>
              ))}
            </Stack>
          )}
        </Paper>
      </Box>
    </Box>
  );
};

export default Dashboard;

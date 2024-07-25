import React, { useState } from 'react';
import { Box, Button, Paper, Stack, Typography, TextField, IconButton } from '@mui/material';
import { Add as AddIcon, Close as CloseIcon } from '@mui/icons-material';

const TodoList = () => {
  const [todos, setTodos] = useState<{ id: number; text: string; completed: boolean }[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() === '') return;
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo('');
  };

  const handleToggleTodo = (id: number) => {
    setTodos(prevTodos =>
      prevTodos
        .map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
        .sort((a, b) => Number(a.completed) - Number(b.completed))
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <Paper
      sx={{
        p: { xs: 4, sm: 8 },
        height: 1,
        position: 'relative',
        borderRadius: '10px',
        border: '2px solid transparent',
        backgroundColor: 'background.paper', // Ensures the background color is `background.paper`
        boxShadow: '0 0 15px rgba(128, 0, 128, 0.7)', // Purple glow effect
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-2px',
          left: '-2px',
          right: '-2px',
          bottom: '-2px',
          borderRadius: '10px',
          border: '2px solid #800080', // Purple neon border
          pointerEvents: 'none',
        }
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={2} mb={6}>
        <Typography variant="h4" color="common.white">
          Daily Checklist
        </Typography>
      </Stack>
      <Box>
        <Stack direction="row" spacing={2} mb={4}>
          <TextField
            fullWidth
            value={newTodo}
            onChange={e => setNewTodo(e.target.value)}
            placeholder="Add a new task"
          />
          <IconButton color="primary" onClick={handleAddTodo}>
            <AddIcon />
          </IconButton>
        </Stack>
        <Box
          sx={{
            maxHeight: '60vh', // Maximum height for the list
            overflowY: 'auto', // Enable vertical scrolling
            '&::-webkit-scrollbar': {
              width: '8px',
            },
            '&::-webkit-scrollbar-track': {
              background: '#f1f1f1',
              borderRadius: '10px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#888',
              borderRadius: '10px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              background: '#555',
            },
          }}
        >
          <Stack spacing={1}>
            {todos.map(todo => (
              <Box
                key={todo.id}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  p: 2,
                  borderRadius: 1,
                  bgcolor: 'background.paper',
                  boxShadow: 1,
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: 'grey.200',
                  },
                }}
                onClick={() => handleToggleTodo(todo.id)}
              >
                <Typography
                  variant="body1"
                  sx={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    flexGrow: 1,
                  }}
                >
                  {todo.text}
                </Typography>
                <IconButton color="error" onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteTodo(todo.id);
                }}>
                  <CloseIcon />
                </IconButton>
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>
    </Paper>
  );
};

export default TodoList;

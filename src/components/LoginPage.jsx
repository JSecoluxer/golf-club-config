import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
} from '@mui/material';

const LoginPage = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Fixed credentials for validation.
  const fixedUsername = 'admin';
  const fixedPassword = 'admin';

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === fixedUsername && password === fixedPassword) {
      setError('');
      // Simulate a network delay before calling the success function.
      setTimeout(() => {
        onLoginSuccess();
      }, 500);
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#005A2B', // Deep green background
        color: 'white',
        p: 2,
      }}
    >
      <Container
        maxWidth="xs"
        sx={{
          backgroundColor: 'rgba(0,0,0,0.3)',
          p: 4,
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom color="white" sx={{ fontWeight: 'bold' }}>
          Golvana Setup Wizard
        </Typography>
        {/*
        <Box
          component="img"
          src="/logos/golf-logo.png" // Replace with your logo path
          alt="Golf Logo"
          sx={{ width: 100, height: 100, mb: 2 }}
        />
        */}
        <form onSubmit={handleLogin} style={{ width: '100%' }}>
          <TextField
            fullWidth
            label="Username"
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'white' },
                '&:hover fieldset': { borderColor: '#FDB813' },
                '&.Mui-focused fieldset': { borderColor: '#FDB813', color: 'white' },
                // backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent white
                color: 'white',
              },
              '& .MuiInputLabel-root': { color: 'white' },
              '& .MuiInputBase-input': { color: 'white' },
              mb: 2,
            }}
            InputLabelProps={{
              sx: {
                '&.Mui-focused': {
                  color: 'white',
                },
              },
            }}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'white' },
                '&:hover fieldset': { borderColor: '#FDB813' },
                '&.Mui-focused fieldset': { borderColor: '#FDB813', color: 'white' },
                // backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
              },
              '& .MuiInputLabel-root': { color: 'white' },
              '& .MuiInputBase-input': { color: 'white' },
              mb: 2,
            }}
            InputLabelProps={{
              sx: {
                '&.Mui-focused': {
                  color: 'white',
                },
              },
            }}
          />
          {error && (
            <Typography variant="body2" color="error" sx={{ textAlign: 'center', mb: 2, fontSize: '1rem' }}>
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: '#FDB813', // Gold button
              '&:hover': {
                backgroundColor: '#E0A300',
              },
              color: '#005A2B', // Text color for the button
              fontWeight: 'bold',
            }}
          >
            Login
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default LoginPage;

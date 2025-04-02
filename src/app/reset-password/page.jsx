'use client';

import React, { useState } from 'react';
import { Box, Typography, Grid, Paper, TextField, Button, Alert } from '@mui/material';
import { useRouter } from 'next/navigation';

const ResetPasswordPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      // TODO: Implement password reset logic here
      setSuccess('Password reset instructions have been sent to your email.');
    } catch (err) {
      setError('Failed to send reset instructions. Please try again.');
    }
  };

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      p: 2,
      bgcolor: '#f5f5f5'
    }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom align="center">
              Reset Password
            </Typography>
            
            <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 3 }}>
              Enter your email address and we'll send you instructions to reset your password.
            </Typography>

            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}

            {success && (
              <Alert severity="success" sx={{ mb: 2 }}>
                {success}
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                sx={{ mb: 3 }}
              />

              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
                size="large"
                sx={{ mb: 2 }}
              >
                Send Reset Instructions
              </Button>

              <Button
                fullWidth
                variant="text"
                onClick={() => router.push('/login')}
                size="large"
              >
                Back to Login
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ResetPasswordPage; 
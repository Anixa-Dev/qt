'use client';

import React from 'react';
import { Box, Typography, Grid, Paper, TextField, Button, Link } from '@mui/material';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();

  return (
    <Box sx={{ 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      bgcolor: 'grey.100'
    }}>
      <Grid container justifyContent="center" alignItems="center" sx={{ py: 4 }}>
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Paper sx={{ p: 4 }}>
            <Typography variant="h4" align="center" gutterBottom>
              Login
            </Typography>
            <Typography variant="body1" align="center" color="text.secondary" gutterBottom>
              Welcome back! Please login to your account.
            </Typography>
            <Box component="form" sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    size="large"
                  >
                    Login
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Link 
                      component="button"
                      variant="body2"
                      onClick={() => router.push('/forgot-password')}
                    >
                      Forgot Password?
                    </Link>
                    <Link 
                      component="button"
                      variant="body2"
                      onClick={() => router.push('/signup')}
                    >
                      Don't have an account? Sign up
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginPage;

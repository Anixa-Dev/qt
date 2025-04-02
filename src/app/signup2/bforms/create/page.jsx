'use client';

import React, { useState } from 'react';
import { Box, Typography, Grid, Paper, TextField, Button, Alert, FormControlLabel, Checkbox, Link } from '@mui/material';
import { useRouter } from 'next/navigation';

const SignupForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'acceptTerms' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!formData.acceptTerms) {
      setError('Please accept the terms and conditions');
      return;
    }

    try {
      // TODO: Implement signup logic here
      setSuccess('Account created successfully! Please check your email for verification.');
    } catch (err) {
      setError('Failed to create account. Please try again.');
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
              Create Account
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
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="acceptTerms"
                        checked={formData.acceptTerms}
                        onChange={handleChange}
                        color="primary"
                      />
                    }
                    label={
                      <Typography variant="body2">
                        I accept the{' '}
                        <Link href="/terms" target="_blank">
                          Terms and Conditions
                        </Link>
                        {' '}and{' '}
                        <Link href="/privacy" target="_blank">
                          Privacy Policy
                        </Link>
                      </Typography>
                    }
                  />
                </Grid>
              </Grid>

              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
                size="large"
                sx={{ mt: 3, mb: 2 }}
              >
                Create Account
              </Button>

              <Typography variant="body2" align="center">
                Already have an account?{' '}
                <Link href="/login" onClick={(e) => {
                  e.preventDefault();
                  router.push('/login');
                }}>
                  Sign in
                </Link>
              </Typography>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignupForm; 
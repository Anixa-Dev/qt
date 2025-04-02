'use client';

import React from 'react';
import { Box, Typography, Grid, Paper, Button } from '@mui/material';
import { useRouter } from 'next/navigation';

const EmailVerificationPage = () => {
  const router = useRouter();

  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3} justifyContent="center" alignItems="center" sx={{ minHeight: '80vh' }}>
        <Grid item xs={12} sm={8} md={6}>
          <Paper sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>
              Email Verification
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ mb: 4 }}>
              Please check your email for a verification link. Click the link to verify your account.
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              size="large"
              onClick={() => router.push('/login')}
            >
              Return to Login
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EmailVerificationPage; 
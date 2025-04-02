'use client';

import React from 'react';
import { Box, Typography, Grid, Paper, CircularProgress, Button } from '@mui/material';
import { useRouter } from 'next/navigation';

const PaymentStatusPage = () => {
  const router = useRouter();

  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3} justifyContent="center" alignItems="center" sx={{ minHeight: '80vh' }}>
        <Grid item xs={12} sm={8} md={6}>
          <Paper sx={{ p: 4, textAlign: 'center' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
              <CircularProgress size={60} />
            </Box>
            <Typography variant="h4" gutterBottom>
              Processing Payment
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ mb: 4 }}>
              Please wait while we process your payment. This may take a few moments.
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              size="large"
              onClick={() => router.push('/user/transactions')}
            >
              View Transactions
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PaymentStatusPage; 
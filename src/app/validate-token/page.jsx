'use client';

import React, { useState } from 'react';
import { Box, Typography, Grid, Paper, TextField, Button, Alert, CircularProgress } from '@mui/material';
import { useRouter } from 'next/navigation';

const ValidateTokenPage = () => {
  const router = useRouter();
  const [tokenId, setTokenId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleValidate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // Mock API call - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate validation logic
      if (tokenId.length < 10) {
        throw new Error('Invalid token ID format');
      }

      setSuccess('Token validated successfully!');
      // Redirect to token details page after successful validation
      setTimeout(() => {
        router.push(`/token/${tokenId}`);
      }, 2000);
    } catch (err) {
      setError(err.message || 'Failed to validate token');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={8} lg={6}>
          <Paper sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom align="center">
              Validate Token
            </Typography>
            
            <Typography variant="body1" color="text.secondary" paragraph align="center" sx={{ mb: 4 }}>
              Enter the token ID to validate its authenticity and view its details
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

            <form onSubmit={handleValidate}>
              <TextField
                fullWidth
                label="Token ID"
                variant="outlined"
                value={tokenId}
                onChange={(e) => setTokenId(e.target.value)}
                placeholder="Enter token ID"
                required
                sx={{ mb: 3 }}
              />

              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
                disabled={loading}
                sx={{ py: 1.5 }}
              >
                {loading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  'Validate Token'
                )}
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ValidateTokenPage; 
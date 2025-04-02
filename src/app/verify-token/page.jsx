 'use client';

import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Paper, CircularProgress, Alert, Button } from '@mui/material';
import { useRouter, useSearchParams } from 'next/navigation';

const VerifyTokenPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [tokenData, setTokenData] = useState(null);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const token = searchParams.get('token');
        if (!token) {
          throw new Error('No token provided');
        }

        // Mock API call - replace with actual API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Simulate token verification
        if (token.length < 10) {
          throw new Error('Invalid token format');
        }

        // Mock token data
        setTokenData({
          name: 'Sample Token',
          symbol: 'SMPL',
          status: 'Active',
          createdAt: '2024-03-15',
          issuer: 'Sample Company',
          totalSupply: '1,000,000',
          decimals: 18
        });
        
        setSuccess('Token verified successfully!');
      } catch (err) {
        setError(err.message || 'Failed to verify token');
      } finally {
        setLoading(false);
      }
    };

    verifyToken();
  }, [searchParams]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={8} lg={6}>
          <Paper sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom align="center">
              Token Verification
            </Typography>

            {error && (
              <Alert severity="error" sx={{ mb: 3 }}>
                {error}
              </Alert>
            )}

            {success && tokenData && (
              <>
                <Alert severity="success" sx={{ mb: 3 }}>
                  {success}
                </Alert>

                <Box sx={{ mt: 4 }}>
                  <Typography variant="h6" gutterBottom>
                    Token Details
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="subtitle2" color="text.secondary">
                        Name
                      </Typography>
                      <Typography variant="body1">
                        {tokenData.name}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="subtitle2" color="text.secondary">
                        Symbol
                      </Typography>
                      <Typography variant="body1">
                        {tokenData.symbol}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="subtitle2" color="text.secondary">
                        Status
                      </Typography>
                      <Typography variant="body1">
                        {tokenData.status}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="subtitle2" color="text.secondary">
                        Created At
                      </Typography>
                      <Typography variant="body1">
                        {tokenData.createdAt}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="subtitle2" color="text.secondary">
                        Issuer
                      </Typography>
                      <Typography variant="body1">
                        {tokenData.issuer}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="subtitle2" color="text.secondary">
                        Total Supply
                      </Typography>
                      <Typography variant="body1">
                        {tokenData.totalSupply}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>

                <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => router.push(`/token/${searchParams.get('token')}`)}
                  >
                    View Token Details
                  </Button>
                </Box>
              </>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default VerifyTokenPage;
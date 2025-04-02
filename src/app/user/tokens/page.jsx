'use client';

import React from 'react';
import { Box, Typography, Grid, Paper, Card, CardContent, CardActions, Button, Chip, IconButton } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

const UserTokensPage = () => {
  const router = useRouter();

  // Mock data - replace with actual data fetching
  const tokens = [
    {
      id: 1,
      name: 'Premium Token',
      symbol: 'PREMIUM',
      status: 'Active',
      value: '5,000.00',
      lastUpdated: '2024-03-15',
      category: 'Digital Asset',
      type: 'Utility'
    },
    {
      id: 2,
      name: 'Starter Token',
      symbol: 'START',
      status: 'Active',
      value: '2,500.00',
      lastUpdated: '2024-03-14',
      category: 'Security',
      type: 'Governance'
    }
  ];

  const handleEdit = (tokenId) => {
    router.push(`/user/token-form/bforms/edit?id=${tokenId}`);
  };

  const handleDelete = (tokenId) => {
    // TODO: Implement delete logic
    console.log('Delete token:', tokenId);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h4">
                My Tokens
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => router.push('/create-token')}
              >
                Create New Token
              </Button>
            </Box>

            <Grid container spacing={3}>
              {tokens.map((token) => (
                <Grid item xs={12} md={6} key={token.id}>
                  <Card>
                    <CardContent>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                        <Typography variant="h6">
                          {token.name}
                        </Typography>
                        <Chip 
                          label={token.status} 
                          color={token.status === 'Active' ? 'success' : 'warning'}
                          size="small"
                        />
                      </Box>

                      <Typography color="text.secondary" gutterBottom>
                        Symbol: {token.symbol}
                      </Typography>
                      <Typography color="text.secondary" gutterBottom>
                        Value: ${token.value}
                      </Typography>
                      <Typography color="text.secondary" gutterBottom>
                        Category: {token.category}
                      </Typography>
                      <Typography color="text.secondary" gutterBottom>
                        Type: {token.type}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Last Updated: {token.lastUpdated}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'flex-end' }}>
                      <IconButton 
                        color="primary"
                        onClick={() => handleEdit(token.id)}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton 
                        color="error"
                        onClick={() => handleDelete(token.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserTokensPage; 
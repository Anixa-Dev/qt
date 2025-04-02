'use client';

import React from 'react';
import { Box, Typography, Grid, Paper, Card, CardContent, CardActions, Button, Chip } from '@mui/material';
import { useRouter } from 'next/navigation';

const UserLandingPage = () => {
  const router = useRouter();

  // Mock data - replace with actual data fetching
  const userStats = {
    totalTokens: 5,
    totalPurchases: 12,
    activeSubscriptions: 2,
    totalBalance: '10,000.00'
  };

  const recentTokens = [
    {
      id: 1,
      name: 'Premium Token',
      status: 'Active',
      value: '5,000.00',
      lastUpdated: '2024-03-15'
    },
    {
      id: 2,
      name: 'Starter Token',
      status: 'Active',
      value: '2,500.00',
      lastUpdated: '2024-03-14'
    }
  ];

  const recentTransactions = [
    {
      id: 1,
      type: 'Purchase',
      amount: '1,000.00',
      date: '2024-03-15',
      status: 'Completed'
    },
    {
      id: 2,
      type: 'Transfer',
      amount: '500.00',
      date: '2024-03-14',
      status: 'Completed'
    }
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        {/* Welcome Section */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h4" gutterBottom>
              Welcome back, User!
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Here's an overview of your account
            </Typography>
          </Paper>
        </Grid>

        {/* Stats Cards */}
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="text.secondary" gutterBottom>
                Total Tokens
              </Typography>
              <Typography variant="h4">
                {userStats.totalTokens}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="text.secondary" gutterBottom>
                Total Purchases
              </Typography>
              <Typography variant="h4">
                {userStats.totalPurchases}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="text.secondary" gutterBottom>
                Active Subscriptions
              </Typography>
              <Typography variant="h4">
                {userStats.activeSubscriptions}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="text.secondary" gutterBottom>
                Total Balance
              </Typography>
              <Typography variant="h4">
                ${userStats.totalBalance}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Recent Tokens */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Recent Tokens
            </Typography>
            {recentTokens.map((token) => (
              <Card key={token.id} sx={{ mb: 2 }}>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6">{token.name}</Typography>
                    <Chip 
                      label={token.status} 
                      color={token.status === 'Active' ? 'success' : 'warning'}
                      size="small"
                    />
                  </Box>
                  <Typography color="text.secondary">
                    Value: ${token.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Last Updated: {token.lastUpdated}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => router.push(`/token/${token.id}`)}>
                    View Details
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Paper>
        </Grid>

        {/* Recent Transactions */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Recent Transactions
            </Typography>
            {recentTransactions.map((transaction) => (
              <Card key={transaction.id} sx={{ mb: 2 }}>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6">{transaction.type}</Typography>
                    <Chip 
                      label={transaction.status} 
                      color={transaction.status === 'Completed' ? 'success' : 'warning'}
                      size="small"
                    />
                  </Box>
                  <Typography color="text.secondary">
                    Amount: ${transaction.amount}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Date: {transaction.date}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => router.push(`/transaction-details?id=${transaction.id}`)}>
                    View Details
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserLandingPage; 
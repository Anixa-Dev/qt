'use client';

import React from 'react';
import { Box, Typography, Grid, Paper, Divider, Chip, Button } from '@mui/material';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

const UserSubscriptionDetailPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const subscriptionId = searchParams.get('id');

  // Mock subscription data - replace with actual data fetching
  const subscription = {
    id: subscriptionId || 'SUB-123456',
    name: 'Premium Subscription',
    status: 'Active',
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    amount: '99.99',
    currency: 'USD',
    billingCycle: 'Monthly',
    autoRenew: true,
    features: [
      'Unlimited Token Access',
      'Priority Support',
      'Advanced Analytics',
      'Custom Branding'
    ],
    paymentMethod: 'Credit Card',
    lastPayment: '2024-03-01',
    nextPayment: '2024-04-01'
  };

  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h4">
                Subscription Details
              </Typography>
              <Chip 
                label={subscription.status} 
                color={subscription.status === 'Active' ? 'success' : 'warning'}
                size="large"
              />
            </Box>

            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  Subscription Plan
                </Typography>
                <Typography variant="h6" gutterBottom>
                  {subscription.name}
                </Typography>

                <Typography variant="subtitle2" color="text.secondary" gutterBottom sx={{ mt: 2 }}>
                  Billing Cycle
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {subscription.billingCycle}
                </Typography>

                <Typography variant="subtitle2" color="text.secondary" gutterBottom sx={{ mt: 2 }}>
                  Amount
                </Typography>
                <Typography variant="body1" gutterBottom>
                  ${subscription.amount} {subscription.currency}
                </Typography>

                <Typography variant="subtitle2" color="text.secondary" gutterBottom sx={{ mt: 2 }}>
                  Payment Method
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {subscription.paymentMethod}
                </Typography>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  Subscription Period
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Start Date: {subscription.startDate}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  End Date: {subscription.endDate}
                </Typography>

                <Typography variant="subtitle2" color="text.secondary" gutterBottom sx={{ mt: 2 }}>
                  Payment History
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Last Payment: {subscription.lastPayment}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Next Payment: {subscription.nextPayment}
                </Typography>

                <Typography variant="subtitle2" color="text.secondary" gutterBottom sx={{ mt: 2 }}>
                  Auto-Renewal
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {subscription.autoRenew ? 'Enabled' : 'Disabled'}
                </Typography>
              </Grid>
            </Grid>

            <Divider sx={{ my: 3 }} />

            <Box>
              <Typography variant="h6" gutterBottom>
                Included Features
              </Typography>
              <Grid container spacing={2}>
                {subscription.features.map((feature, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <Chip
                      label={feature}
                      color="primary"
                      variant="outlined"
                      sx={{ width: '100%' }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>

            <Box sx={{ mt: 3, display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
              <Button
                variant="outlined"
                onClick={() => router.back()}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => router.push('/user/subscriptions')}
              >
                Manage Subscription
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserSubscriptionDetailPage; 
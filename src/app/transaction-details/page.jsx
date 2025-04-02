'use client';

import React from 'react';
import { Box, Typography, Grid, Paper, Divider, Chip } from '@mui/material';
import { useSearchParams } from 'next/navigation';

const TransactionDetailsPage = () => {
  const searchParams = useSearchParams();
  const transactionId = searchParams.get('id');

  // Mock transaction data - replace with actual data fetching
  const transaction = {
    id: transactionId || 'TRX-123456',
    date: '2024-03-15 14:30:00',
    type: 'Purchase',
    status: 'Completed',
    amount: '1,000.00',
    currency: 'USD',
    tokenName: 'Sample Token',
    tokenAmount: '100',
    from: '0x1234...5678',
    to: '0x8765...4321',
    gasFee: '0.005 ETH',
    blockNumber: '12345678',
    hash: '0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890'
  };

  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h4">
                Transaction Details
              </Typography>
              <Chip 
                label={transaction.status} 
                color={transaction.status === 'Completed' ? 'success' : 'warning'}
                size="large"
              />
            </Box>

            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  Transaction ID
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {transaction.id}
                </Typography>

                <Typography variant="subtitle2" color="text.secondary" gutterBottom sx={{ mt: 2 }}>
                  Date & Time
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {transaction.date}
                </Typography>

                <Typography variant="subtitle2" color="text.secondary" gutterBottom sx={{ mt: 2 }}>
                  Type
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {transaction.type}
                </Typography>

                <Typography variant="subtitle2" color="text.secondary" gutterBottom sx={{ mt: 2 }}>
                  Amount
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {transaction.amount} {transaction.currency}
                </Typography>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  Token Details
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {transaction.tokenAmount} {transaction.tokenName}
                </Typography>

                <Typography variant="subtitle2" color="text.secondary" gutterBottom sx={{ mt: 2 }}>
                  From Address
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {transaction.from}
                </Typography>

                <Typography variant="subtitle2" color="text.secondary" gutterBottom sx={{ mt: 2 }}>
                  To Address
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {transaction.to}
                </Typography>

                <Typography variant="subtitle2" color="text.secondary" gutterBottom sx={{ mt: 2 }}>
                  Gas Fee
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {transaction.gasFee}
                </Typography>
              </Grid>
            </Grid>

            <Divider sx={{ my: 3 }} />

            <Box>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                Transaction Hash
              </Typography>
              <Typography variant="body2" sx={{ wordBreak: 'break-all' }}>
                {transaction.hash}
              </Typography>
            </Box>

            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                Block Number
              </Typography>
              <Typography variant="body1">
                {transaction.blockNumber}
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TransactionDetailsPage; 
'use client';

import React from 'react';
import { Box, Typography, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, IconButton, Button } from '@mui/material';
import { Visibility as VisibilityIcon } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

const UserTransactionsPage = () => {
  const router = useRouter();

  // Mock data - replace with actual data fetching
  const transactions = [
    {
      id: 1,
      date: '2024-03-15',
      type: 'Purchase',
      amount: '1,000.00',
      status: 'Completed',
      tokenName: 'Premium Token',
      tokenAmount: '100',
      transactionHash: '0x1234...5678'
    },
    {
      id: 2,
      date: '2024-03-14',
      type: 'Transfer',
      amount: '500.00',
      status: 'Completed',
      tokenName: 'Starter Token',
      tokenAmount: '50',
      transactionHash: '0x8765...4321'
    },
    {
      id: 3,
      date: '2024-03-13',
      type: 'Purchase',
      amount: '2,000.00',
      status: 'Pending',
      tokenName: 'Enterprise Token',
      tokenAmount: '200',
      transactionHash: '0xabcd...efgh'
    }
  ];

  const handleViewDetails = (transactionId) => {
    router.push(`/transaction-details?id=${transactionId}`);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h4">
                Transaction History
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => router.push('/buy-token')}
              >
                New Transaction
              </Button>
            </Box>

            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Token</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {transactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell>{transaction.type}</TableCell>
                      <TableCell>
                        {transaction.tokenAmount} {transaction.tokenName}
                      </TableCell>
                      <TableCell>${transaction.amount}</TableCell>
                      <TableCell>
                        <Chip 
                          label={transaction.status} 
                          color={transaction.status === 'Completed' ? 'success' : 'warning'}
                          size="small"
                        />
                      </TableCell>
                      <TableCell>
                        <IconButton 
                          color="primary"
                          onClick={() => handleViewDetails(transaction.id)}
                        >
                          <VisibilityIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserTransactionsPage; 
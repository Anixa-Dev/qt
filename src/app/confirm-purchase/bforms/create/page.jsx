'use client';

import React from 'react';
import { Box, Typography, Grid, Paper, Button } from '@mui/material';

const ConfirmPurchaseForm = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
              Confirm Purchase
            </Typography>
            <Typography variant="body1" gutterBottom>
              Please review your purchase details before confirming.
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Button variant="contained" color="primary">
                Confirm Purchase
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ConfirmPurchaseForm; 
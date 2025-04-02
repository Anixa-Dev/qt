'use client';

import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

const CompanyTokensPage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
              Company Tokens
            </Typography>
            <Typography variant="body1">
              Manage your company's tokens and token-related information here.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CompanyTokensPage; 
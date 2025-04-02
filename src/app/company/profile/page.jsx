'use client';

import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

const CompanyProfilePage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
              Company Profile
            </Typography>
            <Typography variant="body1">
              Manage your company information and settings here.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CompanyProfilePage; 
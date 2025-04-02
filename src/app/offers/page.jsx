 'use client';

import React from 'react';
import { Box, Typography, Grid, Paper, Card, CardContent, CardActions, Button, Chip } from '@mui/material';

const OffersPage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Available Offers
      </Typography>
      <Grid container spacing={3}>
        {/* Offer Card 1 */}
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Premium Token Package
              </Typography>
              <Typography color="text.secondary" gutterBottom>
                Get 1000 tokens at a special rate
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                <Chip label="Limited Time" color="primary" />
                <Chip label="Best Value" color="success" />
              </Box>
              <Typography variant="h5" color="primary">
                $999
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="primary" fullWidth>
                Purchase Now
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Offer Card 2 */}
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Starter Package
              </Typography>
              <Typography color="text.secondary" gutterBottom>
                Perfect for beginners
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                <Chip label="New" color="info" />
                <Chip label="Popular" color="warning" />
              </Box>
              <Typography variant="h5" color="primary">
                $499
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="primary" fullWidth>
                Purchase Now
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Offer Card 3 */}
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Enterprise Package
              </Typography>
              <Typography color="text.secondary" gutterBottom>
                For large organizations
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                <Chip label="Custom" color="secondary" />
                <Chip label="Premium" color="error" />
              </Box>
              <Typography variant="h5" color="primary">
                Contact Us
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="primary" fullWidth>
                Contact Sales
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OffersPage;
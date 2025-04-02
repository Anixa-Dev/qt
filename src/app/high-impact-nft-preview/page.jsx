'use client';

import React from 'react';
import { Box, Typography, Grid, Paper, Button, Card, CardContent, CardMedia } from '@mui/material';
import { useParams } from 'next/navigation';

const HighImpactNftPreviewPage = () => {
  const params = useParams();
  const { token_id } = params;

  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
              High Impact NFT Preview
            </Typography>
            <Typography variant="body1" gutterBottom>
              Token ID: {token_id}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="400"
              image="/placeholder-nft.jpg"
              alt="NFT Preview"
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                NFT Details
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Preview of your high impact NFT. This is a placeholder for the actual NFT content.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h5" gutterBottom>
              Impact Details
            </Typography>
            <Typography variant="body1" paragraph>
              This NFT represents a high-impact digital asset with special properties and benefits.
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Button variant="contained" color="primary" size="large">
                Purchase NFT
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HighImpactNftPreviewPage; 
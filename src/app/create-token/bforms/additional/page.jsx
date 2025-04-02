'use client';

import React from 'react';
import { Box, Typography, Grid, Paper, TextField, Button } from '@mui/material';

const EditAdditionalInfoForm = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
              Additional Token Information
            </Typography>
            <Typography variant="body1" gutterBottom>
              Add additional details about your token.
            </Typography>
            <Box component="form" sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Description"
                    multiline
                    rows={4}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Website"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Social Media Links"
                    multiline
                    rows={2}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="primary">
                    Save Changes
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EditAdditionalInfoForm; 
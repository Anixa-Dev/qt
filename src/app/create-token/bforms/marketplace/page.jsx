'use client';

import React from 'react';
import { Box, Typography, Grid, Paper, TextField, Button, FormControl, InputLabel, Select, MenuItem, Switch, FormControlLabel } from '@mui/material';

const EditSecondaryMarketplace = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
              Secondary Marketplace Settings
            </Typography>
            <Typography variant="body1" gutterBottom>
              Configure your token's secondary marketplace options.
            </Typography>
            <Box component="form" sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Switch defaultChecked />}
                    label="Enable Secondary Market Trading"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Minimum Price"
                    type="number"
                    variant="outlined"
                    defaultValue="0.00"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Maximum Price"
                    type="number"
                    variant="outlined"
                    defaultValue="1000000.00"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>Price Currency</InputLabel>
                    <Select
                      label="Price Currency"
                      defaultValue="USD"
                      variant="outlined"
                    >
                      <MenuItem value="USD">USD</MenuItem>
                      <MenuItem value="EUR">EUR</MenuItem>
                      <MenuItem value="GBP">GBP</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Trading Fee (%)"
                    type="number"
                    variant="outlined"
                    defaultValue="2.5"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Switch defaultChecked />}
                    label="Allow Instant Trading"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="primary" size="large">
                    Save Marketplace Settings
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

export default EditSecondaryMarketplace; 
'use client';

import React from 'react';
import { Box, Typography, Grid, Paper, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const CreateTokenForm = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
              Create New Token
            </Typography>
            <Typography variant="body1" gutterBottom>
              Fill in the details to create your new token.
            </Typography>
            <Box component="form" sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Token Name"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Token Symbol"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Total Supply"
                    type="number"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>Token Type</InputLabel>
                    <Select
                      label="Token Type"
                      defaultValue=""
                      variant="outlined"
                      required
                    >
                      <MenuItem value="standard">Standard Token</MenuItem>
                      <MenuItem value="custom">Custom Token</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
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
                  <Button variant="contained" color="primary" size="large">
                    Create Token
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

export default CreateTokenForm; 
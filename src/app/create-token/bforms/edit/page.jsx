'use client';

import React from 'react';
import { Box, Typography, Grid, Paper, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useParams } from 'next/navigation';

const EditTokenForm = () => {
  const params = useParams();
  const { token_id } = params;

  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
              Edit Token
            </Typography>
            <Typography variant="body1" gutterBottom>
              Modify your token details below.
            </Typography>
            <Box component="form" sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Token Name"
                    variant="outlined"
                    required
                    defaultValue="Token Name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Token Symbol"
                    variant="outlined"
                    required
                    defaultValue="TKN"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Total Supply"
                    type="number"
                    variant="outlined"
                    required
                    defaultValue="1000000"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>Token Type</InputLabel>
                    <Select
                      label="Token Type"
                      defaultValue="standard"
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
                    defaultValue="Token description"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="primary" size="large">
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

export default EditTokenForm; 
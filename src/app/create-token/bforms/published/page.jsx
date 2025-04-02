'use client';

import React from 'react';
import { Box, Typography, Grid, Paper, TextField, Button, FormControl, InputLabel, Select, MenuItem, Chip } from '@mui/material';
import { useParams } from 'next/navigation';

const EditPublishedToken = () => {
  const params = useParams();
  const { token_id } = params;

  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
              Edit Published Token
            </Typography>
            <Typography variant="body1" gutterBottom>
              Token ID: {token_id}
            </Typography>
            <Box component="form" sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Token Name"
                    variant="outlined"
                    required
                    defaultValue="Published Token"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Token Symbol"
                    variant="outlined"
                    required
                    defaultValue="PTK"
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
                    <InputLabel>Status</InputLabel>
                    <Select
                      label="Status"
                      defaultValue="published"
                      variant="outlined"
                      required
                    >
                      <MenuItem value="published">Published</MenuItem>
                      <MenuItem value="draft">Draft</MenuItem>
                      <MenuItem value="archived">Archived</MenuItem>
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
                    defaultValue="This is a published token"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    <Chip label="Active" color="success" />
                    <Chip label="Verified" color="primary" />
                    <Chip label="Tradable" color="info" />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="primary" size="large">
                    Update Token
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

export default EditPublishedToken; 
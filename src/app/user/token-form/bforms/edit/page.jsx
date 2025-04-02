'use client';

import React, { useState } from 'react';
import { Box, Typography, Grid, Paper, TextField, Button, Alert, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useRouter, useSearchParams } from 'next/navigation';

const EditUserTokenForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tokenId = searchParams.get('id');

  const [formData, setFormData] = useState({
    name: 'Sample Token',
    description: 'This is a sample token description',
    category: 'Digital Asset',
    type: 'Utility',
    status: 'Active',
    supply: '1000000',
    decimals: '18',
    symbol: 'SMPL'
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      // TODO: Implement token update logic here
      setSuccess('Token updated successfully!');
    } catch (err) {
      setError('Failed to update token. Please try again.');
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
              Edit Token
            </Typography>

            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}

            {success && (
              <Alert severity="success" sx={{ mb: 2 }}>
                {success}
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Token Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Token Symbol"
                    name="symbol"
                    value={formData.symbol}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      label="Category"
                    >
                      <MenuItem value="Digital Asset">Digital Asset</MenuItem>
                      <MenuItem value="Security">Security</MenuItem>
                      <MenuItem value="Utility">Utility</MenuItem>
                      <MenuItem value="Collectible">Collectible</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      label="Type"
                    >
                      <MenuItem value="Utility">Utility</MenuItem>
                      <MenuItem value="Security">Security</MenuItem>
                      <MenuItem value="Governance">Governance</MenuItem>
                      <MenuItem value="Payment">Payment</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Total Supply"
                    name="supply"
                    type="number"
                    value={formData.supply}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Decimals"
                    name="decimals"
                    type="number"
                    value={formData.decimals}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <InputLabel>Status</InputLabel>
                    <Select
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      label="Status"
                    >
                      <MenuItem value="Active">Active</MenuItem>
                      <MenuItem value="Paused">Paused</MenuItem>
                      <MenuItem value="Archived">Archived</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>

              <Box sx={{ mt: 3, display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                <Button
                  variant="outlined"
                  onClick={() => router.back()}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  type="submit"
                  color="primary"
                >
                  Save Changes
                </Button>
              </Box>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EditUserTokenForm; 
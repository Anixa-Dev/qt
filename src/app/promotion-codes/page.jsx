'use client';

import React from 'react';
import { Box, Typography, Grid, Paper, Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

const PromotionCodesPage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h4">
                Promotion Codes
              </Typography>
              <Button variant="contained" color="primary">
                Add New Code
              </Button>
            </Box>

            {/* Promotion Codes Table */}
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Code</TableCell>
                    <TableCell>Discount</TableCell>
                    <TableCell>Valid From</TableCell>
                    <TableCell>Valid Until</TableCell>
                    <TableCell>Usage Limit</TableCell>
                    <TableCell>Used</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>SUMMER2024</TableCell>
                    <TableCell>20%</TableCell>
                    <TableCell>2024-06-01</TableCell>
                    <TableCell>2024-08-31</TableCell>
                    <TableCell>100</TableCell>
                    <TableCell>45</TableCell>
                    <TableCell>Active</TableCell>
                    <TableCell>
                      <IconButton color="primary">
                        <EditIcon />
                      </IconButton>
                      <IconButton color="error">
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>WELCOME10</TableCell>
                    <TableCell>10%</TableCell>
                    <TableCell>2024-01-01</TableCell>
                    <TableCell>2024-12-31</TableCell>
                    <TableCell>Unlimited</TableCell>
                    <TableCell>156</TableCell>
                    <TableCell>Active</TableCell>
                    <TableCell>
                      <IconButton color="primary">
                        <EditIcon />
                      </IconButton>
                      <IconButton color="error">
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PromotionCodesPage; 
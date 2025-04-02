'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'next/navigation';

const BuyTokenPage = () => {
  const params = useParams();
  const { id } = params;

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4">Buy Token</Typography>
      <Typography>Token ID: {id}</Typography>
      {/* Add your buy token form components here */}
    </Box>
  );
};

export default BuyTokenPage; 
'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'next/navigation';

const VerifyTokenPage = () => {
  const params = useParams();
  const { token } = params;

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4">Verify Token</Typography>
      <Typography>Token: {token}</Typography>
      {/* Add your token verification components here */}
    </Box>
  );
};

export default VerifyTokenPage; 
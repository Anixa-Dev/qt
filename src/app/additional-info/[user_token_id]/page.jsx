'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'next/navigation';

const AdditionalInfoPage = () => {
  const params = useParams();
  const { user_token_id } = params;

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4">Additional Information</Typography>
      <Typography>Token ID: {user_token_id}</Typography>
      {/* Add your additional info components here */}
    </Box>
  );
};

export default AdditionalInfoPage; 
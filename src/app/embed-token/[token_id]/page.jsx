'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'next/navigation';

const EmbedTokenPage = () => {
  const params = useParams();
  const { token_id } = params;

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Embed Token
      </Typography>
      <Typography variant="body1" gutterBottom>
        Token ID: {token_id}
      </Typography>
      <Box sx={{ mt: 3 }}>
        <Typography variant="body1" paragraph>
          Use the following code to embed this token on your website:
        </Typography>
        <Box
          component="pre"
          sx={{
            p: 2,
            bgcolor: 'grey.100',
            borderRadius: 1,
            overflow: 'auto',
            maxWidth: '100%',
          }}
        >
          {`<iframe
  src="${process.env.NEXT_PUBLIC_APP_URL}/embed-token/${token_id}"
  width="100%"
  height="600"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>`}
        </Box>
      </Box>
    </Box>
  );
};

export default EmbedTokenPage; 
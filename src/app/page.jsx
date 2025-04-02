'use client';

import React from 'react';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import LeftItem from '@/components/layout/LandingPageLeftItem';
import ResponsiveIndex from '@/components/ui/ResponsiveIndex';

const StyledGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    marginTop: '25px',
  },
}));

const LandingPage = () => {
  return (
    <ResponsiveIndex isStepForm={false} clipOrientation='right' imgType='img1' clip>
      <>
        <StyledGrid item xs={12} sm={10} md={6} lg={6} xl={6}>
          <LeftItem />
        </StyledGrid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6} />
      </>
    </ResponsiveIndex>
  );
};

export default function Home() {
  return <LandingPage />;
}

'use client';

import React from 'react';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import LeftItem from '@/components/layout/LandingPageLeftItem';
import ResponsiveIndex from '@/components/ui/ResponsiveIndex';
import PropTypes from 'prop-types';

const LandingPage = () => {
  return (
    <ResponsiveIndex isStepForm={false} clipOrientation='right' imgType='img1' clip>
        <Grid container>
            <Grid size={{md:6,lg:6,xl:6,xs:12,sm:10 }}>
            <LeftItem />
            </Grid>
            <Grid size={{md:6,lg:6,xl:6, xs:12,sm:10 }}/>
        </Grid>   
      </ResponsiveIndex>
  );
};

LandingPage.propTypes = {
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ 
      current: PropTypes.any
    })
  ]),
};

export default function Home() {
  return <LandingPage />;
}

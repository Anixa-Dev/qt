'use client';

import React from 'react';
import { LinearProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { colors } from '@/themes/default';

const StyledLinearProgress = styled(LinearProgress)({
  height: '9px',
  backgroundColor: colors.white,
  '& .MuiLinearProgress-bar': {
    backgroundColor: colors.lightBlue,
  },
});

const StepFormProgress = ({ activeStep, totalSteps }) => {
  return (
    <StyledLinearProgress
      value={(activeStep / totalSteps) * 100}
      variant="determinate"
    />
  );
};

StepFormProgress.propTypes = {
  activeStep: PropTypes.number.isRequired,
  totalSteps: PropTypes.number.isRequired,
};

export default StepFormProgress; 
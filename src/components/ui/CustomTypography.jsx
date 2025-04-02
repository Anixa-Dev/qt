'use client';

import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.body1.fontWeight,
  fontSize: theme.typography.body1.fontSize,
  lineHeight: theme.typography.body1.lineHeight,
  color: theme.palette.text.primary,
}));

const CustomTypography = ({ value, variant, ...props }) => {
  return (
    <StyledTypography
      variant={variant || 'body1'}
      {...props}
    >
      {value}
    </StyledTypography>
  );
};

CustomTypography.propTypes = {
  value: PropTypes.string.isRequired,
  variant: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'body1',
    'body2',
    'caption',
    'button',
    'overline',
    'subtitle1',
    'subtitle2',
  ]),
};

export default CustomTypography; 
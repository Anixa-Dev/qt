'use client';

import React from 'react';
import { Backdrop, CircularProgress, Typography, styled } from '@mui/material';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { colors } from '../../themes/default';

const StyledBackdrop = styled(Backdrop)({
  zIndex: 1301,
});

const StyledCircularProgress = styled(CircularProgress)({
  zIndex: 1302,
});

const LoaderText = styled(Typography)({
  color: colors.yellow,
  padding: '10px',
});

const CustomPageLoader = ({ children }) => {
  const { loading, text } = useSelector((state) => state.pageLoader);

  return (
    <>
      <StyledBackdrop open={!!loading}>
        <StyledCircularProgress thickness={6} />
        <LoaderText variant="h5">{text}</LoaderText>
      </StyledBackdrop>
      {children}
    </>
  );
};

CustomPageLoader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomPageLoader; 
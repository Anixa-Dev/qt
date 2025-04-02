'use client';

import React from 'react';
import { Button, CircularProgress, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { colors } from '@/themes/default';

const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  fontFamily: 'var(--font-inter), var(--font-geist-sans), system-ui, sans-serif',
  transition: 'none',
  fontSize: '12px',
  fontWeight: '700',
}));

const LoadingContainer = styled(Box)({
  padding: '0px 10px',
  display: 'grid',
  alignItems: 'center',
});

const CustomButton = ({
  children,
  loading,
  loadWithText = false,
  variant = 'contained',
  className = null,
  size = 'medium',
  disabled = false,
  fullWidth = false,
  type = 'button',
  classes = {},
  startIcon = null,
  endIcon = null,
  onClick = () => null,
  onMouseOver = () => null,
  onMouseLeave = () => null,
  ...rest
}) => (
  <StyledButton
    variant={variant}
    className={className}
    size={size}
    disabled={disabled || loading}
    fullWidth={fullWidth}
    type={type}
    classes={classes}
    startIcon={startIcon}
    endIcon={endIcon}
    onClick={onClick}
    onMouseOver={onMouseOver}
    onMouseLeave={onMouseLeave}
    {...rest}
  >
    {(!loading || loadWithText) && children}
    {loading && (
      <LoadingContainer>
        <CircularProgress
          size={20}
          sx={{ color: colors.white }}
        />
      </LoadingContainer>
    )}
  </StyledButton>
);

CustomButton.propTypes = {
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  type: PropTypes.oneOf(['submit', 'button']),
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  classes: PropTypes.shape({}),
  startIcon: PropTypes.element,
  endIcon: PropTypes.element,
  onClick: PropTypes.func,
  onMouseOver: PropTypes.func,
  onMouseLeave: PropTypes.func,
  loading: PropTypes.bool,
  loadWithText: PropTypes.bool,
};

export default CustomButton; 
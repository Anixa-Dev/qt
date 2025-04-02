'use client';

import React from 'react';
import { Button, styled, useTheme, useMediaQuery } from '@mui/material';
import PropTypes from 'prop-types';

import { colors } from '../../themes/default';

const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'type',
})(({ theme, type }) => ({
  fontWeight: 700,
  fontSize: '12px',
  lineHeight: '24px',
  width: '96px',
  height: '32px',
  margin: '0px 10px',
  [theme.breakpoints.down('xs')]: {
    margin: '0px',
    ...(type === 'login' && {
      color: colors.black,
    }),
  },
  ...(type === 'login' && {
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: colors.yellow,
      color: theme.palette.common.black,
    },
  }),
  ...(type === 'signup' && {
    backgroundColor: colors.yellow,
    '&:hover': {
      backgroundColor: colors.yellow,
    },
  }),
}));

const LoginButtons = ({ label, handleClick, type }) => {
  return (
    <StyledButton
      onClick={handleClick}
      type={type}
    >
      {label}
    </StyledButton>
  );
};

LoginButtons.defaultProps = {
  label: '',
  handleClick: () => null,
  type: 'login',
};

LoginButtons.propTypes = {
  label: PropTypes.string,
  handleClick: PropTypes.func,
  type: PropTypes.oneOf(['login', 'signup']),
};

export default LoginButtons; 
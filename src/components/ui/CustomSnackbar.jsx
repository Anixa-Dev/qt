'use client';

import React, { useCallback } from 'react';
import {
  Snackbar,
  SnackbarContent,
  IconButton,
  styled,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { Close } from '@mui/icons-material';
import PropTypes from 'prop-types';

import { hideMessage } from '../../redux-saga/redux/actions';
import { colors } from '../../themes/default';

const StyledSnackbarContent = styled(SnackbarContent, {
  shouldForwardProp: (prop) => prop !== 'error',
})(({ theme, error }) => ({
  backgroundColor: error ? colors.errorRed : colors.yellow,
  color: error ? colors.white : colors.black,
}));

const StyledIconButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'error',
})(({ theme, error }) => ({
  color: error ? colors.white : colors.black,
  width: '25px',
  height: '25px',
  marginRight: '10px',
}));

const CustomSnackbar = () => {
  const dispatch = useDispatch();
  const { open, msg, error } = useSelector((state) => state.snackbar);
  const defaultMsg = error ? 'Something Went Wrong. Please try again' : '';

  const hideSnackbar = useCallback(() => {
    dispatch(hideMessage());
  }, [dispatch]);

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      autoHideDuration={3000}
      onClose={hideSnackbar}
      open={open}
    >
      <StyledSnackbarContent
        error={error}
        message={msg || defaultMsg}
        action={
          <StyledIconButton
            error={error}
            onClick={hideSnackbar}
            size="small"
          >
            <Close fontSize="small" />
          </StyledIconButton>
        }
      />
    </Snackbar>
  );
};

export default CustomSnackbar;
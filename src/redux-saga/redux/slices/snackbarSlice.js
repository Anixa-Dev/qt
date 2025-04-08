import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false,
  msg: '',
  message: '',
  error: false,
};

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    showMessage: (state, action) => {
      state.open = true;
      state.msg = action.payload.msg;
      state.message = action.payload.message;
      state.error = action.payload.error || false;
    },
    hideMessage: (state) => {
      state.open = false;
      state.msg = '';
      state.message = '';
      state.error = false;
    },
  },
});

export const { showMessage, hideMessage } = snackbarSlice.actions;
export default snackbarSlice.reducer; 
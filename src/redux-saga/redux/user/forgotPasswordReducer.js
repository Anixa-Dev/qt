import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  errorMsg: null,
}

const {
  actions: {
    forgotPasswordRequestStart,
    forgotPasswordRequestSuccessful,
    forgotPasswordRequestFailure,
    forgotPasswordReset,
  },
  reducer,
} = createSlice({
  name: 'forgotPassword',
  initialState,
  reducers: {
    forgotPasswordRequestStart: () => ({
      ...initialState,
      loading: true,
    }),
    forgotPasswordRequestSuccessful: () => ({
      ...initialState,
      success: true,
    }),
    forgotPasswordRequestFailure: (state, action) => ({
      ...initialState,
      error: true,
      errorMsg: action && action.payload,
    }),
    forgotPasswordReset: () => initialState,
  },
})

export default reducer
export {
  forgotPasswordRequestStart,
  forgotPasswordRequestSuccessful,
  forgotPasswordRequestFailure,
  forgotPasswordReset,
}

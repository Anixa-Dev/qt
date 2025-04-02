import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  data: {},
}

const {
  actions: {
    userVerifyEmailRequestStart,
    userVerifyEmailRequestSuccessful,
    userVerifyEmailRequestFailure,
    userVerifyEmailReset,
  },
  reducer,
} = createSlice({
  name: 'verifyEmail',
  initialState,
  reducers: {
    userVerifyEmailRequestStart: () => ({
      ...initialState,
      isLoading: true,
    }),
    userVerifyEmailRequestSuccessful: () => ({
      ...initialState,
      success: true,
    }),
    userVerifyEmailRequestFailure: () => ({
      ...initialState,
      error: true,
    }),
    userVerifyEmailReset: () => ({
      ...initialState,
    }),
  },
})

export default reducer
export {
  userVerifyEmailRequestStart,
  userVerifyEmailRequestSuccessful,
  userVerifyEmailRequestFailure,
  userVerifyEmailReset,
}

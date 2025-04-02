import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  data: {},
}

const {
  actions: {
    userResendOtpRequestStart,
    userResendOtpRequestSuccessful,
    userResendOtpRequestFailure,
  },
  reducer,
} = createSlice({
  name: 'resendOtp',
  initialState,
  reducers: {
    userResendOtpRequestStart: () => ({
      ...initialState,
      isLoading: true,
    }),
    userResendOtpRequestSuccessful: () => ({
      ...initialState,
      success: true,
    }),
    userResendOtpRequestFailure: () => ({
      ...initialState,
      error: true,
    }),
  },
})

export default reducer
export {
  userResendOtpRequestStart,
  userResendOtpRequestSuccessful,
  userResendOtpRequestFailure,
}

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  data: null,
}

const {
  actions: {
    validateCustomizationOtpRequestStart,
    validateCustomizationOtpRequestSuccessful,
    validateCustomizationOtpRequestFailure,
    validateCustomizationOtpReset,
  },
  reducer,
} = createSlice({
  name: 'validateCustomizationOtp',
  initialState,
  reducers: {
    validateCustomizationOtpRequestStart: () => ({
      ...initialState,
      loading: true,
    }),
    validateCustomizationOtpRequestSuccessful: (state, action) => ({
      ...initialState,
      success: true,
      data: action && action.payload,
    }),
    validateCustomizationOtpRequestFailure: (state, action) => ({
      ...initialState,
      error: true,
      data: action && action.payload,
    }),
    validateCustomizationOtpReset: () => initialState,
  },
})

export default reducer
export {
  validateCustomizationOtpRequestStart,
  validateCustomizationOtpRequestSuccessful,
  validateCustomizationOtpRequestFailure,
  validateCustomizationOtpReset,
}

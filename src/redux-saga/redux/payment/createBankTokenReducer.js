import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  onboardingUrl: null,
}

const {
  actions: {
    createBankTokenRequestStart,
    createBankTokenRequestSuccessful,
    createBankTokenRequestFailure,
    resetBankToken,
  },
  reducer,
} = createSlice({
  name: 'createBankToken',
  initialState,
  reducers: {
    createBankTokenRequestStart: () => ({
      ...initialState,
      isLoading: true,
    }),
    createBankTokenRequestSuccessful: (state, action) => ({
      ...initialState,
      success: true,
      onboardingUrl: action && action.payload,
    }),
    createBankTokenRequestFailure: () => ({
      ...initialState,
      error: true,
    }),
    resetPaymentIntent: () => initialState,
  },
})

export default reducer
export {
  createBankTokenRequestStart,
  createBankTokenRequestSuccessful,
  createBankTokenRequestFailure,
  resetBankToken,
}

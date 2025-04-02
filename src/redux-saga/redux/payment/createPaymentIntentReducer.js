import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  clientSecret: null,
}

const {
  actions: {
    createPaymentIntentRequestStart,
    createPaymentIntentRequestSuccessful,
    createPaymentIntentRequestFailure,
    resetPaymentIntent,
  },
  reducer,
} = createSlice({
  name: 'createPaymentIntent',
  initialState,
  reducers: {
    createPaymentIntentRequestStart: () => ({
      ...initialState,
      isLoading: true,
    }),
    createPaymentIntentRequestSuccessful: (state, action) => ({
      ...initialState,
      success: true,
      clientSecret: action && action.payload,
    }),
    createPaymentIntentRequestFailure: () => ({
      ...initialState,
      error: true,
    }),
    resetPaymentIntent: () => initialState,
  },
})

export default reducer
export {
  createPaymentIntentRequestStart,
  createPaymentIntentRequestSuccessful,
  createPaymentIntentRequestFailure,
  resetPaymentIntent,
}

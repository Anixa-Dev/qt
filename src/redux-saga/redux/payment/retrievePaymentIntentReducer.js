import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  data: null,
}

const {
  actions: {
    retrievePaymentIntentRequestStart,
    retrievePaymentIntentRequestSuccessful,
    retrievePaymentIntentRequestFailure,
    resetRetrievePaymentIntent,
  },
  reducer,
} = createSlice({
  name: 'retrievePaymentIntent',
  initialState,
  reducers: {
    retrievePaymentIntentRequestStart: () => ({
      ...initialState,
      isLoading: true,
    }),
    retrievePaymentIntentRequestSuccessful: (state, action) => ({
      ...initialState,
      success: true,
      data: action && action.payload,
    }),
    retrievePaymentIntentRequestFailure: () => ({
      ...initialState,
      error: true,
    }),
    resetRetrievePaymentIntent: () => initialState,
  },
})

export default reducer
export {
  retrievePaymentIntentRequestStart,
  retrievePaymentIntentRequestSuccessful,
  retrievePaymentIntentRequestFailure,
  resetRetrievePaymentIntent,
}

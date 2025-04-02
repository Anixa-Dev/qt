import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: null,
}

const {
  actions: {
    addOfferRequestStart,
    addOfferRequestSuccessful,
    addOfferRequestFailure,
    resetAddOfferRequest,
  },
  reducer,
} = createSlice({
  name: 'addOffer',
  initialState,
  reducers: {
    addOfferRequestStart: (state) => ({
      ...state,
      loading: true,
    }),
    addOfferRequestSuccessful: (state) => ({
      ...state,
      loading: false,
      success: true,
    }),
    addOfferRequestFailure: (state) => ({
      ...state,
      error: true,
      loading: false,
    }),
    resetAddOfferRequest: () => ({
      ...initialState,
    }),
  },
})

export default reducer
export {
  addOfferRequestStart,
  addOfferRequestSuccessful,
  addOfferRequestFailure,
  resetAddOfferRequest,
}

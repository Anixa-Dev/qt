import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  data: null,
}

const {
  actions: {
    confirmPurchaseRequestStart,
    confirmPurchaseRequestSuccessful,
    confirmPurchaseRequestFailure,
    resetConfirmPurchase,
  },
  reducer,
} = createSlice({
  name: 'confirmPurchase',
  initialState,
  reducers: {
    confirmPurchaseRequestStart: () => ({
      ...initialState,
      isLoading: true,
    }),
    confirmPurchaseRequestSuccessful: (state, action) => ({
      ...initialState,
      success: true,
      data: action && action.payload,
    }),
    confirmPurchaseRequestFailure: () => ({
      ...initialState,
      error: true,
    }),
    resetConfirmPurchase: () => initialState,
  },
})

export default reducer
export {
  confirmPurchaseRequestStart,
  confirmPurchaseRequestSuccessful,
  confirmPurchaseRequestFailure,
  resetConfirmPurchase,
}

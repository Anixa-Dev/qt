import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  data: null,
}

const {
  actions: {
    tmpPurchaseRequestStart,
    tmpPurchaseRequestSuccessful,
    tmpPurchaseRequestFailure,
    resetTmpPurchase,
  },
  reducer,
} = createSlice({
  name: 'tmpPurchase',
  initialState,
  reducers: {
    tmpPurchaseRequestStart: () => ({
      ...initialState,
      isLoading: true,
    }),
    tmpPurchaseRequestSuccessful: (state, action) => ({
      ...initialState,
      success: true,
      data: action && action.payload,
    }),
    tmpPurchaseRequestFailure: () => ({
      ...initialState,
      error: true,
    }),
    resetTmpPurchase: () => ({
      ...initialState,
    }),
  },
})

export default reducer
export {
  tmpPurchaseRequestStart,
  tmpPurchaseRequestSuccessful,
  tmpPurchaseRequestFailure,
  resetTmpPurchase,
}

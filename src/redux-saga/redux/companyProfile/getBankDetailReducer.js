import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  data: null,
}

const {
  actions: {
    getBankDetailRequestStart,
    getBankDetailRequestSuccessful,
    getBankDetailRequestFailure,
    resetBankDetails,
  },
  reducer,
} = createSlice({
  name: 'bankDetail',
  initialState,
  reducers: {
    getBankDetailRequestStart: () => ({
      ...initialState,
      loading: true,
    }),
    getBankDetailRequestSuccessful: (state, action) => ({
      ...state,
      loading: false,
      success: true,
      data: action && action.payload,
    }),
    getBankDetailRequestFailure: () => ({
      ...initialState,
      error: true,
    }),
    resetBankDetails: () => initialState,
  },
})

export default reducer
export {
  getBankDetailRequestStart,
  getBankDetailRequestSuccessful,
  getBankDetailRequestFailure,
  resetBankDetails,
}

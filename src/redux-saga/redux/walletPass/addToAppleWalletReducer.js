import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
}

const {
  actions: {
    addToWalletRequestStart,
    addToWalletRequestSuccessful,
    addToWalletRequestFailure,
    resetAddToWallet,
  },
  reducer,
} = createSlice({
  name: 'addToWallet',
  initialState,
  reducers: {
    addToWalletRequestStart: (state) => ({
      ...state,
      loading: true,
    }),
    addToWalletRequestSuccessful: (state) => ({
      ...state,
      success: true,
    }),
    addToWalletRequestFailure: (state) => ({
      ...state,
      error: true,
    }),
    resetAddToWallet: () => ({
      ...initialState,
      passData: null,
    }),
  },
})

export default reducer
export {
  addToWalletRequestFailure,
  addToWalletRequestStart,
  addToWalletRequestSuccessful,
  resetAddToWallet,
}

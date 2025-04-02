import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  data: null,
}

const {
  actions: {
    removeWalletAddressRequestStart,
    removeWalletAddressRequestSuccessful,
    removeWalletAddressRequestFailure,
    removeWalletAddressReset,
  },
  reducer,
} = createSlice({
  name: 'removeWalletAddress',
  initialState,
  reducers: {
    removeWalletAddressRequestStart: () => ({
      ...initialState,
      loading: true,
    }),
    removeWalletAddressRequestSuccessful: (state, action) => ({
      ...initialState,
      success: true,
      data: action && action.payload,
    }),
    removeWalletAddressRequestFailure: (state, action) => ({
      ...initialState,
      error: true,
      data: action && action.payload,
    }),
    removeWalletAddressReset: () => initialState,
  },
})

export default reducer
export {
  removeWalletAddressRequestStart,
  removeWalletAddressRequestSuccessful,
  removeWalletAddressRequestFailure,
  removeWalletAddressReset,
}

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  data: null,
}

const {
  actions: {
    fetchWalletAddressRequestStart,
    fetchWalletAddressRequestSuccessful,
    fetchWalletAddressRequestFailure,
    fetchWalletAddressReset,
  },
  reducer,
} = createSlice({
  name: 'fetchWalletAddress',
  initialState,
  reducers: {
    fetchWalletAddressRequestStart: () => ({
      ...initialState,
      loading: true,
    }),
    fetchWalletAddressRequestSuccessful: (state, action) => ({
      ...initialState,
      success: true,
      data: action && action.payload,
    }),
    fetchWalletAddressRequestFailure: (state, action) => ({
      ...initialState,
      error: true,
      data: action && action.payload,
    }),
    fetchWalletAddressReset: () => initialState,
  },
})

export default reducer
export {
  fetchWalletAddressRequestStart,
  fetchWalletAddressRequestSuccessful,
  fetchWalletAddressRequestFailure,
  fetchWalletAddressReset,
}

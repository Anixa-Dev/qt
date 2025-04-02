import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  data: null,
}

const {
  actions: {
    addWalletAddressRequestStart,
    addWalletAddressRequestSuccessful,
    addWalletAddressRequestFailure,
    addWalletAddressReset,
  },
  reducer,
} = createSlice({
  name: 'addWalletAddress',
  initialState,
  reducers: {
    addWalletAddressRequestStart: () => ({
      ...initialState,
      loading: true,
    }),
    addWalletAddressRequestSuccessful: (state, action) => ({
      ...initialState,
      success: true,
      data: action && action.payload,
    }),
    addWalletAddressRequestFailure: (state, action) => ({
      ...initialState,
      error: true,
      data: action && action.payload,
    }),
    addWalletAddressReset: () => initialState,
  },
})

export default reducer
export {
  addWalletAddressRequestStart,
  addWalletAddressRequestSuccessful,
  addWalletAddressRequestFailure,
  addWalletAddressReset,
}

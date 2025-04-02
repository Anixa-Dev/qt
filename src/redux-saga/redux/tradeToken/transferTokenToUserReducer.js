import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  transferTokenData: null,
}

const {
  actions: {
    transferTokenRequestStart,
    transferTokenRequestSuccessful,
    transferTokenRequestFailure,
    resetTransferToken,
  },
  reducer,
} = createSlice({
  name: 'transferToken',
  initialState,
  reducers: {
    transferTokenRequestStart: () => ({
      ...initialState,
      isLoading: true,
    }),
    transferTokenRequestSuccessful: (state, action) => ({
      ...initialState,
      success: true,
      transferTokenData: action && action.payload,
    }),
    transferTokenRequestFailure: () => ({
      ...initialState,
      error: true,
    }),
    resetTransferToken: () => initialState,
  },
})

export default reducer
export {
  transferTokenRequestStart,
  transferTokenRequestSuccessful,
  transferTokenRequestFailure,
  resetTransferToken,
}

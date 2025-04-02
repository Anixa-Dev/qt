import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  data: null,
}

const {
  actions: {
    retryTokenMintingRequestStart,
    retryTokenMintingRequestSuccessful,
    retryTokenMintingRequestFailure,
    resetRetryTokenMinting,
  },
  reducer,
} = createSlice({
  name: 'retryTokenMinting',
  initialState,
  reducers: {
    retryTokenMintingRequestStart: () => ({
      ...initialState,
      isLoading: true,
    }),
    retryTokenMintingRequestSuccessful: (state, action) => ({
      ...initialState,
      success: true,
      data: action && action.payload,
    }),
    retryTokenMintingRequestFailure: () => ({
      ...initialState,
      error: true,
    }),
    resetRetryTokenMinting: () => ({
      ...initialState,
    }),
  },
})

export default reducer
export {
  retryTokenMintingRequestStart,
  retryTokenMintingRequestSuccessful,
  retryTokenMintingRequestFailure,
  resetRetryTokenMinting,
}

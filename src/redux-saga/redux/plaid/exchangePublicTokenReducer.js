import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  accessToken: null,
  plaidStatus: null,
}

const {
  actions: {
    exchangePublicTokenRequestStart,
    exchangePublicTokenRequestSuccessful,
    exchangePublicTokenRequestFailure,
    resetExchangePublicToken,
  },
  reducer,
} = createSlice({
  name: 'exchangePublicToken',
  initialState,
  reducers: {
    exchangePublicTokenRequestStart: () => ({
      ...initialState,
      isLoading: true,
    }),
    exchangePublicTokenRequestSuccessful: (state, action) => ({
      ...initialState,
      success: true,
      accessToken: action && action.payload && action.payload.accessToken,
      plaidStatus: action && action.payload && action.payload.plaidStatus,
    }),
    exchangePublicTokenRequestFailure: () => ({
      ...initialState,
      error: true,
    }),
    resetExchangePublicToken: () => initialState,
  },
})

export default reducer
export {
  exchangePublicTokenRequestStart,
  exchangePublicTokenRequestSuccessful,
  exchangePublicTokenRequestFailure,
  resetExchangePublicToken,
}

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  marketplaceTokens: null,
  tokenCount: null,
  totalTokenCount: null,
}

const {
  actions: {
    getMarketplaceTokensRequestStart,
    getMarketplaceTokensRequestSuccessful,
    getMarketplaceTokensRequestFailure,
    resetMarketplaceTokens,
  },
  reducer,
} = createSlice({
  name: 'getMarketplaceTokens',
  initialState,
  reducers: {
    getMarketplaceTokensRequestStart: (state) => ({
      ...state,
      loading: true,
    }),
    getMarketplaceTokensRequestSuccessful: (state, action) => ({
      ...state,
      success: true,
      marketplaceTokens: action && action.payload && action.payload.rows,
      tokenCount: action && action.payload && action.payload.count,
      totalTokenCount: action && action.payload && action.payload.totalCount,
    }),
    getMarketplaceTokensRequestFailure: (state) => ({
      ...state,
      error: true,
    }),
    resetMarketplaceTokens: () => initialState,
  },
})

export default reducer
export {
  getMarketplaceTokensRequestFailure,
  getMarketplaceTokensRequestStart,
  getMarketplaceTokensRequestSuccessful,
  resetMarketplaceTokens,
}

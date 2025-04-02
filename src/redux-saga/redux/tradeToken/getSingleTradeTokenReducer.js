import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  tokenData: null,
}

const {
  actions: {
    getSingleTradeTokenRequestStart,
    getSingleTradeTokenRequestSuccessful,
    getSingleTradeTokenRequestFailure,
    resetSingleTradeToken,
  },
  reducer,
} = createSlice({
  name: 'getSingleTradeToken',
  initialState,
  reducers: {
    getSingleTradeTokenRequestStart: (state) => ({
      ...state,
      loading: true,
    }),
    getSingleTradeTokenRequestSuccessful: (state, action) => ({
      ...state,
      success: true,
      tokenData: action && action.payload,
    }),
    getSingleTradeTokenRequestFailure: (state) => ({
      ...state,
      error: true,
    }),
    resetSingleTradeToken: () => ({
      ...initialState,
      tokenData: null,
    }),
  },
})

export default reducer
export {
  getSingleTradeTokenRequestFailure,
  getSingleTradeTokenRequestStart,
  getSingleTradeTokenRequestSuccessful,
  resetSingleTradeToken,
}

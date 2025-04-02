import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  sellData: null,
}

const {
  actions: {
    sellTokenRequestStart,
    sellTokenRequestSuccessful,
    sellTokenRequestFailure,
    resetSellToken,
  },
  reducer,
} = createSlice({
  name: 'sellToken',
  initialState,
  reducers: {
    sellTokenRequestStart: (state) => ({
      ...state,
      loading: true,
    }),
    sellTokenRequestSuccessful: (state, action) => ({
      ...state,
      success: true,
      sellData: action && action.payload,
    }),
    sellTokenRequestFailure: (state) => ({
      ...state,
      error: true,
    }),
    resetSellToken: () => ({
      ...initialState,
      sellData: null,
    }),
  },
})

export default reducer
export {
  sellTokenRequestFailure,
  sellTokenRequestStart,
  sellTokenRequestSuccessful,
  resetSellToken,
}

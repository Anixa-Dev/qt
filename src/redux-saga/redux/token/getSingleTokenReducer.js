import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  tokenData: null,
}

const {
  actions: {
    singleTokenRequestStart,
    singleTokenRequestSuccessful,
    singleTokenRequestFailure,
    resetSingleToken,
  },
  reducer,
} = createSlice({
  name: 'singleToken',
  initialState,
  reducers: {
    singleTokenRequestStart: (state) => ({
      ...state,
      loading: true,
    }),
    singleTokenRequestSuccessful: (state, action) => ({
      ...state,
      success: true,
      tokenData: action && action.payload,
      loading: false,
    }),
    singleTokenRequestFailure: (state) => ({
      ...state,
      error: true,
      loading: false,
    }),
    resetSingleToken: () => ({
      ...initialState,
      tokenData: null,
    }),
  },
})

export default reducer
export {
  singleTokenRequestFailure,
  singleTokenRequestStart,
  singleTokenRequestSuccessful,
  resetSingleToken,
}

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  activeTokens: null,
  userTokens: null,
}

const {
  actions: {
    getAllUserTokensRequestStart,
    getAllUserTokensRequestSuccessful,
    getAllUserTokensRequestFailure,
    resetAllUserTokens,
  },
  reducer,
} = createSlice({
  name: 'getAllUserTokens',
  initialState,
  reducers: {
    getAllUserTokensRequestStart: (state) => ({
      ...state,
      loading: true,
    }),
    getAllUserTokensRequestSuccessful: (state, action) => ({
      ...state,
      success: true,
      userTokens: action && action.payload && action.payload.rows,
      totalTokenCount: action && action.payload && action.payload.count,
    }),
    getAllUserTokensRequestFailure: (state) => ({
      ...state,
      error: true,
    }),
    resetAllUserTokens: () => initialState,
  },
})

export default reducer
export {
  getAllUserTokensRequestFailure,
  getAllUserTokensRequestStart,
  getAllUserTokensRequestSuccessful,
  resetAllUserTokens,
}

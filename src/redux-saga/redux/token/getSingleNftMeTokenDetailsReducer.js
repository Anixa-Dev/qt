import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: null,
  tokenData: null,
}

const {
  actions: {
    getSingleNftMeTokenRequestStart,
    getSingleNftMeTokenRequestSuccessful,
    getSingleNftMeTokenRequestFailure,
    resetGetSingleNftMeTokenRequest,
  },
  reducer,
} = createSlice({
  name: 'getNftMeTokenDetail',
  initialState,
  reducers: {
    getSingleNftMeTokenRequestStart: (state) => ({
      ...state,
      loading: true,
    }),
    getSingleNftMeTokenRequestSuccessful: (state, action) => ({
      ...state,
      loading: false,
      success: true,
      tokenData: action && action.payload,
    }),
    getSingleNftMeTokenRequestFailure: (state) => ({
      ...state,
      error: true,
      loading: false,
    }),
    resetGetSingleNftMeTokenRequest: () => ({
      ...initialState,
    }),
  },
})

export default reducer
export {
  getSingleNftMeTokenRequestStart,
  getSingleNftMeTokenRequestSuccessful,
  getSingleNftMeTokenRequestFailure,
  resetGetSingleNftMeTokenRequest,
}

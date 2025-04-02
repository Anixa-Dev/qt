import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  nftMeData: null,
}

const {
  actions: {
    getCompanyNftMeRequestStart,
    getCompanyNftMeRequestSuccessful,
    getCompanyNftMeRequestFailure,
    resetGetCompanyNftMe,
  },
  reducer,
} = createSlice({
  name: 'getCompanyNftMe',
  initialState,
  reducers: {
    getCompanyNftMeRequestStart: (state) => ({
      ...state,
      loading: true,
    }),
    getCompanyNftMeRequestSuccessful: (state, action) => ({
      ...state,
      success: true,
      loading: false,
      nftMeData: action && action.payload,
    }),
    getCompanyNftMeRequestFailure: (state) => ({
      ...state,
      error: true,
      loading: false,
    }),
    resetGetCompanyNftMe: () => initialState,
  },
})

export default reducer
export {
  getCompanyNftMeRequestFailure,
  getCompanyNftMeRequestStart,
  getCompanyNftMeRequestSuccessful,
  resetGetCompanyNftMe,
}

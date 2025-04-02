import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  companyData: null,
}

const {
  actions: {
    getTokenCompanyDetailsRequestStart,
    getTokenCompanyDetailsRequestSuccessful,
    getTokenCompanyDetailsRequestFailure,
    resetGetTokenCompanyDetails,
  },
  reducer,
} = createSlice({
  name: 'getTokenCompanyDetails',
  initialState,
  reducers: {
    getTokenCompanyDetailsRequestStart: (state) => ({
      ...state,
      loading: true,
    }),
    getTokenCompanyDetailsRequestSuccessful: (state, action) => ({
      ...state,
      success: true,
      companyData: action && action.payload,
    }),
    getTokenCompanyDetailsRequestFailure: (state) => ({
      ...state,
      error: true,
    }),
    resetGetTokenCompanyDetails: () => initialState,
  },
})

export default reducer
export {
  getTokenCompanyDetailsRequestFailure,
  getTokenCompanyDetailsRequestStart,
  getTokenCompanyDetailsRequestSuccessful,
  resetGetTokenCompanyDetails,
}

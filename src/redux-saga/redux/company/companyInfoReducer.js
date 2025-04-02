import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  companyData: null,
}

const {
  actions: {
    companyInfoRequestStart,
    companyInfoRequestSuccessful,
    companyInfoRequestFailure,
    setCompanyCredits,
    resetCompanyInfo,
  },
  reducer,
} = createSlice({
  name: 'companyInfo',
  initialState,
  reducers: {
    companyInfoRequestStart: () => ({
      ...initialState,
      loading: true,
    }),
    companyInfoRequestSuccessful: (state, action) => ({
      ...initialState,
      success: true,
      companyData: action && action.payload,
    }),
    companyInfoRequestFailure: () => ({
      ...initialState,
      error: true,
    }),
    setCompanyCredits: (state, action) => ({
      ...state,
      companyData: {
        ...state.companyData,
        credits: action && action.payload.credits,
      },
    }),
    resetCompanyInfo: () => ({
      ...initialState,
      companyData: null,
    }),
  },
})

export default reducer
export {
  companyInfoRequestStart,
  companyInfoRequestSuccessful,
  companyInfoRequestFailure,
  setCompanyCredits,
  resetCompanyInfo,
}

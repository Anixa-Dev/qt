import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  tokenData: [],
  totalTokenCount: null,
  openSuccessDialogState: false,
  tokenCount: false,
  tokenNamesList: [],
}

const {
  actions: {
    companyTokensRequestStart,
    companyTokensRequestSuccessful,
    companyTokensRequestFailure,
    resetCompanyTokens,
    closeSuccessDialog,
    openSuccessDialog,
  },
  reducer,
} = createSlice({
  name: 'companyTokens',
  initialState,
  reducers: {
    companyTokensRequestStart: (state) => ({
      ...state,
      loading: true,
    }),
    companyTokensRequestSuccessful: (state, action) => ({
      ...state,
      success: true,
      tokenData: action && action.payload && action.payload.tokenDetail,
      tokenCount: action && action.payload && action.payload.tokenCount,
      totalTokenCount: action && action.payload && action.payload.totalCount,
      tokenNamesList: action && action.payload && action.payload.tokenNamesList,
    }),
    companyTokensRequestFailure: () => ({
      ...initialState,
      error: true,
    }),
    resetCompanyTokens: () => ({
      ...initialState,
      tokenData: null,
    }),
    openSuccessDialog: (state) => ({
      ...state,
      openSuccessDialogState: true,
    }),
    closeSuccessDialog: (state) => ({
      ...state,
      openSuccessDialogState: false,
    }),
  },
})

export default reducer
export {
  companyTokensRequestStart,
  companyTokensRequestSuccessful,
  companyTokensRequestFailure,
  resetCompanyTokens,
  closeSuccessDialog,
  openSuccessDialog,
}

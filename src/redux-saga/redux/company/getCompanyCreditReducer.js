import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  data: null,
}

const {
  actions: {
    getCompanyCreditStart,
    getCompanyCreditSucccessful,
    getCompanyCreditFailure,
    resetCompanyCredit,
  },
  reducer,
} = createSlice({
  name: 'companyCredit',
  initialState,
  reducers: {
    getCompanyCreditStart: () => ({
      ...initialState,
      loading: true,
    }),
    getCompanyCreditSucccessful: () => ({
      ...initialState,
      success: true,
    }),
    getCompanyCreditFailure: () => ({
      ...initialState,
      error: true,
    }),
    resetCompanyCredit: () => ({
      ...initialState,
      companyData: null,
    }),
  },
})

export default reducer
export {
  getCompanyCreditStart,
  getCompanyCreditSucccessful,
  getCompanyCreditFailure,
  resetCompanyCredit,
}

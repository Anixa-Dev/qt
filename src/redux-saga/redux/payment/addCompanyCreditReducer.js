import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  data: null,
}

const {
  actions: {
    addCompanyCreditStart,
    addCompanyCreditSuccessful,
    addCompanyCreditFailure,
    resetAddCompanyCredit,
  },
  reducer,
} = createSlice({
  name: 'addCompanyCredit',
  initialState,
  reducers: {
    addCompanyCreditStart: () => ({
      ...initialState,
      isLoading: true,
    }),
    addCompanyCreditSuccessful: (state, action) => ({
      ...initialState,
      success: true,
      data: action && action.payload,
    }),
    addCompanyCreditFailure: () => ({
      ...initialState,
      error: true,
    }),
    resetAddCompanyCredit: () => initialState,
  },
})

export default reducer
export {
  addCompanyCreditStart,
  addCompanyCreditSuccessful,
  addCompanyCreditFailure,
  resetAddCompanyCredit,
}

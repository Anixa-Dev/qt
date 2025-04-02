import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  data: null,
}

const {
  actions: {
    updateCompanyProfileRequestStart,
    updateCompanyProfileRequestSuccessful,
    updateCompanyProfileRequestFailure,
    updateCompanyProfileReset,
  },
  reducer,
} = createSlice({
  name: 'updateCompanyProfile',
  initialState,
  reducers: {
    updateCompanyProfileRequestStart: () => ({
      ...initialState,
      loading: true,
    }),
    updateCompanyProfileRequestSuccessful: (state, action) => ({
      ...initialState,
      success: true,
      data: action && action.payload,
    }),
    updateCompanyProfileRequestFailure: (state, action) => ({
      ...initialState,
      error: true,
      data: action && action.payload,
    }),
    updateCompanyProfileReset: () => initialState,
  },
})

export default reducer
export {
  updateCompanyProfileRequestStart,
  updateCompanyProfileRequestSuccessful,
  updateCompanyProfileRequestFailure,
  updateCompanyProfileReset,
}

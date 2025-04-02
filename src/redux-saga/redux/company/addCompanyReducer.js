import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  data: null,
}

const {
  actions: {
    addCompanyRequestStart,
    addCompanyRequestSuccessful,
    addCompanyRequestFailure,
  },
  reducer,
} = createSlice({
  name: 'addCompany',
  initialState,
  reducers: {
    addCompanyRequestStart: () => ({
      ...initialState,
      isLoading: true,
    }),
    addCompanyRequestSuccessful: (state, action) => ({
      ...initialState,
      success: true,
      data: action && action.payload,
    }),
    addCompanyRequestFailure: () => ({
      ...initialState,
      error: true,
    }),
  },
})

export default reducer
export {
  addCompanyRequestStart,
  addCompanyRequestSuccessful,
  addCompanyRequestFailure,
}

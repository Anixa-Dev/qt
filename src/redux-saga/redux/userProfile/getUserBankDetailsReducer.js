import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  data: null,
}

const {
  actions: {
    getUserBankDetailsRequestStart,
    getUserBankDetailsRequestSuccessful,
    getUserBankDetailsRequestFailure,
    userBankDetailsReset,
  },
  reducer,
} = createSlice({
  name: 'getUserBankDetails',
  initialState,
  reducers: {
    getUserBankDetailsRequestStart: () => ({
      ...initialState,
      loading: true,
    }),
    getUserBankDetailsRequestSuccessful: (state, action) => ({
      ...initialState,
      success: true,
      data: action && action.payload,
    }),
    getUserBankDetailsRequestFailure: () => ({
      ...initialState,
      error: true,
    }),
    userBankDetailsReset: () => initialState,
  },
})

export default reducer
export {
  getUserBankDetailsRequestStart,
  getUserBankDetailsRequestSuccessful,
  getUserBankDetailsRequestFailure,
  userBankDetailsReset,
}

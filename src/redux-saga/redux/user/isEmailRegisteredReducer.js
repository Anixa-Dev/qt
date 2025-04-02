import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  data: {},
}

const {
  actions: {
    isEmailRegisteredRequestStart,
    isEmailRegisteredRequestSuccessful,
    isEmailRegisteredRequestFailure,
    resetIsEmailRegistered,
  },
  reducer,
} = createSlice({
  name: 'isEmailRegistered',
  initialState,
  reducers: {
    isEmailRegisteredRequestStart: () => ({
      ...initialState,
      isLoading: true,
    }),
    isEmailRegisteredRequestSuccessful: () => ({
      ...initialState,
      success: true,
    }),
    isEmailRegisteredRequestFailure: () => ({
      ...initialState,
      error: true,
    }),
    resetIsEmailRegistered: () => ({
      ...initialState,
    }),
  },
})

export default reducer
export {
  isEmailRegisteredRequestStart,
  isEmailRegisteredRequestSuccessful,
  isEmailRegisteredRequestFailure,
  resetIsEmailRegistered,
}

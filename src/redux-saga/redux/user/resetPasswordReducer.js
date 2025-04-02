import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  data: {},
}

const {
  actions: {
    resetPasswordRequestStart,
    resetPasswordRequestSuccessful,
    resetPasswordRequestFailure,
  },
  reducer,
} = createSlice({
  name: 'resetPassword',
  initialState,
  reducers: {
    resetPasswordRequestStart: () => ({
      ...initialState,
      isLoading: true,
    }),
    resetPasswordRequestSuccessful: () => ({
      ...initialState,
      success: true,
    }),
    resetPasswordRequestFailure: () => ({
      ...initialState,
      error: true,
    }),
  },
})

export default reducer
export {
  resetPasswordRequestStart,
  resetPasswordRequestSuccessful,
  resetPasswordRequestFailure,
}

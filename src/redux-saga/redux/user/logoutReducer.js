import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  data: {},
}

const {
  actions: {
    logoutRequestStart,
    logoutRequestSuccessful,
    logoutRequestFailure,
  },
  reducer,
} = createSlice({
  name: 'logout',
  initialState,
  reducers: {
    logoutRequestStart: () => ({
      ...initialState,
      isLoading: true,
    }),
    logoutRequestSuccessful: () => ({
      ...initialState,
      success: true,
    }),
    logoutRequestFailure: () => ({
      ...initialState,
      error: true,
    }),
  },
})

export default reducer
export {
  logoutRequestStart,
  logoutRequestSuccessful,
  logoutRequestFailure,
}

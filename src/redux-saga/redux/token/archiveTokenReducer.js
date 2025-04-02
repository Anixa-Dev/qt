import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  data: null,
}

const {
  actions: {
    archiveTokenRequestStart,
    archiveTokenRequestSuccessful,
    archiveTokenRequestFailure,
    resetArchiveToken,
  },
  reducer,
} = createSlice({
  name: 'archiveToken',
  initialState,
  reducers: {
    archiveTokenRequestStart: () => ({
      ...initialState,
      isLoading: true,
    }),
    archiveTokenRequestSuccessful: (state, action) => ({
      ...initialState,
      success: true,
      data: action && action.payload,
    }),
    archiveTokenRequestFailure: () => ({
      ...initialState,
      error: true,
    }),
    resetArchiveToken: () => ({
      ...initialState,
    }),
  },
})

export default reducer
export {
  archiveTokenRequestStart,
  archiveTokenRequestSuccessful,
  archiveTokenRequestFailure,
  resetArchiveToken,
}

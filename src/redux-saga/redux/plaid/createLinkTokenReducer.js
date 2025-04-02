import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  linkToken: null,
}

const {
  actions: {
    createLinkTokenRequestStart,
    createLinkTokenRequestSuccessful,
    createLinkTokenRequestFailure,
    resetLinkToken,
  },
  reducer,
} = createSlice({
  name: 'createLinkToken',
  initialState,
  reducers: {
    createLinkTokenRequestStart: () => ({
      ...initialState,
      isLoading: true,
    }),
    createLinkTokenRequestSuccessful: (state, action) => ({
      ...initialState,
      success: true,
      linkToken: action && action.payload,
    }),
    createLinkTokenRequestFailure: () => ({
      ...initialState,
      error: true,
    }),
    resetLinkToken: () => initialState,
  },
})

export default reducer
export {
  createLinkTokenRequestStart,
  createLinkTokenRequestSuccessful,
  createLinkTokenRequestFailure,
  resetLinkToken,
}

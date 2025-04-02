import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  data: null,
}

const {
  actions: {
    createTokenRequestStart,
    createTokenRequestSuccessful,
    createTokenRequestFailure,
    resetCreateToken,
  },
  reducer,
} = createSlice({
  name: 'createToken',
  initialState,
  reducers: {
    createTokenRequestStart: () => ({
      ...initialState,
      isLoading: true,
    }),
    createTokenRequestSuccessful: (state, action) => ({
      ...initialState,
      success: true,
      data: action && action.payload,
    }),
    createTokenRequestFailure: () => ({
      ...initialState,
      error: true,
    }),
    resetCreateToken: () => ({
      ...initialState,
    }),
  },
})

export default reducer
export {
  createTokenRequestStart,
  createTokenRequestSuccessful,
  createTokenRequestFailure,
  resetCreateToken,
}

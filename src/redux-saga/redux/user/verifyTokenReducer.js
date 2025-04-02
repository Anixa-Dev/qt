import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  data: {},
}

const {
  actions: {
    verifyTokenRequestStart,
    verifyTokenRequestSuccessful,
    verifyTokenRequestFailure,
  },
  reducer,
} = createSlice({
  name: 'verifyToken',
  initialState,
  reducers: {
    verifyTokenRequestStart: () => ({
      ...initialState,
      isLoading: true,
    }),
    verifyTokenRequestSuccessful: (state, action) => ({
      ...initialState,
      data: action && action.payload,
      success: true,
    }),
    verifyTokenRequestFailure: () => ({
      ...initialState,
      error: true,
    }),
  },
})

export default reducer
export {
  verifyTokenRequestStart,
  verifyTokenRequestSuccessful,
  verifyTokenRequestFailure,
}

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  data: {},
}

const {
  actions: {
    userSignupRequestStart,
    userSignupRequestSuccessful,
    userSignupRequestFailure,
    userSignupReset,
  },
  reducer,
} = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    userSignupRequestStart: () => ({
      ...initialState,
      loading: true,
    }),
    userSignupRequestSuccessful: (state, action) => ({
      ...initialState,
      success: true,
      data: action?.payload,
    }),
    userSignupRequestFailure: (state, action) => ({
      ...initialState,
      error: true,
      success: false,
      data: action.payload?.data,
    }),
    userSignupReset: () => ({
      ...initialState,
    }),
  },
})

export default reducer
export {
  userSignupRequestStart,
  userSignupRequestSuccessful,
  userSignupRequestFailure,
  userSignupReset,
}

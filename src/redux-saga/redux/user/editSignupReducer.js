import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  data: null,
}

const {
  actions: {
    editSignupRequestStart,
    editSignupRequestSuccessful,
    editSignupRequestFailure,
    editSignupReset,
  },
  reducer,
} = createSlice({
  name: 'editSignup',
  initialState,
  reducers: {
    editSignupRequestStart: () => ({
      ...initialState,
      loading: true,
    }),
    editSignupRequestSuccessful: (state, action) => ({
      ...initialState,
      success: true,
      data: action.payload,
    }),
    editSignupRequestFailure: (state, action) => ({
      ...initialState,
      error: true,
      data: action.payload,
    }),
    editSignupReset: () => initialState,
  },
})

export default reducer
export {
  editSignupRequestStart,
  editSignupRequestSuccessful,
  editSignupRequestFailure,
  editSignupReset,
}

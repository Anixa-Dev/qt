import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  data: null,
}

const {
  actions: {
    updateUserProfileRequestStart,
    updateUserProfileRequestSuccessful,
    updateUserProfileRequestFailure,
    updateUserProfileReset,
  },
  reducer,
} = createSlice({
  name: 'updateUserProfile',
  initialState,
  reducers: {
    updateUserProfileRequestStart: () => ({
      ...initialState,
      loading: true,
    }),
    updateUserProfileRequestSuccessful: (state, action) => ({
      ...initialState,
      success: true,
      data: action && action.payload,
    }),
    updateUserProfileRequestFailure: (state, action) => ({
      ...initialState,
      error: true,
      data: action && action.payload,
    }),
    updateUserProfileReset: () => initialState,
  },
})

export default reducer
export {
  updateUserProfileRequestStart,
  updateUserProfileRequestSuccessful,
  updateUserProfileRequestFailure,
  updateUserProfileReset,
}

import { createSlice } from '@reduxjs/toolkit'
import { getUserDetails } from '../../../utils/helper'

const initialState = {
  loading: null,
  error: null,
  success: false,
  data: {},
  userDetails: getUserDetails(),
}

const {
  actions: {
    userLoginRequestStart,
    userLoginRequestSuccessful,
    userLoginRequestFailure,
    resetUserDetails,
  },
  reducer,
} = createSlice({
  name: 'login',
  initialState,
  reducers: {
    userLoginRequestStart: () => ({
      ...initialState,
      isLoading: true,
    }),
    userLoginRequestSuccessful: (state, action) => ({
      ...initialState,
      success: true,
      userDetails: action.payload.userDetails,
    }),
    userLoginRequestFailure: (state, action) => ({
      ...initialState,
      error: true,
      data: action.payload,
    }),
    resetUserDetails: () => ({
      ...initialState,
      userDetails: getUserDetails(),
    }),
  },
})

export default reducer
export {
  userLoginRequestStart,
  userLoginRequestSuccessful,
  userLoginRequestFailure,
  resetUserDetails,
}

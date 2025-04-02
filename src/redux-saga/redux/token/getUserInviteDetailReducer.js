import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: null,
  userInviteData: null,
}

const {
  actions: {
    getUserInviteDetailRequestStart,
    getUserInviteDetailRequestSuccessful,
    getUserInviteDetailRequestFailure,
    resetGetUserInviteDetailRequest,
  },
  reducer,
} = createSlice({
  name: 'getUserInviteDetail',
  initialState,
  reducers: {
    getUserInviteDetailRequestStart: (state) => ({
      ...state,
      loading: true,
    }),
    getUserInviteDetailRequestSuccessful: (state, action) => ({
      ...state,
      loading: false,
      success: true,
      userInviteData: action && action.payload,
    }),
    getUserInviteDetailRequestFailure: (state) => ({
      ...state,
      error: true,
      loading: false,
    }),
    resetGetUserInviteDetailRequest: () => ({
      ...initialState,
    }),
  },
})

export default reducer
export {
  getUserInviteDetailRequestStart,
  getUserInviteDetailRequestSuccessful,
  getUserInviteDetailRequestFailure,
  resetGetUserInviteDetailRequest,
}

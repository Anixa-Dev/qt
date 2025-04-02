import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: null,
  sendInviteResult: null,
}

const {
  actions: {
    sendInviteRequestStart,
    sendInviteRequestSuccessful,
    sendInviteRequestFailure,
    resetSendInviteRequest,
  },
  reducer,
} = createSlice({
  name: 'sendInvite',
  initialState,
  reducers: {
    sendInviteRequestStart: (state) => ({
      ...state,
      loading: true,
    }),
    sendInviteRequestSuccessful: (state, action) => ({
      ...state,
      loading: false,
      success: true,
      sendInviteResult: action && action.payload,
    }),
    sendInviteRequestFailure: (state) => ({
      ...state,
      error: true,
      loading: false,
    }),
    resetSendInviteRequest: () => ({
      ...initialState,
    }),
  },
})

export default reducer
export {
  sendInviteRequestStart,
  sendInviteRequestSuccessful,
  sendInviteRequestFailure,
  resetSendInviteRequest,
}

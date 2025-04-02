import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: null,
  data: null,
}

const {
  actions: {
    sendTestInviteMailRequestStart,
    sendTestInviteMailRequestSuccessful,
    sendTestInviteMailRequestFailure,
    resetSendTestInviteMailRequest,
  },
  reducer,
} = createSlice({
  name: 'sendTestInviteMail',
  initialState,
  reducers: {
    sendTestInviteMailRequestStart: (state) => ({
      ...state,
      loading: true,
    }),
    sendTestInviteMailRequestSuccessful: (state, action) => ({
      ...state,
      loading: false,
      success: true,
      data: action && action.payload,
    }),
    sendTestInviteMailRequestFailure: (state) => ({
      ...state,
      error: true,
      loading: false,
    }),
    resetSendTestInviteMailRequest: () => ({
      ...initialState,
    }),
  },
})

export default reducer
export {
  sendTestInviteMailRequestStart,
  sendTestInviteMailRequestSuccessful,
  sendTestInviteMailRequestFailure,
  resetSendTestInviteMailRequest,
}

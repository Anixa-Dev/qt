import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: null,
  sendNotificationResult: null,
}

const {
  actions: {
    sendNotificationRequestStart,
    sendNotificationRequestSuccessful,
    sendNotificationRequestFailure,
    resetSendNotificationRequest,
  },
  reducer,
} = createSlice({
  name: 'sendNotification',
  initialState,
  reducers: {
    sendNotificationRequestStart: (state) => ({
      ...state,
      loading: true,
    }),
    sendNotificationRequestSuccessful: (state, action) => ({
      ...state,
      loading: false,
      success: true,
      sendNotificationResult: action && action.payload,
    }),
    sendNotificationRequestFailure: (state) => ({
      ...state,
      error: true,
      loading: false,
    }),
    resetSendNotificationRequest: () => ({
      ...initialState,
    }),
  },
})

export default reducer
export {
  sendNotificationRequestStart,
  sendNotificationRequestSuccessful,
  sendNotificationRequestFailure,
  resetSendNotificationRequest,
}

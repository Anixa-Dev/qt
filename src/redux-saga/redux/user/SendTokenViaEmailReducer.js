import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  success: false,
  error: false,
  result: null,
}

const {
  actions: {
    sendTokenViaEmailRequestStart, sendTokenViaEmailRequestSuccessful,
    sendTokenViaEmailRequestFailure,
  },
  reducer,
} = createSlice({
  name: 'sendTokenViaEmail',
  initialState,
  reducers: {
    sendTokenViaEmailRequestStart: () => ({
      ...initialState,
      loading: true,
    }),
    sendTokenViaEmailRequestSuccessful: (state, action) => ({
      ...initialState,
      success: true,
      result: action && action.payload,
    }),
    sendTokenViaEmailRequestFailure: () => initialState,
  },
})

export default reducer
export {
  sendTokenViaEmailRequestStart,
  sendTokenViaEmailRequestSuccessful,
  sendTokenViaEmailRequestFailure,
}

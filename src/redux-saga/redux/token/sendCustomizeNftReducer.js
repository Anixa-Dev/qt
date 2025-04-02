import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  data: null,
}

const {
  actions: {
    sendCustomizeNftInviteStart,
    sendCustomizeNftInviteSuccessful,
    sendCustomizeNftInviteFailure,
    sendCustomizeNftInviteReset,
  },
  reducer,
} = createSlice({
  name: 'sendCustomizeNftInvite',
  initialState,
  reducers: {
    sendCustomizeNftInviteStart: () => ({
      ...initialState,
      loading: true,
    }),
    sendCustomizeNftInviteSuccessful: (state, action) => ({
      ...initialState,
      success: true,
      data: action && action.payload,
    }),
    sendCustomizeNftInviteFailure: (state, action) => ({
      ...initialState,
      error: true,
      data: action && action.payload,
    }),
    sendCustomizeNftInviteReset: () => initialState,
  },
})

export default reducer
export {
  sendCustomizeNftInviteStart,
  sendCustomizeNftInviteSuccessful,
  sendCustomizeNftInviteFailure,
  sendCustomizeNftInviteReset,
}

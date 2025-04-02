import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  data: null,
}

const {
  actions: {
    resendCustomizeNftInviteStart,
    resendCustomizeNftInviteSuccessful,
    resendCustomizeNftInviteFailure,
    resendCustomizeNftInviteReset,
  },
  reducer,
} = createSlice({
  name: 'resendCustomizeNftInvite',
  initialState,
  reducers: {
    resendCustomizeNftInviteStart: () => ({
      ...initialState,
      loading: true,
    }),
    resendCustomizeNftInviteSuccessful: (state, action) => ({
      ...initialState,
      success: true,
      data: action && action.payload,
    }),
    resendCustomizeNftInviteFailure: (state, action) => ({
      ...initialState,
      error: true,
      data: action && action.payload,
    }),
    resendCustomizeNftInviteReset: () => initialState,
  },
})

export default reducer
export {
  resendCustomizeNftInviteStart,
  resendCustomizeNftInviteSuccessful,
  resendCustomizeNftInviteFailure,
  resendCustomizeNftInviteReset,
}

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: null,
  data: null,
}

const {
  actions: {
    createInviteGroupRequestStart,
    createInviteGroupRequestSuccessful,
    createInviteGroupRequestFailure,
    resetCreateInviteGroupRequest,
  },
  reducer,
} = createSlice({
  name: 'createInviteGroup',
  initialState,
  reducers: {
    createInviteGroupRequestStart: (state) => ({
      ...state,
      loading: true,
    }),
    createInviteGroupRequestSuccessful: (state, action) => ({
      ...state,
      loading: false,
      success: true,
      data: action && action.payload,
    }),
    createInviteGroupRequestFailure: (state) => ({
      ...state,
      error: true,
      loading: false,
    }),
    resetCreateInviteGroupRequest: () => ({
      ...initialState,
    }),
  },
})

export default reducer
export {
  createInviteGroupRequestStart,
  createInviteGroupRequestSuccessful,
  createInviteGroupRequestFailure,
  resetCreateInviteGroupRequest,
}

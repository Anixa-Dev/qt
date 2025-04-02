import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: null,
  groupList: null,
}

const {
  actions: {
    getInviteGroupListRequestStart,
    getInviteGroupListRequestSuccessful,
    getInviteGroupListRequestFailure,
    resetGetInviteGroupListRequest,
  },
  reducer,
} = createSlice({
  name: 'getInviteGroupList',
  initialState,
  reducers: {
    getInviteGroupListRequestStart: (state) => ({
      ...state,
      loading: true,
    }),
    getInviteGroupListRequestSuccessful: (state, action) => ({
      ...state,
      loading: false,
      success: true,
      groupList: action && action.payload,
    }),
    getInviteGroupListRequestFailure: (state) => ({
      ...state,
      error: true,
      loading: false,
    }),
    resetGetInviteGroupListRequest: () => ({
      ...initialState,
    }),
  },
})

export default reducer
export {
  getInviteGroupListRequestStart,
  getInviteGroupListRequestSuccessful,
  getInviteGroupListRequestFailure,
  resetGetInviteGroupListRequest,
}

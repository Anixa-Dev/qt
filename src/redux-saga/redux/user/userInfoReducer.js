import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  userData: null,
}

const {
  actions: {
    userInfoRequestStart,
    userInfoRequestSuccessful,
    userInfoRequestFailure,
    resetUserInfo,
  },
  reducer,
} = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    userInfoRequestStart: () => ({
      ...initialState,
      loading: true,
    }),
    userInfoRequestSuccessful: (state, action) => ({
      ...initialState,
      success: true,
      userData: action && action.payload,
    }),
    userInfoRequestFailure: () => ({
      ...initialState,
      error: true,
    }),
    resetUserInfo: () => ({
      ...initialState,
      userData: null,
    }),
  },
})

export default reducer
export {
  userInfoRequestStart,
  userInfoRequestSuccessful,
  userInfoRequestFailure,
  resetUserInfo,
}

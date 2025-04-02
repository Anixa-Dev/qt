import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  userTokenData: null,
}

const {
  actions: {
    userTokenRequestStart,
    userTokenRequestSuccessful,
    userTokenRequestFailure,
    resetUserToken,
  },
  reducer,
} = createSlice({
  name: 'userToken',
  initialState,
  reducers: {
    userTokenRequestStart: () => ({
      ...initialState,
      isLoading: true,
    }),
    userTokenRequestSuccessful: (state, action) => ({
      ...initialState,
      success: true,
      userTokenData: action && action.payload,
    }),
    userTokenRequestFailure: () => ({
      ...initialState,
      error: true,
    }),
    resetUserToken: () => ({
      ...initialState,
    }),
  },
})

export default reducer
export {
  userTokenRequestStart,
  userTokenRequestSuccessful,
  userTokenRequestFailure,
  resetUserToken,
}

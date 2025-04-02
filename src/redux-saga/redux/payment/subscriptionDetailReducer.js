import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  subscription: {},
}

const {
  actions: {
    subscriptionDetailRequestStart,
    subscriptionDetailRequestSuccessful,
    subscriptionDetailRequestFailure,
    resetSubscriptionDetail,
  },
  reducer,
} = createSlice({
  name: 'subscriptionDetail',
  initialState,
  reducers: {
    subscriptionDetailRequestStart: () => ({
      ...initialState,
      loading: true,
    }),
    subscriptionDetailRequestSuccessful: (state, action) => ({
      ...initialState,
      success: true,
      loading: false,
      subscription: action && action.payload,
    }),
    subscriptionDetailRequestFailure: () => ({
      ...initialState,
      loading: false,
      error: true,
    }),
    resetSubscriptionDetail: () => initialState,
  },
})

export default reducer
export {
  subscriptionDetailRequestStart,
  subscriptionDetailRequestSuccessful,
  subscriptionDetailRequestFailure,
  resetSubscriptionDetail,
}

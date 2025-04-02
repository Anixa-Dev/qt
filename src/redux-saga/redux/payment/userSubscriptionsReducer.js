import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  subscriptions: {},
}

const {
  actions: {
    fetchUserSubscriptionsRequestStart,
    fetchUserSubscriptionsRequestSuccessful,
    fetchUserSubscriptionsRequestFailure,
    resetUserSubscriptions,
    cancelSubscription,
  },
  reducer,
} = createSlice({
  name: 'userSubscriptions',
  initialState,
  reducers: {
    fetchUserSubscriptionsRequestStart: () => ({
      ...initialState,
      loading: true,
    }),
    fetchUserSubscriptionsRequestSuccessful: (state, action) => ({
      ...initialState,
      success: true,
      loading: false,
      subscriptions: action && action.payload,
    }),
    fetchUserSubscriptionsRequestFailure: () => ({
      ...initialState,
      loading: false,
      error: true,
    }),
    resetUserSubscriptions: () => initialState,
    cancelSubscription: (state) => (state),
  },
})

export default reducer
export {
  fetchUserSubscriptionsRequestStart,
  fetchUserSubscriptionsRequestSuccessful,
  fetchUserSubscriptionsRequestFailure,
  resetUserSubscriptions,
  cancelSubscription,
}

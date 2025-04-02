import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  data: null,
}

const {
  actions: {
    updateTokenDetailRequestStart,
    updateTokenDetailRequestSuccessful,
    updateTokenDetailRequestFailure,
    updateTokenDetailReset,
  },
  reducer,
} = createSlice({
  name: 'updateTokenDetail',
  initialState,
  reducers: {
    updateTokenDetailRequestStart: () => ({
      ...initialState,
      loading: true,
    }),
    updateTokenDetailRequestSuccessful: (state, action) => ({
      ...initialState,
      success: true,
      data: action && action.payload,
    }),
    updateTokenDetailRequestFailure: (state, action) => ({
      ...initialState,
      error: true,
      data: action && action.payload,
    }),
    updateTokenDetailReset: () => initialState,
  },
})

export default reducer
export {
  updateTokenDetailRequestStart,
  updateTokenDetailRequestSuccessful,
  updateTokenDetailRequestFailure,
  updateTokenDetailReset,
}

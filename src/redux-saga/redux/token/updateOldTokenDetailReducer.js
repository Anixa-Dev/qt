import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  data: null,
}

const {
  actions: {
    updateOldTokenDetailRequestStart,
    updateOldTokenDetailRequestSuccessful,
    updateOldTokenDetailRequestFailure,
    updateOldTokenDetailReset,
  },
  reducer,
} = createSlice({
  name: 'updateOldTokenDetail',
  initialState,
  reducers: {
    updateOldTokenDetailRequestStart: () => ({
      ...initialState,
      loading: true,
    }),
    updateOldTokenDetailRequestSuccessful: (state, action) => ({
      ...initialState,
      success: true,
      data: action && action.payload,
    }),
    updateOldTokenDetailRequestFailure: (state, action) => ({
      ...initialState,
      error: true,
      data: action && action.payload,
    }),
    updateOldTokenDetailReset: () => initialState,
  },
})

export default reducer
export {
  updateOldTokenDetailRequestStart,
  updateOldTokenDetailRequestSuccessful,
  updateOldTokenDetailRequestFailure,
  updateOldTokenDetailReset,
}

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: null,
}

const {
  actions: {
    addRetailerRequestStart,
    addRetailerRequestSuccessful,
    addRetailerRequestFailure,
    resetAddRetailerRequest,
  },
  reducer,
} = createSlice({
  name: 'addRetailer',
  initialState,
  reducers: {
    addRetailerRequestStart: (state) => ({
      ...state,
      loading: true,
    }),
    addRetailerRequestSuccessful: (state) => ({
      ...state,
      loading: false,
      success: true,
    }),
    addRetailerRequestFailure: (state) => ({
      ...state,
      error: true,
      loading: false,
    }),
    resetAddRetailerRequest: () => ({
      ...initialState,
    }),
  },
})

export default reducer
export {
  addRetailerRequestStart,
  addRetailerRequestSuccessful,
  addRetailerRequestFailure,
  resetAddRetailerRequest,
}

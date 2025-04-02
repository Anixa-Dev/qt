import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: null,
  retailers: [],
}

const {
  actions: {
    retailersRequestStart,
    retailersRequestSuccessful,
    retailersRequestFailure,
    resetRetailersRequest,
  },
  reducer,
} = createSlice({
  name: 'retailers',
  initialState,
  reducers: {
    retailersRequestStart: (state) => ({
      ...state,
      loading: true,
    }),
    retailersRequestSuccessful: (state, action) => ({
      ...state,
      loading: false,
      success: true,
      retailers: action && action.payload && action.payload?.retailers,
    }),
    retailersRequestFailure: (state) => ({
      ...state,
      error: true,
      loading: false,
    }),
    resetRetailersRequest: () => ({
      ...initialState,
    }),
  },
})

export default reducer
export {
  retailersRequestStart,
  retailersRequestSuccessful,
  retailersRequestFailure,
  resetRetailersRequest,
}

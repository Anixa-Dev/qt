import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  passData: null,
}

const {
  actions: {
    passDetailsRequestStart,
    passDetailsRequestSuccessful,
    passDetailsRequestFailure,
    resetPassDetails,
  },
  reducer,
} = createSlice({
  name: 'passDetails',
  initialState,
  reducers: {
    passDetailsRequestStart: (state) => ({
      ...state,
      loading: true,
    }),
    passDetailsRequestSuccessful: (state, action) => ({
      ...state,
      success: true,
      passData: action && action.payload,
      loading: false,
    }),
    passDetailsRequestFailure: (state) => ({
      ...state,
      error: true,
      loading: false,
    }),
    resetPassDetails: () => ({
      ...initialState,
      passData: null,
    }),
  },
})

export default reducer
export {
  passDetailsRequestFailure,
  passDetailsRequestStart,
  passDetailsRequestSuccessful,
  resetPassDetails,
}

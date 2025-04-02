import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  data: null,
}

const {
  actions: {
    deleteNftMeRequestStart,
    deleteNftMeRequestSuccessful,
    deleteNftMeRequestFailure,
    resetDeleteNftMe,
  },
  reducer,
} = createSlice({
  name: 'deleteNftMe',
  initialState,
  reducers: {
    deleteNftMeRequestStart: () => ({
      ...initialState,
      isLoading: true,
    }),
    deleteNftMeRequestSuccessful: (state, action) => ({
      ...initialState,
      success: true,
      data: action && action.payload,
    }),
    deleteNftMeRequestFailure: () => ({
      ...initialState,
      error: true,
    }),
    resetDeleteNftMe: () => initialState,
  },
})

export default reducer
export {
  deleteNftMeRequestStart,
  deleteNftMeRequestSuccessful,
  deleteNftMeRequestFailure,
  resetDeleteNftMe,
}

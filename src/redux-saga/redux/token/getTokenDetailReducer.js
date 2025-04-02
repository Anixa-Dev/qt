import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  tokenDetail: null,
}

const {
  actions: {
    tokenDetailRequestStart,
    tokenDetailRequestSuccessful,
    tokenDetailRequestFailure,
    resetTokenDetail,
  },
  reducer,
} = createSlice({
  name: 'tokenDetail',
  initialState,
  reducers: {
    tokenDetailRequestStart: (state) => ({
      ...state,
      loading: true,
    }),
    tokenDetailRequestSuccessful: (state, action) => ({
      ...state,
      success: true,
      loading: false,
      tokenDetail: action && action.payload,
    }),
    tokenDetailRequestFailure: (state) => ({
      ...state,
      error: true,
      loading: false,
    }),
    resetTokenDetail: () => initialState,
  },
})

export default reducer
export {
  tokenDetailRequestFailure,
  tokenDetailRequestStart,
  tokenDetailRequestSuccessful,
  resetTokenDetail,
}

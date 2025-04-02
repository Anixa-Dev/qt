import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  passData: null,
}

const {
  actions: {
    passPreviewRequestStart,
    passPreviewRequestSuccessful,
    passPreviewRequestFailure,
    resetPassPreview,
  },
  reducer,
} = createSlice({
  name: 'passPreview',
  initialState,
  reducers: {
    passPreviewRequestStart: () => ({
      ...initialState,
      loading: true,
    }),
    passPreviewRequestSuccessful: (state, action) => ({
      ...initialState,
      success: true,
      passData: action && action.payload,
    }),
    passPreviewRequestFailure: () => ({
      ...initialState,
      error: true,
    }),
    resetPassPreview: () => ({
      ...initialState,
      passData: null,
    }),
  },
})

export default reducer
export {
  passPreviewRequestStart,
  passPreviewRequestSuccessful,
  passPreviewRequestFailure,
  resetPassPreview,
}

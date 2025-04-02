import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  data: null,
}

const {
  actions: {
    duplicateTokenRequestStart,
    duplicateTokenRequestSuccessful,
    duplicateTokenRequestFailure,
    resetDuplicateToken,
  },
  reducer,
} = createSlice({
  name: 'duplicateToken',
  initialState,
  reducers: {
    duplicateTokenRequestStart: () => ({
      ...initialState,
      isLoading: true,
    }),
    duplicateTokenRequestSuccessful: (state, action) => ({
      ...initialState,
      success: true,
      data: action && action.payload,
    }),
    duplicateTokenRequestFailure: () => ({
      ...initialState,
      error: true,
    }),
    resetDuplicateToken: () => ({
      ...initialState,
    }),
  },
})

export default reducer
export {
  duplicateTokenRequestStart,
  duplicateTokenRequestSuccessful,
  duplicateTokenRequestFailure,
  resetDuplicateToken,
}

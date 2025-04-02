import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  data: null,
}

const {
  actions: {
    saveNftLayoutChangesRequestStart,
    saveNftLayoutChangesRequestSuccessful,
    saveNftLayoutChangesRequestFailure,
    saveNftLayoutChangesReset,
  },
  reducer,
} = createSlice({
  name: 'saveNftLayoutChanges',
  initialState,
  reducers: {
    saveNftLayoutChangesRequestStart: () => ({
      ...initialState,
      loading: true,
    }),
    saveNftLayoutChangesRequestSuccessful: (state, action) => ({
      ...initialState,
      success: true,
      data: action && action.payload,
    }),
    saveNftLayoutChangesRequestFailure: (state, action) => ({
      ...initialState,
      error: true,
      data: action && action.payload,
    }),
    saveNftLayoutChangesReset: () => initialState,
  },
})

export default reducer
export {
  saveNftLayoutChangesRequestStart,
  saveNftLayoutChangesRequestSuccessful,
  saveNftLayoutChangesRequestFailure,
  saveNftLayoutChangesReset,
}

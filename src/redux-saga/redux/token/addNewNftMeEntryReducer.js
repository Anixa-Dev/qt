import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  data: null,
}

const {
  actions: {
    addNewNftMeEntryRequestStart,
    addNewNftMeEntryRequestSuccessful,
    addNewNftMeEntryRequestFailure,
    resetAddNewNftMeEntry,
  },
  reducer,
} = createSlice({
  name: 'addNewNftMeEntry',
  initialState,
  reducers: {
    addNewNftMeEntryRequestStart: () => ({
      ...initialState,
      isLoading: true,
    }),
    addNewNftMeEntryRequestSuccessful: (state, action) => ({
      ...initialState,
      success: true,
      data: action && action.payload,
    }),
    addNewNftMeEntryRequestFailure: () => ({
      ...initialState,
      error: true,
    }),
    resetAddNewNftMeEntry: () => initialState,
  },
})

export default reducer
export {
  addNewNftMeEntryRequestStart,
  addNewNftMeEntryRequestSuccessful,
  addNewNftMeEntryRequestFailure,
  resetAddNewNftMeEntry,
}

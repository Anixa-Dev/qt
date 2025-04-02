import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  data: null,
}

const {
  actions: {
    addNewNftMeEntryCollectionRequestStart,
    addNewNftMeEntryCollectionRequestSuccessful,
    addNewNftMeEntryCollectionRequestFailure,
    resetAddNewNftMeEntryCollection,
  },
  reducer,
} = createSlice({
  name: 'addNewNftMeEntryCollection',
  initialState,
  reducers: {
    addNewNftMeEntryCollectionRequestStart: () => ({
      ...initialState,
      isLoading: true,
    }),
    addNewNftMeEntryCollectionRequestSuccessful: (state, action) => ({
      ...initialState,
      success: true,
      data: action && action.payload,
    }),
    addNewNftMeEntryCollectionRequestFailure: () => ({
      ...initialState,
      error: true,
    }),
    resetAddNewNftMeEntryCollection: () => initialState,
  },
})

export default reducer
export {
  addNewNftMeEntryCollectionRequestStart,
  addNewNftMeEntryCollectionRequestSuccessful,
  addNewNftMeEntryCollectionRequestFailure,
  resetAddNewNftMeEntryCollection,
}

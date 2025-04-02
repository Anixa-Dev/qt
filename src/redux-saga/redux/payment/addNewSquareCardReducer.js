import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  data: null,
}

const {
  actions: {
    addNewSquareCardRequestStart,
    addNewSquareCardRequestSuccessful,
    addNewSquareCardRequestFailure,
    resetAddNewSquareCard,
  },
  reducer,
} = createSlice({
  name: 'addNewSquareCard',
  initialState,
  reducers: {
    addNewSquareCardRequestStart: () => ({
      ...initialState,
      isLoading: true,
    }),
    addNewSquareCardRequestSuccessful: (state, action) => ({
      ...initialState,
      success: true,
      data: action && action.payload,
    }),
    addNewSquareCardRequestFailure: () => ({
      ...initialState,
      error: true,
    }),
    resetAddNewSquareCard: () => initialState,
  },
})

export default reducer
export {
  addNewSquareCardRequestStart,
  addNewSquareCardRequestSuccessful,
  addNewSquareCardRequestFailure,
  resetAddNewSquareCard,
}

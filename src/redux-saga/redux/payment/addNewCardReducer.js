import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  data: null,
}

const {
  actions: {
    addNewCardRequestStart,
    addNewCardRequestSuccessful,
    addNewCardRequestFailure,
    resetAddNewCard,
  },
  reducer,
} = createSlice({
  name: 'addNewCard',
  initialState,
  reducers: {
    addNewCardRequestStart: () => ({
      ...initialState,
      isLoading: true,
    }),
    addNewCardRequestSuccessful: (state, action) => ({
      ...initialState,
      success: true,
      data: action && action.payload,
    }),
    addNewCardRequestFailure: () => ({
      ...initialState,
      error: true,
    }),
    resetAddNewCard: () => initialState,
  },
})

export default reducer
export {
  addNewCardRequestStart,
  addNewCardRequestSuccessful,
  addNewCardRequestFailure,
  resetAddNewCard,
}

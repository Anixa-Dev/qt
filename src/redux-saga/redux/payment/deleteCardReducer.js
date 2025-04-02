import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  data: null,
}

const {
  actions: {
    deleteCardRequestStart,
    deleteCardRequestSuccessful,
    deleteCardRequestFailure,
    resetDeleteCard,
  },
  reducer,
} = createSlice({
  name: 'deleteCard',
  initialState,
  reducers: {
    deleteCardRequestStart: () => ({
      ...initialState,
      isLoading: true,
    }),
    deleteCardRequestSuccessful: (state, action) => ({
      ...initialState,
      success: true,
      data: action && action.payload,
    }),
    deleteCardRequestFailure: () => ({
      ...initialState,
      error: true,
    }),
    resetDeleteCard: () => initialState,
  },
})

export default reducer
export {
  deleteCardRequestStart,
  deleteCardRequestSuccessful,
  deleteCardRequestFailure,
  resetDeleteCard,
}

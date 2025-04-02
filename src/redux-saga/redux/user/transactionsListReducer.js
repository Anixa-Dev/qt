import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  success: false,
  error: false,
  transactionsDetail: null,
  transactionsCount: null,
  loading: null,
}

const {
  actions: {
    transactionsListRequestStart,
    transactionsListRequestSuccessful,
    transactionsListRequestFailure,
  },
  reducer,
} = createSlice({
  name: 'transactionsList',
  initialState,
  reducers: {
    transactionsListRequestStart: () => ({
      ...initialState,
      loading: true,
    }),
    transactionsListRequestSuccessful: (state, action) => ({
      ...initialState,
      success: true,
      loading: false,
      transactionsDetail: action && action.payload && action.payload.rows,
      transactionsCount: action && action.payload && action.payload.count,
    }),
    transactionsListRequestFailure: () => ({
      ...initialState,
      error: true,
      loading: false,
    }),
  },
})

export default reducer
export {
  transactionsListRequestStart,
  transactionsListRequestSuccessful,
  transactionsListRequestFailure,
}

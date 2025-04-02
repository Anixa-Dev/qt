import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  data: null,
}

const {
  actions: {
    approvePaypalStart,
    approvePaypalSuccessful,
    approvePaypalFailure,
  },
  reducer,
} = createSlice({
  name: 'approvePaypal',
  initialState,
  reducers: {
    approvePaypalStart: () => ({
      ...initialState,
      isLoading: true,
    }),
    approvePaypalSuccessful: (state, action) => ({
      ...initialState,
      success: true,
      data: action && action.payload,
    }),
    approvePaypalFailure: () => ({
      ...initialState,
      error: true,
    }),
  },
})

export default reducer
export {
  approvePaypalStart,
  approvePaypalSuccessful,
  approvePaypalFailure,
}

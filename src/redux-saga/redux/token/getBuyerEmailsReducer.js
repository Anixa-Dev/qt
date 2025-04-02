import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: null,
  buyerEmailList: [],
}

const {
  actions: {
    getBuyerEmailsStart,
    getBuyerEmailsSuccessful,
    getBuyerEmailsFailure,
    resetBuyerEmails,
  },
  reducer,
} = createSlice({
  name: 'buyerEmails',
  initialState,
  reducers: {
    getBuyerEmailsStart: (state) => ({
      ...state,
      loading: true,
    }),
    getBuyerEmailsSuccessful: (state, action) => ({
      ...state,
      loading: false,
      success: true,
      buyerEmailList: action && action.payload,
    }),
    getBuyerEmailsFailure: (state) => ({
      ...state,
      error: true,
      loading: false,
    }),
    resetBuyerEmails: () => ({
      ...initialState,
    }),
  },
})

export default reducer
export {
  getBuyerEmailsStart,
  getBuyerEmailsSuccessful,
  getBuyerEmailsFailure,
  resetBuyerEmails,
}

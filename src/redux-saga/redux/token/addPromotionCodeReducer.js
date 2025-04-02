import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: null,
}

const {
  actions: {
    addPromotionCodeRequestStart,
    addPromotionCodeRequestSuccessful,
    addPromotionCodeRequestFailure,
    resetAddPromotionCodeRequest,
  },
  reducer,
} = createSlice({
  name: 'addPromotionCode',
  initialState,
  reducers: {
    addPromotionCodeRequestStart: (state) => ({
      ...state,
      loading: true,
    }),
    addPromotionCodeRequestSuccessful: (state) => ({
      ...state,
      loading: false,
      success: true,
    }),
    addPromotionCodeRequestFailure: (state) => ({
      ...state,
      error: true,
      loading: false,
    }),
    resetAddPromotionCodeRequest: () => ({
      ...initialState,
    }),
  },
})

export default reducer
export {
  addPromotionCodeRequestStart,
  addPromotionCodeRequestSuccessful,
  addPromotionCodeRequestFailure,
  resetAddPromotionCodeRequest,
}

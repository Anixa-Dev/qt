import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: null,
  promotionCodes: null,
}

const {
  actions: {
    getPromotionCodesRequestStart,
    getPromotionCodesRequestSuccessful,
    getPromotionCodesRequestFailure,
    resetGetPromotionCodesRequest,
  },
  reducer,
} = createSlice({
  name: 'getPromotionCodes',
  initialState,
  reducers: {
    getPromotionCodesRequestStart: (state) => ({
      ...state,
      loading: true,
    }),
    getPromotionCodesRequestSuccessful: (state, action) => ({
      ...state,
      loading: false,
      success: true,
      promotionCodes: action && action.payload && action.payload?.promotionCodes,
    }),
    getPromotionCodesRequestFailure: (state) => ({
      ...state,
      error: true,
      loading: false,
    }),
    resetGetPromotionCodesRequest: () => ({
      ...initialState,
    }),
  },
})

export default reducer
export {
  getPromotionCodesRequestStart,
  getPromotionCodesRequestSuccessful,
  getPromotionCodesRequestFailure,
  resetGetPromotionCodesRequest,
}

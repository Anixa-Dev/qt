import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: null,
  appliedPromotionCode: null,
  message: null,
}

const {
  actions: {
    applyPromotionCodeRequestStart,
    applyPromotionCodeRequestSuccessful,
    applyPromotionCodeRequestFailure,
    resetApplyPromotionCodeRequest,
  },
  reducer,
} = createSlice({
  name: 'applyPromotionCode',
  initialState,
  reducers: {
    applyPromotionCodeRequestStart: (state) => ({
      ...state,
      loading: true,
    }),
    applyPromotionCodeRequestSuccessful: (state, action) => ({
      ...state,
      loading: false,
      success: true,
      error: false,
      appliedPromotionCode: action && action?.payload && action?.payload?.appliedPromotionCode,
      message: action && action?.payload && action?.payload?.message,
    }),
    applyPromotionCodeRequestFailure: (state, action) => ({
      ...state,
      error: true,
      success: false,
      loading: false,
      message: action && action?.payload && action?.payload?.message,
    }),
    resetApplyPromotionCodeRequest: () => ({
      ...initialState,
    }),
  },
})

export default reducer
export {
  applyPromotionCodeRequestStart,
  applyPromotionCodeRequestSuccessful,
  applyPromotionCodeRequestFailure,
  resetApplyPromotionCodeRequest,
}

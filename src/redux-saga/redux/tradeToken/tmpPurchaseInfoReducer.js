import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  tmpTokenData: null,
  requestType: '',
}

const {
  actions: {
    tmpPurchaseInfoRequestStart,
    tmpPurchaseInfoRequestSuccessful,
    tmpPurchaseInfoRequestFailure,
    resetTmpPurchaseInfo,
    resetTmpPurchaseInfoFlags,
  },
  reducer,
} = createSlice({
  name: 'tmpPurchaseInfo',
  initialState,
  reducers: {
    tmpPurchaseInfoRequestStart: (state, action) => ({
      ...state,
      loading: true,
      requestType: action.payload.requestType,
    }),
    tmpPurchaseInfoRequestSuccessful: (state, action) => ({
      ...state,
      success: true,
      loading: false,
      tmpTokenData: [ 'FETCH' ].includes(state.requestType) ? action && action.payload : state.tmpTokenData,
    }),
    tmpPurchaseInfoRequestFailure: (state) => ({
      ...state,
      error: true,
      success: false,
      loading: false,
    }),
    resetTmpPurchaseInfo: () => (initialState),
    resetTmpPurchaseInfoFlags: (state) => ({
      ...state,
      loading: null,
      error: null,
      success: false,
    }),
  },
})

export default reducer
export {
  tmpPurchaseInfoRequestStart,
  tmpPurchaseInfoRequestSuccessful,
  tmpPurchaseInfoRequestFailure,
  resetTmpPurchaseInfo,
  resetTmpPurchaseInfoFlags,
}

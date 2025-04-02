import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  nftMeData: null,
}

const {
  actions: {
    getCollectionDetailRequestStart,
    getCollectionDetailRequestSuccessful,
    getCollectionDetailRequestFailure,
    resetCollectionDetail,
  },
  reducer,
} = createSlice({
  name: 'getCollectionDetail',
  initialState,
  reducers: {
    getCollectionDetailRequestStart: (state) => ({
      ...state,
      loading: true,
    }),
    getCollectionDetailRequestSuccessful: (state, action) => ({
      ...state,
      success: true,
      loading: false,
      nftMeData: action && action.payload,
    }),
    getCollectionDetailRequestFailure: (state) => ({
      ...state,
      error: true,
      loading: false,
    }),
    resetCollectionDetail: () => initialState,
  },
})

export default reducer
export {
  getCollectionDetailRequestFailure,
  getCollectionDetailRequestStart,
  getCollectionDetailRequestSuccessful,
  resetCollectionDetail,
}

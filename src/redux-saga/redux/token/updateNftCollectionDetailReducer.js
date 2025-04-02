import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  data: null,
}

const {
  actions: {
    updateNFTCollectionDetailRequestStart,
    updateNFTCollectionDetailRequestSuccessful,
    updateNFTCollectionDetailRequestFailure,
    updateNFTCollectionDetailReset,
  },
  reducer,
} = createSlice({
  name: 'updateNFTCollectionDetail',
  initialState,
  reducers: {
    updateNFTCollectionDetailRequestStart: () => ({
      ...initialState,
      loading: true,
    }),
    updateNFTCollectionDetailRequestSuccessful: (state, action) => ({
      ...initialState,
      success: true,
      data: action && action.payload,
    }),
    updateNFTCollectionDetailRequestFailure: (state, action) => ({
      ...initialState,
      error: true,
      data: action && action.payload,
    }),
    updateNFTCollectionDetailReset: () => initialState,
  },
})

export default reducer
export {
  updateNFTCollectionDetailRequestStart,
  updateNFTCollectionDetailRequestSuccessful,
  updateNFTCollectionDetailRequestFailure,
  updateNFTCollectionDetailReset,
}

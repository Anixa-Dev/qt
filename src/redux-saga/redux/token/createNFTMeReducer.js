import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  data: null,
}

const {
  actions: {
    createNFTMeRequestStart,
    createNFTMeRequestSuccessful,
    createNFTMeRequestFailure,
    resetCreateNFTMe,
  },
  reducer,
} = createSlice({
  name: 'createNFTMe',
  initialState,
  reducers: {
    createNFTMeRequestStart: () => ({
      ...initialState,
      isLoading: true,
    }),
    createNFTMeRequestSuccessful: (state, action) => ({
      ...initialState,
      success: true,
      data: action && action.payload,
    }),
    createNFTMeRequestFailure: () => ({
      ...initialState,
      error: true,
    }),
    resetCreateNFTMe: () => ({
      ...initialState,
    }),
  },
})

export default reducer
export {
  createNFTMeRequestStart,
  createNFTMeRequestSuccessful,
  createNFTMeRequestFailure,
  resetCreateNFTMe,
}

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: null,
  nftMeDetailData: null,
}

const {
  actions: {
    nftMeTokenDetailReducerStart,
    nftMeTokenDetailReducerSuccessful,
    nftMeTokenDetailReducerFailure,
    resetNftMeTokenDetailReducer,
  },
  reducer,
} = createSlice({
  name: 'NftMeTokenDetail',
  initialState,
  reducers: {
    nftMeTokenDetailReducerStart: (state) => ({
      ...state,
      loading: true,
    }),
    nftMeTokenDetailReducerSuccessful: (state, action) => ({
      ...state,
      loading: false,
      success: true,
      nftMeDetailData: action && action.payload,
    }),
    nftMeTokenDetailReducerFailure: (state) => ({
      ...state,
      error: true,
      loading: false,
    }),
    resetNftMeTokenDetailReducer: () => ({
      initialState,
    }),
  },
})

export default reducer
export {
  nftMeTokenDetailReducerStart,
  nftMeTokenDetailReducerSuccessful,
  nftMeTokenDetailReducerFailure,
  resetNftMeTokenDetailReducer,
}

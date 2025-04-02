import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: null,
  nftMeDetailData: null,
}

const {
  actions: {
    getNftMeTokenDetailReducerStart,
    getNftMeTokenDetailReducerSuccessful,
    getNftMeTokenDetailReducerFailure,
    resetgetNftMeTokenDetailReducer,
  },
  reducer,
} = createSlice({
  name: 'getNftMeTokenDetail',
  initialState,
  reducers: {
    getNftMeTokenDetailReducerStart: (state) => ({
      ...state,
      loading: true,
    }),
    getNftMeTokenDetailReducerSuccessful: (state, action) => ({
      ...state,
      loading: false,
      success: true,
      nftMeDetailData: action && action.payload,
    }),
    getNftMeTokenDetailReducerFailure: (state) => ({
      ...state,
      error: true,
      loading: false,
    }),
    resetgetNftMeTokenDetailReducer: () => ({
      initialState,
    }),
  },
})

export default reducer
export {
  getNftMeTokenDetailReducerStart,
  getNftMeTokenDetailReducerSuccessful,
  getNftMeTokenDetailReducerFailure,
  resetgetNftMeTokenDetailReducer,
}

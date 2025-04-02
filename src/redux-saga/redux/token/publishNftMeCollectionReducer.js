import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: null,
  publishedData: null,
}

const {
  actions: {
    publishNftMeCollectionReducerStart,
    publishNftMeCollectionReducerSuccessful,
    publishNftMeCollectionReducerFailure,
    resetPublishNftMeCollectionReducer,
  },
  reducer,
} = createSlice({
  name: 'publishNftMeCollection',
  initialState,
  reducers: {
    publishNftMeCollectionReducerStart: (state) => ({
      ...state,
      loading: true,
    }),
    publishNftMeCollectionReducerSuccessful: (state, action) => ({
      ...state,
      loading: false,
      success: true,
      nftMeDetailData: action && action.payload,
    }),
    publishNftMeCollectionReducerFailure: (state) => ({
      ...state,
      error: true,
      loading: false,
    }),
    resetPublishNftMeCollectionReducer: () => ({
      initialState,
    }),
  },
})

export default reducer
export {
  publishNftMeCollectionReducerStart,
  publishNftMeCollectionReducerSuccessful,
  publishNftMeCollectionReducerFailure,
  resetPublishNftMeCollectionReducer,
}

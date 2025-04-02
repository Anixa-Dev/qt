import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: null,
  offers: [],
}

const {
  actions: {
    offersRequestStart,
    offersRequestSuccessful,
    offersRequestFailure,
    resetoffersRequest,
  },
  reducer,
} = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    offersRequestStart: (state) => ({
      ...state,
      loading: true,
    }),
    offersRequestSuccessful: (state, action) => ({
      ...state,
      loading: false,
      success: true,
      offers: action && action.payload && action.payload?.offers,
    }),
    offersRequestFailure: (state) => ({
      ...state,
      error: true,
      loading: false,
    }),
    resetoffersRequest: () => ({
      ...initialState,
    }),
  },
})

export default reducer
export {
  offersRequestStart,
  offersRequestSuccessful,
  offersRequestFailure,
  resetoffersRequest,
}

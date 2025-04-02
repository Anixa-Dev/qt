import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  filterData: null,
}

const {
  actions: {
    getMarketplaceFilterValuesRequestStart,
    getMarketplaceFilterValuesRequestSuccessful,
    getMarketplaceFilterValuesRequestFailure,
    resetMarketplaceFilterValues,
  },
  reducer,
} = createSlice({
  name: 'getMarketplaceFilterValues',
  initialState,
  reducers: {
    getMarketplaceFilterValuesRequestStart: (state) => ({
      ...state,
      loading: true,
    }),
    getMarketplaceFilterValuesRequestSuccessful: (state, action) => ({
      ...state,
      success: true,
      filterData: action && action.payload,
    }),
    getMarketplaceFilterValuesRequestFailure: (state) => ({
      ...state,
      error: true,
    }),
    resetMarketplaceFilterValues: () => ({
      ...initialState,
      filterData: null,
    }),
  },
})

export default reducer
export {
  getMarketplaceFilterValuesRequestFailure,
  getMarketplaceFilterValuesRequestStart,
  getMarketplaceFilterValuesRequestSuccessful,
  resetMarketplaceFilterValues,
}

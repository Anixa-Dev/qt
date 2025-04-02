import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  error: null,
  success: false,
  data: null,
  redirectToSale: false,
}

const {
  actions: {
    saveCustomizationValuesRequestStart,
    saveCustomizationValuesRequestSuccessful,
    saveCustomizationValuesRequestFailure,
    saveCustomizationValuesReset,
  },
  reducer,
} = createSlice({
  name: 'saveCustomizationValues',
  initialState,
  reducers: {
    saveCustomizationValuesRequestStart: () => ({
      ...initialState,
      loading: true,
    }),
    saveCustomizationValuesRequestSuccessful: (state, action) => ({
      ...initialState,
      success: true,
      data: action && action.payload,
      redirectToSale: action?.payload?.redirectToSale,
    }),
    saveCustomizationValuesRequestFailure: (state, action) => ({
      ...initialState,
      error: true,
      data: action && action.payload,
    }),
    saveCustomizationValuesReset: () => initialState,
  },
})

export default reducer
export {
  saveCustomizationValuesRequestStart,
  saveCustomizationValuesRequestSuccessful,
  saveCustomizationValuesRequestFailure,
  saveCustomizationValuesReset,
}

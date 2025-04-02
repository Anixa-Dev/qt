import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
  text: '',
}

const {
  actions: {
    startLoader,
    stopLoader,
  },
  reducer,
} = createSlice({
  name: 'pageLoader',
  initialState,
  reducers: {
    startLoader: (state, action) => ({
      ...state,
      loading: true,
      text: (action && action.payload && action.payload.text) || '',
    }),
    stopLoader: (state) => ({
      ...state,
      loading: false,
      text: '',
    }),
  },
})

export default reducer
export {
  startLoader,
  stopLoader,
}

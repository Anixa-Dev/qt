import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  secondsLeft: null,
}

const {
  actions: {
    setFormTimer,
    resetFormTimer,
  },
  reducer,
} = createSlice({
  name: 'formTimer',
  initialState,
  reducers: {
    setFormTimer: (state, action) => ({
      ...state,
      secondsLeft: (action && action.payload && action.payload.secondsLeft),
    }),
    resetFormTimer: () => ({
      ...initialState,
    }),
  },
})

export default reducer
export {
  setFormTimer,
  resetFormTimer,
}

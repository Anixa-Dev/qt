import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  metamaskLogin: {
    open: false,
    initialOpen: true,
  },
}

const {
  actions: {
    openInitialPopup,
    closeInitialPopup,
    setInitialOpenPopup,
  },
  reducer,
} = createSlice({
  name: 'initialPopups',
  initialState,
  reducers: {
    openInitialPopup: (state, action) => ({
      ...state,
      [ action.payload.popupName ]: {
        ...state[ action.payload.popupName ],
        open: true,
      },
    }),
    closeInitialPopup: (state, action) => ({
      ...state,
      [ action.payload.popupName ]: {
        ...state[ action.payload.popupName ],
        open: false,
      },
    }),
    setInitialOpenPopup: (state, action) => ({
      ...state,
      [ action.payload.popupName ]: {
        ...state[ action.payload.popupName ],
        initialOpen: action.payload.initialOpen,
      },
    }),
  },
})

export default reducer
export {
  openInitialPopup,
  closeInitialPopup,
  setInitialOpenPopup,
}

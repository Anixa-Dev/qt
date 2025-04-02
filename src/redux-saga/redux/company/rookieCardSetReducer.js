import { createSlice } from '@reduxjs/toolkit'
import { PASS_TYPE } from '../../../utils/constants'

const initialState = {
  cards: [],
  passType: PASS_TYPE.WITH_BG,
  dialogOpenStates: {
    manualUpload: false,
    csvUpload: false,
  },
}

const {
  actions: {
    addNewRookieCard,
    changeDialogState,
    changePassType,
    setRookieCardsList,
    uploadRookieCardList,
    resetCardsLists,
    deleteEntry,
    editEntry,
  },
  reducer,
} = createSlice({
  name: 'rookieCardSet',
  initialState,
  reducers: {
    addNewRookieCard: (state, action) => {
      const { newCard } = action.payload
      const allCards = [ ...state.cards, newCard ]
      return ({
        ...state,
        cards: allCards,
      })
    },
    changeDialogState: (state, action) => {
      const newDialogOpenStates = {
        ...state.dialogOpenStates,
        [ action.payload.dialogName ]: action.payload.openState,
      }

      return ({
        ...state,
        dialogOpenStates: newDialogOpenStates,
      })
    },
    changePassType: (state, action) => ({
      ...state,
      passType: action.payload.passType,
    }),
    setRookieCardsList: (state, action) => {
      const { newCards } = action.payload
      return ({
        ...state,
        cards: [ ...state.cards, ...newCards ],
      })
    },
    uploadRookieCardList: (state, action) => {
      const { newCards } = action.payload
      return ({
        ...state,
        cards: [ ...state.cards, ...newCards ],
      })
    },
    deleteEntry: (state, action) => {
      const id = action && action.payload
      const newList = state.cards.filter((card) => card.id !== id)
      return ({
        ...state,
        cards: newList,
      })
    },
    editEntry: (state, action) => {
      const prevList = [ ...state.cards ]
      const modifiedCard = action && action.payload
      const index = state.cards.findIndex((card) => card.id === modifiedCard.id)
      if (index > -1) {
        prevList[ index ] = modifiedCard
      }
      return ({ ...state, cards: prevList })
    },
    resetCardsLists: () => initialState,
  },
})

export default reducer
export {
  addNewRookieCard,
  changeDialogState,
  changePassType,
  setRookieCardsList,
  uploadRookieCardList,
  resetCardsLists,
  deleteEntry,
  editEntry,
}

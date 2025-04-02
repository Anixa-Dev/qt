import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  success: false,
  error: false,
  transactionObj: null,
}

const {
  actions: {
    transactionDetailsRequestStart,
    transactionDetailsRequestSuccessful,
    transactionDetailsRequestFailure,
    transactionDetailsReset,
    updateTransactionDetailsUserToken,
  },
  reducer,
} = createSlice({
  name: 'transactionDetailsReducer',
  initialState,
  reducers: {
    transactionDetailsRequestStart: (state) => ({ ...initialState, ...state }),
    transactionDetailsRequestSuccessful: (state, action) => ({
      ...initialState,
      success: true,
      transactionObj: !state.cancelRequests ? action && action.payload : null,
    }),
    transactionDetailsRequestFailure: () => initialState,
    transactionDetailsReset: () => ({ ...initialState }),
    updateTransactionDetailsUserToken: (state, action) => {
      const updatedUserToken = action?.payload?.updatedUserToken
      const existingUserTokens = state.transactionObj?.transactionDetail?.UserTokens
      const updatedTokens = existingUserTokens.map((token) => {
        if (token.user_token_id === updatedUserToken.user_token_id) {
          return updatedUserToken
        } return token
      })

      return ({
        ...initialState,
        transactionObj: {
          ...state.transactionObj,
          transactionDetail: {
            ...state.transactionObj?.transactionDetail,
            UserTokens: updatedTokens,
          },
        },
      })
    },
  },
})

export default reducer
export {
  transactionDetailsRequestStart,
  transactionDetailsRequestSuccessful,
  transactionDetailsRequestFailure,
  transactionDetailsReset,
  updateTransactionDetailsUserToken,
}

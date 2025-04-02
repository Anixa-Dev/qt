import { combineReducers } from '@reduxjs/toolkit'
import userReducers, { logoutRequestStart } from './user'
import companyReducers from './company'
import utilsReducers from './utils'
import tokenReducers from './token'
import tradeTokenReducers from './tradeToken'
import marketplaceReducers from './marketplace'
import walletPassReducers from './walletPass'
import userProfileReducers from './userProfile'
import companyProfileReducers from './companyProfile'
import plaidReducers from './plaid'
import paymentReducers from './payment'

const appReducer = combineReducers({

  // User Reducers
  ...userReducers,

  // Company Reducer
  ...companyReducers,

  // Utils Reducer
  ...utilsReducers,

  // Token Reducer
  ...tokenReducers,

  // TradeToken Reducer
  ...tradeTokenReducers,

  // MarketPlace Reducer
  ...marketplaceReducers,

  // Pass Reducer
  ...walletPassReducers,

  // User Profile Reducers
  ...userProfileReducers,

  // Company Profile Reducers
  ...companyProfileReducers,

  // Plaid Reducers
  ...plaidReducers,

  // Payment Reducers
  ...paymentReducers,
})

const rootReducer = (state, action) => {
  const isLogoutAction = logoutRequestStart.type === action.type

  if (isLogoutAction) {
    return appReducer(undefined, action)
  }

  return appReducer(state, action)
}

export default rootReducer

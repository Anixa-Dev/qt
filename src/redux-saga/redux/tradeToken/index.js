import tmpPurchaseReducer from './tmpPurchaseReducer'
import tmpPurchaseInfoReducer from './tmpPurchaseInfoReducer'
import createUserTokenReducer from './createUserTokenReducer'
import getAllUserTokensReducer from './getAllUserTokensReducer'
import getSingleTradeTokenReducer from './getSingleTradeTokenReducer'
import transferTokenToUserReducer from './transferTokenToUserReducer'
import retryTokenMintingReducer from './retryTokenMintingReducer'

const tradeTokenReducers = {
  tmpPurchase: tmpPurchaseReducer,
  tmpPurchaseInfo: tmpPurchaseInfoReducer,
  createUserToken: createUserTokenReducer,
  getAllUserTokens: getAllUserTokensReducer,
  getSingleTradeToken: getSingleTradeTokenReducer,
  transferToken: transferTokenToUserReducer,
  retryTokenMinting: retryTokenMintingReducer,
}

export default tradeTokenReducers
export * from './tmpPurchaseReducer'
export * from './tmpPurchaseInfoReducer'
export * from './createUserTokenReducer'
export * from './getAllUserTokensReducer'
export * from './getSingleTradeTokenReducer'
export * from './transferTokenToUserReducer'
export * from './retryTokenMintingReducer'

import sellTokenReducer from './sellTokenReducer'
import getMarketplaceTokensReducer from './getMarketplaceTokensReducer'
import getMarketplaceFilterValuesReducer from './getMarketplaceFilterValuesReducer'

const marketplaceReducers = {
  sellToken: sellTokenReducer,
  getMarketplaceTokens: getMarketplaceTokensReducer,
  getMarketplaceFilterValues: getMarketplaceFilterValuesReducer,
}

export default marketplaceReducers
export * from './sellTokenReducer'
export * from './getMarketplaceTokensReducer'
export * from './getMarketplaceFilterValuesReducer'

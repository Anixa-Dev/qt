import getMarketplaceFilterValuesWatcher from './getMarketplaceFilterValuesWatcher'
import getMarketplaceTokensWatcher from './getMarketplaceTokensWatcher'
import sellTokenWatcher from './sellTokenWatcher'

const marketplaceWatcherFunctions = [
  () => sellTokenWatcher(),
  () => getMarketplaceTokensWatcher(),
  () => getMarketplaceFilterValuesWatcher(),
]

export default marketplaceWatcherFunctions

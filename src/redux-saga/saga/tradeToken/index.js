import tmpPurchaseWatcher from './tmpPurchaseWatcher'
import tmpPurchaseInfoWatcher from './tmpPurchaseInfoWatcher'
import createUserTokenWatcher from './createUserTokenWatcher'
import getAllUserTokensWatcher from './getAllUserTokensWatcher'
import getSingleTradeTokenWatcher from './getSingleTradeTokenWatcher'
import transferTokenWatcher from './transferTokenToUserWatcher'
import sendTokenViaEmailWatcher from './sendTokenViaEmailWatcher'

const tradeTokenWatcherFunctions = [
  () => tmpPurchaseWatcher(),
  () => tmpPurchaseInfoWatcher(),
  () => createUserTokenWatcher(),
  () => getAllUserTokensWatcher(),
  () => getSingleTradeTokenWatcher(),
  () => transferTokenWatcher(),
  () => sendTokenViaEmailWatcher(),
]

export default tradeTokenWatcherFunctions

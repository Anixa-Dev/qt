import addToWalletWatcher from './addToAppleWalletWatcher'
import passDetailsWatcher from './getPassDetailsWatcher'

const walletPassWatcherFunctions = [
  () => passDetailsWatcher(),
  () => addToWalletWatcher(),
]

export default walletPassWatcherFunctions

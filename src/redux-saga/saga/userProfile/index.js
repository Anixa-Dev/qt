import getUserBankDetailsWatcher from './getUserBankDetailsWatcher'
import addWalletAddressWatcher from './addWalletAddressWatcher'
import updateUserProfileWatcher from './updateUserProfileWatcher'
import fetchWalletAddressWatcher from './fetchWalletAddressWatcher'
import removeWalletAddressWatcher from './removeWalletAddressWatcher'

const userProfileWatcherFunctions = [
  () => updateUserProfileWatcher(),
  () => getUserBankDetailsWatcher(),
  () => addWalletAddressWatcher(),
  () => fetchWalletAddressWatcher(),
  () => removeWalletAddressWatcher(),
]

export default userProfileWatcherFunctions

import getPassDetailsReducer from './getPassDetailsReducer'
import addToAppleWalletReducer from './addToAppleWalletReducer'

const walletPassReducers = {
  getPassDetails: getPassDetailsReducer,
  addToAppleWallet: addToAppleWalletReducer,
}

export default walletPassReducers
export * from './getPassDetailsReducer'
export * from './addToAppleWalletReducer'

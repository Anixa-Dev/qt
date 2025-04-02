import updateUserProfileReducer from './updateUserProfileReducer'
import getUserBankDetailsReducer from './getUserBankDetailsReducer'
import addWalletAddressReducer from './addWalletAddressReducer'
import fetchWalletAddressReducer from './fetchWalletAddressReducer'
import removeWalletAddressReducer from './removeWalletAddressReducer'

const userProfileReducers = {
  updateUserProfile: updateUserProfileReducer,
  getUserBankDetails: getUserBankDetailsReducer,
  addWalletAddress: addWalletAddressReducer,
  fetchWalletAddress: fetchWalletAddressReducer,
  removeWalletAddress: removeWalletAddressReducer,
}

export default userProfileReducers
export * from './updateUserProfileReducer'
export * from './getUserBankDetailsReducer'
export * from './addWalletAddressReducer'
export * from './fetchWalletAddressReducer'
export * from './removeWalletAddressReducer'

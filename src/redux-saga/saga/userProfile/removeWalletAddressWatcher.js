import { takeEvery, put } from 'redux-saga/effects'
import { WALLET_TYPES } from '../../../utils/helper'
import {
  removeWalletAddressRequestStart,
  removeWalletAddressRequestSuccessful,
  removeWalletAddressRequestFailure,
  startLoader,
  stopLoader,
  showSuccessMessage,
  showErrorMessage,
  fetchWalletAddressRequestStart,
} from '../../redux/actions'
import updateUserProfile from '../../service/userProfileService'

function* removeWalletAddressWatcher() {
  yield takeEvery(removeWalletAddressRequestStart.type, removeWalletAddressWorker)
}

function* removeWalletAddressWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    const { data: response } = yield updateUserProfile.removeWalletAddress(data)

    yield put(removeWalletAddressRequestSuccessful(response?.data))
    yield put(stopLoader())
    yield put(fetchWalletAddressRequestStart({ wallet_type: WALLET_TYPES.ALL }))
    yield put(showSuccessMessage({ msg: 'Wallet Address removed successfully' }))
  } catch (e) {
    yield put(stopLoader())
    yield put(removeWalletAddressRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default removeWalletAddressWatcher

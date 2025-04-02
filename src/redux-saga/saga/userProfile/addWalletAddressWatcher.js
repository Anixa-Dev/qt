import { takeEvery, put } from 'redux-saga/effects'
import { WALLET_TYPES } from '../../../utils/helper'
import {
  addWalletAddressRequestStart,
  addWalletAddressRequestSuccessful,
  addWalletAddressRequestFailure,
  startLoader,
  stopLoader,
  showSuccessMessage,
  showErrorMessage,
  fetchWalletAddressRequestStart,
} from '../../redux/actions'
import updateUserProfile from '../../service/userProfileService'

function* addWalletAddressWatcher() {
  yield takeEvery(addWalletAddressRequestStart.type, addWalletAddressWorker)
}

function* addWalletAddressWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    const { data: response } = yield updateUserProfile.addWalletAddress(data)

    yield put(addWalletAddressRequestSuccessful(response?.data?.addWalletAddress))
    yield put(stopLoader())
    yield put(fetchWalletAddressRequestStart({ wallet_type: data.fetch_wallet_type || WALLET_TYPES.ALL }))
    yield put(showSuccessMessage({ msg: 'Wallet address saved successfully' }))
  } catch (e) {
    yield put(stopLoader())
    yield put(addWalletAddressRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default addWalletAddressWatcher

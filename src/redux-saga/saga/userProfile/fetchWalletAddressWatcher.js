import { takeEvery, put } from 'redux-saga/effects'
import {
  fetchWalletAddressRequestStart,
  fetchWalletAddressRequestSuccessful,
  fetchWalletAddressRequestFailure,
  startLoader,
  stopLoader,
  showErrorMessage,
} from '../../redux/actions'
import updateUserProfile from '../../service/userProfileService'

function* fetchWalletAddressWatcher() {
  yield takeEvery(fetchWalletAddressRequestStart.type, fetchWalletAddressWorker)
}

function* fetchWalletAddressWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    const { data: response } = yield updateUserProfile.fetchWalletAddress(data)
    yield put(fetchWalletAddressRequestSuccessful(response?.data?.userWallets))
    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(fetchWalletAddressRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default fetchWalletAddressWatcher

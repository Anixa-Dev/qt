import { takeEvery, put } from 'redux-saga/effects'
import {
  addToWalletRequestStart,
  addToWalletRequestSuccessful,
  addToWalletRequestFailure,
  startLoader,
  stopLoader,
  showSuccessMessage,
  showErrorMessage,
} from '../../redux/actions'
import WalletPass from '../../service/walletPassService'

function* addToWalletWatcher() {
  yield takeEvery(addToWalletRequestStart.type, addToWalletWorker)
}

function* addToWalletWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    yield WalletPass.addToWallet(data)
    yield put(addToWalletRequestSuccessful())
    yield put(stopLoader())
    yield put(showSuccessMessage({ msg: 'Email has been sent successfully' }))
  } catch (e) {
    yield put(stopLoader())
    yield put(addToWalletRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: 'There was an error processing this request' }))
  }
}

export default addToWalletWatcher

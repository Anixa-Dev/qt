import { takeEvery, put } from 'redux-saga/effects'
import {
  passDetailsRequestStart,
  passDetailsRequestSuccessful,
  passDetailsRequestFailure,
  startLoader,
  stopLoader,
  showErrorMessage,
} from '../../redux/actions'
import WalletPass from '../../service/walletPassService'

function* passDetailsWatcher() {
  yield takeEvery(passDetailsRequestStart.type, passDetailsWorker)
}

function* passDetailsWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    const { data: response } = yield WalletPass.getPassDetails(data)
    yield put(passDetailsRequestSuccessful(response?.data?.passDetails))
    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(passDetailsRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default passDetailsWatcher

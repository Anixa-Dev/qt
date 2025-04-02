import axios from 'axios'
import { takeEvery, put } from 'redux-saga/effects'
import {
  showErrorMessage,
  transactionDetailsRequestStart,
  transactionDetailsRequestSuccessful,
  transactionDetailsRequestFailure,
  startLoader,
  stopLoader,
} from '../../redux/actions'
import User from '../../service/userService'

function* transactionDetailsWatcher() {
  yield takeEvery(transactionDetailsRequestStart.type, transactionDetailsWorker)
}

function* transactionDetailsWorker(action) {
  try {
    const payload = action && action.payload
    if (payload?.loader) {
      yield put(startLoader())
    }

    const { data: response } = yield User.getTransactionDetails(payload?.payload, payload?.cancelToken)
    yield put(transactionDetailsRequestSuccessful(response?.data?.transaction))
    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    if (!axios.isCancel(e)) {
      yield put(transactionDetailsRequestFailure(e?.response?.data))
      yield put(showErrorMessage({ msg: e?.response?.data?.message }))
    }
  }
}

export default transactionDetailsWatcher

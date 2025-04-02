import { takeEvery, put } from 'redux-saga/effects'
import {
  showErrorMessage,
  transactionsListRequestStart,
  transactionsListRequestSuccessful,
  transactionsListRequestFailure,
  startLoader,
  stopLoader,
} from '../../redux/actions'
import User from '../../service/userService'

function* transactionsListWatcher() {
  yield takeEvery(transactionsListRequestStart.type, transactionsListWorker)
}

function* transactionsListWorker(action) {
  try {
    const payload = action && action.payload
    yield put(startLoader())
    const { data: response } = yield User.transactionInfo(payload)
    yield put(transactionsListRequestSuccessful(response?.data?.userTransactions))
    yield put(stopLoader())
  } catch (e) {
    yield put(transactionsListRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
    yield put(stopLoader())
  }
}

export default transactionsListWatcher

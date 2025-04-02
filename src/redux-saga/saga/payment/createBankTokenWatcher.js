import { takeEvery, put } from 'redux-saga/effects'
import {
  createBankTokenRequestStart,
  createBankTokenRequestSuccessful,
  createBankTokenRequestFailure,
  startLoader,
  stopLoader,
  showErrorMessage,
} from '../../redux/actions'
import PaymentService from '../../service/paymentService'

function* createBankTokenWatcher() {
  yield takeEvery(createBankTokenRequestStart.type, createBankTokenWorker)
}

function* createBankTokenWorker() {
  try {
    yield put(startLoader())
    const { data: response } = yield PaymentService.createBankToken()
    yield put(createBankTokenRequestSuccessful(response?.data?.accountLink))
    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(createBankTokenRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default createBankTokenWatcher

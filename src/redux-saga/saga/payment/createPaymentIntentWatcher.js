import { takeEvery, put } from 'redux-saga/effects'
import {
  createPaymentIntentRequestStart,
  createPaymentIntentRequestSuccessful,
  createPaymentIntentRequestFailure,
  startLoader,
  stopLoader,
  showErrorMessage,
} from '../../redux/actions'
import PaymentService from '../../service/paymentService'

function* createPaymentIntentWatcher() {
  yield takeEvery(createPaymentIntentRequestStart.type, createPaymentIntentWorker)
}

function* createPaymentIntentWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    const { data: response } = yield PaymentService.createPaymentIntent(data)
    yield put(createPaymentIntentRequestSuccessful(response?.data?.clientSecret))
    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(createPaymentIntentRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default createPaymentIntentWatcher

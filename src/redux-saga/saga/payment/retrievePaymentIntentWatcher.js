import { takeEvery, put } from 'redux-saga/effects'
import {
  retrievePaymentIntentRequestStart,
  retrievePaymentIntentRequestSuccessful,
  retrievePaymentIntentRequestFailure,
  startLoader,
  stopLoader,
  showErrorMessage,
} from '../../redux/actions'
import PaymentService from '../../service/paymentService'

function* retrievePaymentIntentWatcher() {
  yield takeEvery(retrievePaymentIntentRequestStart.type, retrievePaymentIntentWorker)
}

function* retrievePaymentIntentWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    const { data: response } = yield PaymentService.retrievePaymentIntent(data)
    yield put(retrievePaymentIntentRequestSuccessful(response?.data?.paymentData))
    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(retrievePaymentIntentRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default retrievePaymentIntentWatcher

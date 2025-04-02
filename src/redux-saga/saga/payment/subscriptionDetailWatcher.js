import { takeEvery, put } from 'redux-saga/effects'
import {
  subscriptionDetailRequestStart,
  subscriptionDetailRequestSuccessful,
  subscriptionDetailRequestFailure,
  startLoader,
  stopLoader,
  showErrorMessage,
} from '../../redux/actions'
import PaymentService from '../../service/paymentService'

function* subscriptionDetailWatcher() {
  yield takeEvery(subscriptionDetailRequestStart.type, subscriptionDetailWorker)
}

function* subscriptionDetailWorker(action) {
  try {
    yield put(startLoader())
    const payload = action && action.payload
    const { data: response } = yield PaymentService.getSubscriptionDetail(payload)
    yield put(subscriptionDetailRequestSuccessful(response?.data.subscription))
    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(subscriptionDetailRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default subscriptionDetailWatcher

import { takeEvery, put } from 'redux-saga/effects'
import {
  startLoader,
  stopLoader,
  showErrorMessage,
  cancelSubscription,
  fetchUserSubscriptionsRequestStart,
  showSuccessMessage,
  subscriptionDetailRequestStart,
} from '../../redux/actions'
import PaymentService from '../../service/paymentService'

function* cancelSubscriptionWatcher() {
  yield takeEvery(cancelSubscription.type, cancelSubscriptionWorker)
}

function* cancelSubscriptionWorker(action) {
  try {
    yield put(startLoader())
    const payload = action && action.payload
    const { data: response } = yield PaymentService.cancelSubscription(payload)
    yield put(fetchUserSubscriptionsRequestStart())
    yield put(subscriptionDetailRequestStart(payload))
    yield put(stopLoader())
    yield put(showSuccessMessage({ msg: response?.message }))
  } catch (e) {
    yield put(stopLoader())
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default cancelSubscriptionWatcher

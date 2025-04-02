import { takeEvery, put } from 'redux-saga/effects'
import {
  fetchUserSubscriptionsRequestStart,
  fetchUserSubscriptionsRequestSuccessful,
  fetchWalletAddressRequestFailure,
  startLoader,
  stopLoader,
  showErrorMessage,
} from '../../redux/actions'
import PaymentService from '../../service/paymentService'

function* userSubscriptionsWatcher() {
  yield takeEvery(fetchUserSubscriptionsRequestStart.type, userSubscriptionsWorker)
}

function* userSubscriptionsWorker() {
  try {
    yield put(startLoader())
    const { data } = yield PaymentService.getUserSubscriptions()
    const response = data
    yield put(fetchUserSubscriptionsRequestSuccessful(response?.data.subscriptions))
    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(fetchWalletAddressRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default userSubscriptionsWatcher

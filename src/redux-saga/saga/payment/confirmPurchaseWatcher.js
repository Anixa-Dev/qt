import { takeEvery, put } from 'redux-saga/effects'
import { PAYMENT_PROCESSORS } from '../../../utils/constants'
import {
  confirmPurchaseRequestStart,
  confirmPurchaseRequestSuccessful,
  confirmPurchaseRequestFailure,
  startLoader,
  stopLoader,
  showErrorMessage,
} from '../../redux/actions'
import PaymentService from '../../service/paymentService'

function* confirmPurchaseWatcher() {
  yield takeEvery(confirmPurchaseRequestStart.type, confirmPurchaseWorker)
}

function* confirmPurchaseWorker(action) {
  try {
    yield put(startLoader({ text: 'Placing order!' }))
    const payload = action && action.payload

    const { data } = yield PaymentService.confirmPurchase({
      ...payload,
      payment_processor: PAYMENT_PROCESSORS.STRIPE,
    })

    const response = data

    yield put(confirmPurchaseRequestSuccessful(response?.data.confirmPaymentIntent))
    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(confirmPurchaseRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default confirmPurchaseWatcher

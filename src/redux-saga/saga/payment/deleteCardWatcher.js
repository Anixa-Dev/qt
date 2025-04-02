import { takeEvery, put, delay } from 'redux-saga/effects'
import config from '../../../utils/config'
import { PAYMENT_PROCESSORS } from '../../../utils/constants'
import {
  deleteCardRequestStart,
  deleteCardRequestSuccessful,
  deleteCardRequestFailure,
  startLoader,
  stopLoader,
  showErrorMessage,
  showSuccessMessage,
  getUserBankDetailsRequestStart,
} from '../../redux/actions'
import PaymentService from '../../service/paymentService'

const enableSquarePayment = config.REACT_APP_USE_SQUARE_PAYMENT_GATEWAY

function* deleteCardWatcher() {
  yield takeEvery(deleteCardRequestStart.type, deleteCardWorker)
}

function* deleteCardWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    const response = yield PaymentService.deleteCard(data)
    yield put(deleteCardRequestSuccessful(response.data.data))
    if (enableSquarePayment === 'true') { yield delay(5000) }
    yield put(getUserBankDetailsRequestStart({
      payment_processor: config.REACT_APP_USE_SQUARE_PAYMENT_GATEWAY === 'true'
        ? PAYMENT_PROCESSORS.SQUARE
        : PAYMENT_PROCESSORS.STRIPE,
      after_card_deleted: true,
      card_id: response.data.data.cardId,
    }))
    // yield put(stopLoader())
    yield put(showSuccessMessage({ msg: 'Card deleted Successfully' }))
  } catch (e) {
    yield put(stopLoader())
    yield put(deleteCardRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default deleteCardWatcher

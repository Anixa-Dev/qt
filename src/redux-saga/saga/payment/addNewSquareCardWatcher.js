import { takeEvery, put, delay } from 'redux-saga/effects'
import config from '../../../utils/config'
import { PAYMENT_PROCESSORS } from '../../../utils/constants'
import {
  addNewSquareCardRequestStart,
  addNewSquareCardRequestSuccessful,
  addNewSquareCardRequestFailure,
  startLoader,
  stopLoader,
  showErrorMessage,
  showSuccessMessage,
  getUserBankDetailsRequestStart,
} from '../../redux/actions'
import Payment from '../../service/paymentService'

function* addNewSquareCardWatcher() {
  yield takeEvery(addNewSquareCardRequestStart.type, addNewSquareCardWorker)
}

function* addNewSquareCardWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    const response = yield Payment.addNewSquareCard(data)
    yield put(addNewSquareCardRequestSuccessful(response.data.data))
    yield delay(5000)
    yield put(getUserBankDetailsRequestStart({
      payment_processor: config.REACT_APP_USE_SQUARE_PAYMENT_GATEWAY === 'true'
        ? PAYMENT_PROCESSORS.SQUARE : PAYMENT_PROCESSORS.STRIPE,
      after_card_added: true,
      card_id: response.data.data.cardId,
    }))
    // yield put(stopLoader())
    yield put(showSuccessMessage({ msg: 'Card added Successfully' }))
  } catch (e) {
    yield put(stopLoader())
    yield put(addNewSquareCardRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default addNewSquareCardWatcher

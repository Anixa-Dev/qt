import { takeEvery, put } from 'redux-saga/effects'
import config from '../../../utils/config'
import { PAYMENT_PROCESSORS } from '../../../utils/constants'
import {
  addNewCardRequestStart,
  addNewCardRequestSuccessful,
  addNewCardRequestFailure,
  startLoader,
  stopLoader,
  showErrorMessage,
  showSuccessMessage,
  getUserBankDetailsRequestStart,
} from '../../redux/actions'
import PaymentService from '../../service/paymentService'

function* addNewCardWatcher() {
  yield takeEvery(addNewCardRequestStart.type, addNewCardWorker)
}

function* addNewCardWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    yield PaymentService.addNewCard(data)
    yield put(addNewCardRequestSuccessful())
    yield put(stopLoader())
    yield put(getUserBankDetailsRequestStart({
      payment_processor: config.REACT_APP_USE_SQUARE_PAYMENT_GATEWAY === 'true'
        ? PAYMENT_PROCESSORS.SQUARE : PAYMENT_PROCESSORS.STRIPE,
    }))
    yield put(showSuccessMessage({ msg: 'Card added Successfully' }))
  } catch (e) {
    yield put(stopLoader())
    yield put(addNewCardRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default addNewCardWatcher

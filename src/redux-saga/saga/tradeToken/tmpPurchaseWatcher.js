import { takeEvery, put } from 'redux-saga/effects'
import {
  tmpPurchaseRequestStart,
  tmpPurchaseRequestSuccessful,
  tmpPurchaseRequestFailure,
  startLoader,
  stopLoader,
  showErrorMessage,
} from '../../redux/actions'
import TradeToken from '../../service/tradeTokenService'
import { ERROR_CODES } from '../../../utils/constants'

function* tmpPurchaseWatcher() {
  yield takeEvery(tmpPurchaseRequestStart.type, tmpPurchaseWorker)
}

function* tmpPurchaseWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    const { data: response } = yield TradeToken.tmpPurchase(data)
    yield put(tmpPurchaseRequestSuccessful(response?.data))
    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(tmpPurchaseRequestFailure(e?.response?.data))
    if (e?.response?.data?.message === ERROR_CODES.INVITATION_MAIL_INVALID) {
      yield put(showErrorMessage({ msg: 'Please login with email with which you are invited!' }))
    } else {
      yield put(showErrorMessage({ msg: e?.response?.data?.message }))
    }
  }
}

export default tmpPurchaseWatcher

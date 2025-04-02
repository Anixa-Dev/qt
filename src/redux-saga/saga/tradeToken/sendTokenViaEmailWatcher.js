import { takeEvery, put } from 'redux-saga/effects'
import {

  showErrorMessage,
  sendTokenViaEmailRequestStart,
  sendTokenViaEmailRequestSuccessful,
  sendTokenViaEmailRequestFailure,
  updateTransactionDetailsUserToken,
} from '../../redux/actions'
import TradeToken from '../../service/tradeTokenService'

function* sendTokenViaEmailWatcher() {
  yield takeEvery(sendTokenViaEmailRequestStart.type, sendTokenViaEmailWorker)
}

function* sendTokenViaEmailWorker(action) {
  try {
    const obj = action && action.payload
    const { data: response } = yield TradeToken.sendTokenViaEmail(obj)
    yield put(sendTokenViaEmailRequestSuccessful(response))
    yield put(updateTransactionDetailsUserToken({
      updatedUserToken: response?.data?.updatedUserToken,
    }))
  } catch (e) {
    yield put(sendTokenViaEmailRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default sendTokenViaEmailWatcher

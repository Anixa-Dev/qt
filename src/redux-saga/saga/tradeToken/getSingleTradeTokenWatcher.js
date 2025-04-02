import { takeEvery, put } from 'redux-saga/effects'
import {
  getSingleTradeTokenRequestStart,
  getSingleTradeTokenRequestSuccessful,
  getSingleTradeTokenRequestFailure,
  startLoader,
  stopLoader,
  showErrorMessage,
} from '../../redux/actions'
import TradeToken from '../../service/tradeTokenService'

function* getSingleTradeTokenWatcher() {
  yield takeEvery(getSingleTradeTokenRequestStart.type, getSingleTradeTokenWorker)
}

function* getSingleTradeTokenWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    const { data: response } = yield TradeToken.getSingleTradeToken(data)
    yield put(getSingleTradeTokenRequestSuccessful(response?.data?.tradeTokenDetail))
    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(getSingleTradeTokenRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default getSingleTradeTokenWatcher

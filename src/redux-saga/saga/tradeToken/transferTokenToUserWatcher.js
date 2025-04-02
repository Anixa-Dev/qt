import { takeEvery, put } from 'redux-saga/effects'
import {
  transferTokenRequestStart,
  transferTokenRequestSuccessful,
  transferTokenRequestFailure,
  startLoader,
  stopLoader,
  showErrorMessage,
} from '../../redux/actions'
import TradeToken from '../../service/tradeTokenService'

function* transferTokenWatcher() {
  yield takeEvery(transferTokenRequestStart.type, transferTokenWorker)
}

function* transferTokenWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    const { data: response } = yield TradeToken.transferToken(data)
    yield put(transferTokenRequestSuccessful(response?.data?.transaction))
    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(transferTokenRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default transferTokenWatcher

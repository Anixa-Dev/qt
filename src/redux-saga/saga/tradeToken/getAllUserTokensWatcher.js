import { takeEvery, put } from 'redux-saga/effects'
import {
  getAllUserTokensRequestStart,
  getAllUserTokensRequestSuccessful,
  getAllUserTokensRequestFailure,
  startLoader,
  stopLoader,
  showErrorMessage,
} from '../../redux/actions'
import TradeToken from '../../service/tradeTokenService'

function* getAllUserTokensWatcher() {
  yield takeEvery(getAllUserTokensRequestStart.type, getAllUserTokensWorker)
}

function* getAllUserTokensWorker(action) {
  try {
    const payload = action && action.payload
    yield payload?.loader && put(startLoader())
    let response = null
    if (payload?.sold) {
      const { data } = yield TradeToken.getAllSoldUserTokens(payload)
      response = data?.data?.soldTokenDetail
    } else {
      const { data } = yield TradeToken.getAllUserTokens(payload)
      response = data?.data?.userTokenDetail
    }
    yield put(getAllUserTokensRequestSuccessful(response))
    yield payload?.loader && put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(getAllUserTokensRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default getAllUserTokensWatcher

import { takeEvery, put } from 'redux-saga/effects'
import {
  tmpPurchaseInfoRequestFailure,
  tmpPurchaseInfoRequestStart,
  tmpPurchaseInfoRequestSuccessful,
  startLoader,
  stopLoader,
} from '../../redux/actions'
import TradeToken from '../../service/tradeTokenService'

function* tmpPurchaseInfoWatcher() {
  yield takeEvery(tmpPurchaseInfoRequestStart.type, tmpPurchaseInfoWorker)
}

function* tmpPurchaseInfoWorker(action) {
  try {
    yield put(startLoader())
    const { payload, requestType } = action && action.payload
    switch (requestType) {
      case 'FETCH': {
        const { data: response } = yield TradeToken.tmpPurchaseInfo(payload)
        yield put(tmpPurchaseInfoRequestSuccessful(response?.data?.tmpTokenPurchaseDetail))
        break
      }
      case 'DELETE': {
        const { data: response } = yield TradeToken.cancelTmpPurchase(payload)
        yield put(tmpPurchaseInfoRequestSuccessful(response?.data))
        break
      }
      default: break
    }
    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(tmpPurchaseInfoRequestFailure(e?.response?.data))
  }
}

export default tmpPurchaseInfoWatcher

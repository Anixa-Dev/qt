import { takeEvery, put } from 'redux-saga/effects'
import {
  getCollectionDetailRequestStart,
  getCollectionDetailRequestSuccessful,
  getCollectionDetailRequestFailure,
  startLoader,
  stopLoader,
  showErrorMessage,
} from '../../redux/actions'
import TradeToken from '../../service/tradeTokenService'

function* getCollectionDetailWatcher() {
  yield takeEvery(getCollectionDetailRequestStart.type, getCollectionDetailWorker)
}

function* getCollectionDetailWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    const { data: response } = yield TradeToken.getCollectionDetail(data)
    yield put(getCollectionDetailRequestSuccessful(response?.data))
    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(getCollectionDetailRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default getCollectionDetailWatcher

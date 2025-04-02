import { takeEvery, put } from 'redux-saga/effects'
import {
  sellTokenRequestStart,
  sellTokenRequestSuccessful,
  sellTokenRequestFailure,
  startLoader,
  stopLoader,
  showErrorMessage,
  showSuccessMessage,
} from '../../redux/actions'
import Marketplace from '../../service/marketplaceService'

function* sellTokenWatcher() {
  yield takeEvery(sellTokenRequestStart.type, sellTokenWorker)
}

function* sellTokenWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    const { data: response } = yield Marketplace.addToken(data)
    yield put(sellTokenRequestSuccessful(response?.data?.token))
    yield put(showSuccessMessage({ msg: 'Your token is now for sale' }))
    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(sellTokenRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default sellTokenWatcher

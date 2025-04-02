import { takeEvery, put } from 'redux-saga/effects'
import {
  getMarketplaceTokensRequestStart,
  getMarketplaceTokensRequestSuccessful,
  getMarketplaceTokensRequestFailure,
  startLoader,
  stopLoader,
  showErrorMessage,
} from '../../redux/actions'
import Marketplace from '../../service/marketplaceService'

function* getMarketplaceTokensWatcher() {
  yield takeEvery(getMarketplaceTokensRequestStart.type, getMarketplaceTokensWorker)
}

function* getMarketplaceTokensWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    const { data: response } = yield Marketplace.fetchTokens(data)
    yield put(getMarketplaceTokensRequestSuccessful(response?.data?.tokenWithDetail))
    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(getMarketplaceTokensRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default getMarketplaceTokensWatcher

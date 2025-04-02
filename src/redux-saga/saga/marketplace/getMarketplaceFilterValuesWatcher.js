import { takeEvery, put } from 'redux-saga/effects'
import {
  getMarketplaceFilterValuesRequestStart,
  getMarketplaceFilterValuesRequestSuccessful,
  getMarketplaceFilterValuesRequestFailure,
  startLoader,
  stopLoader,
  showErrorMessage,
} from '../../redux/actions'
import Marketplace from '../../service/marketplaceService'

function* getMarketplaceFilterValuesWatcher() {
  yield takeEvery(getMarketplaceFilterValuesRequestStart.type, getMarketplaceFilterValuesWorker)
}

function* getMarketplaceFilterValuesWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    const { data: response } = yield Marketplace.getFilterValues(data)
    yield put(getMarketplaceFilterValuesRequestSuccessful(response?.data?.tokenFilterValues))
    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(getMarketplaceFilterValuesRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default getMarketplaceFilterValuesWatcher

import { takeEvery, put } from 'redux-saga/effects'
import {
  startLoader,
  stopLoader,
  showErrorMessage,
  retailersRequestStart,
  retailersRequestSuccessful,
  retailersRequestFailure,
} from '../../redux/actions'
import Company from '../../service/companyService'

function* retailersWatcher() {
  yield takeEvery(retailersRequestStart.type, retailersRequestWorker)
}

function* retailersRequestWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    const { data: response } = yield Company.getRetailers(data)
    yield put(retailersRequestSuccessful(response?.data))
    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(retailersRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default retailersWatcher

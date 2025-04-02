import { takeEvery, put } from 'redux-saga/effects'
import {
  getTokenCompanyDetailsRequestStart,
  getTokenCompanyDetailsRequestSuccessful,
  getTokenCompanyDetailsRequestFailure,
  startLoader,
  stopLoader,
  showErrorMessage,
} from '../../redux/actions'
import Company from '../../service/companyService'

function* getTokenCompanyDetailsRequestWatcher() {
  yield takeEvery(getTokenCompanyDetailsRequestStart.type, getTokenCompanyDetailsRequestWorker)
}

function* getTokenCompanyDetailsRequestWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    const { data: response } = yield Company.getTokenCompanyDetails(data)

    yield put(getTokenCompanyDetailsRequestSuccessful(response?.data))
    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(getTokenCompanyDetailsRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default getTokenCompanyDetailsRequestWatcher

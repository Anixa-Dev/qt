import { takeEvery, put } from 'redux-saga/effects'
import {
  addCompanyRequestStart,
  addCompanyRequestSuccessful,
  addCompanyRequestFailure,
  showSuccessMessage,
  showErrorMessage,
  startLoader,
  stopLoader,
} from '../../redux/actions'
import Company from '../../service/companyService'

function* addCompanyWatcher() {
  yield takeEvery(addCompanyRequestStart.type, addCompanyWorker)
}

function* addCompanyWorker(action) {
  try {
    yield put(startLoader())
    const data = yield action && action.payload
    const { data: response } = yield Company.addCompany(data)
    yield put(addCompanyRequestSuccessful(response?.data?.url))
    yield put(showSuccessMessage({ msg: 'Your Company was added successfully' }))
    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(addCompanyRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default addCompanyWatcher

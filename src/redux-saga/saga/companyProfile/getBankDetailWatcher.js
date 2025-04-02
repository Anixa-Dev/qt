import { takeEvery, put } from 'redux-saga/effects'
import {
  getBankDetailRequestStart,
  getBankDetailRequestSuccessful,
  getBankDetailRequestFailure,
  startLoader,
  stopLoader,
  showErrorMessage,
} from '../../redux/actions'
import Company from '../../service/companyService'

function* bankDetailWatcher() {
  yield takeEvery(getBankDetailRequestStart.type, bankDetailWorker)
}

function* bankDetailWorker() {
  try {
    yield put(startLoader())
    const { data: response } = yield Company.getBankDetail()
    yield put(getBankDetailRequestSuccessful(response?.data?.detail))
    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(getBankDetailRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default bankDetailWatcher

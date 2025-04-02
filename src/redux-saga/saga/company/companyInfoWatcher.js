import { takeEvery, put } from 'redux-saga/effects'
import {
  companyInfoRequestFailure,
  companyInfoRequestStart,
  companyInfoRequestSuccessful,
} from '../../redux/actions'
import Company from '../../service/companyService'

function* companyInfoWatcher() {
  yield takeEvery(companyInfoRequestStart.type, companyInfoWorker)
}

function* companyInfoWorker() {
  try {
    const { data: response } = yield Company.getCompanyInfo()
    yield put(companyInfoRequestSuccessful(response?.data?.companyDetail?.[ 0 ]))
  } catch (e) {
    yield put(companyInfoRequestFailure())
  }
}

export default companyInfoWatcher

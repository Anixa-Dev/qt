import { takeEvery, put } from 'redux-saga/effects'
import {
  companyTokensRequestStart,
  companyTokensRequestSuccessful,
  companyTokensRequestFailure,
  startLoader,
  stopLoader,
  showErrorMessage,
} from '../../redux/actions'
import Company from '../../service/companyService'

function* companyTokensWatcher() {
  yield takeEvery(companyTokensRequestStart.type, companyTokensWorker)
}

function* companyTokensWorker(action) {
  try {
    yield put(startLoader())
    const payload = action && action.payload
    const { data: response } = yield Company.getCompanyTokens(payload)

    yield put(companyTokensRequestSuccessful(response?.data))
    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(companyTokensRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default companyTokensWatcher

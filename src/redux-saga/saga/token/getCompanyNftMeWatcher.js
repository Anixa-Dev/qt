import { takeEvery, put } from 'redux-saga/effects'
import {
  getCompanyNftMeRequestStart,
  getCompanyNftMeRequestSuccessful,
  getCompanyNftMeRequestFailure,
  startLoader,
  stopLoader,
  showErrorMessage,
} from '../../redux/actions'
import Company from '../../service/companyService'

function* getCompanyNftMeWatcher() {
  yield takeEvery(getCompanyNftMeRequestStart.type, getCompanyNftMeWorker)
}

function* getCompanyNftMeWorker(action) {
  try {
    const data = action && action.payload
    if (!data.unRedundantApiCall) {
      yield put(startLoader())
      const { data: response } = yield Company.getCompanyNftMe(data)
      yield put(getCompanyNftMeRequestSuccessful(response?.data))
      yield put(stopLoader())
    }
  } catch (e) {
    yield put(stopLoader())
    yield put(getCompanyNftMeRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default getCompanyNftMeWatcher

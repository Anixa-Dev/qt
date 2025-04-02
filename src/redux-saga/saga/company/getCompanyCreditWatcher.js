import { takeEvery, put } from 'redux-saga/effects'
import {
  getCompanyCreditFailure,
  getCompanyCreditStart,
  getCompanyCreditSucccessful,
  setCompanyCredits,
  startLoader,
  stopLoader,
} from '../../redux/actions'
import Company from '../../service/companyService'

function* companyCreditWatcher() {
  yield takeEvery(getCompanyCreditStart.type, companyCreditWorker)
}

function* companyCreditWorker(action) {
  try {
    const payload = action && action.payload
    yield put(startLoader())
    const { data: response } = yield Company.getCompanyCredit(payload)
    yield put(getCompanyCreditSucccessful())
    yield put(setCompanyCredits({ credits: response?.data?.credits }))
    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(getCompanyCreditFailure())
  }
}

export default companyCreditWatcher

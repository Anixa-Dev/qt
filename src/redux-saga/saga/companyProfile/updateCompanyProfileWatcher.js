import { takeEvery, put } from 'redux-saga/effects'
import {
  updateCompanyProfileRequestStart,
  updateCompanyProfileRequestSuccessful,
  updateCompanyProfileRequestFailure,
  startLoader,
  stopLoader,
  showSuccessMessage,
  showErrorMessage,
  companyInfoRequestStart,
  resetBankDetails,
} from '../../redux/actions'
import updateCompanyProfile from '../../service/companyProfileService'

function* updateCompanyProfileWatcher() {
  yield takeEvery(updateCompanyProfileRequestStart.type, updateCompanyProfileWorker)
}

function* updateCompanyProfileWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    const { data: response } = yield updateCompanyProfile.updateBasicSettings(data)
    yield put(updateCompanyProfileRequestSuccessful(response?.data?.updateCompanyProfile))
    yield put(stopLoader())
    yield put(companyInfoRequestStart())
    yield put(resetBankDetails())
    yield put(showSuccessMessage({ msg: 'Settings Updated Successfully' }))
  } catch (e) {
    yield put(stopLoader())
    yield put(updateCompanyProfileRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default updateCompanyProfileWatcher

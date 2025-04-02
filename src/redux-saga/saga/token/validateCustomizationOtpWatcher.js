import { takeEvery, put } from 'redux-saga/effects'
import {
  validateCustomizationOtpRequestStart,
  validateCustomizationOtpRequestSuccessful,
  validateCustomizationOtpRequestFailure,
  startLoader,
  stopLoader,
  showErrorMessage,
} from '../../redux/actions'
import Company from '../../service/companyService'

function* validateCustomizationOtpWatcher() {
  yield takeEvery(validateCustomizationOtpRequestStart.type, validateCustomizationOtpWorker)
}

function* validateCustomizationOtpWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    const { data: response } = yield Company.validateCustomizationOtp(data)
    yield put(validateCustomizationOtpRequestSuccessful(response?.data?.customizationDetail))
    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(validateCustomizationOtpRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default validateCustomizationOtpWatcher

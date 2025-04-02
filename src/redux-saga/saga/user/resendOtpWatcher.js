import { takeEvery, put } from 'redux-saga/effects'
import {
  userResendOtpRequestStart,
  userResendOtpRequestSuccessful,
  userResendOtpRequestFailure,
  showSuccessMessage,
  showErrorMessage,
  startLoader,
  stopLoader,
} from '../../redux/actions'
import User from '../../service/userService'

function* resendOtpWatcher() {
  yield takeEvery(userResendOtpRequestStart.type, resendOtpWorker)
}

function* resendOtpWorker() {
  try {
    yield put(startLoader())
    yield User.resendOtp()
    yield put(userResendOtpRequestSuccessful())
    yield put(showSuccessMessage({ msg: 'OTP sent successfully' }))
    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(userResendOtpRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default resendOtpWatcher

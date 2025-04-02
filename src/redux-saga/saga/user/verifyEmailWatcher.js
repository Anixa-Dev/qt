import { takeEvery, put } from 'redux-saga/effects'
import {
  showErrorMessage,
  showSuccessMessage,
  startLoader,
  stopLoader,
  userVerifyEmailRequestFailure,
  userVerifyEmailRequestStart,
  userVerifyEmailRequestSuccessful,
} from '../../redux/actions'
import User from '../../service/userService'

function* verifyEmailWatcher() {
  yield takeEvery(userVerifyEmailRequestStart.type, verifyEmailWorker)
}

function* verifyEmailWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    yield User.verifyEmail(data)
    yield put(userVerifyEmailRequestSuccessful())
    yield put(showSuccessMessage({ msg: 'Your Email is now verified' }))
    yield put(stopLoader())
  } catch (e) {
    yield put(userVerifyEmailRequestFailure())
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
    yield put(stopLoader())
  }
}

export default verifyEmailWatcher

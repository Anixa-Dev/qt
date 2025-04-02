import { takeEvery, put } from 'redux-saga/effects'
import {
  resetPasswordRequestStart,
  resetPasswordRequestSuccessful,
  resetPasswordRequestFailure,
  showSuccessMessage,
  showErrorMessage,
  startLoader,
  stopLoader,
} from '../../redux/actions'
import User from '../../service/userService'

function* resetPasswordWatcher() {
  yield takeEvery(resetPasswordRequestStart.type, resetPasswordWorker)
}

function* resetPasswordWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    yield User.resetPassword(data)
    yield put(resetPasswordRequestSuccessful())
    yield put(showSuccessMessage({ msg: 'Password changed successfully' }))
    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(resetPasswordRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default resetPasswordWatcher

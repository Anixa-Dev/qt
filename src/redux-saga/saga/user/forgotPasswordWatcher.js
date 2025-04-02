import { takeEvery, put } from 'redux-saga/effects'
import {
  forgotPasswordRequestStart,
  forgotPasswordRequestSuccessful,
  forgotPasswordRequestFailure,
  startLoader,
  stopLoader,
} from '../../redux/actions'
import User from '../../service/userService'

function* forgotPasswordWatcher() {
  yield takeEvery(forgotPasswordRequestStart.type, forgotPasswordWorker)
}

function* forgotPasswordWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    yield User.forgotPassword(data)
    yield put(forgotPasswordRequestSuccessful())
    yield put(stopLoader())
  } catch (e) {
    yield put(forgotPasswordRequestFailure(e?.response?.data?.message))
    yield put(stopLoader())
  }
}

export default forgotPasswordWatcher

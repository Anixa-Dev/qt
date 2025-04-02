import { takeEvery, put } from 'redux-saga/effects'
import {
  showErrorMessage,
  showSuccessMessage,
  startLoader,
  stopLoader,
  editSignupRequestFailure,
  editSignupRequestStart,
  editSignupRequestSuccessful,
} from '../../redux/actions'
import User from '../../service/userService'

function* editSignupWatcher() {
  yield takeEvery(editSignupRequestStart.type, editSignupWorker)
}

function* editSignupWorker() {
  try {
    yield put(startLoader())
    const data = yield User.editSignup()
    yield put(editSignupRequestSuccessful(data))
    yield put(showSuccessMessage({ msg: 'Signed Up Successfully' }))
    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(editSignupRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default editSignupWatcher

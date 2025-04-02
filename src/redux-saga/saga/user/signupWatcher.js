import { takeEvery, put } from 'redux-saga/effects'
import {
  showErrorMessage,
  showSuccessMessage,
  startLoader,
  stopLoader,
  userSignupRequestFailure,
  userSignupRequestStart,
  userSignupRequestSuccessful,
} from '../../redux/actions'
import User from '../../service/userService'

function* signupWatcher() {
  yield takeEvery(userSignupRequestStart.type, signupWorker)
}

function* signupWorker(action) {
  try {
    const data = action && action.payload
    if (data?.type === 'guest') {
      // Guest Signup
      yield put(startLoader())
      const { data: response } = yield User.guestSignup(data)
      yield put(userSignupRequestSuccessful(response?.data))
      yield put(stopLoader())
    } else {
      yield put(startLoader())
      const { data: response } = yield User.signup(data)
      yield put(userSignupRequestSuccessful(response?.data))
      yield put(showSuccessMessage({ msg: 'Signed Up Successfully' }))
      yield put(stopLoader())
    }
  } catch (e) {
    yield put(stopLoader())
    yield put(userSignupRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default signupWatcher

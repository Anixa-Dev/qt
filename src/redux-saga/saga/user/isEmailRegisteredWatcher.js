import { takeEvery, put } from 'redux-saga/effects'
import {
  isEmailRegisteredRequestStart,
  isEmailRegisteredRequestSuccessful,
  isEmailRegisteredRequestFailure,
  showErrorMessage,
} from '../../redux/actions'
import User from '../../service/userService'

function* isEmailRegisteredWatcher() {
  yield takeEvery(isEmailRegisteredRequestStart.type, isEmailRegisteredWorker)
}

function* isEmailRegisteredWorker(action) {
  try {
    const data = action && action.payload
    yield User.isEmailRegistered(data)
    yield put(isEmailRegisteredRequestSuccessful())
  } catch (e) {
    yield put(isEmailRegisteredRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default isEmailRegisteredWatcher

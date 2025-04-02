import { takeEvery, put } from 'redux-saga/effects'
import { getUserDetails } from '../../../utils/helper'
import {
  userLoginRequestStart,
  userLoginRequestSuccessful,
  userLoginRequestFailure,
  showErrorMessage,
  showSuccessMessage,
  startLoader,
  stopLoader,
} from '../../redux/actions'
import User from '../../service/userService'

function* loginWatcher() {
  yield takeEvery(userLoginRequestStart.type, loginWorker)
}

function* loginWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    yield User.login(data)
    const userDetails = getUserDetails()
    yield put(userLoginRequestSuccessful({ userDetails }))
    yield put(showSuccessMessage({ msg: `Welcome ${ userDetails.userName }` }))
    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(userLoginRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default loginWatcher

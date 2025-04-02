import { takeEvery, put } from 'redux-saga/effects'
import {
  startLoader,
  stopLoader,
  verifyTokenRequestFailure,
  verifyTokenRequestStart,
  verifyTokenRequestSuccessful,
} from '../../redux/actions'
import User from '../../service/userService'

function* verifyTokenWatcher() {
  yield takeEvery(verifyTokenRequestStart.type, verifyTokenWorker)
}

function* verifyTokenWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    const { data: response } = yield User.verifyToken(data)
    yield put(verifyTokenRequestSuccessful(response))
    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(verifyTokenRequestFailure())
  }
}

export default verifyTokenWatcher

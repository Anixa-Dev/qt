import { takeEvery, put } from 'redux-saga/effects'
import { removeToken } from '../../../utils/helper'
import {
  logoutRequestStart,
  logoutRequestSuccessful,
  logoutRequestFailure,
  showErrorMessage,
} from '../../redux/actions'

function* logoutWatcher() {
  yield takeEvery(logoutRequestStart.type, logoutWorker)
}

function* logoutWorker() {
  try {
    removeToken()
    yield put(logoutRequestSuccessful())
  } catch (e) {
    yield put(logoutRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default logoutWatcher

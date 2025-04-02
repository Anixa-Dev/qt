import { takeEvery, put } from 'redux-saga/effects'
import CONSTANTS from '../../../utils/constants'
import { removeToken } from '../../../utils/helper'
import {
  showErrorMessage,
  userInfoRequestFailure,
  userInfoRequestStart,
  userInfoRequestSuccessful,
} from '../../redux/actions'
import User from '../../service/userService'

function* userInfoWatcher() {
  yield takeEvery(userInfoRequestStart.type, userInfoWorker)
}

function* userInfoWorker() {
  try {
    const { data: response } = yield User.getUserInfo()
    yield put(userInfoRequestSuccessful(response?.data?.userDetail))
  } catch (e) {
    yield put(userInfoRequestFailure(e?.response?.data))
    const errorMsg = e?.response?.data?.message
    if (errorMsg === CONSTANTS.USER_NOT_FOUND_MESSAGE) {
      removeToken()
      window.location.reload()
    }
    yield put(showErrorMessage({ msg: errorMsg }))
  }
}

export default userInfoWatcher

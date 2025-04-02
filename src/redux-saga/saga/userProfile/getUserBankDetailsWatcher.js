import { takeEvery, put } from 'redux-saga/effects'
import {
  getUserBankDetailsRequestStart,
  getUserBankDetailsRequestSuccessful,
  getUserBankDetailsRequestFailure,
  startLoader,
  stopLoader,
  showErrorMessage,
} from '../../redux/actions'
import updateUserProfile from '../../service/userProfileService'

function* getUserBankDetailsWatcher() {
  yield takeEvery(getUserBankDetailsRequestStart.type, getUserBankDetailsWorker)
}

function* getUserBankDetailsWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    const { data: response } = yield updateUserProfile.getUserBankDetails(data)
    yield put(getUserBankDetailsRequestSuccessful(response?.data?.userBankDetails))
    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(getUserBankDetailsRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default getUserBankDetailsWatcher

import { takeEvery, put } from 'redux-saga/effects'
import {
  updateUserProfileRequestStart,
  updateUserProfileRequestSuccessful,
  updateUserProfileRequestFailure,
  startLoader,
  stopLoader,
  showSuccessMessage,
  showErrorMessage,
  userInfoRequestStart,
} from '../../redux/actions'
import updateUserProfile from '../../service/userProfileService'

function* updateUserProfileWatcher() {
  yield takeEvery(updateUserProfileRequestStart.type, updateUserProfileWorker)
}

function* updateUserProfileWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    const { data: response } = yield updateUserProfile.updatePersonalSettings(data)
    yield put(updateUserProfileRequestSuccessful(response?.data?.updateUserProfile))
    yield put(stopLoader())
    yield put(userInfoRequestStart())
    yield put(showSuccessMessage({ msg: 'Profile Updated Successfully' }))
  } catch (e) {
    yield put(stopLoader())
    yield put(updateUserProfileRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default updateUserProfileWatcher

import { takeEvery, put } from 'redux-saga/effects'
import {
  startLoader,
  stopLoader,
  getUserInviteDetailRequestStart,
  getUserInviteDetailRequestSuccessful,
  getUserInviteDetailRequestFailure,
  showErrorMessage,
} from '../../redux/actions'
import Invite from '../../service/inviteService'

function* getUserInviteDetailWatcher() {
  yield takeEvery(getUserInviteDetailRequestStart.type, getUserInviteDetailRequestWorker)
}

function* getUserInviteDetailRequestWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    const { data: response } = yield Invite.getUserInvite(data)
    yield put(getUserInviteDetailRequestSuccessful(response?.data))
    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(getUserInviteDetailRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default getUserInviteDetailWatcher

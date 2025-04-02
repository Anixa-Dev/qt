import { takeEvery, put } from 'redux-saga/effects'
import {
  startLoader,
  stopLoader,
  showErrorMessage,
  sendInviteRequestStart,
  sendInviteRequestSuccessful,
  sendInviteRequestFailure,
  showSuccessMessage,
} from '../../redux/actions'
import Invite from '../../service/inviteService'

function* sendInviteWatcher() {
  yield takeEvery(sendInviteRequestStart.type, sendInviteRequestWorker)
}

function* sendInviteRequestWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    const { data: response } = yield Invite.sendInvites(data)
    yield put(sendInviteRequestSuccessful(response?.data))
    yield put(showSuccessMessage({ msg: response?.message }))
    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(sendInviteRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default sendInviteWatcher

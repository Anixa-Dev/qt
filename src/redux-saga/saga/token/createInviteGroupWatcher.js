import { takeEvery, put } from 'redux-saga/effects'
import {
  startLoader,
  stopLoader,
  showErrorMessage,
  createInviteGroupRequestStart,
  createInviteGroupRequestSuccessful,
  createInviteGroupRequestFailure,
  showSuccessMessage,
  getInviteGroupListRequestStart,
} from '../../redux/actions'
import Invite from '../../service/inviteService'

function* createInviteGroupRequestWatcher() {
  yield takeEvery(createInviteGroupRequestStart.type, createInviteGroupRequestWorker)
}

function* createInviteGroupRequestWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    const { data: response } = yield Invite.createGroup(data)

    yield put(createInviteGroupRequestSuccessful(response?.data))
    yield put(getInviteGroupListRequestStart({
      custom_token_id: response?.data.inviteGroup.custom_token_id,
      with_invitations: true,
    }))
    yield put(showSuccessMessage({ msg: 'Group Created Successfully' }))

    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(createInviteGroupRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default createInviteGroupRequestWatcher

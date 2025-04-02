import { takeEvery, put } from 'redux-saga/effects'
import {
  getInviteGroupListRequestStart,
  getInviteGroupListRequestSuccessful,
  getInviteGroupListRequestFailure,
  startLoader,
  stopLoader,
  showErrorMessage,
} from '../../redux/actions'
import Invite from '../../service/inviteService'

function* getInviteGroupListRequestWatcher() {
  yield takeEvery(getInviteGroupListRequestStart.type, getInviteGroupListRequestWorker)
}

function* getInviteGroupListRequestWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    const { data: response } = yield Invite.fetchGroups(data)

    yield put(getInviteGroupListRequestSuccessful(response?.data))
    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(getInviteGroupListRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default getInviteGroupListRequestWatcher

import { takeEvery, put } from 'redux-saga/effects'
import {
  startLoader,
  stopLoader,
  showErrorMessage,
  showSuccessMessage,
  sendTestInviteMailRequestStart,
  sendTestInviteMailRequestSuccessful,
  sendTestInviteMailRequestFailure,
} from '../../redux/actions'

import Invite from '../../service/inviteService'

function* sendTestInviteMailRequestWatcher() {
  yield takeEvery(sendTestInviteMailRequestStart.type, createInviteGroupRequestWorker)
}

function* createInviteGroupRequestWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    const { data: response } = yield Invite.sendTestMail(data)

    yield put(sendTestInviteMailRequestSuccessful(response?.data))
    yield put(showSuccessMessage({ msg: `Sent test invite mail to - ${ data.send_mail }` }))

    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(sendTestInviteMailRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default sendTestInviteMailRequestWatcher

import { takeEvery, put } from 'redux-saga/effects'
import {
  startLoader,
  stopLoader,
  showErrorMessage,
  sendNotificationRequestStart,
  sendNotificationRequestSuccessful,
  sendNotificationRequestFailure,
  showSuccessMessage,
} from '../../redux/actions'
import Company from '../../service/companyService'

function* sendNotificationWatcher() {
  yield takeEvery(sendNotificationRequestStart.type, sendNotificationRequestWorker)
}

function* sendNotificationRequestWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    const { data: response } = yield Company.sendTokenNotification(data)
    yield put(sendNotificationRequestSuccessful(response?.data))
    yield put(showSuccessMessage({ msg: 'Notification sent Successfully' }))
    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(sendNotificationRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default sendNotificationWatcher

import { takeEvery, put } from 'redux-saga/effects'
import {
  saveNftLayoutChangesRequestStart,
  saveNftLayoutChangesRequestSuccessful,
  saveNftLayoutChangesRequestFailure,
  startLoader,
  stopLoader,
  showErrorMessage,
} from '../../redux/actions'
import Company from '../../service/companyService'

function* saveNftLayoutChangesWatcher() {
  yield takeEvery(saveNftLayoutChangesRequestStart.type, saveNftLayoutChangesWorker)
}

function* saveNftLayoutChangesWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    const { data: response } = yield Company.saveNftLayoutChanges(data)
    yield put(saveNftLayoutChangesRequestSuccessful(response?.data?.customizationDetail))
    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(saveNftLayoutChangesRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default saveNftLayoutChangesWatcher

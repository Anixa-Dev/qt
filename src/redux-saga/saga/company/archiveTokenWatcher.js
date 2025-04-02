import { takeEvery, put } from 'redux-saga/effects'
import {
  archiveTokenRequestStart,
  archiveTokenRequestSuccessful,
  archiveTokenRequestFailure,
  startLoader,
  stopLoader,
  showErrorMessage,
  showSuccessMessage,
} from '../../redux/actions'
import Company from '../../service/companyService'

function* archiveTokenWatcher() {
  yield takeEvery(archiveTokenRequestStart.type, archiveTokenWorker)
}

function* archiveTokenWorker(action) {
  try {
    const data = action && action.payload
    const startLoadMessage = data?.archived ? 'Restoring...' : 'Archiving...'
    const stopLoadMessage = data?.archived ? 'Restored Successfully!' : 'Archived Successfully!'

    yield put(startLoader({ text: startLoadMessage }))
    const { data: response } = yield Company.archiveToken(data)
    yield put(archiveTokenRequestSuccessful(response?.data?.token))
    yield put(showSuccessMessage({ msg: stopLoadMessage }))
    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(archiveTokenRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default archiveTokenWatcher

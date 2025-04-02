import { takeEvery, put } from 'redux-saga/effects'
import {
  duplicateTokenRequestStart,
  duplicateTokenRequestSuccessful,
  duplicateTokenRequestFailure,
  startLoader,
  stopLoader,
  showErrorMessage,
  showSuccessMessage,
} from '../../redux/actions'
import Company from '../../service/companyService'

function* duplicateTokenWatcher() {
  yield takeEvery(duplicateTokenRequestStart.type, duplicateTokenWorker)
}

function* duplicateTokenWorker(action) {
  try {
    yield put(startLoader({ text: 'Duplicating ...' }))
    const data = action && action.payload
    const { data: response } = yield Company.duplicateToken(data)
    yield put(duplicateTokenRequestSuccessful(response?.data?.token))
    yield put(showSuccessMessage({ msg: 'Duplicated Successfully!' }))
    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(duplicateTokenRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default duplicateTokenWatcher

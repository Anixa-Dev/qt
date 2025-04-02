import { takeEvery, put } from 'redux-saga/effects'
import {
  createLinkTokenRequestStart,
  createLinkTokenRequestSuccessful,
  createLinkTokenRequestFailure,
  startLoader,
  stopLoader,
  showErrorMessage,
  showSuccessMessage,
} from '../../redux/actions'
import PlaidService from '../../service/plaidService'

function* createLinkTokenWatcher() {
  yield takeEvery(createLinkTokenRequestStart.type, createLinkTokenWorker)
}

function* createLinkTokenWorker() {
  try {
    yield put(startLoader())
    const { data: response } = yield PlaidService.createLinkToken()
    yield put(createLinkTokenRequestSuccessful(response?.data?.link_token?.link_token))
    yield put(showSuccessMessage({ msg: 'Plaid initialized successfully' }))
    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(createLinkTokenRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default createLinkTokenWatcher

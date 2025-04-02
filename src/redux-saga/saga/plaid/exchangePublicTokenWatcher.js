import { takeEvery, put } from 'redux-saga/effects'
import {
  exchangePublicTokenRequestStart,
  exchangePublicTokenRequestSuccessful,
  exchangePublicTokenRequestFailure,
  startLoader,
  stopLoader,
  showErrorMessage,
  showSuccessMessage,
} from '../../redux/actions'
import PlaidService from '../../service/plaidService'

function* exchangePublicTokenWatcher() {
  yield takeEvery(exchangePublicTokenRequestStart.type, exchangePublicTokenWorker)
}

function* exchangePublicTokenWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    const { data: response } = yield PlaidService.exchangePublicToken(data)
    yield put(exchangePublicTokenRequestSuccessful(response?.data))
    yield put(showSuccessMessage({ msg: 'Bank details verified successfully' }))
    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(exchangePublicTokenRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default exchangePublicTokenWatcher

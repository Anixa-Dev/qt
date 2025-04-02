import { takeEvery, put } from 'redux-saga/effects'
import {
  singleTokenRequestStart,
  singleTokenRequestSuccessful,
  singleTokenRequestFailure,
  startLoader,
  stopLoader,
  showErrorMessage,
} from '../../redux/actions'
import Company from '../../service/companyService'

function* singleTokenWatcher() {
  yield takeEvery(singleTokenRequestStart.type, singleTokenWorker)
}

function* singleTokenWorker(action) {
  try {
    const payload = action && action.payload
    yield payload.loader && put(startLoader())
    const { data: response } = yield Company.getSingleToken(payload)

    yield put(singleTokenRequestSuccessful(response?.data?.tokenDetail))
    yield payload.loader && put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(singleTokenRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default singleTokenWatcher

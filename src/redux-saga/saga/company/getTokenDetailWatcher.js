import { takeEvery, put } from 'redux-saga/effects'
import {
  tokenDetailRequestStart,
  tokenDetailRequestSuccessful,
  tokenDetailRequestFailure,
  startLoader,
  stopLoader,
  showErrorMessage,
} from '../../redux/actions'
import Company from '../../service/companyService'

function* tokenDetailWatcher() {
  yield takeEvery(tokenDetailRequestStart.type, tokenDetailWorker)
}

function* tokenDetailWorker(action) {
  try {
    yield put(startLoader())
    const payload = action && action.payload
    let response
    if (payload.isHighImpactCard) {
      const result = yield Company.getHighImpactCardDetail(payload)
      response = result?.data
    } else {
      const result = yield Company.getTokenDetail(payload)
      response = result?.data
    }

    yield put(tokenDetailRequestSuccessful(response?.data?.tokenDetail))
    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(tokenDetailRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default tokenDetailWatcher

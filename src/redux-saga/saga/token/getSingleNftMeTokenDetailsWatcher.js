import { takeEvery, put } from 'redux-saga/effects'
import {
  getSingleNftMeTokenRequestStart,
  getSingleNftMeTokenRequestSuccessful,
  getSingleNftMeTokenRequestFailure,
  startLoader,
  stopLoader,
  showErrorMessage,
} from '../../redux/actions'
import Company from '../../service/companyService'

function* getSingleNftMeTokenWatcher() {
  yield takeEvery(getSingleNftMeTokenRequestStart.type, getSingleNftMeTokenWorker)
}

function* getSingleNftMeTokenWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    const { data: response } = yield Company.getSingleNftMeToken(data)
    yield put(getSingleNftMeTokenRequestSuccessful(response?.data?.customizationDetail))
    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(getSingleNftMeTokenRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default getSingleNftMeTokenWatcher

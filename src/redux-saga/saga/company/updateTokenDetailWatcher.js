import { takeEvery, put } from 'redux-saga/effects'
import {
  updateTokenDetailRequestStart,
  updateTokenDetailRequestSuccessful,
  updateTokenDetailRequestFailure,
  startLoader,
  stopLoader,
  showSuccessMessage,
  showErrorMessage,
} from '../../redux/actions'
import Company from '../../service/companyService'

function* updateTokenDetailWatcher() {
  yield takeEvery(updateTokenDetailRequestStart.type, updateTokenDetailWorker)
}

function* updateTokenDetailWorker(action) {
  try {
    const data = action && action.payload
    yield put(startLoader({ text: `Updating ${ data?.collectible_type } ...` }))
    const { data: response } = yield Company.updateTokenDetail(data)
    yield put(updateTokenDetailRequestSuccessful(response?.data?.updatedToken))
    yield put(stopLoader())
    yield put(showSuccessMessage({ msg: 'Token Detail Updated Successfully' }))
  } catch (e) {
    yield put(stopLoader())
    yield put(updateTokenDetailRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default updateTokenDetailWatcher

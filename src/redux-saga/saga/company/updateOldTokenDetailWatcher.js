import { takeEvery, put } from 'redux-saga/effects'
import {
  updateOldTokenDetailRequestStart,
  updateOldTokenDetailRequestSuccessful,
  updateOldTokenDetailRequestFailure,
  startLoader,
  stopLoader,
  showSuccessMessage,
  showErrorMessage,
} from '../../redux/actions'
import Company from '../../service/companyService'
import { TOKEN_REFER_NAME } from '../../../utils/constants'

function* updateOldTokenDetailWatcher() {
  yield takeEvery(updateOldTokenDetailRequestStart.type, updateOldTokenDetailWorker)
}

function* updateOldTokenDetailWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    const { data: response } = yield Company.updateOldTokenDetail(data)
    yield put(updateOldTokenDetailRequestSuccessful(response?.data?.updatedToken))
    yield put(stopLoader())
    yield put(showSuccessMessage({ msg: `${ TOKEN_REFER_NAME } Updated Successfully` }))
  } catch (e) {
    yield put(stopLoader())
    yield put(updateOldTokenDetailRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default updateOldTokenDetailWatcher

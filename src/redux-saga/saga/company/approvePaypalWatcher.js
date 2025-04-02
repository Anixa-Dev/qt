import { takeEvery, put } from 'redux-saga/effects'
import {
  approvePaypalStart,
  approvePaypalSuccessful,
  approvePaypalFailure,
  showSuccessMessage,
  showErrorMessage,
  startLoader,
  stopLoader,
  getCompanyCreditStart,
} from '../../redux/actions'
import Company from '../../service/companyService'

function* approvePaypalWatcher() {
  yield takeEvery(approvePaypalStart.type, approvePaypalWorker)
}

function* approvePaypalWorker(action) {
  try {
    yield put(startLoader())
    const data = yield action && action.payload
    const { data: response } = yield Company.approvePaypalOrder(data)
    yield put(approvePaypalSuccessful(response?.data?.data))
    yield put(getCompanyCreditStart())
    yield put(showSuccessMessage({ msg: 'Credits added successfully' }))

    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(approvePaypalFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default approvePaypalWatcher

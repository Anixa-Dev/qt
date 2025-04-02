import { takeEvery, put } from 'redux-saga/effects'
import {
  startLoader,
  stopLoader,
  showErrorMessage,
  showSuccessMessage,
  addRetailerRequestStart,
  addRetailerRequestSuccessful,
  addRetailerRequestFailure,
  offersRequestStart,
} from '../../redux/actions'
import Company from '../../service/companyService'

function* addRetailerWatcher() {
  yield takeEvery(addRetailerRequestStart.type, addRetailerRequestWorker)
}

function* addRetailerRequestWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    const { data: response } = yield Company.createRetailer(data)
    yield put(addRetailerRequestSuccessful(response?.data))
    yield put(showSuccessMessage({ msg: response?.message }))

    yield put(offersRequestStart({ custom_token_id: data?.custom_token_id }))

    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(addRetailerRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default addRetailerWatcher

import { takeEvery, put } from 'redux-saga/effects'
import {
  startLoader,
  stopLoader,
  showErrorMessage,
  showSuccessMessage,
  addPromotionCodeRequestStart,
  addPromotionCodeRequestSuccessful,
  addPromotionCodeRequestFailure,
  getPromotionCodesRequestStart,
} from '../../redux/actions'
import Company from '../../service/companyService'

function* addPromotionCodeWatcher() {
  yield takeEvery(addPromotionCodeRequestStart.type, addPromotionCodeRequestWorker)
}

function* addPromotionCodeRequestWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    const { data: response } = yield Company.createPromotionCode(data)
    yield put(addPromotionCodeRequestSuccessful(response?.data))
    yield put(showSuccessMessage({ msg: response?.message }))
    yield put(getPromotionCodesRequestStart({ custom_token_id: action.payload?.custom_token_id }))

    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(addPromotionCodeRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default addPromotionCodeWatcher

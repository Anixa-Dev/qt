import { takeEvery, put } from 'redux-saga/effects'
import {
  getPromotionCodesRequestStart,
  getPromotionCodesRequestSuccessful,
  getPromotionCodesRequestFailure,
  startLoader,
  stopLoader,
  showErrorMessage,
} from '../../redux/actions'
import Company from '../../service/companyService'

function* getPromotionCodesWatcher() {
  yield takeEvery(getPromotionCodesRequestStart.type, getPromotionCodesRequestWorker)
}

function* getPromotionCodesRequestWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    const { data: response } = yield Company.getPromotionCodes(data)

    yield put(getPromotionCodesRequestSuccessful(response?.data))
    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(getPromotionCodesRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default getPromotionCodesWatcher

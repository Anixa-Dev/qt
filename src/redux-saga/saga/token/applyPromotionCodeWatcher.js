import { takeEvery, put } from 'redux-saga/effects'
import {
  startLoader,
  stopLoader,
  applyPromotionCodeRequestStart,
  applyPromotionCodeRequestSuccessful,
  applyPromotionCodeRequestFailure,
  tmpPurchaseInfoRequestStart,
} from '../../redux/actions'
import Company from '../../service/companyService'

function* applyPromotionCodeWatcher() {
  yield takeEvery(applyPromotionCodeRequestStart.type, applyPromotionCodeRequestWorker)
}

function* applyPromotionCodeRequestWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    const { data: response } = yield Company.applyPromotionCode(data)
    yield put(applyPromotionCodeRequestSuccessful({
      appliedPromotionCode: response?.data?.appliedPromotionCode,
      message: response?.message,
    }))

    yield put(tmpPurchaseInfoRequestStart({
      payload: { purchase_id: data?.purchase_id },
      requestType: 'FETCH',
    }))

    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(applyPromotionCodeRequestFailure({ message: e?.response?.data?.message }))
  }
}

export default applyPromotionCodeWatcher

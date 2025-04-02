import { takeEvery, put } from 'redux-saga/effects'
import {
  startLoader,
  stopLoader,
  showErrorMessage,
  showSuccessMessage,
  addOfferRequestStart,
  addOfferRequestSuccessful,
  addOfferRequestFailure,
  offersRequestStart,
  retailersRequestStart,
} from '../../redux/actions'
import Company from '../../service/companyService'

function* addOfferWatcher() {
  yield takeEvery(addOfferRequestStart.type, addOfferRequestWorker)
}

function* addOfferRequestWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    const { data: response } = yield Company.createOffer(data)
    yield put(addOfferRequestSuccessful(response?.data))
    yield put(showSuccessMessage({ msg: response?.message }))

    yield put(offersRequestStart({ custom_token_id: data?.custom_token_id }))
    yield put(retailersRequestStart({ custom_token_id: data?.custom_token_id }))

    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(addOfferRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default addOfferWatcher

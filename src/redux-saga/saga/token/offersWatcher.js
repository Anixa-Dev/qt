import { takeEvery, put } from 'redux-saga/effects'
import {
  startLoader,
  stopLoader,
  showErrorMessage,
  offersRequestStart,
  offersRequestSuccessful,
  offersRequestFailure,
} from '../../redux/actions'
import Company from '../../service/companyService'

function* offersWatcher() {
  yield takeEvery(offersRequestStart.type, offersRequestWorker)
}

function* offersRequestWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    if (data?.is_user_token) {
      const { data: response } = yield Company.getUserOffers(data)
      yield put(offersRequestSuccessful(response?.data))
    } else {
      const { data: response } = yield Company.getOffers(data)
      yield put(offersRequestSuccessful(response?.data))
    }
    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(offersRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default offersWatcher

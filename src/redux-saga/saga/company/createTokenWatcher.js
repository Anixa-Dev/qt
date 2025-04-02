import { takeEvery, put } from 'redux-saga/effects'
import {
  createTokenRequestStart,
  createTokenRequestSuccessful,
  createTokenRequestFailure,
  startLoader,
  stopLoader,
  showErrorMessage,
  showSuccessMessage,
} from '../../redux/actions'
import Company from '../../service/companyService'

function* createTokenWatcher() {
  yield takeEvery(createTokenRequestStart.type, createTokenWorker)
}

function* createTokenWorker(action) {
  try {
    const data = action && action.payload
    yield put(startLoader({ text: `Creating ${ data?.collectible_type } ...` }))
    const { data: response } = yield Company.createToken(data)
    yield put(createTokenRequestSuccessful(response?.data?.token))
    yield put(showSuccessMessage({ msg: 'Your Token was created successfully!' }))
    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(createTokenRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default createTokenWatcher

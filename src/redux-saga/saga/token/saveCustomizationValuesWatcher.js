import { takeEvery, put } from 'redux-saga/effects'
import {
  saveCustomizationValuesRequestStart,
  saveCustomizationValuesRequestSuccessful,
  saveCustomizationValuesRequestFailure,
  startLoader,
  stopLoader,
  showErrorMessage,
} from '../../redux/actions'
import Company from '../../service/companyService'

function* saveCustomizationValuesWatcher() {
  yield takeEvery(saveCustomizationValuesRequestStart.type, saveCustomizationValuesWorker)
}

function* saveCustomizationValuesWorker(action) {
  try {
    const data = action && action.payload
    if (!data.withoutLoader) {
      yield put(startLoader({ text: 'Please wait! while we are saving your changes.' }))
    }
    const { data: response } = yield Company.saveCustomizationValues(data)
    yield put(saveCustomizationValuesRequestSuccessful(response?.data?.tokenDetail))

    if (!data.withoutLoader) {
      yield put(stopLoader())
    }
  } catch (e) {
    yield put(stopLoader())
    yield put(saveCustomizationValuesRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default saveCustomizationValuesWatcher

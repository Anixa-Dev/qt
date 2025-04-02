import { takeEvery, put } from 'redux-saga/effects'
import {
  addNewNftMeEntryRequestStart,
  addNewNftMeEntryRequestSuccessful,
  addNewNftMeEntryRequestFailure,
  startLoader,
  stopLoader,
  showErrorMessage,
  showSuccessMessage,
  getNftMeTokenDetailReducerStart,
} from '../../redux/actions'
import Company from '../../service/companyService'

function* addNewNftMeEntryWatcher() {
  yield takeEvery(addNewNftMeEntryRequestStart.type, addNewNftMeEntryWorker)
}

function* addNewNftMeEntryWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    const { data: response } = yield Company.addNewNftMeEntry(data)
    yield put(addNewNftMeEntryRequestSuccessful(response?.data?.token))
    yield put(getNftMeTokenDetailReducerStart({
      nft_me_id: data.nft_me_id,
      ...data.filterValue,
      ...data,
    }))
    yield put(showSuccessMessage({ msg: 'Entry Added Successfully!' }))
    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(addNewNftMeEntryRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default addNewNftMeEntryWatcher

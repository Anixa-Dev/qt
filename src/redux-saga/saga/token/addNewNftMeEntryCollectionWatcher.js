import { takeEvery, put } from 'redux-saga/effects'
import {
  addNewNftMeEntryCollectionRequestStart,
  addNewNftMeEntryCollectionRequestSuccessful,
  addNewNftMeEntryCollectionRequestFailure,
  startLoader,
  stopLoader,
  showErrorMessage,
  showSuccessMessage,
  resetAddNewNftMeEntryCollection,
  resetCardsLists,
} from '../../redux/actions'
import TradeToken from '../../service/tradeTokenService'

function* addNewNftMeEntryCollectionWatcher() {
  yield takeEvery(addNewNftMeEntryCollectionRequestStart.type, addNewNftMeEntryCollectionWorker)
}

function* addNewNftMeEntryCollectionWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    const { data: response } = yield TradeToken.addNewNftMeEntryCollection(data)
    yield put(addNewNftMeEntryCollectionRequestSuccessful(response?.data))
    const duplicateEntry = response?.data.response.duplicateEmailCount
    yield put(showSuccessMessage(duplicateEntry > 0
      ? { msg: `Entry Added Successfully with ${ duplicateEntry } Duplicate records` }
      : { msg: 'Entry Added Successfully with No Duplicate records' }))
    yield put(resetAddNewNftMeEntryCollection())
    yield put(resetCardsLists())
    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(addNewNftMeEntryCollectionRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default addNewNftMeEntryCollectionWatcher

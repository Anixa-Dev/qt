import { takeLatest, put } from 'redux-saga/effects'
import {
  nftMeTokenDetailReducerFailure,
  nftMeTokenDetailReducerStart,
  nftMeTokenDetailReducerSuccessful,
  showErrorMessage, startLoader, stopLoader,
} from '../../redux/actions'
import TradeToken from '../../service/tradeTokenService'

function* nftMeTokenDetailWatcher() {
  yield takeLatest(nftMeTokenDetailReducerStart.type, nftMeDetailWorker)
}

function* nftMeDetailWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    const { data: response } = yield TradeToken.nftMeTokenDetail({
      ...data,
    })
    yield put(nftMeTokenDetailReducerSuccessful(response?.data?.tokenDetail))
    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(nftMeTokenDetailReducerFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default nftMeTokenDetailWatcher

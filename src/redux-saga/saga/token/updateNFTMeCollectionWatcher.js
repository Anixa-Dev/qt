import { takeEvery, put } from 'redux-saga/effects'
import {
  startLoader,
  stopLoader,
  showSuccessMessage,
  showErrorMessage,
  updateNFTCollectionDetailRequestStart,
  updateNFTCollectionDetailRequestSuccessful,
  updateNFTCollectionDetailRequestFailure,
} from '../../redux/actions'
import TradeToken from '../../service/tradeTokenService'
import { TOKEN_REFER_NAME } from '../../../utils/constants'

function* updateNftMeCollectionWatcher() {
  yield takeEvery(updateNFTCollectionDetailRequestStart.type, updateNftMeCollectionWorker)
}

function* updateNftMeCollectionWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    const { data: response } = yield TradeToken.updateNftMeCollectionDetail(data)
    yield put(updateNFTCollectionDetailRequestSuccessful(response?.data))
    yield put(stopLoader())
    yield put(showSuccessMessage({ msg: `${ TOKEN_REFER_NAME } Collection Detail Updated Successfully` }))
  } catch (e) {
    yield put(stopLoader())
    yield put(updateNFTCollectionDetailRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default updateNftMeCollectionWatcher

import { takeEvery, put } from 'redux-saga/effects'
import {
  getNftMeTokenDetailReducerStart,
  resetCardsLists,
  showErrorMessage,
  showSuccessMessage,
  startLoader,
  stopLoader,
  uploadRookieCardList,
} from '../../redux/actions'
import TradeToken from '../../service/tradeTokenService'
import { TOKEN_REFER_NAME } from '../../../utils/constants'

function* uploadCSVWatcher() {
  yield takeEvery(uploadRookieCardList.type, uploadCSVWorker)
}

function* uploadCSVWorker(action) {
  try {
    if (action) {
      yield put(startLoader())
      const data = action && action.payload
      const { data: response } = yield TradeToken.uploadCSV(data)
      yield put(getNftMeTokenDetailReducerStart({
        ...data?.filterValue,
        nft_me_id: data?.nft_me_id,
        page_no: data?.page_no,
        limit: data?.limit,
      }))
      yield put(stopLoader())
      yield put(showSuccessMessage({
        msg: `${ TOKEN_REFER_NAME }s were added Successfully and
      ${ response?.data?.count === 0 ? 'NO Duplicate' : response?.data?.count } email(s) already exist`,
      }))
      yield put(resetCardsLists())
    }
  } catch (e) {
    yield put(stopLoader())
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default uploadCSVWatcher

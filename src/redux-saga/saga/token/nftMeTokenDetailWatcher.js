import { takeLatest, put, select } from 'redux-saga/effects'
import {
  getNftMeTokenDetailReducerStart,
  getNftMeTokenDetailReducerSuccessful,
  getNftMeTokenDetailReducerFailure,
  showErrorMessage, startLoader, stopLoader,
} from '../../redux/actions'
import TradeToken from '../../service/tradeTokenService'

function* getNftMeTokenDetailWatcher() {
  yield takeLatest(getNftMeTokenDetailReducerStart.type, getNftMeDetailWorker)
}

function* getNftMeDetailWorker(action) {
  try {
    const data = action && action.payload
    if (!data.unRedundantApiCall) {
      yield put(startLoader())
      const { companyData } = yield select((state) => state.companyInfo)
      const { data: response } = yield TradeToken.getNftMeTokenDetail({
        ...data,
        company_id: companyData.company_id,
      })
      yield put(getNftMeTokenDetailReducerSuccessful(response?.data))
      yield put(stopLoader())
    }
  } catch (e) {
    yield put(stopLoader())
    yield put(getNftMeTokenDetailReducerFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default getNftMeTokenDetailWatcher

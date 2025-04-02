import { takeEvery, put } from 'redux-saga/effects'
import {
  publishNftMeCollectionReducerStart,
  publishNftMeCollectionReducerSuccessful,
  publishNftMeCollectionReducerFailure,
  startLoader,
  stopLoader,
  showErrorMessage,
  showSuccessMessage,
  getCompanyNftMeRequestStart,
} from '../../redux/actions'
import TradeToken from '../../service/tradeTokenService'
import { TOKEN_REFER_NAME } from '../../../utils/constants'

function* publishNftMeCollectionWatcher() {
  yield takeEvery(publishNftMeCollectionReducerStart.type, publishNftMeCollectionWorker)
}

function* publishNftMeCollectionWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    const { data: response } = yield TradeToken.publishNftMeCollection(data)
    yield put(publishNftMeCollectionReducerSuccessful(response?.data))
    yield put(getCompanyNftMeRequestStart({
      ...data?.filterValue,
      company_id: data?.company_id,
      page_no: data?.page_no,
      limit: data?.limit,
      type: 'all',
    }))
    yield put(stopLoader())
    yield put(showSuccessMessage({ msg: `${ TOKEN_REFER_NAME } Me collection Published successfully` }))
  } catch (e) {
    yield put(stopLoader())
    yield put(publishNftMeCollectionReducerFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default publishNftMeCollectionWatcher

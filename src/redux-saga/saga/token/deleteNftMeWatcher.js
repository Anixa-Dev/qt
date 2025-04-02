import { takeLatest, put, select } from 'redux-saga/effects'
import { NFT_ME_CONSTANTS } from '../../../utils/constants'
import {
  deleteNftMeRequestStart,
  deleteNftMeRequestSuccessful,
  deleteNftMeRequestFailure,
  startLoader,
  stopLoader,
  showErrorMessage,
  showSuccessMessage,
  getNftMeTokenDetailReducerStart,
  getCompanyNftMeRequestStart,
  getNftMeTokenDetailReducerSuccessful,
  getCompanyNftMeRequestSuccessful,
} from '../../redux/actions'
import Company from '../../service/companyService'
import TradeToken from '../../service/tradeTokenService'

function* deleteNftMeWatcher() {
  yield takeLatest(deleteNftMeRequestStart.type, deleteNftMeWorker)
}

function* deleteNftMeWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    const { data: response } = yield TradeToken.deleteNftMe(data)
    yield put(deleteNftMeRequestSuccessful(response?.data?.token))
    yield data.collectionType === NFT_ME_CONSTANTS.COLLECTION ? put(getCompanyNftMeRequestStart({
      ...data?.filterValue,
      company_id: data?.company_id,
      page_no: data?.page_no,
      limit: data?.limit,
      type: data.type,
      id: data.nft_me_id,
      unRedundantApiCall: true,
      // status: 'all',
    }))
      : put(getNftMeTokenDetailReducerStart({
        ...data,
        nft_me_id: data?.nft_me_id,
        page_no: data?.page_no,
        limit: data?.limit,
        status: data?.status,
        unRedundantApiCall: true,
      }))
    const { companyData } = yield select((state) => state.companyInfo)
    const { data: companyResponse } = yield data.collectionType === NFT_ME_CONSTANTS.COLLECTION
      ? Company.getCompanyNftMe({
        ...data,
        status: 'all',
      })
      : TradeToken.getNftMeTokenDetail({
        ...data,
        company_id: companyData.company_id,
      })
    yield put(data.collectionType === NFT_ME_CONSTANTS.COLLECTION
      ? getCompanyNftMeRequestSuccessful(companyResponse?.data)
      : getNftMeTokenDetailReducerSuccessful(companyResponse?.data))
    yield put(showSuccessMessage({ msg: 'Deleted Successfully!' }))
    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(deleteNftMeRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default deleteNftMeWatcher

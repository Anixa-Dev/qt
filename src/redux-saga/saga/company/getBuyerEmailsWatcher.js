import { takeEvery, put } from 'redux-saga/effects'
import {
  getBuyerEmailsStart,
  getBuyerEmailsSuccessful,
  getBuyerEmailsFailure,
  resetBuyerEmails,
  startLoader,
  stopLoader,
  showErrorMessage,
} from '../../redux/actions'
import Company from '../../service/companyService'

function* buyerEmailsWatcher() {
  yield takeEvery(getBuyerEmailsStart.type, buyerEmails)
}

function* buyerEmails(action) {
  try {
    const payload = action && action.payload
    yield payload.loader && put(startLoader())
    const { data: response } = yield Company.getBuyerEmail(payload)

    yield put(getBuyerEmailsSuccessful(response?.data?.nftUserDetails))
    if (response?.data?.nftUserDetails.length === 0) {
      yield put(showErrorMessage({
        msg: 'Empty purchase list',
      }))
    }
    yield payload.loader && put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(getBuyerEmailsFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
    yield put(resetBuyerEmails())
  }
}

export default buyerEmailsWatcher

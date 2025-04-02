import { takeEvery, put } from 'redux-saga/effects'
import {
  startLoader,
  stopLoader,
  showSuccessMessage,
  showErrorMessage,
  resendCustomizeNftInviteStart,
  resendCustomizeNftInviteSuccessful,
  resendCustomizeNftInviteFailure,
} from '../../redux/actions'
import TradeToken from '../../service/tradeTokenService'
import { TOKEN_REFER_NAME } from '../../../utils/constants'

function* resendCustomizeNftInviteWatcher() {
  yield takeEvery(resendCustomizeNftInviteStart.type, resendCustomizeNftInviteWorker)
}

function* resendCustomizeNftInviteWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    const { data: response } = yield TradeToken.resendCustomizeNftInviteEmail(data)

    yield put(resendCustomizeNftInviteSuccessful(response?.data))
    yield put(stopLoader())
    yield put(showSuccessMessage({ msg: `Sent Customize ${ TOKEN_REFER_NAME } invite successfully!` }))
  } catch (e) {
    yield put(stopLoader())
    yield put(resendCustomizeNftInviteFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default resendCustomizeNftInviteWatcher

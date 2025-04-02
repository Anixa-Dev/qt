import { takeEvery, put } from 'redux-saga/effects'
import {
  sendCustomizeNftInviteStart,
  sendCustomizeNftInviteSuccessful,
  sendCustomizeNftInviteFailure,
  startLoader,
  stopLoader,
  showSuccessMessage,
  showErrorMessage,
} from '../../redux/actions'
import Company from '../../service/companyService'
import { TOKEN_REFER_NAME } from '../../../utils/constants'

function* sendCustomizeNftInviteWatcher() {
  yield takeEvery(sendCustomizeNftInviteStart.type, sendCustomizeNftInviteWorker)
}

function* sendCustomizeNftInviteWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    const { data: response } = yield Company.sendCustomizeNftInviteApi(data)

    yield put(sendCustomizeNftInviteSuccessful(response?.data))
    yield put(stopLoader())
    yield put(showSuccessMessage({ msg: `Sent Customize ${ TOKEN_REFER_NAME } invite successfully!` }))
  } catch (e) {
    yield put(stopLoader())
    yield put(sendCustomizeNftInviteFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default sendCustomizeNftInviteWatcher

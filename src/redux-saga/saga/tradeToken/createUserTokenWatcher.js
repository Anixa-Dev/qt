import { takeEvery, put } from 'redux-saga/effects'
import {
  userTokenRequestStart,
  userTokenRequestSuccessful,
  userTokenRequestFailure,
  startLoader,
  stopLoader,
  showErrorMessage,
  showSuccessMessage,
} from '../../redux/actions'
import TradeToken from '../../service/tradeTokenService'

function* userTokenWatcher() {
  yield takeEvery(userTokenRequestStart.type, userTokenWorker)
}

function* userTokenWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    const { data: response } = yield TradeToken.createUserToken(data)
    yield put(userTokenRequestSuccessful(response?.data))
    yield put(showSuccessMessage({ msg: 'Bought Successfully, It May Take Time To Reflect Tokens!' }))
    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(userTokenRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default userTokenWatcher

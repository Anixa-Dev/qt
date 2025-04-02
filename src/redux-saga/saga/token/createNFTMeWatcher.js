import { takeEvery, put } from 'redux-saga/effects'
import {
  createNFTMeRequestStart,
  createNFTMeRequestSuccessful,
  createNFTMeRequestFailure,
  startLoader,
  stopLoader,
  showErrorMessage,
  showSuccessMessage,
} from '../../redux/actions'
import Company from '../../service/companyService'
import { TOKEN_REFER_NAME } from '../../../utils/constants'

function* createNFTMeWatcher() {
  yield takeEvery(createNFTMeRequestStart.type, createNFTMeWorker)
}

function* createNFTMeWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    const { data: response } = yield Company.createNFTMe(data)
    yield put(createNFTMeRequestSuccessful(response?.data?.token))
    yield put(showSuccessMessage({ msg: `${ TOKEN_REFER_NAME } Me was created successfully!` }))
    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(createNFTMeRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default createNFTMeWatcher

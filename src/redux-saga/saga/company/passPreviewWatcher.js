import { takeEvery, put } from 'redux-saga/effects'
import { PREVIEW_TOKEN_TYPES } from '../../../utils/constants'
import {
  passPreviewRequestStart,
  passPreviewRequestSuccessful,
  passPreviewRequestFailure,
  startLoader,
  stopLoader,
  showErrorMessage,
  showSuccessMessage,
} from '../../redux/actions'
import Company from '../../service/companyService'

function* passPreviewWatcher() {
  yield takeEvery(passPreviewRequestStart.type, passPreviewWorker)
}

function* passPreviewWorker(action) {
  try {
    yield put(startLoader())
    const payload = action && action.payload
    const { type } = payload
    let response = {}
    if (type === PREVIEW_TOKEN_TYPES.NFTME) {
      const { data } = yield Company.nftMePassPreview(payload)
      response = data
    } else if ([
      PREVIEW_TOKEN_TYPES.CUSTOM_TOKEN,
      PREVIEW_TOKEN_TYPES.TOKEN,
      PREVIEW_TOKEN_TYPES.USER_TOKEN,
    ].includes(type)) {
      const { data } = yield Company.nftPassPreview(payload)
      response = data
    }
    yield put(passPreviewRequestSuccessful(response?.data?.applePassLocation))
    yield payload.send_mail ? put(showSuccessMessage({ msg: 'Mail Sent Successfully' }))
      : put(showSuccessMessage({ msg: 'Download link generated successfully' }))
    yield put(stopLoader())
  } catch (e) {
    yield put(stopLoader())
    yield put(passPreviewRequestFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default passPreviewWatcher

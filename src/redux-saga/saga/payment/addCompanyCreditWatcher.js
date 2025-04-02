import { takeEvery, put } from 'redux-saga/effects'

import {
  addCompanyCreditFailure,
  addCompanyCreditStart, addCompanyCreditSuccessful,
  getCompanyCreditStart, showErrorMessage,
  showSuccessMessage, startLoader, stopLoader,
} from '../../redux/actions'
import PaymentService from '../../service/paymentService'

function* addCompanyCreditWatcher() {
  yield takeEvery(addCompanyCreditStart.type, addCompanyCreditWorker)
}

function* addCompanyCreditWorker(action) {
  try {
    yield put(startLoader())
    const data = action && action.payload
    yield PaymentService.addCompanyCredit(data)
    yield put(addCompanyCreditSuccessful())
    yield put(getCompanyCreditStart())
    yield put(stopLoader())

    yield put(showSuccessMessage({ msg: 'Credits Added Successfully' }))
  } catch (e) {
    yield put(stopLoader())
    yield put(addCompanyCreditFailure(e?.response?.data))
    yield put(showErrorMessage({ msg: e?.response?.data?.message }))
  }
}

export default addCompanyCreditWatcher

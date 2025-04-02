import addCompanyWatcher from './addCompanyWatcher'
import companyInfoWatcher from './companyInfoWatcher'
import createTokenWatcher from './createTokenWatcher'
import singleTokenWatcher from './getSingleTokenWatcher'
import companyTokenWatcher from './companyTokenWatcher'
import tokenDetailWatcher from './getTokenDetailWatcher'
import updateTokenDetailWatcher from './updateTokenDetailWatcher'
import updateOldTokenDetailWatcher from './updateOldTokenDetailWatcher'

import passPreviewWatcher from './passPreviewWatcher'
import buyerEmailsWatcher from './getBuyerEmailsWatcher'
import companyCreditWatcher from './getCompanyCreditWatcher'
import approvePaypalWatcher from './approvePaypalWatcher'
import duplicateTokenWatcher from './duplicateTokenWatcher'
import archiveTokenWatcher from './archiveTokenWatcher'

const companyWatcherFunctions = [
  () => addCompanyWatcher(),
  () => companyInfoWatcher(),
  () => createTokenWatcher(),
  () => companyTokenWatcher(),
  () => singleTokenWatcher(),
  () => tokenDetailWatcher(),
  () => updateTokenDetailWatcher(),
  () => updateOldTokenDetailWatcher(),
  () => passPreviewWatcher(),
  () => buyerEmailsWatcher(),
  () => companyCreditWatcher(),
  () => approvePaypalWatcher(),
  () => duplicateTokenWatcher(),
  () => archiveTokenWatcher(),
]

export default companyWatcherFunctions

import addNewNftMeEntryCollectionWatcher from './addNewNftMeEntryCollectionWatcher'
import addNewNftMeEntryWatcher from './addNewNftMeEntryWatcher'
import createNFTMeWatcher from './createNFTMeWatcher'
import deleteNftMeWatcher from './deleteNftMeWatcher'
import getCollectionDetailWatcher from './getCollectionDetailWatcher'
import getCompanyNftMeWatcher from './getCompanyNftMeWatcher'
import getSingleNftMeTokenWatcher from './getSingleNftMeTokenDetailsWatcher'
import getTokenCompanyDetailsRequestWatcher from './getTokenCompanyDetailsWatcher'
import nftMeTokenDetailWatcher from './nftMeDetailWatcher'
import getNftMeTokenDetailWatcher from './nftMeTokenDetailWatcher'
import publishNftMeCollectionWatcher from './publishNftMeCollectionWatcher'
import resendCustomizeNftInviteWatcher from './resendCustomizeNftInviteWatcher'
import saveCustomizationValuesWatcher from './saveCustomizationValuesWatcher'
import saveNftLayoutChangesWatcher from './saveNftLayoutChangesWatcher'
import sendCustomizeNftInviteWatcher from './sendCustomizeNftInviteWatcher'
import updateNftMeCollectionWatcher from './updateNFTMeCollectionWatcher'
import uploadCSVWatcher from './uploadCSVWatcher'
import validateCustomizationOtpWatcher from './validateCustomizationOtpWatcher'
import getInviteGroupListRequestWatcher from './getInviteGroupListWatcher'
import createInviteGroupRequestWatcher from './createInviteGroupWatcher'
import sendInviteWatcher from './sendInviteWatcher'
import getUserInviteDetailWatcher from './getUserInviteDetailWatcher'
import sendTestInviteMailRequestWatcher from './sendTestInviteMailWatcher'
import sendNotificationRequestWatcher from './sendNotificationWatcher'
import addRetailerWatcher from './addRetailerWatcher'
import addPromotionCodeWatcher from './addPromotionCodeWatcher'
import retailersWatcher from './retailersWatcher'
import offersWatcher from './offersWatcher'
import addOfferWatcher from './addOfferWatcher'
import getPromotionCodesWatcher from './getPromotionCodesWatcher'
import applyPromotionCodeWatcher from './applyPromotionCodeWatcher'

const tokenWatcherFunctions = [
  () => sendNotificationRequestWatcher(),
  () => sendCustomizeNftInviteWatcher(),
  () => getTokenCompanyDetailsRequestWatcher(),
  () => validateCustomizationOtpWatcher(),
  () => saveCustomizationValuesWatcher(),
  () => createNFTMeWatcher(),
  () => getCompanyNftMeWatcher(),
  () => addNewNftMeEntryWatcher(),
  () => getNftMeTokenDetailWatcher(),
  () => getSingleNftMeTokenWatcher(),
  () => uploadCSVWatcher(),
  () => nftMeTokenDetailWatcher(),
  () => updateNftMeCollectionWatcher(),
  () => addNewNftMeEntryCollectionWatcher(),
  () => publishNftMeCollectionWatcher(),
  () => deleteNftMeWatcher(),
  () => getCollectionDetailWatcher(),
  () => resendCustomizeNftInviteWatcher(),
  () => saveNftLayoutChangesWatcher(),
  () => getInviteGroupListRequestWatcher(),
  () => getPromotionCodesWatcher(),
  () => createInviteGroupRequestWatcher(),
  () => sendInviteWatcher(),
  () => getUserInviteDetailWatcher(),
  () => sendTestInviteMailRequestWatcher(),
  () => addRetailerWatcher(),
  () => addPromotionCodeWatcher(),
  () => retailersWatcher(),
  () => addOfferWatcher(),
  () => offersWatcher(),
  () => applyPromotionCodeWatcher(),
]

export default tokenWatcherFunctions

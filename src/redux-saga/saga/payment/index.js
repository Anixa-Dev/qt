import addNewCardWatcher from './addNewCardWatcher'
import confirmPurchaseWatcher from './confirmPurchaseWatcher'
import createBankTokenWatcher from './createBankTokenWatcher'
import createPaymentIntent from './createPaymentIntentWatcher'
import deleteCardWatcher from './deleteCardWatcher'
import retrievePaymentIntentWatcher from './retrievePaymentIntentWatcher'
import addNewSquareCardWatcher from './addNewSquareCardWatcher'
import addCompanyCreditWatcher from './addCompanyCreditWatcher'
import userSubscriptionsWatcher from './userSubscriptionsWatcher'
import cancelSubscriptionWatcher from './cancelSubscriptionWatcher'
import subscriptionDetailWatcher from './subscriptionDetailWatcher'

const paymentWatcherFunctions = [
  () => createPaymentIntent(),
  () => createBankTokenWatcher(),
  () => addNewCardWatcher(),
  () => deleteCardWatcher(),
  () => confirmPurchaseWatcher(),
  () => retrievePaymentIntentWatcher(),
  () => addNewSquareCardWatcher(),
  () => addCompanyCreditWatcher(),
  () => userSubscriptionsWatcher(),
  () => cancelSubscriptionWatcher(),
  () => subscriptionDetailWatcher(),
]

export default paymentWatcherFunctions

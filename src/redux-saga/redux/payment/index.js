import createPaymentIntentReducer from './createPaymentIntentReducer'
import createBankTokenReducer from './createBankTokenReducer'
import addNewCardReducer from './addNewCardReducer'
import deleteCardReducer from './deleteCardReducer'
import confirmPurchaseReducer from './confirmPurchaseReducer'
import retrievePaymentIntentReducer from './retrievePaymentIntentReducer'
import addNewSquareCardReducer from './addNewSquareCardReducer'
import addCompanyCreditReducer from './addCompanyCreditReducer'
import userSubscriptionsReducer from './userSubscriptionsReducer'
import subscriptionDetailReducer from './subscriptionDetailReducer'

const paymentReducers = {
  createPaymentIntent: createPaymentIntentReducer,
  createBankToken: createBankTokenReducer,
  addNewCard: addNewCardReducer,
  deleteCard: deleteCardReducer,
  confirmPurchase: confirmPurchaseReducer,
  retrievePaymentIntent: retrievePaymentIntentReducer,
  addNewSquareCard: addNewSquareCardReducer,
  addCompanyCredit: addCompanyCreditReducer,
  userSubscriptions: userSubscriptionsReducer,
  subscriptionDetail: subscriptionDetailReducer,
}

export default paymentReducers
export * from './createPaymentIntentReducer'
export * from './createBankTokenReducer'
export * from './addNewCardReducer'
export * from './deleteCardReducer'
export * from './confirmPurchaseReducer'
export * from './retrievePaymentIntentReducer'
export * from './addNewSquareCardReducer'
export * from './addCompanyCreditReducer'
export * from './userSubscriptionsReducer'
export * from './subscriptionDetailReducer'

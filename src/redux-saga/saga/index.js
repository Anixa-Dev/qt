import { all } from 'redux-saga/effects'
import userWatcherFunctions from './user'
import companyWatcherFunctions from './company'
import tradeTokenWatcherFunctions from './tradeToken'
import marketplaceWatcherFunctions from './marketplace'
import walletPassWatcherFunctions from './walletPass'
import userProfileWatcherFunctions from './userProfile'
import companyProfileWatcherFunctions from './companyProfile'
import plaidWatcherFunctions from './plaid'
import paymentWatcherFunctions from './payment'
import tokenWatcherFunctions from './token'

export default function* rootSaga() {
  yield all([
    ...userWatcherFunctions.map((watcherFn) => watcherFn()),
    ...companyWatcherFunctions.map((watcherFn) => watcherFn()),
    ...tradeTokenWatcherFunctions.map((watcherFn) => watcherFn()),
    ...marketplaceWatcherFunctions.map((watcherFn) => watcherFn()),
    ...walletPassWatcherFunctions.map((watcherFn) => watcherFn()),
    ...userProfileWatcherFunctions.map((watcherFn) => watcherFn()),
    ...companyProfileWatcherFunctions.map((watcherFn) => watcherFn()),
    ...plaidWatcherFunctions.map((watcherFn) => watcherFn()),
    ...paymentWatcherFunctions.map((watcherFn) => watcherFn()),
    ...tokenWatcherFunctions.map((watcherFn) => watcherFn()),
  ])
}

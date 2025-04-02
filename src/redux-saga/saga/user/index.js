import forgotPasswordWatcher from './forgotPasswordWatcher'
import isEmailRegisteredWatcher from './isEmailRegisteredWatcher'
import loginWatcher from './loginWatcher'
import logoutWatcher from './logoutWatcher'
import resendOtpWatcher from './resendOtpWatcher'
import resetPasswordWatcher from './resetPasswordWatcher'
import signupWatcher from './signupWatcher'
import userInfoWatcher from './userInfoWatcher'
import verifyEmailWatcher from './verifyEmailWatcher'
import verifyTokenWatcher from './verifyTokenWatcher'
import editSignupWatcher from './editSignupWatcher'
import transactionsListWatcher from './transactionsListWatcher'
import transactionDetailsWatcher from './transactionDetailsWatcher'

const userWatcherFunctions = [
  () => signupWatcher(),
  () => loginWatcher(),
  () => verifyEmailWatcher(),
  () => resendOtpWatcher(),
  () => userInfoWatcher(),
  () => forgotPasswordWatcher(),
  () => verifyTokenWatcher(),
  () => resetPasswordWatcher(),
  () => isEmailRegisteredWatcher(),
  () => logoutWatcher(),
  () => editSignupWatcher(),
  () => transactionsListWatcher(),
  () => transactionDetailsWatcher(),
]

export default userWatcherFunctions

import signupReducer from './signupReducer'
import loginReducer from './loginReducer'
import verifyEmailReducer from './verifyEmailReducer'
import resendOtpReducer from './resendOtpReducer'
import userInfoReducer from './userInfoReducer'
import forgotPasswordReducer from './forgotPasswordReducer'
import verifyTokenReducer from './verifyTokenReducer'
import resetPasswordReducer from './resetPasswordReducer'
import isEmailRegisteredReducer from './isEmailRegisteredReducer'
import initialPopupsReducer from './initialPopupsReducer'
import logoutReducer from './logoutReducer'
import editSignupReducer from './editSignupReducer'
import sendTokenViaEmailReducer from './SendTokenViaEmailReducer'
import transactionsListReducer from './transactionsListReducer'
import transactionDetailsReducer from './transactionDetailsReducer'

const userReducers = {
  signup: signupReducer,
  login: loginReducer,
  verifyEmail: verifyEmailReducer,
  resendOtp: resendOtpReducer,
  userInfo: userInfoReducer,
  forgotPassword: forgotPasswordReducer,
  verifyToken: verifyTokenReducer,
  resetPassword: resetPasswordReducer,
  isEmailRegistered: isEmailRegisteredReducer,
  logout: logoutReducer,
  initialPopups: initialPopupsReducer,
  editSignup: editSignupReducer,
  sendTokenViaEmail: sendTokenViaEmailReducer,
  transactionsList: transactionsListReducer,
  transactionDetails: transactionDetailsReducer,
}

export default userReducers
export * from './signupReducer'
export * from './loginReducer'
export * from './verifyEmailReducer'
export * from './resendOtpReducer'
export * from './userInfoReducer'
export * from './forgotPasswordReducer'
export * from './verifyTokenReducer'
export * from './resetPasswordReducer'
export * from './isEmailRegisteredReducer'
export * from './logoutReducer'
export * from './initialPopupsReducer'
export * from './transactionsListReducer'
export * from './editSignupReducer'
export * from './transactionDetailsReducer'
export * from './SendTokenViaEmailReducer'

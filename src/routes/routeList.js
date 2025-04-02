import AddCompany from '../pages/addCompany'
import BuyTokenPage from '../pages/buyToken'
import CompanyLandingPage from '../pages/companyLandingPage'
import EmailVerificationPage from '../pages/emailVerification'
import EmbedTokenPage from '../pages/iframe'
import LandingPage from '../pages/landingPage'
import Login from '../pages/login'
import ResetPasswordPage from '../pages/resetPassword'
import UserLandingPage from '../pages/userLandingPage'
import VerifyToken from '../pages/verifyToken'
import ROUTE_PATHS from './routesPath'
import ValidateToken from '../pages/validateToken'
import CompanyTokens from '../pages/companyTokens'
import UserTokens from '../pages/userTokens'
import UserSettings from '../pages/userProfile'
import CompanySettings from '../pages/companyProfile'
import UserTransactionsPage from '../pages/userTransactions'
import PaymentStatus from '../pages/paymentStatus'
import TransactionDetails from '../pages/transactionDetails'
import SignupForm from '../pages/signup2/bforms/create'
import CreateNftForm from '../pages/createToken/bforms/create'
import ConfirmPurchaseNew from '../pages/confirmPurchaseNew/bforms/create'
import EditNftForm from '../pages/createToken/bforms/edit'
import EditPublishedNft from '../pages/createToken/bforms/published'
import EditAdditionalInfo from '../pages/createToken/bforms/additional'
import EditUserAdditionalInfo from '../pages/userTokenForm/bforms/edit'
import HighImpactNftPreviewPage from '../pages/highImpactNftPreview'
import AdditionalInfoPage from '../pages/additionalInfo'
import SendInvite from '../pages/send-invite'
import Offers from '../pages/offers'
import OffersToken from '../pages/offersToken'
import EditSecondaryMarketplace from '../pages/createToken/bforms/marketplace'
import PromotionCodes from '../pages/promotionCodes'
import UserSubscriptionDetail from '../pages/userSubscriptionDetail'

const routes = [
  {
    path: ROUTE_PATHS.HOME,
    component: LandingPage,
    exact: true,
  },
  {
    path: ROUTE_PATHS.USER_HOME,
    component: UserLandingPage,
    exact: true,
    auth: true,
  },
  {
    path: ROUTE_PATHS.COMPANY_HOME,
    component: CompanyLandingPage,
    exact: true,
    auth: true,
  },
  {
    path: ROUTE_PATHS.SIGNUP,
    component: SignupForm,
    exact: true,
    redirectToDashboard: true,
    noMobileFooter: true,
  },
  {
    path: ROUTE_PATHS.EMAIL_VERIFICATION,
    component: EmailVerificationPage,
    exact: true,
    noHeader: true,
    redirectToDashboard: true,
    auth: true,
    noMobileFooter: true,
  },
  {
    path: ROUTE_PATHS.LOGIN,
    component: Login,
    exact: true,
    redirectToDashboard: true,
  },
  {
    path: ROUTE_PATHS.ADD_COMPANY,
    component: AddCompany,
    exact: true,
    noHeader: true,
    auth: true,
    noMobileFooter: true,
  },
  {
    path: ROUTE_PATHS.VERIFY_TOKEN,
    component: VerifyToken,
    noHeader: true,
  },
  {
    path: ROUTE_PATHS.RESET_PASSWORD,
    component: ResetPasswordPage,
    exact: true,
    noHeader: true,
    noMobileFooter: true,
  },
  {
    path: ROUTE_PATHS.CREATE_TOKEN,
    component: CreateNftForm,
    exact: true,
    noHeader: false,
    auth: true,
  },
  {
    path: ROUTE_PATHS.EDIT_TOKEN,
    component: EditNftForm,
    exact: true,
    noHeader: false,
    auth: true,
  },
  {
    path: ROUTE_PATHS.EDIT_PUBLISHED_TOKEN,
    component: EditPublishedNft,
    exact: true,
    noHeader: false,
    auth: true,
  },
  {
    path: ROUTE_PATHS.EDIT_ADDITIONAL_INFO,
    component: EditAdditionalInfo,
    exact: true,
    noHeader: false,
    auth: true,
  },
  {
    path: ROUTE_PATHS.EDIT_SECONDARY_MARKETPLACE,
    component: EditSecondaryMarketplace,
    exact: true,
    noHeader: false,
    auth: true,
  },
  {
    path: ROUTE_PATHS.EDIT_USER_ADDITIONAL_INFO,
    component: EditUserAdditionalInfo,
    exact: true,
    noHeader: false,
    auth: true,
  },
  {
    path: ROUTE_PATHS.COMPANY_TOKENS,
    component: CompanyTokens,
    exact: true,
    auth: true,
  },
  {
    path: ROUTE_PATHS.BUY_TOKEN,
    component: BuyTokenPage,
    exact: true,
  },
  {
    path: ROUTE_PATHS.CONFIRM_PURCHASE,
    component: ConfirmPurchaseNew,
    exact: true,
    auth: true,
  },
  {
    path: ROUTE_PATHS.MY_TOKENS,
    component: UserTokens,
    exact: true,
    auth: true,
  },
  {
    path: ROUTE_PATHS.EMBED_TOKEN,
    component: EmbedTokenPage,
    exact: true,
    noHeader: true,
    noFooter: true,
  },
  {
    path: ROUTE_PATHS.VALIDATE_TOKEN,
    component: ValidateToken,
    exact: true,
  },
  {
    path: ROUTE_PATHS.OFFERS_TOKEN,
    component: OffersToken,
    exact: true,
  },
  {
    path: ROUTE_PATHS.ADDITIONAL_INFO,
    component: AdditionalInfoPage,
    exact: true,
  },
  {
    path: [
      ROUTE_PATHS.USER_PROFILE,
      ROUTE_PATHS.USER_BANKING_DETAILS,
      ROUTE_PATHS.USER_BLOCKCHAIN_DETAILS,
      ROUTE_PATHS.USER_SUBSCRIPTIONS,
    ],
    component: UserSettings,
    exact: true,
    auth: true,
  },
  {
    path: ROUTE_PATHS.USER_SUBSCRIPTION_DETAIL,
    component: UserSubscriptionDetail,
    exact: true,
  },
  {
    path: [
      ROUTE_PATHS.COMPANY_PROFILE,
      ROUTE_PATHS.COMPANY_BANKING_DETAILS,
      ROUTE_PATHS.COMPANY_PRIMARY_CONTACT,
      ROUTE_PATHS.COMPANY_CREDITS,
    ],
    component: CompanySettings,
    exact: true,
    auth: true,
  },
  {
    path: ROUTE_PATHS.USER_TRANSACTIONS,
    component: UserTransactionsPage,
    exact: true,
    auth: true,
  },
  {
    path: ROUTE_PATHS.PAYMENT_STATUS,
    component: PaymentStatus,
    exact: true,
    auth: true,
  },
  {
    path: ROUTE_PATHS.TRANSACTION_DETAILS,
    component: TransactionDetails,
    exact: true,
    auth: true,
  },
  {
    path: ROUTE_PATHS.HIGH_IMPACT_NFT_PREVIEW,
    component: HighImpactNftPreviewPage,
    exact: true,
    auth: false,
  },
  {
    path: ROUTE_PATHS.SEND_INVITE,
    component: SendInvite,
    exact: false,
  },
  {
    path: ROUTE_PATHS.PROMOTION_CODES,
    component: PromotionCodes,
    exact: false,
  },
  {
    path: ROUTE_PATHS.OFFERS,
    component: Offers,
    exact: false,
  },
]

export default routes

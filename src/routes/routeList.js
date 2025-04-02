import AddCompany from '../app/user/add-company/page'
import BuyTokenPage from '../app/token/[id]/page'
import CompanyLandingPage from '../app/company/home/page'
import EmailVerificationPage from '../app/email-verification/page'
import EmbedTokenPage from '../app/embed-token/[token_id]/page'
import LandingPage from '../app/page'
import Login from '../app/login/page'
import ResetPasswordPage from '../app/reset-password/page'
import UserLandingPage from '../app/user/home/page'
import VerifyToken from '../app/verify-token/page'
import { ROUTE_PATH_SHORTHANDS as ROUTE_PATHS } from './routesPath'
import ValidateToken from '../app/validate-token/page'
import CompanyTokens from '../app/company/tokens/page'
import UserTokens from '../app/user/tokens/page'
import UserSettings from '../app/user/profile/page'
import CompanySettings from '../app/company/profile/page'
import UserTransactionsPage from '../app/user/transactions/page'
import PaymentStatus from '../app/payment-status/page'
import TransactionDetails from '../app/transaction-details/page'
import SignupForm from '../app/signup2/bforms/create/page'
import CreateNftForm from '../app/create-token/bforms/create/page'
import ConfirmPurchaseNew from '../app/confirm-purchase/bforms/create/page'
import EditNftForm from '../app/create-token/bforms/edit/page'
import EditPublishedNft from '../app/create-token/bforms/published/page'
import EditAdditionalInfo from '../app/create-token/bforms/additional/page'
import EditUserAdditionalInfo from '../app/user/token-form/bforms/edit/page'
import HighImpactNftPreviewPage from '../app/high-impact-nft-preview/page'
import AdditionalInfoPage from '../app/additional-info/[user_token_id]/page'
import SendInvite from '../app/send-invite/page'
import Offers from '../app/offers/page'
import OffersToken from '../app/offers-token/[token_id]/page'
import EditSecondaryMarketplace from '../app/create-token/bforms/marketplace/page'
import PromotionCodes from '../app/promotion-codes/page'
import UserSubscriptionDetail from '../app/user/subscription-detail/page'
import { PURCHASE_REFER_NAME, TOKEN_REFER_NAME } from '../utils/constants'

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

export const userTabs = [
  {
    id: 1,
    label: 'Home',
    path: '/user/home',
    icon: 'home',
  },
  {
    id: 2,
    label: 'My Tokens',
    path: '/user/tokens',
    icon: 'token',
  },
  {
    id: 3,
    label: 'My Purchases',
    path: '/user/purchases',
    icon: 'shopping_cart',
  },
  {
    id: 4,
    label: 'My Profile',
    path: '/user/profile',
    icon: 'person',
  },
  {
    id: 5,
    label: 'Settings',
    path: '/user/settings',
    icon: 'settings',
  },
];

export const companyTabs = [
  {
    id: 1,
    label: 'Home',
    path: '/company/home',
    icon: 'home',
  },
  {
    id: 2,
    label: 'Tokens',
    path: '/company/tokens',
    icon: 'token',
  },
  {
    id: 3,
    label: 'Purchases',
    path: '/company/purchases',
    icon: 'shopping_cart',
  },
  {
    id: 4,
    label: 'Profile',
    path: '/company/profile',
    icon: 'business',
  },
  {
    id: 5,
    label: 'Settings',
    path: '/company/settings',
    icon: 'settings',
  },
];

export const headerUserTabs = [
  {
    id: 1,
    label: 'Home',
    path: '/user/home',
  },
  {
    id: 2,
    label: 'My Tokens',
    path: '/user/tokens',
  },
  {
    id: 3,
    label: 'My Purchases',
    path: '/user/purchases',
  },
  {
    id: 4,
    label: 'My Profile',
    path: '/user/profile',
  },
  {
    id: 5,
    label: 'Settings',
    path: '/user/settings',
  },
];

export const headerCompanyTabs = [
  {
    id: 1,
    label: 'Home',
    path: '/company/home',
  },
  {
    id: 2,
    label: 'Tokens',
    path: '/company/tokens',
  },
  {
    id: 3,
    label: 'Purchases',
    path: '/company/purchases',
  },
  {
    id: 4,
    label: 'Profile',
    path: '/company/profile',
  },
  {
    id: 5,
    label: 'Settings',
    path: '/company/settings',
  },
];

export const publicRoutes = [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/login',
    label: 'Login',
  },
  {
    path: '/signup',
    label: 'Sign Up',
  },
  {
    path: '/reset-password',
    label: 'Reset Password',
  },
  {
    path: '/email-verification',
    label: 'Email Verification',
  },
  {
    path: '/verify-token/[token]',
    label: 'Verify Token',
  },
];

export const protectedRoutes = [
  {
    path: '/user/home',
    label: 'User Dashboard',
  },
  {
    path: '/user/tokens',
    label: 'My Tokens',
  },
  {
    path: '/user/purchases',
    label: 'My Purchases',
  },
  {
    path: '/user/profile',
    label: 'My Profile',
  },
  {
    path: '/user/settings',
    label: 'Settings',
  },
  {
    path: '/company/home',
    label: 'Company Dashboard',
  },
  {
    path: '/company/tokens',
    label: 'Tokens',
  },
  {
    path: '/company/purchases',
    label: 'Purchases',
  },
  {
    path: '/company/profile',
    label: 'Company Profile',
  },
  {
    path: '/company/settings',
    label: 'Settings',
  },
  {
    path: '/add-company',
    label: 'Add Company',
  },
  {
    path: '/additional-info',
    label: 'Additional Info',
  },
  {
    path: '/buy-token',
    label: 'Buy Token',
  },
  {
    path: '/embed-token/[token_id]',
    label: 'Embed Token',
  },
];

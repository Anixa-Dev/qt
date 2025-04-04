export const ROUTE_PATH_SHORTHANDS = {
  CONFIRM_PURCHASE: '/user/confirm-purchase',
  BUY_TOKEN: '/token',
  EMBED_TOKEN: '/embed-token',
  COMPANY_MARKETPLACE: '/marketplace',
  EDIT_TOKEN: '/company/edit-token',
  EDIT_PUBLISHED_TOKEN: '/company/edit-published-token',
  EDIT_ADDITIONAL_INFO: '/company/edit-experience',
  EDIT_SECONDARY_MARKETPLACE: '/company/edit-secondary-marketplace',
  EDIT_USER_ADDITIONAL_INFO: '/user/edit-experience',
  VALIDATE_TOKEN: '/validate-token',
  OFFERS_TOKEN: '/offers',
  TRANSACTION_DETAILS: '/user/transactions',
  UPLOAD_CKIMAGE: '/token/upload-ckimage',
  SEND_INVITE: '/company/token/send-invite',
  PROMOTION_CODES: '/company/token/promotion-codes',
  OFFERS: '/company/token/offers',
  ADDITIONAL_INFO: '/experience',
  USER_SUBSCRIPTIONS: '/user/subscriptions',
}

export const ROUTE_PATHS = {
  HOME: '/',
  USER_HOME: '/user/home',
  COMPANY_HOME: '/company/home',
  SIGNUP: '/signup',
  EDIT_SIGNUP: '/edit-signup',
  EMAIL_VERIFICATION: '/email-verification',
  LOGIN: '/login',
  ADD_COMPANY: '/user/add-company',
  VERIFY_TOKEN: '/verify-token/:token',
  RESET_PASSWORD: '/reset-password',
  CREATE_TOKEN: '/company/create-token',
  EDIT_TOKEN: '/company/edit-token/:token_id',
  EDIT_PUBLISHED_TOKEN: `${ ROUTE_PATH_SHORTHANDS.EDIT_PUBLISHED_TOKEN }/:token_id`,
  EDIT_ADDITIONAL_INFO: `${ ROUTE_PATH_SHORTHANDS.EDIT_ADDITIONAL_INFO }/:token_id`,
  EDIT_SECONDARY_MARKETPLACE: `${ ROUTE_PATH_SHORTHANDS.EDIT_SECONDARY_MARKETPLACE }/:token_id`,
  EDIT_USER_ADDITIONAL_INFO: `${ ROUTE_PATH_SHORTHANDS.EDIT_USER_ADDITIONAL_INFO }/:token_id`,
  COMPANY_TOKENS: '/company/tokens',
  BUY_TOKEN: `${ ROUTE_PATH_SHORTHANDS.BUY_TOKEN }/:id`,
  CONFIRM_PURCHASE: `${ ROUTE_PATH_SHORTHANDS.CONFIRM_PURCHASE }/:purchase_id`,
  MY_TOKENS: '/user/my-tokens',
  EMBED_TOKEN: `${ ROUTE_PATH_SHORTHANDS.EMBED_TOKEN }/:token_id`,
  MARKETPLACE: '/marketplace',
  VALIDATE_TOKEN: `${ ROUTE_PATH_SHORTHANDS.VALIDATE_TOKEN }/:user_token_id`,
  OFFERS_TOKEN: `${ ROUTE_PATH_SHORTHANDS.OFFERS_TOKEN }/:user_token_id`,
  ADDITIONAL_INFO: `${ ROUTE_PATH_SHORTHANDS.ADDITIONAL_INFO }/:user_token_id`,
  USER_PROFILE: '/user/profile',
  USER_BANKING_DETAILS: '/user/banking-details',
  USER_BLOCKCHAIN_DETAILS: '/user/blockchain-details',
  USER_SUBSCRIPTIONS: `${ ROUTE_PATH_SHORTHANDS.USER_SUBSCRIPTIONS }`,
  USER_SUBSCRIPTION_DETAIL: `${ ROUTE_PATH_SHORTHANDS.USER_SUBSCRIPTIONS }/:subscription_id`,
  COMPANY_PROFILE: '/company-profile',
  COMPANY_BANKING_DETAILS: '/company/banking-details',
  COMPANY_PRIMARY_CONTACT: '/company/primary-contact',
  COMPANY_CREDITS: '/company/credits',
  USER_TRANSACTIONS: '/user/transactions',
  PAYMENT_STATUS: '/payment-status',
  TRANSACTION_DETAILS: '/user/transactions/:user_payment_id',
  HIGH_IMPACT_NFT_PREVIEW: '/token/high-impact/nft-preview/:token_id/:type',
  SEND_INVITE: `${ ROUTE_PATH_SHORTHANDS.SEND_INVITE }/:id`,
  PROMOTION_CODES: `${ ROUTE_PATH_SHORTHANDS.PROMOTION_CODES }/:id`,
  OFFERS: `${ ROUTE_PATH_SHORTHANDS.OFFERS }/:id`,
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  SETTINGS: '/settings',
  PURCHASE: '/purchase',
  TOKEN: '/token'
}

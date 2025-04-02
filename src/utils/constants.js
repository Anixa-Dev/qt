/* eslint-disable max-len */
import { v4 as uuidv4 } from 'uuid';

export const TOKEN_REFER_NAME = 'Project';
export const PURCHASE_REFER_NAME = 'Purchase';
export const FEATURED_IMAGE_REFER_NAME = 'Digital Collectible';
export const ADDITIONAL_INFO_REFER_NAME = 'Digital Experience';

const CONSTANTS = {
  STRIPE_PAYMENT_SUCCEEDED: 'succeeded',
  SQUARE_PAYMENT_SUCCEEDED: 'COMPLETED',
  PAYMENT_FAILED: 'canceled',
  BLOCKCHAIN_TXN_SUCCESS: 'confirmed',
  BLOCKCHAIN_TXN_FAILED: 'failed',
  BLOCKCHAIN_TXN_PENDING: 'pending',
  REFUND_SUCCESS: 'confirmed',
  COUNTERTEN_ADMIN_WALLET_ADDRESS: 'CounterTEN Admin',
  USER_NOT_FOUND_MESSAGE: 'User not found',
  INVALID_PAYMENT_DETAIL: 'Invalid Payment details',
};

export const ERROR_CODES = {
  INVITATION_MAIL_INVALID: 'invitation_mail_invalid',
};

export const PASS_TYPE = {
  WITH_BG: 'with_bg',
  STRIP_WITH_BG: 'strip_with_bg',
  WITHOUT_BG: 'without_bg',
  STRIP_WITHOUT_BG: 'strip_without_bg',
};

export const BG_TYPE = {
  BG_TYPE_IMAGE: 'bg_image',
  BG_TYPE_COLOR: 'solid_color',
};

export const PAYMENT_PROCESSORS = {
  STRIPE: 'stripe',
  SQUARE: 'square',
};

export const COMPANY_LOGO_TYPES = {
  COUNTERTEN_LOGO: 'counterten_logo',
  COMPANY_LOGO: 'company_logo',
  NEW_LOGO: 'new_logo',
};

export const HIGH_IMPACT_CARD_BG_TYPES = {
  GRADIENT: 'gradient',
  IMAGE: 'image',
};

export const HIGH_IMPACT_CARD_BORDER_TYPES = {
  WITH_BORDER: 'with_border',
  WITHOUT_BORDER: 'without_border',
};

export const TOKEN_ICON_TYPES = {
  FA: 'fontawesome',
  CUSTOM: 'custom',
};

export const APPRECIATION_VALUES = {
  FIXED_PRICE: 'none',
  AVAILABILITY_BASED: 'availability',
  TIME_BASED: 'time',
};

export const PAYMENT_MODES = {
  ONETIME: 'onetime',
  RECURRING: 'recurring',
};

export const RECURRING_BILLING_PERIODS = {
  DAILY: 'daily', // Billed every day
  WEEKLY: 'weekly', // Billed every week
  MONTHLY: 'monthly', // Billed every month
  QUARTERLY: 'quarterly', // Billed every three months
  SEMIANNUAL: 'semiannual', // Billed every six months
  ANNUAL: 'annual', // Billed every year
};

export const CUSTOM_BILLING_TYPES = {
  DAYS: 'day',
  WEEKS: 'week',
  MONTHS: 'month',
  YEARS: 'year',
};

export const BILLING_PERIODS_MAPS = {
  [CUSTOM_BILLING_TYPES.DAYS]: RECURRING_BILLING_PERIODS.DAILY,
  [CUSTOM_BILLING_TYPES.WEEKS]: RECURRING_BILLING_PERIODS.WEEKLY,
  [CUSTOM_BILLING_TYPES.MONTHS]: RECURRING_BILLING_PERIODS.MONTHLY,
  [CUSTOM_BILLING_TYPES.YEARS]: RECURRING_BILLING_PERIODS.ANNUAL,
};

export const ADDITIONAL_FILE_TYPES = {
  LINK: 'link',
  FILE: 'file',
};

export const PROMOTION_CODE_TYPES = {
  CURRENCY: 'currency',
  PERCENTAGE: 'percentage',
};

export const RETAILER_TYPE = {
  BAR: 'bar',
  EVENT_VENUE: 'event-venue',
  RESTAURANT: 'restaurant',
  RETAIL_STORE: 'retail-store',
  SCHOOL: 'school',
};

export const OFFER_VENDORS = {
  TOAST: 'toast',
};

export const OFFER_TYPES = {
  GIFT_CARD: 'gift_card',
};

export const PREVIEW_TOKEN_TYPES = {
  TOKEN: 'token',
  NFTME: 'nftMe',
  USER_TOKEN: 'userToken',
  CUSTOM_TOKEN: 'customToken',
};

export const NFT_ME_CONSTANTS = {
  TOKEN: 'nftMe',
  COLLECTION: 'nftMeCollection',
};

export const PASSWORD_VALIDATION = {
  REGEX: /^(?=.*[a-z])(?=.*[A-Z])/,
  MESSAGE: 'Password must contain at least 8 characters, with at least 1 upper case and 1 lower case',
};

export const CARD_DIMENSIONS = {
  DESKTOP_WIDTH: 400,
  MOBILE_WIDTH: 340,
};

export const LAYOUT_IMAGES = {
  QRCODE: 'https://media.istockphoto.com/id/828088276/vector/qr-code-illustration.jpg?s=612x612&w=0&k=20&c=FnA7agr57XpFi081ZT5sEmxhLytMBlK4vzdQxt8A70M=',
  DEFAULT_PORTRAIT: 'https://c10-token-icons.s3.amazonaws.com/layout_portrait_image_8fb484eb-0ab6-4d81-964d-35553c6a70c0.png?1688642911327',
};

export const NOTIFICATION_MESSAGE = {
  MAX_LENGTH: 178,
};

export const getEmbedTokenIframe = ({ tokenId }) => {
  const embedToken = `<iframe class="counterTENContainer"
  style="border-style: none; min-width: 500px; min-height:400px; overflow:auto;"
  src=${window.location.origin}/embed-token/${tokenId} title='embed token'>
</iframe>

<style>
  @media screen and (max-width: 600px) {
    .counterTENContainer { height: 100vh !important; }
  }
</style>
`;
  return embedToken;
};

export const InitialSecondaryMarketplaceRoyalty = {
  counterten: {
    id: uuidv4(),
    name: 'CounterTEN transaction fee',
    email: '',
    paypal_username: '',
    company: '',
    percentage: 10,
    editable: false,
    deletable: false,
    type: 'counterten',
  },
  currentOwner: {
    id: uuidv4(),
    name: `${TOKEN_REFER_NAME} Owner`,
    email: '',
    paypal_username: '',
    company: '',
    percentage: 90,
    editable: false,
    deletable: false,
    type: 'current_owner',
  },
};

export const initialRoyaltyList = [
  InitialSecondaryMarketplaceRoyalty.counterten,
  InitialSecondaryMarketplaceRoyalty.currentOwner,
];

export const MOBILE_OS = {
  IOS: 'iOS',
  ANDROID: 'Android',
  UNKNOWN: 'Unknown',
};

export const CANCELLATION_TYPES = {
  IMMEDIATELY: 'immediately',
  PERIOD_END: 'period_end',
};

export default CONSTANTS; 
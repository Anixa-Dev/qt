import { Metamask, Binance } from '@/assets';
import { TOKEN_REFER_NAME } from './constants';

export const tokenTypeSelectValues = [
  {
    id: 1,
    label: 'Common',
    value: 'common',
  },
  {
    id: 2,
    label: 'Rare',
    value: 'rare',
  },
  {
    id: 3,
    label: 'Legendary',
    value: 'legendary',
  },
  {
    id: 4,
    label: 'Ultimate',
    value: 'ultimate',
  },
];

const collectibleTypes = [
  'Digital Card',
  'Digital Collectible',
  'Identity Card',
  'Digital Passport',
  'Event Ticket',
  'Experience',
  'Loyalty Card',
  'Fan Experience Card',
  'Retail Card',
  'VIP Card',
  'Membership Card',
  'Access Card',
];

export const collectibleTypeValues = collectibleTypes.sort().map((type, idx) => ({
  id: idx + 1,
  value: type,
  label: type,
}));

export const blockchainWalletSelectValues = [
  {
    id: 1,
    label: 'Metamask',
    value: 'metamask',
    icon: Metamask,
  },
  {
    id: 2,
    label: 'Binance',
    value: 'binance',
    icon: Binance,
  },
];

export const transactionTypeSelectValues = [
  {
    id: 1,
    label: 'Mint',
    value: 'mint',
  },
  {
    id: 2,
    label: 'Transfer',
    value: 'transfer',
  },
  {
    id: 3,
    label: 'Marketplace',
    value: 'approval',
  },
];

export const transactionTypeDesciptionValues = [
  {
    id: 1,
    label: `${TOKEN_REFER_NAME} Bought From Sale`,
    value: 'mint',
  },
  {
    id: 2,
    label: `${TOKEN_REFER_NAME} Bought From Marketplace`,
    value: 'transfer',
  },
  {
    id: 3,
    label: `${TOKEN_REFER_NAME} Listed For Sale On Marketplace`,
    value: 'approval',
  },
];

export const txnStatusTooltipValues = [
  {
    id: 1,
    label: 'Transaction has been Confirmed',
    value: 'confirmed',
  },
  {
    id: 2,
    label: 'Transaction has Failed',
    value: 'failed',
  },
  {
    id: 3,
    label: 'Transaction is being proccessed. This may take some time🕛',
    value: 'pending',
  },
];

export const txnStatusValues = [
  {
    id: 1,
    label: 'Confirmed',
    value: 'confirmed',
  },
  {
    id: 2,
    label: 'It may take some time 🕛',
    value: 'failed',
  },
  {
    id: 3,
    label: 'Minting',
    value: 'pending',
  },
  {
    id: 4,
    label: 'In Queue',
    value: 'inqueue',
  },
];

export const addCompanyStepValues = [
  {
    id: 1,
    label: 'Add Company',
    value: 'add_company',
  },
  {
    id: 2,
    label: 'Add Location',
    value: 'add_location',
  },
  {
    id: 3,
    label: 'Add Banking Details',
    value: 'add_banking_details',
  },
  {
    id: 4,
    label: 'Terms and Conditions',
    value: 'terms_and_conditions',
  },
];

export const accountTypeSelectValues = [
  {
    id: 1,
    label: 'Checking Account',
    value: 'checking',
  },
  {
    id: 2,
    label: 'Saving Account',
    value: 'savings',
  },
];

export const addCompanySelectValues = [
  {
    id: 1,
    label: 'Sole Proprietorship',
    value: 'Sole Proprietorship',
  },
  {
    id: 2,
    label: 'Partnerships',
    value: 'Partnerships',
  },
  {
    id: 3,
    label: 'Corporation',
    value: 'Corporation',
  },
  {
    id: 4,
    label: 'Limited Liability Company',
    value: 'Limited Liability Company',
  },
];

export const tokenIconOptions = [
  {
    id: 1,
    label: 'Icon',
    value: 'fontawesome',
  },
  {
    id: 2,
    label: 'Image',
    value: 'custom',
  },
];

export const nftbackgroundOptions = [
  {
    id: 1,
    label: 'Gradient',
    value: 'gradient',
  },
  {
    id: 2,
    label: 'Image',
    value: 'image',
  },
];

export const nftBorderOptions = [
  {
    id: 1,
    label: 'With Border',
    value: 'with_border',
  },
  {
    id: 2,
    label: 'Without Border',
    value: 'without_border',
  },
];

export const nftHighResImageOptions = [
  {
    id: 1,
    label: 'Yes',
    value: 'with_image',
  },
  {
    id: 2,
    label: 'No',
    value: 'without_image',
  },
];

export const companyWithLogoOptions = [
  {
    id: 1,
    label: 'Use Company Logo',
    value: 'company_logo',
  },
  {
    id: 2,
    label: 'Use CounterTEN Logo',
    value: 'counterten_logo',
  },
  {
    id: 3,
    label: 'Upload New Logo',
    value: 'new_logo',
  },
  {
    id: 4,
    label: `Company Logo On ${TOKEN_REFER_NAME}`,
    value: 'logo_on_nft',
  },
];

export const walletOptions = [
  {
    id: 1,
    label: 'Ethereum',
    value: 'eth',
  },
  {
    id: 2,
    label: 'Solana',
    value: 'sol',
  },
];

export const stripePaymentStatusValues = [
  {
    id: 1,
    label: 'Confirmed',
    value: 'succeeded',
  },
  {
    id: 2,
    label: 'Failed',
    value: 'canceled',
  },
  {
    id: 3,
    label: 'Processing',
    value: 'processing',
  },
  {
    id: 4,
    label: 'Authentication Failed',
    value: 'requires_payment_method',
  },
  {
    id: 5,
    label: 'Requires confirmation',
    value: 'requires_confirmation',
  },
  {
    id: 6,
    label: 'Authentication Pending',
    value: 'requires_action',
  },
  {
    id: 7,
    label: 'Requires capture',
    value: 'requires_capture',
  },
];

export const squarePaymentStatusValues = [
  {
    id: 1,
    label: 'Confirmed',
    value: 'COMPLETED',
  },
  {
    id: 2,
    label: 'Failed',
    value: 'FAILED',
  },
];

export const passTypes = [
  {
    id: 1,
    label: 'Thumbnail / Icon with blurred background image',
    value: 'with_bg',
    image: 'https://static-images-counterten.s3.us-east-2.amazonaws.com/blurred-bg.jpeg',
  },
  {
    id: 2,
    label: 'Panoramic Photo / Icon with solid color background',
    value: 'strip_with_bg',
    image: 'https://static-images-counterten.s3.us-east-2.amazonaws.com/colored-bg.jpeg',
  },
];

export const rookieCardsTypes = [
  {
    id: 1,
    value: 'layout1',
    label: '',
    image: 'https://static-images-counterten.s3.us-east-2.amazonaws.com/nft-1.jpg',
  },
];

export const additionalFileTypes = [
  {
    id: 1,
    label: 'Upload a File',
    value: 'file',
  },
  {
    id: 2,
    label: 'Enter File Link',
    value: 'link',
  },
];

export const getQuantityOptions = ({ maxQuantity }) => {
  if (maxQuantity > 0) {
    const quantityOptions = [...Array(Number(maxQuantity))].map((_, idx) => ({
      id: idx + 1,
      label: `${idx + 1}`,
      value: idx + 1,
    }));
    return quantityOptions;
  }
  return [];
};

export const SECONDARY_MARKET_DATE_OPTIONS_VALUES = {
  ALWAYS: 'always',
  IMMEDIATELY: 'immediately',
  AFTER_SALE: 'after_sale',
  AFTER_PURCHASED: 'after_purchased',
  BEFORE_SALE: 'before_sale',
  ON: 'on',
};

export const SECONDARY_MARKET_PRICING_LIMIT_VALUES = {
  NO_LIMIT: 'no_limit',
  NO_MORE_THAN: 'no_more_than',
  NO_LESS_THAN: 'no_less_than',
  AT_FACE_VALUE: 'at_face_value',
  AT_OR_BELOW: 'at_or_below',
  AT_OR_ABOVE: 'at_or_above',
};

export const SECONDARY_MARKET_PAYMENT_TYPE_VALUES = {
  PAYPAL: 'paypal',
  OTHER: 'other',
};

export const smEnabledCriteriaOptions = [
  {
    id: 1,
    label: 'Immediately',
    value: SECONDARY_MARKET_DATE_OPTIONS_VALUES.IMMEDIATELY,
  },
  {
    id: 2,
    label: `After ${TOKEN_REFER_NAME} goes on sale`,
    value: SECONDARY_MARKET_DATE_OPTIONS_VALUES.AFTER_SALE,
  },
  {
    id: 3,
    label: `After ${TOKEN_REFER_NAME} is purchased`,
    value: SECONDARY_MARKET_DATE_OPTIONS_VALUES.AFTER_PURCHASED,
  },
  {
    id: 4,
    label: 'On',
    value: SECONDARY_MARKET_DATE_OPTIONS_VALUES.ON,
  },
];

export const smDisabledCriteriaOptions = [
  {
    id: 1,
    label: 'Always enabled',
    value: SECONDARY_MARKET_DATE_OPTIONS_VALUES.ALWAYS,
  },
  {
    id: 2,
    label: 'Before the sale ends',
    value: SECONDARY_MARKET_DATE_OPTIONS_VALUES.BEFORE_SALE,
  },
  {
    id: 3,
    label: 'On',
    value: SECONDARY_MARKET_DATE_OPTIONS_VALUES.ON,
  },
];

export const smCriteriaTimeOptions = [
  {
    id: 1,
    label: 'Hours',
    value: 'hours',
  },
  {
    id: 2,
    label: 'Days',
    value: 'days',
  },
  {
    id: 3,
    label: 'Weeks',
    value: 'weeks',
  },
  {
    id: 4,
    label: 'Months',
    value: 'months',
  },
];

export const smUpperPricingLimitOptions = [
  {
    id: 1,
    label: 'No Limit',
    value: SECONDARY_MARKET_PRICING_LIMIT_VALUES.NO_LIMIT,
  },
  {
    id: 2,
    label: 'Maximum allowed price',
    value: SECONDARY_MARKET_PRICING_LIMIT_VALUES.NO_MORE_THAN,
  },
  {
    id: 3,
    label: `${TOKEN_REFER_NAME} must be sold at face value`,
    value: SECONDARY_MARKET_PRICING_LIMIT_VALUES.AT_FACE_VALUE,
  },
];

export const smLowerPricingLimitOptions = [
  {
    id: 1,
    label: 'No Limit',
    value: SECONDARY_MARKET_PRICING_LIMIT_VALUES.NO_LIMIT,
  },
  {
    id: 2,
    label: 'Minimum allowed price',
    value: SECONDARY_MARKET_PRICING_LIMIT_VALUES.NO_LESS_THAN,
  },
];

export const smRoyaltyPaymentTypesOptions = [
  {
    id: 1,
    label: 'PayPal',
    value: SECONDARY_MARKET_PAYMENT_TYPE_VALUES.PAYPAL,
  },
];

export const smPricingLimitFactors = [
  {
    id: 1,
    label: 'Currency',
    value: 'currency',
  },
  {
    id: 2,
    label: 'Percentage',
    value: 'percentage',
  },
];

export const smPaymentTypes = [
  {
    id: 1,
    label: 'Paypal',
    value: SECONDARY_MARKET_PAYMENT_TYPE_VALUES.PAYPAL,
  },
];

export const SCAN_RESTRICTION_VALUES = {
  FIRST_GREEN_REST_RED: 'first_green_rest_red',
  FIRST_GREEN_REST_YELLOW: 'first_green_rest_yellow',
  ALL_GREEN: 'all_green',
};

export const scanRestrictionOptions = [
  {
    id: 1,
    label: 'First Scan: Green, Subsequent Scans: Red',
    value: SCAN_RESTRICTION_VALUES.FIRST_GREEN_REST_RED,
  },
  {
    id: 2,
    label: 'First Scan: Green, Subsequent Scans: Yellow',
    value: SCAN_RESTRICTION_VALUES.FIRST_GREEN_REST_YELLOW,
  },
  {
    id: 3,
    label: 'All Scans: Green',
    value: SCAN_RESTRICTION_VALUES.ALL_GREEN,
  },
];

export const appreciationSelectValues = [
  {
    id: 1,
    label: 'Yes',
    value: true,
  },
  {
    id: 2,
    label: 'No',
    value: false,
  },
];

export const currencySelectValues = [
  {
    id: 1,
    label: 'USD',
    value: 'USD',
  },
  {
    id: 2,
    label: 'EUR',
    value: 'EUR',
  },
  {
    id: 3,
    label: 'GBP',
    value: 'GBP',
  },
]; 
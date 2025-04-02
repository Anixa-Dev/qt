const config = {
  APP_BASE_URL: process.env.NEXT_PUBLIC_APP_BASE_URL || 'http://dev1.qlctr.com',
  PREVIEW_PASS_URL: process.env.NEXT_PUBLIC_PREVIEW_PASS_URL || 'http://localhost:6000',
  NODE_ENV: process.env.NODE_ENV || 'development',
  NODE_BASE_URL: process.env.NEXT_PUBLIC_NODE_BASE_URL || 'http://localhost:4000/api/v1',
  COUNTER_TEN_LOGO: process.env.NEXT_PUBLIC_COUNTER_TEN_LOGO,
  COUNTER_TEN_LOGO_LIGHT: process.env.NEXT_PUBLIC_COUNTER_TEN_LOGO_LIGHT,
  STRIPE_KEY: process.env.NEXT_PUBLIC_STRIPE_KEY,
  SOLANA_CLUSTER: process.env.NEXT_PUBLIC_SOLANA_CLUSTER || 'devnet',
  MAX_PRICE: process.env.NEXT_PUBLIC_MAX_PRICE || 5000,
  MAX_TOKEN: process.env.NEXT_PUBLIC_MAX_TOKEN || 100000,
  PUBLIC_WALLET_ADDRESS: process.env.NEXT_PUBLIC_COUNTERTEN_PUBLIC_WALLET_ADDRESS,
  MIN_NFT_PRICE: process.env.NEXT_PUBLIC_MIN_NFT_PRICE || 0,
  USE_SQUARE_PAYMENT_GATEWAY: process.env.NEXT_PUBLIC_USE_SQUARE_PAYMENT_GATEWAY,
  SQUARE_APPLICATION_ID: process.env.NEXT_PUBLIC_SQUARE_APPLICATION_ID,
  SQUARE_LOCATION_ID: process.env.NEXT_PUBLIC_SQUARE_LOCATION_ID,
  SQUARE_ENVIRONMENT: process.env.NEXT_PUBLIC_SQUARE_ENVIRONMENT,
  PAYPAL_CLIENT_ID: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
  SALE_TOKEN_CREDIT_THRESHOLD: process.env.NEXT_PUBLIC_SALE_TOKEN_CREDIT_THRESHOLD,
  LOG_ROCKET_ID: process.env.NEXT_PUBLIC_LOG_ROCKET_ID,
};

// Validate required environment variables
const requiredEnvVars = [
  'NEXT_PUBLIC_NODE_BASE_URL',
  'NEXT_PUBLIC_STRIPE_KEY',
  'NEXT_PUBLIC_COUNTERTEN_PUBLIC_WALLET_ADDRESS',
];

requiredEnvVars.forEach((envVar) => {
  if (!process.env[envVar]) {
    console.warn(`Warning: ${envVar} is not set in environment variables`);
  }
});

export default config; 
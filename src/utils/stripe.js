import { loadStripe } from '@stripe/stripe-js';

let stripePromise = null;

export const getStripe = async () => {
  if (typeof window === 'undefined') {
    return null;
  }
  
  if (!stripePromise) {
    try {
      // Ensure we have the publishable key
      const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
      if (!publishableKey) {
        console.error(
          'Stripe publishable key is not defined. Please add NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY to your .env file. ' +
          'You can find your publishable key in the Stripe Dashboard under Developers → API keys.'
        );
        return null;
      }
      
      // Load Stripe with error handling
      stripePromise = await loadStripe(publishableKey);
      if (!stripePromise) {
        console.error('Failed to initialize Stripe. Please check your publishable key and try again.');
        return null;
      }
    } catch (error) {
      console.error('Error initializing Stripe:', error);
      return null;
    }
  }
  
  return stripePromise;
};

// Initialize Stripe only when needed
export const initStripe = async () => {
  try {
    return await getStripe();
  } catch (error) {
    console.error('Error in initStripe:', error);
    return null;
  }
}; 
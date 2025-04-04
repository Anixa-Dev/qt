"use client";

import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Inter } from 'next/font/google';
import { Provider } from 'react-redux';
import { Elements } from '@stripe/react-stripe-js';
import LogRocket from 'logrocket';
import theme from '@/themes/default';
import store from '@/redux-saga/store';
import config from '@/utils/config';
import Routes from "@/routes";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getStripe } from '@/utils/stripe';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

// Client-only app content component
const AppContent = dynamic(() => Promise.resolve(({ children, isLoading, stripePromise }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  if (stripePromise) {
    return (
      <Elements stripe={stripePromise}>
        <Header />
        <main>{children}</main>
        <Footer />
      </Elements>
    );
  }
  
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}), { ssr: false });

export default function RootLayout({ children }) {
  const [stripePromise, setStripePromise] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Initialize LogRocket in production
        if (config.NODE_ENV === 'production') {
          LogRocket.init(config.LOG_ROCKET_ID);
        }

        // Initialize Stripe
        const stripe = await getStripe();
        setStripePromise(stripe);
      } catch (error) {
        console.error('Error initializing app:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeApp();
  }, []);

  return (
    <html lang="en" className={inter.variable}>
      <body suppressHydrationWarning={true}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Provider store={store}>
              <AppContent isLoading={isLoading} stripePromise={stripePromise}>
                {children}
              </AppContent>
            </Provider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

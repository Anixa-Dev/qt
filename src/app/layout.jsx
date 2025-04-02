'use client';

import React, { useEffect } from 'react';
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Inter } from 'next/font/google';
import { Provider } from 'react-redux';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import LogRocket from 'logrocket';
import theme from '@/themes/default';
import store from '@/redux-saga/store';
import config from '@/utils/config';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
});

const stripePromise = loadStripe(config.STRIPE_KEY);

export default function RootLayout({ children }) {
  useEffect(() => {
    if (config.NODE_ENV === 'production') {
      LogRocket.init(config.LOG_ROCKET_ID);
    }
  }, []);

  return (
    <html lang="en" className={inter.variable}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Elements stripe={stripePromise}>
              <Provider store={store}>
                {children}
              </Provider>
            </Elements>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

'use client';

import { createTheme } from '@mui/material/styles';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
});

export const colors = {
  disabledGray: '#eeeeee',
  guardsmanRed: '#B80000',
  darkRed: '#E00000',
  blackBase: '#000000',
  darkGrey: '#555555',
  midGrey: '#666666',
  blackRussian: '#252733',
  red: '#FF0000',
  black: '#212127',
  white: '#FFFFFF',
  yellow: '#F6BE41',
  darkYellow: '#C09D47',
  ghostWhite: '#f8f9ff',
  footerGray: '#2B2D3A',
  helperGray: '#595959',
  lightGray: '#6B7280',
  lightBlue: '#6ac4b4',
  errorRed: '#941100',
  snow: '#fbfbfb',
  sonicSilver: '#767676',
  eerieBlack: '#1A1A1A',
  silverSand: '#C4C4C4',
  dimGray: '#6B6873',
  philippineSilver: '#b0aeb3',
  alabaster: '#F9F9F9',
  linkBlue: '#1565d8',
  priceBlack: '#2b2d3a',
  tabBlue: '#2b6ed3',
  doveGray: '#6d6d6d',
  saleButtonGreen: '#18dc7e',
  lightPink: '#fdf5e5',
  lighterGray: '#232323',
  mobileListGray: '#B0AEB3',
  divider: '#e5e5e5',
  lightSilver: '#c2c2ce',
  green: '#6bd988',
  darkGreen: '#06402B',
  lighterBlue: '#e1eef8',
  dragBg: '#fafafa',
  border: '#dedede',
  none: 'transparent',
  successGreen: '#00FF00',
  mintingBlue: '#59bfff',
  reMintingRed: '#f69697',
  infoGray: '#efefef',
  infoColor: '#333333',
  infoBorder: '#cccccc',
  gradientRookie1: '#000000',
  gradientRookie2: '#efefef',
  gradientRookie3: '#000000',
  brightYellow: '#fec23a',
  oceanBlue: '#001028',
  validCollectibleGreen: '#126715',
  validCollectibleYellow: '#FFC33A',
  validCollectibleRed: '#9E0012',
};

const theme = createTheme({
  palette: {
    primary: {
      main: colors.yellow,
    },
    secondary: {
      main: colors.green,
    },
    error: {
      main: colors.errorRed,
    },
  },
  colors: {
    ...colors,
  },
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontFamily: 'Inter',
      fontWeight: 600,
    },
    h2: {
      fontFamily: 'Inter',
      fontWeight: 600,
    },
    h3: {
      fontFamily: 'Inter',
      fontWeight: 600,
    },
    h4: {
      fontFamily: 'Inter',
      fontWeight: 600,
    },
    h5: {
      fontFamily: 'Inter',
      fontWeight: 600,
    },
    h6: {
      fontFamily: 'Inter',
      fontWeight: 600,
    },
    body1: {
      fontFamily: 'Inter',
      fontWeight: 400,
    },
    body2: {
      fontFamily: 'Inter',
      fontWeight: 400,
    },
    button: {
      fontFamily: 'var(--font-inter), var(--font-geist-sans), system-ui, sans-serif',
      fontWeight: 700,
      textTransform: 'none',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInput-underline:after': {
            borderBottomColor: colors.yellow,
          },
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: colors.yellow,
            },
            '&.Mui-focused fieldset': {
              borderColor: colors.yellow,
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Inter',
          textTransform: 'none',
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
  },
});

export default theme; 
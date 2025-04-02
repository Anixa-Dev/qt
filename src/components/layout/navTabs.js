import { ROUTE_PATHS } from '../../routes/routesPath';
import { PURCHASE_REFER_NAME, TOKEN_REFER_NAME } from '../../utils/constants';

export const userTabs = [
  {
    id: 1,
    label: 'Home',
    link: ROUTE_PATHS.USER_HOME,
  },
  {
    id: 2,
    label: `My ${PURCHASE_REFER_NAME}s`,
    link: ROUTE_PATHS.MY_TOKENS,
  },
];

export const companyTabs = [
  {
    id: 1,
    label: 'Home',
    link: ROUTE_PATHS.COMPANY_HOME,
  },
  {
    id: 2,
    label: `My ${TOKEN_REFER_NAME}s`,
    link: ROUTE_PATHS.COMPANY_TOKENS,
  },
  {
    id: 3,
    label: 'Reporting',
    link: '',
  },
  {
    id: 4,
    label: 'Help',
    link: '',
  },
];

export const headerUserTabs = [
  {
    id: 1,
    label: 'Home',
    link: ROUTE_PATHS.USER_HOME,
  },
  {
    id: 2,
    label: 'Purchases',
    subItems: [
      {
        id: 1,
        label: `My ${PURCHASE_REFER_NAME}s`,
        link: ROUTE_PATHS.MY_TOKENS,
      },
    ],
  },
  {
    id: 3,
    label: 'My Account',
    subItems: [
      {
        id: 1,
        label: 'My Profile',
        link: ROUTE_PATHS.USER_PROFILE,
      },
      {
        id: 2,
        label: 'My Banking Details',
        link: ROUTE_PATHS.USER_BANKING_DETAILS,
      },
      {
        id: 3,
        label: 'My Blockchain Details',
        link: ROUTE_PATHS.USER_BLOCKCHAIN_DETAILS,
      },
      {
        id: 4,
        label: 'My Subscriptions',
        link: ROUTE_PATHS.USER_SUBSCRIPTIONS,
      },
    ],
  },
];

export const headerCompanyTabs = [
  {
    id: 1,
    label: 'Home',
    link: ROUTE_PATHS.COMPANY_HOME,
  },
  {
    id: 2,
    label: 'Purchases',
    subItems: [
      {
        id: 1,
        label: `My ${PURCHASE_REFER_NAME}s`,
        link: ROUTE_PATHS.MY_TOKENS,
      },
    ],
  },
  {
    id: 3,
    label: 'Business',
    subItems: [
      {
        id: 1,
        label: `My ${TOKEN_REFER_NAME}s`,
        link: ROUTE_PATHS.COMPANY_TOKENS,
      },
      {
        id: 2,
        label: `Create New ${TOKEN_REFER_NAME}`,
        link: ROUTE_PATHS.CREATE_TOKEN,
      },
      {
        id: 4,
        label: 'Business Profile',
        link: ROUTE_PATHS.COMPANY_PROFILE,
      },
      {
        id: 5,
        label: 'Financial Settings',
        link: ROUTE_PATHS.COMPANY_BANKING_DETAILS,
      },
    ],
  },
  {
    id: 4,
    label: 'My Account',
    subItems: [
      {
        id: 1,
        label: 'My Profile',
        link: ROUTE_PATHS.USER_PROFILE,
      },
      {
        id: 2,
        label: 'My Banking Details',
        link: ROUTE_PATHS.USER_BANKING_DETAILS,
      },
      {
        id: 3,
        label: 'My Blockchain Details',
        link: ROUTE_PATHS.USER_BLOCKCHAIN_DETAILS,
      },
      {
        id: 4,
        label: 'My Subscriptions',
        link: ROUTE_PATHS.USER_SUBSCRIPTIONS,
      },
    ],
  },
]; 
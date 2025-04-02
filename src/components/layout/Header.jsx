'use client';

import React, { useEffect, useState } from 'react';
import { AppBar, useMediaQuery, useTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';
import { styled } from '@mui/material/styles';
import { headerUserTabs, headerCompanyTabs } from './navTabs';
import { colors } from '../../themes/default';
import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';
import { ROUTE_PATH_SHORTHANDS } from '../../routes/routesPath';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: colors.blackBase,
  padding: '16px 96px',
  [theme.breakpoints.down('sm')]: {
    padding: '16px',
    backgroundColor: colors.white,
  },
}));

const Header = () => {
  const [tabsToShow, setTabsToShow] = useState([]);
  const { companyData } = useSelector((state) => state.companyInfo);
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));
  const pathname = usePathname();
  const currentRoute = pathname.split('/')[1];
  const embedTokenRoute = ROUTE_PATH_SHORTHANDS.EMBED_TOKEN.split('/')[1];
  const isEmbedToken = currentRoute === embedTokenRoute;

  useEffect(() => {
    if (companyData) setTabsToShow(headerCompanyTabs);
    else setTabsToShow(headerUserTabs);
  }, [companyData]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <StyledAppBar position="static" elevation={0}>
      {isMobileView ? (
        <MobileHeader tabsToShow={tabsToShow} isEmbedToken={isEmbedToken} />
      ) : (
        <DesktopHeader tabsToShow={tabsToShow} isEmbedToken={isEmbedToken} />
      )}
    </StyledAppBar>
  );
};

export default Header; 
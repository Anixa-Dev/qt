'use client';

import React from 'react';
import { Box, IconButton, styled } from '@mui/material';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';

import { CounterTenDesktopLogo } from '../../assets';
import { ROUTE_PATHS } from '../../routes/routesPath';
import NavOptions from './NavOptions';
import AuthButtons from './AuthButtons';
import { isLoggedIn } from '../../utils/helper';

const StyledLogo = styled(CounterTenDesktopLogo)({
  height: '40px',
  cursor: 'pointer',
});

const DesktopHeader = ({ tabsToShow, isEmbedToken = false }) => {
  const router = useRouter();

  const handleLogoClick = () => {
    if (isLoggedIn()) {
      router.push(ROUTE_PATHS.HOME);
    } else {
      router.push(ROUTE_PATHS.LOGIN);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >

      <StyledLogo onClick={handleLogoClick} />

      {!isEmbedToken && (
        <>
          {isLoggedIn() ? (
            <NavOptions tabsToShow={tabsToShow} />
          ) : (
            <AuthButtons />
          )}
        </>
      )}
    </Box>
  );
};

DesktopHeader.propTypes = {
  tabsToShow: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      link: PropTypes.string,
      subItems: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          label: PropTypes.string.isRequired,
          link: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
  isEmbedToken: PropTypes.bool,
};

DesktopHeader.defaultProps = {
  isEmbedToken: false,
};

export default DesktopHeader;
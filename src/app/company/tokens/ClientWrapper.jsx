'use client';

import { useMediaQuery } from '@mui/material';
import React from 'react';
import PageContentWrapper from '@/app/PageContentWrapper';

const ClientWrapper = ({ children }) => {
  const isMobileView = useMediaQuery((theme) => theme.breakpoints.down('xs'));
  
  return (
    <PageContentWrapper hasVariablePath={!isMobileView}>
      {children}
    </PageContentWrapper>
  );
};

export default ClientWrapper; 
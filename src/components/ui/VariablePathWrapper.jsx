'use client';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import VariablePath from './VariablePath';

const VariablePathWrapper = () => {
  return (
    <BrowserRouter>
      <VariablePath />
    </BrowserRouter>
  );
};

export default VariablePathWrapper; 
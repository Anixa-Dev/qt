'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import LoginButtons from '../ui/LoginButton';
import { ROUTE_PATHS } from '@/routes/routesPath';

const AuthButtons = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.toString();

  const handleSignupClick = () => {
    router.push(`${ROUTE_PATHS.SIGNUP}${search ? `?${search}` : ''}`);
  };

  const handleLoginClick = () => {
    router.push(ROUTE_PATHS.LOGIN);
  };

  return (
    <div className="display-inline-flex">
      <LoginButtons type="login" label="Login" handleClick={handleLoginClick} />
      <LoginButtons type="signup" label="Signup" handleClick={handleSignupClick} />
    </div>
  );
};

export default AuthButtons; 
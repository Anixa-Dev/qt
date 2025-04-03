'use client';

import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  TiktokIcon,
  LinkedinIcon,
} from '@/assets';
import { colors } from '@/themes/default';

const SocialButtonContainer = styled(Box)({
  marginLeft: 'auto',
});

const IconButton = styled('a')({
  padding: '0px',
  margin: '0px 6px',
  display: 'inline-block',
});

const StyledIcon = styled('svg')(({ theme }) => ({
  color: colors.white,
  width: '20px',
  height: '20px',
  [theme.breakpoints.down('md')]: {
    width: '18px',
    height: '18px',
  },
}));

const SocialMediaLinks = () => {
  return (
    <SocialButtonContainer>
      <IconButton
        href="https://www.linkedin.com/company/counterten"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledIcon as={LinkedinIcon} />
      </IconButton>

      <IconButton
        href="https://www.facebook.com/counterten.official/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledIcon as={FacebookIcon} />
      </IconButton>

      <IconButton
        href="https://www.instagram.com/cten.official"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledIcon as={InstagramIcon} />
      </IconButton>

      <IconButton
        href="https://www.tiktok.com/@counterten"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledIcon as={TiktokIcon} />
      </IconButton>

      <IconButton
        href="https://x.com/cten_official"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledIcon as={TwitterIcon} />
      </IconButton>
    </SocialButtonContainer>
  );
};

export default SocialMediaLinks; 
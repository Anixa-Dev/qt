'use client';

import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
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

const StyledIcon = styled(Image)(({ theme }) => ({
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
        <StyledIcon
          src={LinkedinIcon}
          alt="LinkedIn"
          width={20}
          height={20}
        />
      </IconButton>

      <IconButton
        href="https://www.facebook.com/counterten.official/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledIcon
          src={FacebookIcon}
          alt="Facebook"
          width={20}
          height={20}
        />
      </IconButton>

      <IconButton
        href="https://www.instagram.com/cten.official"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledIcon
          src={InstagramIcon} 
          alt="Instagram"
          width={20}
          height={20}
        />
      </IconButton>

      <IconButton
        href="https://www.tiktok.com/@counterten"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledIcon
          src={TiktokIcon}
          alt="TikTok"
          width={20}
          height={20}
        />
      </IconButton>

      <IconButton
        href="https://x.com/cten_official"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledIcon
          src={TwitterIcon}
          alt="Twitter"
          width={20}
          height={20}
        />
      </IconButton>
    </SocialButtonContainer>
  );
};

export default SocialMediaLinks; 
'use client';

import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { colors } from '@/themes/default';
import CustomTypography from '../ui/CustomTypography';
import SelectorBox from '@/components/ui/SelectorBox';
import { useRouter } from 'next/navigation';
import { TOKEN_REFER_NAME } from '@/utils/constants';

// Import images
import CircleLogo from '@/assets/landingPage/circle.svg';
import UploadLogo from '@/assets/landingPage/upload.svg';

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
  background: colors.white,
  borderRadius: '6px',
  boxShadow: '0px 2px 14px 1px rgba(0, 0, 0, 0.06)',
  marginBottom: '20px',
  [theme.breakpoints.down('sm')]: {
    padding: '15px',
  },
}));

const TitleContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '20px',
});

const Title = styled(CustomTypography)({
  fontSize: '24px',
  lineHeight: '32px',
  fontWeight: 600,
  color: colors.black,
});

const YellowTitle = styled(CustomTypography)({
  fontSize: '24px',
  lineHeight: '32px',
  fontWeight: 600,
  color: colors.yellow,
  marginTop: '4px',
});

const SubTitle = styled(CustomTypography)({
  fontSize: '16px',
  lineHeight: '24px',
  color: colors.lightGray,
  marginTop: '8px',
});

const ContentContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

const LandingPageLeftItem = () => {
  const router = useRouter();

  return (
    <Container>
      <TitleContainer>
        <Title value="Welcome to " />
        <YellowTitle value="CounterTEN" />
        <SubTitle value={`CounterTEN is the first mainstream ${TOKEN_REFER_NAME.toLowerCase()}s
        platform for Enterprise Business.`} />
      </TitleContainer>
      <ContentContainer>
        <SelectorBox
          title="Business"
          subTitle={`Set up a new ${TOKEN_REFER_NAME.toLowerCase()} for your business product, service,
          perk or ${TOKEN_REFER_NAME.toLowerCase()}.`}
          handleClick={() => router.push('/company/create-token')}
          icon={CircleLogo}
        />
        <SelectorBox
          title="Purchases"
          subTitle={`Buy ${TOKEN_REFER_NAME.toLowerCase()}s on our secure platform`}
          handleClick={() => router.push('/user/my-tokens')}
          icon={UploadLogo}
        />
      </ContentContainer>
    </Container>
  );
};

LandingPageLeftItem.propTypes = {
  title: PropTypes.string.isRequired,
  yellowTitle: PropTypes.string,
  subTitle: PropTypes.string,
  children: PropTypes.node,
};

export default LandingPageLeftItem; 
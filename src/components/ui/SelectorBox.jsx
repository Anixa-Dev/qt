'use client';

import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { colors } from '@/themes/default';
import CustomTypography from './CustomTypography';
import Image from 'next/image';

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  background: colors.white,
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '20px 16px',
  boxShadow: '0px 2px 14px 1px rgba(0, 0, 0, 0.06)',
  borderRadius: '6px',
  border: '2px solid rgba(0, 0, 0, 0.06)',
  margin: '10px 0px',
  maxWidth: '500px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    border: `2px solid ${colors.yellow}`,
    '& svg, path, g, circle': {
      fill: colors.yellow,
    },
    '& .arrow': {
      visibility: 'visible',
    },
  },
  [theme.breakpoints.between('xs', '430')]: {
    display: 'block',
    padding: '10px',
  },
}));

const InnerContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.between('xs', '430')]: {
    display: 'block',
  },
}));

const IconContainer = styled(Box)(({ theme }) => ({
  padding: '0px 26px 0px 10px',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.between('xs', '430')]: {
    padding: '0px',
  },
}));

const TextContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

const StyledArrowRight = styled(Box)({
  visibility: 'hidden',
  width: '24px',
  height: '24px',
  marginLeft: '10px',
  position: 'relative',
});

const SubTitle = styled(CustomTypography)({
  fontSize: '14px',
  lineHeight: '21px',
  color: colors.lightGray,
  marginTop: '4px',
});

const StyledImage = styled(Image)({
  width: '24px',
  height: '24px',
  objectFit: 'contain',
});

const SelectorBox = ({
  title,
  subTitle,
  handleClick,
  icon,
}) => {
  return (
    <Container onClick={handleClick}>
      <InnerContainer>
        <IconContainer>
          {icon && <StyledImage src={icon} alt={title} />}
        </IconContainer>
        <TextContainer>
          <CustomTypography value={title} />
          {subTitle && <SubTitle value={subTitle} />}
        </TextContainer>
      </InnerContainer>
      <StyledArrowRight className="arrow">
        <Image
          src="/assets/landingPage/arrow-right.svg"
          alt="Arrow Right"
          width={24}
          height={24}
          style={{ fill: colors.lightGray }}
        />
      </StyledArrowRight>
    </Container>
  );
};

SelectorBox.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default SelectorBox; 
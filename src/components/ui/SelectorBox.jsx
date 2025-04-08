"use client";

import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { colors } from '@/themes/default';
import CustomTypography from './CustomTypography';
import ArrowRightIcon from '@/assets/landingPage/arrow-right.svg';

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  background: colors.white,
  alignItems: "center",
  justifyContent: "space-between",
  padding: "20px 16px",
  boxShadow: "0px 2px 14px 1px rgba(0, 0, 0, 0.06)",
  borderRadius: "6px",
  border: "2px solid rgba(0, 0, 0, 0.06)",
  margin: "10px 0px",
  maxWidth: "536px",
  cursor: "pointer",
  transition: "all 0.3s ease",
  "&:hover": {
    border: `2px solid ${colors.yellow}`,
    "& svg, path, g, circle": {
      fill: colors.yellow,
    },
    "& .arrow": {
      visibility: "visible",
    },
  },
  [theme.breakpoints.between("xs", "430")]: {
    display: "block",
    padding: "10px",
  },
}));

const InnerContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.between("xs", "430")]: {
    display: "block",
  },
}));

const IconContainer = styled(Box)(({ theme }) => ({
  padding: "0px 26px 0px 10px",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.between("xs", "430")]: {
    padding: "0px",
  },
}));

const TextContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

const StyledArrowRight = styled(Box)({
  visibility: "hidden",
  width: "24px",
  height: "24px",
  // marginLeft: "10px",
  position: "relative",
});

const SubTitle = styled(CustomTypography)({
  fontSize: "14px",
  lineHeight: "21px",
  color: colors.lightGray,
  fontWeight: 500,
});

const StyledIcon = styled('svg')({
  // width: '24px',
  // height: '24px',
  fill: colors.lightGray,
});

const StyledArrowIcon = styled(ArrowRightIcon)({
  width: '24px',
  height: '24px',
  fill: colors.lightGray,
});

const SelectorBox = ({
  title,
  subTitle,
  handleClick,
  icon: Icon,
}) => {
  return (
    <Container onClick={handleClick}>
      <InnerContainer>
        <IconContainer>
          {Icon && <StyledIcon as={Icon} />}
        </IconContainer>
        <TextContainer>
          <CustomTypography value={title} sx={{ fontWeight: 500 }} />
          {subTitle && <SubTitle value={subTitle} />}
        </TextContainer>
      </InnerContainer>
      <StyledArrowRight className="arrow">
        <StyledArrowIcon />
      </StyledArrowRight>
    </Container>
  );
};

SelectorBox.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  icon: PropTypes.elementType,
};

export default SelectorBox;



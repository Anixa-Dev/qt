"use client";

import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import { useFormikContext } from "formik";
import { colors } from "@/themes/default";
import CustomButton from "./CustomButton";
import CustomTypography from "./CustomTypography";
import AdditionalTimer from "./AdditionalTimer";
import { TOKEN_REFER_NAME } from "@/utils/constants";

const Container = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "containerPadding" && prop !== "containerMinHeight",
})(({ theme, containerPadding, containerMinHeight }) => ({
  position: "relative",
  minHeight: containerMinHeight || "100vh",
  padding: containerPadding || "8vh 10vw",
  [theme.breakpoints.down("sm")]: {
    padding: containerPadding || "4vh 4vw 10vh 4vw",
  },
}));

const StepContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "25px",
});

const TitleWrapper = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const TitleContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "10px",
});

const Title = styled(CustomTypography)({
  fontWeight: 700,
  fontSize: "30px",
  lineHeight: "1.27",
  letterSpacing: "1px",
});

const YellowTitle = styled(Title)({
  color: colors.yellow,
  width: "30vw",
});

const SubTitle = styled(CustomTypography)(({ theme, $subTitleColor }) => ({
  fontSize: "16px",
  lineHeight: "24px",
  color: colors[$subTitleColor] || colors.lightGray,
  // marginBottom: "10px",
  marginTop: "10px",
  fontWeight: 500,
}));

const ConfirmPurchaseText = styled(CustomTypography)({
  color: colors.lightGray,
});

const StepText = styled(CustomTypography)({
  fontWeight: "700",
  textAlign: "right",
  marginLeft: "5px",
});

const ActionButton = styled(CustomButton)({
  height: "32px",
  backgroundColor: colors.footerGray,
  width: "96px",
  color: colors.white,
});

const AddText = styled(CustomTypography)({
  minWidth: "77px",
  fontWeight: 600,
  fontSize: "30px",
  color: colors.yellow,
});

const HalfWidthItem = ({
  title = "",
  yellowTitle = "",
  subTitle = "",
  children = <></>,
  titleColor = "black",
  position = "left",
  subTitleColor,
  stepSettings,
  addText,
  containerPadding,
  containerMinHeight,
  addTimer,
  override,
}) => {
  const { enabled, activeStep, handleCancel, handleBack, totalSteps } =
    stepSettings || {};

  const formikContext = useFormikContext();
  const values = formikContext?.values;

  return (
    <Container
      containerPadding={containerPadding}
      containerMinHeight={containerMinHeight}
    >
      {enabled && (
        <StepContainer>
          {activeStep === 1 ? (
            <ActionButton onClick={handleCancel}>Cancel</ActionButton>
          ) : (
            <ActionButton onClick={handleBack}>Back</ActionButton>
          )}
          <Box>
            <ConfirmPurchaseText value="Confirm Purchase" />
            <StepText value={`Step ${activeStep} of ${totalSteps}`} />
          </Box>
        </StepContainer>
      )}
      <Box sx={{display: 'flex', flexDirection: 'column'}}>
        <TitleWrapper>
          <TitleContainer>
            <Title
              value={
                override
                  ? title.replace(TOKEN_REFER_NAME, values?.collectible_type)
                  : title
              }
              sx={{ color: colors[titleColor] }}
            />
            {yellowTitle && <YellowTitle value={yellowTitle} noWrap />}
          </TitleContainer>
          {addText && <AddText value={addText} />}
          {addTimer && <AdditionalTimer addTimer={addTimer} />}
        </TitleWrapper>
        {subTitle &&  <SubTitle
          value={
            override
              ? subTitle.replace(TOKEN_REFER_NAME, values?.collectible_type)
              : subTitle
          }
          sx={{ color: colors[subTitleColor] || colors.lightGray }}
        />}
       
      </Box>
      <Box>{children}</Box>
    </Container>
  );
};

HalfWidthItem.propTypes = {
  title: PropTypes.string,
  yellowTitle: PropTypes.string,
  subTitle: PropTypes.string,
  children: PropTypes.node,
  titleColor: PropTypes.string,
  position: PropTypes.string,
  subTitleColor: PropTypes.string,
  stepSettings: PropTypes.shape({
    enabled: PropTypes.bool,
    activeStep: PropTypes.number,
    handleCancel: PropTypes.func,
    handleBack: PropTypes.func,
    totalSteps: PropTypes.number,
  }),
  addText: PropTypes.string,
  containerPadding: PropTypes.string,
  containerMinHeight: PropTypes.string,
  addTimer: PropTypes.object,
  override: PropTypes.bool,
};

export default HalfWidthItem;

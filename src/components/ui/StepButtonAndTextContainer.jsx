"use client";

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import { colors } from "../../themes/default";
import CustomButton from "./CustomButton";
import CustomTypography from "./CustomTypography";
import StepFormProgress from "./StepFormProgress";

const TopActions = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    top: "0px",
    background: colors.white,
    zIndex: 10,
    position: "sticky",
    paddingBottom: "20px",
    borderBottom: `1px solid ${colors.border}`,
    borderRadius: "10px",
  },
}));

const StepperButtonAndTextContainer = styled(Box)(({ theme, ismobile }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: ismobile ? "0 4vw 0 4vw" : "0 10vw",
  marginTop: ismobile ? "0px" : "40px",
}));

const StepTextContainer = styled(Box)(({ ismobile }) => ({
  display: "flex",
  alignItems: "center",
  background: "white",
  padding: ismobile ? "2vh 4vw" : "4px 10px",
  borderRadius: "10px",
  ...(ismobile && {
    justifyContent: "space-between",
  }),
}));

const CancelButton = styled(CustomButton)({
  height: "32px",
  backgroundColor: colors.footerGray,
  width: "96px",
  color: colors.white,
});

const NextButton = styled(CustomButton)({
  height: "32px",
  backgroundColor: colors.yellow,
  width: "96px",
  color: colors.black,
});

const StepText = styled(CustomTypography)({
  fontWeight: "700",
  textAlign: "right",
  marginLeft: "5px",
});

const CreateAccStepText = styled(CustomTypography)({
  color: colors.lightGray,
});

const StepContainer = ({
  handleCancel,
  handleBack,
  activeStep,
  value,
  totalSteps,
  isMobile,
  isEmailVerification,
  onLogout,
  userDetails,
  disableBack = false,
  isLastStep,
  showNextButtonOnTop,
  formType,
}) => {
  return (
    <TopActions>
      <StepFormProgress activeStep={activeStep} totalSteps={totalSteps} />
      {isMobile && (
        <StepTextContainer ismobile={isMobile}>
          <CreateAccStepText value={value} />
          <StepText value={`Step ${activeStep} of ${totalSteps}`} />
        </StepTextContainer>
      )}
      <StepperButtonAndTextContainer ismobile={isMobile}>
        {isEmailVerification ? (
          <CancelButton onClick={onLogout}>
            {userDetails && userDetails.type === "signup" ? "Cancel" : "Logout"}
          </CancelButton>
        ) : activeStep === 1 ? (
          <CancelButton onClick={handleCancel}>Cancel</CancelButton>
        ) : (
          <CancelButton onClick={handleBack} disabled={disableBack}>
            Back
          </CancelButton>
        )}
        {!isMobile && (
          <StepTextContainer ismobile={isMobile}>
            <CreateAccStepText value={value} />
            <StepText value={`Step ${activeStep} of ${totalSteps}`} />
          </StepTextContainer>
        )}
        {showNextButtonOnTop && (
          <NextButton type="submit">
            {isLastStep
              ? formType === "edit"
                ? "Update"
                : "Complete"
              : "Next"}
          </NextButton>
        )}
      </StepperButtonAndTextContainer>
    </TopActions>
  );
};

StepContainer.propTypes = {
  handleCancel: PropTypes.func,
  handleBack: PropTypes.func,
  activeStep: PropTypes.number,
  value: PropTypes.string,
  totalSteps: PropTypes.number,
  isMobile: PropTypes.bool,
  isEmailVerification: PropTypes.bool,
  onLogout: PropTypes.func,
  userDetails: PropTypes.object,
  disableBack: PropTypes.bool,
  isLastStep: PropTypes.bool,
  showNextButtonOnTop: PropTypes.bool,
  formType: PropTypes.string,
};

export default StepContainer;

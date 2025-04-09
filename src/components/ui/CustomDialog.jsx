import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Close } from "@mui/icons-material";
import CustomTypography from "./CustomTypography";
import { colors } from "../../themes/default";

const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    borderRadius: "10px",
    textAlign: "center",
    padding: "0px 10px",
    [theme.breakpoints.down("xs")]: {
      padding: "0px",
    },
  },
}));

const CloseIconContainer = styled(IconButton)(({ theme, closeIconColor }) => ({
  color: closeIconColor || colors.yellow,
  zIndex: 1,
  position: "absolute",
  right: "30px",
  padding: "0px",
  [theme.breakpoints.down("xs")]: {
    right: "4vw",
  },
}));

const NoTitleCloseIconContainer = styled(IconButton)(({ theme }) => ({
  color: colors.helperGray,
  zIndex: 1,
  position: "absolute",
  right: "30px",
  padding: "10px",
  [theme.breakpoints.down("xs")]: {
    right: "4vw",
  },
}));

const StyledDialogContent = styled(DialogContent)(
  ({ theme, noContentPadding }) => ({
    padding: noContentPadding ? "0px !important" : "8px 24px",
    [theme.breakpoints.down("xs")]: {
      padding: noContentPadding ? "0px" : "2vh 4vw !important",
    },
  })
);

const CloseIcon = styled(Close)({
  width: "30px",
  height: "30px",
});

const StyledDialogTitle = styled(DialogTitle)(({ theme, titlePlacement }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  justifyContent: titlePlacement,
  paddingTop: "32px",
  [theme.breakpoints.down("xs")]: {
    padding: "32px 4vw 16px",
    paddingRight: "40px",
  },
}));

const CustomDialog = ({
  open,
  onClose,
  children,
  title,
  maxWidth,
  titleClassName,
  PaperProps,
  hasCloseButton,
  noTitleCloseButton,
  fullScreen,
  noTitle,
  noContentPadding,
  titlePlacement,
  disableBackdropClick,
  closeIconColor,
}) => {
  return (
    <StyledDialog
      disableBackdropClick={disableBackdropClick}
      fullWidth
      maxWidth={maxWidth}
      open={open}
      onClose={(_, reason) => onClose(reason)}
      PaperProps={PaperProps}
      fullScreen={fullScreen}
    >
      {!noTitle && (
        <StyledDialogTitle titlePlacement={titlePlacement}>
          <CustomTypography className={titleClassName} value={title} />
          {hasCloseButton && (
            <CloseIconContainer
              closeIconColor={closeIconColor}
              onClick={onClose}
            >
              <CloseIcon />
            </CloseIconContainer>
          )}
        </StyledDialogTitle>
      )}
      {noTitleCloseButton && (
        <NoTitleCloseIconContainer onClick={onClose}>
          <CloseIcon />
        </NoTitleCloseIconContainer>
      )}
      <StyledDialogContent noContentPadding={noContentPadding}>
        {children}
      </StyledDialogContent>
    </StyledDialog>
  );
};

export default CustomDialog;

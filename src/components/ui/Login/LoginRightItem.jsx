import React, { useEffect, useState } from "react";
import { Divider, Grid, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import HalfWidthItem from "../HalfWidthItem";
import CustomTypography from "../CustomTypography";
import CustomButton from "../CustomButton";
import { colors } from "../../../themes/default";
import { GoogleIcon } from "../../../assets";
import {
  companyInfoRequestStart,
  forgotPasswordRequestStart,
  userInfoRequestStart,
  userLoginRequestStart,
  resetUserDetails,
  showSuccessMessage,
  showErrorMessage,
} from "../../../redux-saga/redux/actions";
import config from "../../../utils/config";
import CustomDialog from "../../ui/CustomDialog";
import RenderTextField from "../../ui/RenderTextField";
import ROUTE_PATHS from "../../../routes/routesPath";

// Styled components
const StyledSignInButton = styled(CustomButton)(({ theme }) => ({
  height: "46px",
  marginTop: "8px",
  textTransform: "uppercase",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const StyledGoogleButton = styled(CustomButton)(({ theme }) => ({
  height: "48px",
  textTransform: "none",
  backgroundColor: colors.white,
  border: `solid 1px ${colors.black}`,
  borderRadius: "8px",
  fontSize: "14px",
  justifyContent: "space-around",
  "&:hover": {
    backgroundColor: "inherit",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const StyledForgotButton = styled(CustomButton)({
  textTransform: "none",
  padding: "0px",
  marginTop: "20px",
  backgroundColor:'transparent',
});

const OrContainer = styled('div')({
  display: "flex",
  alignItems: "center",
  color: colors.lightGray,
  gap: "13px",
  margin: "15px 0px",
});

const StyledDivider = styled(Divider)({
  width: "45%",
});

const OrText = styled(CustomTypography)({
  fontSize: "12px",
});

const DialogContent = styled('div')(({ theme }) => ({
  textAlign: "left",
  padding: "0px 13% 20px",
  [theme.breakpoints.down("xs")]: {
    padding: "0px 0px 20px",
  },
}));

const SubmitButton = styled(CustomButton)(({ theme }) => ({
  padding: "10px",
  width: "200px",
  marginBottom: "20px",
  [theme.breakpoints.down("xs")]: {
    width: "100%",
  },
}));

const SuccessMessage = styled(CustomTypography)({
  marginBottom: "10px",
});

const StyledDialog = styled(CustomDialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    borderRadius: "10px",
    textAlign: "center",
    padding: "0px 10px",
    [theme.breakpoints.down("xs")]: {
      padding: "0px",
    },
  },
  "& .dialog-title": {
    fontSize: "24px",
    fontWeight: "700",
    lineHeight: "1.27",
    letterSpacing: "1.2px",
    color: colors.yellow,
    textAlign: "center",
  },
}));

// Validation schemas
const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email")
    .max(150, "Email too Long"),
  password: yup.string().required("Password is Required"),
});

const forgotValidationSchema = yup.object().shape({
  forgotPassEmail: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email"),
});

const LoginRightItem = ({ tokenData }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [openForgetDialog, setOpenForgetDialog] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { success, error,data } = useSelector((state) => state.login);
  const { loading: forgotPasswordLoading } = useSelector(
    (state) => state.forgotPassword
  );

  // URL handling
  const returnUrlParam = searchParams.get("return_url");
  const { newPathname, otherParams, encodedReturnUrl, isOriginGuest } = processUrlParams(returnUrlParam);

  useEffect(() => {
    if (success) {
      dispatch(showSuccessMessage({ msg: success.message || 'Login successful!' }));
      try {
        const searchString = otherParams ? `?${otherParams}` : '';
        router.push(`${newPathname || '/'}${searchString}`);
        dispatch(userInfoRequestStart());
        dispatch(companyInfoRequestStart());
      } catch (error) {
        dispatch(showErrorMessage({ msg: error.message || 'Error during navigation' }));
        router.push("/");
      }
    }
    if (error) {
      dispatch(showErrorMessage({ msg: 'Invalid credentials' }));
    }
    return () => dispatch(resetUserDetails());
  }, [success, error]);

  const loginForm = useFormik({
    validationSchema: loginValidationSchema,
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (formValues) => {
      const requestData = {
        email: tokenData?.customization_email
          ? tokenData.customization_email.toLowerCase()
          : formValues.email.toLowerCase(),
        pass: formValues.password,
        delete_guest: isOriginGuest,
      };
      dispatch(userLoginRequestStart(requestData));
    },
  });

  const forgotPasswordForm = useFormik({
    validationSchema: forgotValidationSchema,
    initialValues: {
      forgotPassEmail: "",
    },
    onSubmit: (formValues) => {
      dispatch(forgotPasswordRequestStart({ 
        email: formValues.forgotPassEmail.toLowerCase() 
      }));
      setSubmitted(true);
    },
  });

  // const handleSignupClick = () => {
  //   router.push(`${ROUTE_PATHS.SIGNUP}${encodedReturnUrl}`);
  // };

  const onCloseForgotDialog = () => {
    setOpenForgetDialog(false);
    setSubmitted(false);
  };

  return (
    <HalfWidthItem
      title="Sign In"
      subTitle="Already have an CounterTEN account? Sign In below"
    >
      <Divider sx={{ marginBottom: "16px" }} />
      <form onSubmit={loginForm.handleSubmit}>
        <Grid container spacing={3}>
          <RenderTextField
            formikIns={loginForm}
            label="Email"
            name="email"
            defaultValue=""
          />
          <RenderTextField
            formikIns={loginForm}
            label="Password"
            name="password"
            type="password"
            toTrim={false}
          />
        </Grid>
        
        <StyledForgotButton onClick={() => setOpenForgetDialog(true)}>
          Forgot Password?
        </StyledForgotButton>
        
        <StyledSignInButton fullWidth type="submit">
          Sign In
        </StyledSignInButton>

        <OrContainer>
          <StyledDivider />
          <OrText value="Or" />
          <StyledDivider />
        </OrContainer>

        <StyledGoogleButton
          startIcon={<GoogleIcon />}
          endIcon={<></>}
          fullWidth
          href={`${config.NODE_BASE_URL}/auth/google${encodedReturnUrl}`}
        >
          Sign In with Google
        </StyledGoogleButton>
      </form>

      <StyledDialog
        title="Forgot Password"
        open={openForgetDialog}
        onClose={onCloseForgotDialog}
        titlePlacement="center"
      >
        {submitted && !forgotPasswordLoading ? (
          <SuccessMessage value="You'll get an Email with further details if it is registered" />
        ) : (
          <>
            <CustomTypography
              value="Enter your email associated with your account. You'll get a reset password link there."
            />
            <form onSubmit={forgotPasswordForm.handleSubmit}>
              <DialogContent>
                <RenderTextField
                  formikIns={forgotPasswordForm}
                  label="Email"
                  name="forgotPassEmail"
                />
              </DialogContent>
              <SubmitButton type="submit">
                Submit
              </SubmitButton>
            </form>
          </>
        )}
      </StyledDialog>
    </HalfWidthItem>
  );
};

// Helper function to process URL parameters
function processUrlParams(returnUrlParam) {
  let newPathname = "";
  let otherParams = "";
  let encodedReturnUrl = "";
  let isOriginGuest = false;

  if (returnUrlParam) {
    try {
      const returnUrl = returnUrlParam;
      const urlParts = returnUrl.split("?");
      newPathname = urlParts[0];
      otherParams = urlParts.length > 1 ? urlParts[1] : "";
      encodedReturnUrl = `?return_url=${encodeURIComponent(returnUrl)}`;

      if (otherParams) {
        const params = new URLSearchParams(otherParams);
        isOriginGuest = params.get("origin") === "guest";
      }
    } catch (error) {
      console.error("Error processing return URL:", error);
      newPathname = "/";
    }
  }

  return { newPathname, otherParams, encodedReturnUrl, isOriginGuest };
}

export default LoginRightItem;

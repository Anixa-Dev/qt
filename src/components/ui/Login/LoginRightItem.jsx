import React, { useEffect, useState } from "react";
import { Divider, Grid, useMediaQuery } from "@mui/material";
import { styled} from "@mui/material/styles";
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
} from "../../../redux-saga/redux/actions";
import config from "../../../utils/config";
import CustomDialog from "../../ui/CustomDialog";
import RenderTextField from "../../ui/RenderTextField";
import ROUTE_PATHS from "../../../routes/routesPath";
import { CircleLogo } from "../../../assets";
import SelectorBox from "../SelectorBox";
import { showErrorMessage } from "../../../redux-saga/redux/utils/snackbarReducer";
import { ERROR_MESSAGES } from "../../../utils/constants";

const useStyles = styled((theme) => ({
  signinButton: {
    height: "46px",
    marginTop: "8px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  googleButton: {
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
  },
  orContainer: {
    display: "flex",
    alignItems: "center",
    color: colors.lightGray,
    gap: "13px",
    margin: "15px 0px",
  },
  orDivider: {
    width: "45%",
  },
  orText: {
    fontSize: "12px",
  },
  forgotPasswordButton: {
    textTransform: "none",
    padding: "0px",
    marginTop: "20px",
  },
  forgotTextField: {
    textAlign: "left",
    padding: "0px 13% 20px",
    [theme.breakpoints.down("xs")]: {
      padding: "0px 0px 20px",
    },
  },
  submitEmailButton: {
    padding: "10px",
    width: "200px",
    marginBottom: "20px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  successMessage: {
    marginBottom: "10px",
  },
  dialogTitle: {
    fontSize: "24px",
    fontWeight: "700",
    lineHeight: "1.27",
    letterSpacing: "1.2px",
    color: colors.yellow,
    textAlign: "center",
  },
  dialogPaper: {
    borderRadius: "10px",
    textAlign: "center",
    padding: "0px 10px",
    [theme.breakpoints.down("xs")]: {
      padding: "0px",
    },
  },
  divider: {
    marginBottom: "16px",
  },
}));

const loginValidationSchema = () =>
  yup.object().shape({
    email: yup
      .string()
      .required("Email is required")
      .email("Please enter a valid email")
      .max(150, "Email too Long"),
    password: yup.string().required("Password is Required"),
  });

const forgotValidationSchema = () =>
  yup.object().shape({
    forgotPassEmail: yup
      .string()
      .required("Email is required")
      .email("Please enter a valid email"),
  });

const LoginRightItem = ({ tokenData }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [openForgetDialog, setOpenForgetDialog] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { success } = useSelector((state) => state.login);
  const { loading: forgotPasswordLoading } = useSelector(
    (state) => state.forgotPassword
  );

  const onCloseForgotDialog = () => {
    setOpenForgetDialog(false);
    setSubmitted(false);
  };

  let returnUrl = "";
  let newPathname = "";
  let encodedReturnUrl = "";
  let otherParams = "";

  // Get the return_url from search params
  const returnUrlParam = searchParams.get("return_url");
  if (returnUrlParam) {
    try {
      returnUrl = returnUrlParam;
      // Extract the pathname from the return URL
      const urlParts = returnUrl.split("?");
      newPathname = urlParts[0];

      // Get other query parameters
      otherParams = urlParts.length > 1 ? urlParts[1] : "";

      // Encode the return URL for the signup page
      encodedReturnUrl = returnUrl
        ? `?return_url=${encodeURIComponent(returnUrl)}`
        : "";
    } catch (error) {
      console.error("Error processing return URL:", error);
      // Set default values in case of error
      newPathname = "/";
      otherParams = "";
      encodedReturnUrl = "";
    }
  }

  // Safely check if origin is guest
  let isOriginGuest = false;
  try {
    if (otherParams) {
      const params = new URLSearchParams(otherParams);
      isOriginGuest = params.get("origin") === "guest";
    }
  } catch (error) {
    console.error("Error parsing URL parameters:", error);
  }

  useEffect(() => {
    if (success) {
      try {
        router.push({
          pathname: newPathname || "/",
          search: otherParams || "",
        });

        dispatch(userInfoRequestStart());
        dispatch(companyInfoRequestStart());
      } catch (error) {
        console.error("Error during navigation:", error);
        // Fallback to home page
        router.push("/");
      }
    }
    return () => dispatch(resetUserDetails());
  }, [success]);

  const loginForm = useFormik({
    validationSchema: loginValidationSchema,
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (formValues) => {
      const requestData = {
        email: tokenData?.customization_email
          ? tokenData?.customization_email.toLowerCase()
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
      const requestData = { email: formValues.forgotPassEmail.toLowerCase() };
      dispatch(forgotPasswordRequestStart(requestData));
      setSubmitted(true);
    },
  });

  const { handleSubmit } = loginForm;

  const handleSignupClick = () => {
    router.push(`${ROUTE_PATHS.SIGNUP}${encodedReturnUrl}`);
  };

  return (
    <HalfWidthItem
      title="Sign In"
      subTitle="Already have an CounterTEN account? Sign In below"
    >
      <Divider sx={{ marginBottom: "16px"}} />
      <form onSubmit={handleSubmit}>
        <Grid spacing={3} container>
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
        <CustomButton
          onClick={() => setOpenForgetDialog(true)}
          className={classes.forgotPasswordButton}
          variant="text"
        >
          Forgot Password?
        </CustomButton>
        <CustomButton fullWidth type="submit" className={classes.signinButton}>
          Sign In
        </CustomButton>
        <div className={classes.orContainer}>
          <Divider className={classes.orDivider} />
          <CustomTypography value="Or" className={classes.orText} />
          <Divider className={classes.orDivider} />
        </div>
        <CustomButton
          startIcon={<GoogleIcon />}
          endIcon={<></>}
          className={classes.googleButton}
          fullWidth
          href={`${config.NODE_BASE_URL}/auth/google${
            encodedReturnUrl ? `?return_url=${encodedReturnUrl}` : ""
          }`}
        >
          Sign In with Google
        </CustomButton>
      </form>
      <CustomDialog
        title="Forgot Password"
        open={openForgetDialog}
        onClose={onCloseForgotDialog}
        titleClassName={classes.dialogTitle}
        PaperProps={{ className: classes.dialogPaper }}
        titlePlacement="center"
      >
        {submitted && !forgotPasswordLoading ? (
          <CustomTypography
            value={
              "You'll get an Email with further details if it is registered"
            }
            className={classes.successMessage}
          />
        ) : (
          <>
            <CustomTypography
              value={
                "Enter your email associated with your account. You'll get a reset password link there."
              }
            />
            <form onSubmit={forgotPasswordForm.handleSubmit}>
              <div className={classes.forgotTextField}>
                <RenderTextField
                  formikIns={forgotPasswordForm}
                  label="Email"
                  name="forgotPassEmail"
                />
              </div>
              <CustomButton className={classes.submitEmailButton} type="submit">
                Submit
              </CustomButton>
            </form>
          </>
        )}
      </CustomDialog>
    </HalfWidthItem>
  );
};

export default LoginRightItem;

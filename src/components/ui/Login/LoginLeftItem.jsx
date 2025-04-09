import { useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import CircleLogo from "@/assets/landingPage/circle.svg";
import HalfWidthItem from "../HalfWidthItem";
import CustomButton from "../CustomButton";
import { colors } from "../../../themes/default";
import { ROUTE_PATHS } from '../../../routes/routesPath';
import SelectorBox from "../SelectorBox";

const StyledButton = styled(CustomButton)(({ theme }) => ({
  height: "46px",
  marginTop: "8px",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const SubTitle = styled("div", {
  shouldForwardProp: (prop) => prop !== "subTitleColor",
})(({ subTitleColor }) => ({
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "24px",
  margin: "10px 0px",
  color: colors[subTitleColor] || colors.lightGray,
}));

const LoginLeftItem = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleSignupClick = () => {
    try {
      // Get the return_url from search params
      const returnUrlParam = searchParams.get("return_url");
      const encodedReturnUrl = returnUrlParam
        ? `?return_url=${encodeURIComponent(returnUrlParam)}`
        : "";
      router.push(`${ROUTE_PATHS.SIGNUP}${encodedReturnUrl}`);
    } catch (error) {
      console.error("Error during navigation:", error);
      // Fallback to signup page without parameters
      router.push(ROUTE_PATHS.SIGNUP);
    }
  };

  return (
    <HalfWidthItem
      title="Create Account"
      subTitle={
        isMobile ? "New To CounterTEN? Create your free account today." : ""
      }
      titleColor={isMobile ? "blackRussian" : "white"}
      containerMinHeight="10vh"
      containerTop={"72px"}
      containerposition={isMobile ? "relative" : "fixed"}
      containerPadding={isMobile ? "4vh 4vw 0vh 4vw" : "8vh 10vw"}
    >
      {isMobile ? (
        <StyledButton fullWidth onClick={handleSignupClick}>
          Create Account
        </StyledButton>
      ) : (
        <SelectorBox
          title="Create Account"
          subTitle="Sign up for a CounterTEN account. It's free and only takes 60 seconds."
          handleClick={handleSignupClick}
          icon={CircleLogo}
        />
      )}
    </HalfWidthItem>
  );
};

export default LoginLeftItem;

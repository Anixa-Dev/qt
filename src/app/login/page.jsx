/* eslint-disable no-nested-ternary */
"use client";
import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";
import ResponsiveIndex from "../../components/ui/ResponsiveIndex";
import {
  resetSingleToken,
  singleTokenRequestStart,
} from "../../redux-saga/redux/token";
import LoginRightItem from "../../components/ui/Login/LoginRightItem";
import LoginLeftItem from "../../components/ui/Login/LoginLeftItem";

const Login = () => {
  const searchParams = useSearchParams();
  const returnUrl = searchParams.get("return_url");
  const isCustomize = returnUrl?.split("/");
  let tokenId = "";

  if (isCustomize?.[0] === "customize-nft") {
    tokenId = isCustomize && isCustomize[1];
  }

  const dispatch = useDispatch();
  const { tokenData } = useSelector((state) => state.getSingleToken);

  useEffect(() => {
    if (tokenId)
      dispatch(singleTokenRequestStart({ token_id: tokenId, loader: true }));
    return () => dispatch(resetSingleToken());
  }, [tokenId]);

  return (
    <ResponsiveIndex isStepForm={false}>
        <Grid container>
          asdsaf
          {/* <Grid size={{md:6,lg:6,xl:6,xs:12,sm:10 }}>
            <LoginLeftItem />
          </Grid>
          <Grid size={{md:6,lg:6,xl:6, xs:12,sm:10 }}>
           <LoginRightItem tokenData={tokenData} />
          </Grid> */}
      </Grid>       

    </ResponsiveIndex>
  );
};

export default Login;

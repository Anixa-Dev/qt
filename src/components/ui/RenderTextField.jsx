/* eslint-disable complexity */
import React, { useEffect, useState } from "react";
import { Grid, InputAdornment } from "@mui/material";
import { styled } from "@mui/material/styles";
import moment from "moment";
import CustomTextField from "../ui/CustomTextField";
import CustomTypography from "../ui/CustomTypography";
import { colors } from "../../themes/default";
import PropTypes from 'prop-types';

// Styled components
const StyledTextField = styled(CustomTextField)(({ theme }) => ({
  minHeight: "46px",
  paddingRight: "0px",
  marginLeft: 0,
  
  '& .MuiInputBase-input:-webkit-autofill': {
    WebkitBoxShadow: '0 0 0 100px rgb(232, 240, 254) inset',
    WebkitTextFillColor: '#000000 !important',
    WebkitAppearance: 'menulist-button',
    WebkitBackgroundImage: 'none !important',
    WebkitBackgroundColor: 'rgb(232, 240, 254) !important',
    color: '#000000 !important',
  },
  
  '@media (prefers-color-scheme: dark)': {
    '& .MuiInputBase-input:-webkit-autofill': {
      WebkitBoxShadow: '0 0 0 100px rgba(70, 90, 126, 0.4) inset',
      WebkitBackgroundColor: 'rgba(70, 90, 126, 0.4) !important',
      WebkitTextFillColor: '#000000 !important',
      color: '#000000 !important',
    }
  }
}));

const StyledLabel = styled(CustomTypography)({
  fontSize: "14px",
  marginBottom: "6px",
  float: "left",
  fontWeight: "500",
});

const AdornmentDiv = styled('div')({
  borderLeft: `1px solid ${colors.sonicSilver}`,
  height: "46px",
  paddingLeft: "10px",
  background: colors.snow,
  color: colors.eerieBlack,
});

const AdornmentContainer = styled(InputAdornment)({
  padding: "22px 16px 0 8px",
});

const RenderTextField = ({
  label,
  formikIns,
  toTrim = true,
  name,
  type = "text",
  responsiveSettings,
  rows = 1,
  multiline,
  inputClassName,
  disabled,
  startAdornment,
  endAdornment,
  disableHelperIcon,
  constraints,
  defaultValue,
  className,
  labelAlign = "left",
  onFocus,
}) => {
  const { handleChange, setFieldValue, values, errors, touched } = formikIns || {};
  const { sm, xs, lg, md, xl } = responsiveSettings || {};
  const { min, max, step } = constraints || {};
  const [formattedValue, setFormattedValue] = useState(defaultValue || "");
  const [isMounted, setIsMounted] = useState(false);

  // Initialize value with empty string if undefined
  let value = (values?.[name] ?? defaultValue) || "";

  useEffect(() => {
    setIsMounted(true);
    if (type === "datetime-local" && value) {
      setFormattedValue(moment(value).format("YYYY[-]MM[-]DD[T]HH:mm"));
    } else {
      setFormattedValue(value);
    }
  }, [value, type]);

  // Use the formatted value only on the client side
  const displayValue = isMounted ? formattedValue : value;

  return (
    <Grid
      item
      xs={xs || 12}
      sm={sm}
      lg={lg}
      md={md}
      xl={xl}
      sx={{width: "100%",paddingRight:'0px'}}
      className={className}
    >
      <StyledLabel
        align={labelAlign}
        value={label}
      />
      <StyledTextField
        onFocus={onFocus}
        onChange={(e) => {
          if (type === "number") {
            e.target.value = Number(e.target.value);
            setFieldValue(name, Number(e.target.value));
          }
          handleChange(e);
        }}
        onBlur={(e) => {
          if (toTrim) {
            setFieldValue(name, e.target.value.trim());
          }
        }}
        name={name}
        value={displayValue}
        InputProps={{
          startAdornment: startAdornment && (
            <InputAdornment position="start">
              {startAdornment}
            </InputAdornment>
          ),
          endAdornment: endAdornment && (
            <AdornmentDiv>
              <AdornmentContainer>
                {endAdornment}
              </AdornmentContainer>
            </AdornmentDiv>
          ),
          className: inputClassName,
          inputProps: { min, max, step ,},
        }}
        sx={{
          '& .MuiOutlinedInput-root':{
            paddingRight:'0px',
            minHeight:'46px',
            color:'#000',
          },
          '& .makeStyles-helperIcon-3': {
               padding: 0,
                margin: 0,
              },
              '& .css-afsgp6-MuiFormHelperText-root': {
                   marginLeft: 0,
               },
          '& .MuiInputBase-input:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 100px rgb(232, 240, 254) inset',
            WebkitTextFillColor: 'inherit',
            WebkitAppearance: 'menulist-button',
            WebkitBackgroundImage: 'none !important',
            WebkitBackgroundColor: 'rgb(232, 240, 254) !important',
            color: '#000 !important',
            '&::selection': {
              backgroundColor: 'rgb(232, 240, 254)',
            },
            '&::-moz-selection': {
              backgroundColor: 'rgb(232, 240, 254)',
            },
          },
          '@media (prefers-color-scheme: dark)': {
            '& .MuiInputBase-input:-webkit-autofill': {
              WebkitTextFillColor: '#000000 !important', 
              color: '#000000 !important',
            }
          },
          '& .MuiFormHelperText-root': {
            marginLeft: 0,
            marginTop: '8px'
          },
          
        }}
        error={touched?.[name] && !!errors?.[name]}
        helperText={touched?.[name] && errors?.[name]}
        type={type}
        disabled={disabled}
        multiline={multiline}
        rows={rows}
        disableHelperIcon={disableHelperIcon}
      />
    </Grid>
  );
};

RenderTextField.propTypes = {
  label: PropTypes.string.isRequired,
  formikIns: PropTypes.object,
  toTrim: PropTypes.bool,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  responsiveSettings: PropTypes.object,
  rows: PropTypes.number,
  multiline: PropTypes.bool,
  inputClassName: PropTypes.string,
  disabled: PropTypes.bool,
  startAdornment: PropTypes.node,
  endAdornment: PropTypes.node,
  disableHelperIcon: PropTypes.bool,
  constraints: PropTypes.object,
  defaultValue: PropTypes.any,
  className: PropTypes.string,
  labelAlign: PropTypes.string,
  onFocus: PropTypes.func,
};

export default RenderTextField;

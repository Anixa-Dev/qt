/* eslint-disable complexity */
import React, { useEffect, useState } from "react";
import { Grid, InputAdornment } from "@mui/material";
import { styled } from "@mui/material/styles";
import moment from "moment";
import CustomTextField from "../ui/CustomTextField";
import CustomTypography from "../ui/CustomTypography";
import { colors } from "../../themes/default";
import PropTypes from 'prop-types';

const useStyles = styled(() => ({
  textField: {
    minHeight: "46px",
    paddingRight: "0px",
  },
  textFieldLabel: {
    fontSize: "14px",
    marginBottom: "6px",
    float: "left",
  },
  adormentDivContainer: {
    borderLeft: `1px solid ${colors.sonicSilver}`,
    height: "46px",
    paddingLeft: "10px",
    background: colors.snow,
    color: colors.eerieBlack,
  },
  adormentContainer: {
    padding: "22px 16px 0 8px",
  },
}));

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
  inputRef,
}) => {
  const classes = useStyles();
  const { handleChange, setFieldValue, values, errors, touched } =
    formikIns || {};
  const { sm, xs, lg, md, xl } = responsiveSettings || {};
  const { min, max, step } = constraints || {};
  const [formattedValue, setFormattedValue] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  let value = values?.[name] || defaultValue;

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
      className={className}
    >
      <CustomTypography
        align={labelAlign}
        value={label}
        className={classes.textFieldLabel}
      />
      <CustomTextField
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
            <InputAdornment position="start">{startAdornment}</InputAdornment>
          ),
          endAdornment: endAdornment && (
            <div className={classes.adormentDivContainer}>
              <InputAdornment className={classes.adormentContainer}>
                {endAdornment}
              </InputAdornment>
            </div>
          ),
          className: inputClassName || classes.textField,
          inputProps: { min, max, step },
        }}
        error={touched?.[name] && !!errors?.[name]}
        helperText={touched?.[name] && errors?.[name]}
        type={type}
        disabled={disabled}
        multiline={multiline}
        rows={rows}
        disableHelperIcon={disableHelperIcon}
        inputRef={inputRef}
      />
    </Grid>
  );
};

RenderTextField.propTypes = {
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.any
    })
  ]),
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

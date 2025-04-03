import React, { useState } from 'react'
import {
  IconButton, InputAdornment, TextField,
} from '@mui/material'
import PropTypes from 'prop-types'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { WarningIcon } from '../../assets'
import { colors } from '../../themes/default'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  helperIcon: {
    padding: '12px',
  },
  helperText: {
    color: `${ colors.red } !important`,
    fontSize: '11px',
    marginLeft: '0px',
  },
  visibilityButton: {
    padding: '8px',
  },
  visibilityIcon: {
    width: '20px',
    height: '20px',
  },
  placeholder: {
    '& input::placeholder': {
      color: colors.black,
      opacity: 1,
    },
  },
}))

const CustomTextField = ({
  focusEl, error, helperIconType, disableHelperIcon, ...rest
}) => {
  const classes = useStyles()
  const [ showPassword, setShowPassword ] = useState(false)
  const getVisibilityIcon = () => (showPassword ? 'text' : 'password')
  let fieldProps = rest

  const hasEndAdornment = (![ 'start_date',
    'end_date', 'increase_price_by', 'every' ].includes(fieldProps.name))
  && (fieldProps.type === 'password' || !disableHelperIcon)

  const endAdornmentDiv = () => {
    if (helperIconType === 'error' && error) {
      return (
        <InputAdornment position='start'>
          <WarningIcon className={ classes.helperIcon } />
        </InputAdornment>
      )
    }
    if (fieldProps.type === 'password') {
      return (
        <InputAdornment position='start'>
          <IconButton
            className={ classes.visibilityButton }
            onClick={ () => setShowPassword((current) => !current) }
          >
            {showPassword ? <VisibilityOffIcon className={ classes.visibilityIcon } />
              : <VisibilityIcon className={ classes.visibilityIcon } />}
          </IconButton>
        </InputAdornment>
      )
    }
    return false
  }

  if (hasEndAdornment) {
    fieldProps = {
      ...fieldProps,
      type: fieldProps.type === 'password' ? getVisibilityIcon() : fieldProps.type,
      InputProps: {
        ...fieldProps.InputProps,
        endAdornment: endAdornmentDiv(),
      },
    }
  }

  if (fieldProps.autoComplete) {
    fieldProps = {
      ...fieldProps,
      InputProps: {
        ...fieldProps.InputProps,
        autoComplete: fieldProps.autoComplete,
      },
    }
  }

  return (
    <TextField
      classes={ { root: classes.placeholder } }
      onFocus={ () => {
        if (focusEl) {
          const elementToFocus = document.getElementById(focusEl)
          elementToFocus?.scrollIntoView({ behavior: 'smooth' })
        }
      } }
      error={ error }
      { ...fieldProps }
      FormHelperTextProps={ { className: classes.helperText } }
    />
  )
}

CustomTextField.defaultProps = {
  label: '',
  disabled: false,
  type: 'text',
  fullWidth: true,
  variant: 'outlined',
  inputRef: null,
  className: null,
  placeholder: null,
  size: 'small',
  multiline: false,
  rows: null,
  onChange: () => null,
  value: undefined,
  name: '',
  error: false,
  helperIconType: 'error',
}

CustomTextField.propTypes = {
  name: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }) ]),
  fullWidth: PropTypes.bool,
  variant: PropTypes.oneOf([ 'filled', 'outlined', 'standard' ]),
  className: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.oneOf([ 'small', 'medium' ]),
  multiline: PropTypes.bool,
  rows: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  error: PropTypes.bool,
  helperIconType: PropTypes.string,
}

export default CustomTextField

import React from 'react'
import { IconButton, makeStyles } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMagnifyingGlass,
  faCircleInfo, faWallet,
  faReceipt,
  faClockRotateLeft,
} from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import CustomTooltip from '../../components/ui/CustomTooltip'
import { colors } from '../../themes/default'
import { ADDITIONAL_INFO_REFER_NAME } from '../../utils/constants'
import { ROUTE_PATH_SHORTHANDS } from '../../routes/routesPath'

const useStyles = makeStyles((theme) => ({
  iconContainer: {
    width: '300px',
    maxWidth: '40vw',
    display: 'flex',
    float: 'right',
    [ theme.breakpoints.down('sm') ]: {
      minWidth: 'none',
    },
  },
  fontHover: {
    fontSize: '18px',
    '&:hover': {
      '&:first-child': {
        fontSize: '21px',
      },
    },
  },
}))

const UserTokenWidgets = ({
  onClickDownload, onClickEditAdditionalInfo, token,
  onTransferClick, onClickSubscription,

}) => {
  const classes = useStyles()
  const { push } = useHistory()

  return (
    <div className={ classes.iconContainer }>
      <CustomTooltip title='Preview'>
        <IconButton
          className={ classes.fontHover }
          onClick={ (e) => onClickDownload(e, token) }
        >
          <FontAwesomeIcon
            icon={ faMagnifyingGlass }
            style={ {
              color: colors.darkGrey,
            } }
          />
        </IconButton>
      </CustomTooltip>

      <CustomTooltip title='Wallet'>
        <IconButton
          className={ classes.fontHover }
          onClick={ (e) => onTransferClick(e, token) }
        >
          <FontAwesomeIcon
            icon={ faWallet }
            style={ {
              color: token.editable
                ? colors.lightBlue
                : colors.darkGrey,
            } }
          />
        </IconButton>
      </CustomTooltip>

      {token?.TokenDetail?.has_additional_info && (
      <CustomTooltip
        title={ `${ ADDITIONAL_INFO_REFER_NAME }` }
        disabled={ !token?.TokenDetail?.has_additional_info }
      >
        <IconButton
          disabled={ !token?.TokenDetail?.has_additional_info }
          onClick={ (e) => onClickEditAdditionalInfo(e, token) }
          className={ classes.fontHover }
        >
          <FontAwesomeIcon
            icon={ faCircleInfo }
            style={ {
              color: !token?.TokenDetail?.has_additional_info
                ? colors.border
                : colors.darkGrey,
            } }
          />
        </IconButton>
      </CustomTooltip>
      )}

      {token?.UserPaymentDetail?.stripe_subscription_id && (
      <CustomTooltip
        title='View Subscription'
        disabled={ !token?.UserPaymentDetail?.stripe_subscription_id }
      >
        <IconButton
          disabled={ !token?.UserPaymentDetail?.stripe_subscription_id }
          onClick={ (e) => onClickSubscription(e, token) }
          className={ classes.fontHover }
        >
          <FontAwesomeIcon
            icon={ faReceipt }
            style={ {
              color: !token?.UserPaymentDetail?.stripe_subscription_id
                ? colors.border
                : colors.darkGrey,
            } }
          />
        </IconButton>
      </CustomTooltip>
      )}

      <CustomTooltip title='Transaction Detail'>
        <IconButton
          className={ classes.fontHover }
          onClick={ () => push(`${
            ROUTE_PATH_SHORTHANDS.TRANSACTION_DETAILS }/${ token?.UserPaymentDetail?.user_payment_id }`) }
        >
          <FontAwesomeIcon
            icon={ faClockRotateLeft }
            style={ {
              color: colors.darkGrey,
            } }
          />
        </IconButton>
      </CustomTooltip>
    </div>
  )
}

export default UserTokenWidgets

import React from 'react'
import {
  List, ListItem, makeStyles,
} from '@material-ui/core'
import CustomTypography from '../../components/ui/CustomTypography'
import { colors } from '../../themes/default'
import TokenIconRenderer from '../../components/sections/TokenIconRenderer'
import UserTokenWidgets from '../companyTokens/UserTokenWidgets'
import { PURCHASE_REFER_NAME } from '../../utils/constants'
// import { currencySelectValues } from '../../utils/selectValues'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'inline-flex',
    width: '100%',
  },
  widgets: {
    display: 'inline-flex',
    width: '100%',
    marginLeft: '-10px',
  },
  textFieldLabel: {
    fontSize: '14px',
    lineHeight: '22px',
    color: colors.silverSand,
    marginBottom: '14px',
  },
  listItem: {
    paddingLeft: '0px',
    paddingRight: '0px',
    borderBottom: `1px solid ${ colors.yellow }`,
    marginBottom: '10px',
    display: 'block',
  },
  tokenName: {
    fontWeight: '700',
    lineHeight: '22px',
    fontSize: '16px',
    wordBreak: 'break-word',
  },
  tokenStatus: {
    fontWeight: '700',
    lineHeight: '22px',
    fontSize: '14px',
  },
  tokenType: {
    fontWeight: '600',
    color: colors.philippineSilver,
    lineHeight: '22px',
    fontSize: '14px',
  },
  tokenDetail: {
    lineHeight: '22px',
    fontSize: '16px',
  },
  queryContainer: {
    gap: '20px',
    marginLeft: '20px',
    [ theme.breakpoints.down('400') ]: {
      display: 'block',
    },
  },
  priceContainer: {
    display: 'flex',
    gap: '20px',
    marginBottom: '5px',
    [ theme.breakpoints.down('500') ]: {
      display: 'block',
    },
  },
  tradeButton: {
    borderRadius: '44px',
    height: '32px',
    backgroundColor: 'rgba(229, 229, 229, 0.85)',
    lineHeight: '2',
    width: '64px',
  },
  saleButton: {
    borderRadius: '44px',
    height: '32px',
    backgroundColor: colors.saleButtonGreen,
    lineHeight: '2',
  },
  iconButton: {
    padding: '0px',
    float: 'right',
    margin: '14px 20px 0px 0px',
  },
  transferButton: {
    borderRadius: '44px',
    height: '32px',
    backgroundColor: colors.tabBlue,
    lineHeight: '2',
    color: colors.white,
  },
}))

const WalletMobileList = ({
  onTransferClick, tokensToShow, onDownloadClick, totalCount,
  onClickEditAdditionalInfo, onClickSubscription,
}) => {
  const classes = useStyles()
  const iconWidth = 60

  return (
    <List>
      <CustomTypography
        value={ `Showing ${ tokensToShow?.length } of ${ totalCount } ${ PURCHASE_REFER_NAME }s` }
        className={ classes.textFieldLabel }
      />
      {tokensToShow.map((token) => (
        <ListItem
          button
          key={ token?.user_token_id }
          className={ classes.listItem }
          onClick={ (e) => onDownloadClick(e, token) }
        >
          <div className={ classes.container }>
            <TokenIconRenderer
              imageWidth={ `${ iconWidth }px` }
              imageSize='x40'
              containerStyles={ { width: `${ iconWidth }px`, height: `${ iconWidth }px`, marginRight: '10px' } }
              size={ iconWidth }
              tokenObj={ token.TokenDetail }
            />
            <div>
              <div className={ classes.queryContainer }>
                <CustomTypography
                  value={ `${ token.TokenDetail.token_name } - #${ token?.token_serial_no }` }
                  className={ classes.tokenName }
                />
                <CustomTypography
                  value={ token.TokenDetail.collectible_type }
                  className={ classes.tokenType }
                />
                <div className={ classes.widgets }>
                  <UserTokenWidgets
                    token={ token }
                    onClickDownload={ onDownloadClick }
                    onClickEditAdditionalInfo={ onClickEditAdditionalInfo }
                    onTransferClick={ onTransferClick }
                    onClickSubscription={ onClickSubscription }
                  />
                </div>
              </div>
            </div>
          </div>

        </ListItem>
      ))}
    </List>
  )
}

export default WalletMobileList

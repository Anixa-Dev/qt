/* eslint-disable array-callback-return */
import React from 'react'
import {
  makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, withStyles,
} from '@material-ui/core'
import CustomTypography from '../../components/ui/CustomTypography'
import { colors } from '../../themes/default'
import TokenIconRenderer from '../../components/sections/TokenIconRenderer'
import UserTokenWidgets from '../companyTokens/UserTokenWidgets'
import { PURCHASE_REFER_NAME } from '../../utils/constants'

const StyledTableCell = withStyles(() => ({
  root: {
    borderBottom: 'none',
    '&:first-child': {
      borderRadius: '64px 0px 0px 64px',
    },
    '&:last-child': {
      borderRadius: '0px 64px 64px 0px',
    },
  },
  head: {
    fontSize: '14px',
    backgroundColor: colors.alabaster,
    color: colors.sonicSilver,
    paddingTop: '9px',
    paddingBottom: '9px',
  },
  body: {
    fontSize: 14,
    padding: '10px 20px !important',
    '&:hover': {
      cursor: 'pointer',
    },
  },
}))(TableCell)

const useStyles = makeStyles(() => ({
  tokenType: {
    fontSize: '12px',
    color: colors.philippineSilver,
  },
  tradeButton: {
    borderRadius: '44px',
    height: '32px',
    backgroundColor: 'rgba(229, 229, 229, 0.85)',
    lineHeight: '2',
    width: '96px',
  },
  saleButton: {
    borderRadius: '44px',
    height: '32px',
    backgroundColor: colors.saleButtonGreen,
    lineHeight: '2',
    width: '96px',
  },
  transferButton: {
    borderRadius: '44px',
    height: '32px',
    backgroundColor: colors.tabBlue,
    color: colors.white,
    lineHeight: '2',
  },
  tableContainer: {
    overflowY: 'hidden',
  },
  tableBody: {
    alignItems: 'center',
    '&:hover': {
      backgroundColor: colors.lightPink,
    },
  },
  firstChildPadding: {
    paddingLeft: '15px',
    width: '20px',
  },
  textFieldLabel: {
    fontSize: '14px',
    lineHeight: '22px',
    color: colors.silverSand,
    margin: '12px 0px 14px',
  },
}))

const WalletTable = ({
  onTransferClick, tokensToShow, onDownloadClick, currentPage, rowsPerPage, totalCount,
  onClickEditAdditionalInfo, onClickSubscription,
}) => {
  const classes = useStyles()

  return (
    <TableContainer classes={ { root: classes.tableContainer } }>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell className={ classes.firstChildPadding }>#</StyledTableCell>
            <StyledTableCell>{`${ PURCHASE_REFER_NAME } Detail`}</StyledTableCell>
            {/* <StyledTableCell>Price</StyledTableCell> */}
            <StyledTableCell />
            <StyledTableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <StyledTableCell colSpan={ 3 }>
              <CustomTypography
                value={ `Showing ${ tokensToShow?.length } of ${ totalCount } ${ PURCHASE_REFER_NAME }s` }
                className={ classes.textFieldLabel }
              />
            </StyledTableCell>
          </TableRow>
          {tokensToShow.map((token, index) => (
            <>
              <TableRow
                key={ token.user_token_id }
                className={ classes.tableBody }
              >
                <StyledTableCell className={ classes.firstChildPadding }>
                  <CustomTypography value={ ((currentPage - 1) * rowsPerPage) + index + 1 } />
                </StyledTableCell>

                {/* Icon/Image */}
                <StyledTableCell>
                  <div className='display-inline-flex align-items-center'>
                    <TokenIconRenderer
                      imageSize='x50'
                      containerStyles={ { height: '50px', marginRight: '15px', width: '50px' } }
                      tokenObj={ token.TokenDetail }
                    />
                    <div>
                      <CustomTypography
                        value={ `${ token.TokenDetail.token_name } - #${ token?.token_serial_no }` }
                      />
                      <CustomTypography
                        value={ token.TokenDetail.collectible_type }
                        className={ classes.tokenType }
                      />
                    </div>
                  </div>
                </StyledTableCell>
                <StyledTableCell>
                  <UserTokenWidgets
                    token={ token }
                    onClickDownload={ onDownloadClick }
                    onClickEditAdditionalInfo={ onClickEditAdditionalInfo }
                    onTransferClick={ onTransferClick }
                    onClickSubscription={ onClickSubscription }
                  />
                </StyledTableCell>
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default WalletTable

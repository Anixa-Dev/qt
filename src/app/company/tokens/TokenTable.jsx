import React, { useState } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import {
  Table, TableCell, TableBody, TableRow, TableHead, TableContainer,
} from '@material-ui/core/'
import { useSelector } from 'react-redux'
import CustomTypography from '../../components/ui/CustomTypography'
import { getCurrentPriceToken, getLabelFromValue, numberWithCommas } from '../../utils/helper'
import { colors } from '../../themes/default'
import { companyTokensStatusValues, currencySelectValues } from '../../utils/selectValues'

import TokenInfoDialog from './TokenInfoDialog'
import TokenIconRenderer from '../../components/sections/TokenIconRenderer'
import CustomPagination from '../../components/ui/CustomPagination'
import CompanyTokenWidgets from './CompanyTokenWidgets'
import { TOKEN_REFER_NAME } from '../../utils/constants'

const StyledTableCell = withStyles(() => ({
  root: {
    borderBottom: 'none',
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
    padding: '10px 16px',
    '&:hover': {
      cursor: 'pointer',
    },
    '&:first-child': {
      borderRadius: '64px 0px 0px 64px',
    },
    '&:last-child': {
      borderRadius: '0px 64px 64px 0px',
    },
  },
}))(TableCell)

const StyledTableRow = withStyles(() => ({
  root: {
  },
}))(TableRow)

const useStyles = makeStyles(() => ({
  tableWrapper: {
    height: '880px',
    marginTop: '20px',
    overflowY: 'auto',
    marginBottom: '20px',
  },
  table: {
    marginTop: '12px',
    minWidth: '930px',
  },
  tableHead: {
    height: '40px',
    borderRadius: '6px',
  },
  tableBody: {
    alignItems: 'center',
    '&:hover': {
      backgroundColor: colors.lightPink,
    },
  },
  textFieldLabel: {
    fontSize: '14px',
    lineHeight: '22px',
    color: colors.silverSand,
    margin: '12px 0px 14px',
  },
  tokenType: {
    fontSize: '12px',
    color: colors.philippineSilver,
  },
  iconButtons: {
    padding: '0px',
    margin: '0px 6px',
  },
  tableHeadMid: {
    minWidth: '115px',
  },
  tableHeadWide: {
    minWidth: '170px',
  },
  tableHeadSmall: {
    minWidth: '60px',
  },
  firstChildPadding: {
    paddingLeft: '25px',
  },
  emptyArrayText: {
    textAlign: 'center',
    marginTop: '50px',
  },

}))

const TokenTable = ({
  maxPages, setCurrentPage, currentPage, rowsPerPage, onClickDownload, onClickEdit,
  onClickEditAdditionalInfo, onClickNotify, onClickCopy, onClickArchive, onClickOffers,
  onClickInvite, onClickMarketplace, onClickPromotionCodes,
}) => {
  const classes = useStyles()
  const [ infoDialog, setInfoDialog ] = useState(false)
  const [ tokenDetail, setTokenDetail ] = useState({})
  const {
    tokenData: tokenDetails, totalTokenCount,
    tokenCount,
  } = useSelector((state) => state.getCompanyTokens)
  const infoDialogFunction = (detail) => {
    setInfoDialog((prevState) => !prevState)
    setTokenDetail(detail)
  }

  const emptyArrayMessage = () => {
    if (!totalTokenCount) return `No ${ TOKEN_REFER_NAME }s created by your company`
    return `No ${ TOKEN_REFER_NAME }s available for this filter combination`
  }

  return (
    tokenDetails?.length ? (
      <>
        <TableContainer className={ classes.tableWrapper }>
          <Table className={ classes.table }>
            <TableHead>
              <StyledTableRow className={ classes.tableHead }>
                <StyledTableCell className={ classes.firstChildPadding }>#</StyledTableCell>
                <StyledTableCell className={ classes.tableHeadSmall }>Icon</StyledTableCell>
                <StyledTableCell className={ classes.tableHeadWide }>Name </StyledTableCell>
                <StyledTableCell className={ classes.tableHeadSmall }>Allocated</StyledTableCell>
                <StyledTableCell className={ classes.tableHeadSmall }>Sold</StyledTableCell>
                <StyledTableCell className={ classes.tableHeadMid }>Current Price</StyledTableCell>
                <StyledTableCell className={ classes.tableHeadMid }>Total Sales</StyledTableCell>
                <StyledTableCell className={ classes.tableHeadMid }>Status</StyledTableCell>
                <StyledTableCell />
              </StyledTableRow>
            </TableHead>

            {infoDialog && (
            <TokenInfoDialog
              open={ infoDialog }
              tokenData={ tokenDetail }
              onClose={ () => infoDialogFunction(tokenDetail) }
            />
            )}
            <TableBody>
              <StyledTableRow>
                <StyledTableCell colSpan={ 3 }>
                  <CustomTypography
                    value={ `Showing  ${ tokenDetails.length } of ${ tokenCount } ${ TOKEN_REFER_NAME }s` }
                    className={ classes.textFieldLabel }
                  />
                </StyledTableCell>
              </StyledTableRow>
              { tokenDetails.map((token, index) => (
                <StyledTableRow
                  key={ token.token_id }
                  className={ classes.tableBody }
                >
                  <StyledTableCell className={ classes.firstChildPadding }>
                    { ((currentPage - 1) * rowsPerPage) + index + 1 }
                  </StyledTableCell>
                  <StyledTableCell align='center'>
                    <TokenIconRenderer
                      imageSize='x50'
                      tokenObj={ token }
                      containerStyles={ { height: '50px', width: '50px' } }
                    />
                  </StyledTableCell>
                  <StyledTableCell>
                    <div>
                      <CustomTypography value={ token.token_name } />
                      <CustomTypography
                        value={ token.collectible_type }
                        className={ classes.tokenType }
                      />
                    </div>
                  </StyledTableCell>
                  <StyledTableCell>{numberWithCommas(token.available_tokens)}</StyledTableCell>
                  <StyledTableCell>{numberWithCommas(token.tokens_sold)}</StyledTableCell>
                  <StyledTableCell>
                    {`${ getCurrentPriceToken(token) }`}
                  </StyledTableCell>
                  <StyledTableCell>
                    {`${ getLabelFromValue(token?.currency, currencySelectValues)
                    }${ numberWithCommas(token?.money_raised) }`}
                  </StyledTableCell>
                  <StyledTableCell>
                    {token.transaction_status === 'confirmed'
                      ? getLabelFromValue(token.status, companyTokensStatusValues) : 'Deploying'}
                  </StyledTableCell>
                  <StyledTableCell>
                    <CompanyTokenWidgets
                      token={ token }
                      onClickDownload={ onClickDownload }
                      onClickEdit={ onClickEdit }
                      onClickEditAdditionalInfo={ onClickEditAdditionalInfo }
                      onClickShare={ () => infoDialogFunction(token) }
                      onClickNotify={ () => onClickNotify(token) }
                      onClickCopy={ () => onClickCopy(token) }
                      onClickArchive={ () => onClickArchive(token) }
                      onClickOffers={ () => onClickOffers(token) }
                      onClickInvite={ () => onClickInvite(token) }
                      onClickMarketplace={ () => onClickMarketplace(token) }
                      onClickPromotionCodes={ () => onClickPromotionCodes(token) }
                    />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <CustomPagination
          count={ maxPages }
          page={ currentPage }
          onChange={ (_, value) => setCurrentPage(value) }
        />
      </>
    )
      : <CustomTypography value={ emptyArrayMessage() } className={ classes.emptyArrayText } />
  )
}

export default TokenTable

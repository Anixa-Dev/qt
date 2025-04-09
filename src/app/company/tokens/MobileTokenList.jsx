import {
  Collapse, Divider, IconButton, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, useTheme, withStyles,
} from '@material-ui/core'
import { ExpandMore } from '@material-ui/icons'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CustomPagination from '../../components/ui/CustomPagination'
import CustomTypography from '../../components/ui/CustomTypography'
import { colors } from '../../themes/default'
import { getCurrentPriceToken, getLabelFromValue, numberWithCommas } from '../../utils/helper'
import { currencySelectValues, nftMeStatusValues } from '../../utils/selectValues'
import TokenInfoDialog from './TokenInfoDialog'

import TokenIconRenderer from '../../components/sections/TokenIconRenderer'
import CompanyTokenWidgets from './CompanyTokenWidgets'
import { TOKEN_REFER_NAME } from '../../utils/constants'

const StyledTableCell = withStyles(() => ({
  head: {
    fontSize: '14px',
    backgroundColor: colors.silverSand,
    color: colors.black,
    fontWeight: 'bold',
    paddingTop: '9px',
    paddingBottom: '9px',
  },
  body: {
    fontSize: 14,
    padding: '10px 16px',
  },
}))(TableCell)

const useStyles = makeStyles(() => ({
  tableWrapper: {
    marginTop: '20px',
    overflowY: 'auto',
    marginBottom: '20px',
  },
  title: {
    fontSize: '24px',
    fontWeight: '700',
    lineHeight: '29.05px',
    margin: '16px 0px',
  },
  table: {
    marginTop: '12px',
  },
  tableHead: {
    height: '40px',
  },
  tableHeadFirst: {
    borderRadius: '10px 0px 0px 0px',
  },
  tableHeadLast: {
    borderRadius: '0px 10px 0px 0px',
  },
  textFieldLabel: {
    fontSize: '14px',
    lineHeight: '22px',
    color: colors.silverSand,
    marginBottom: '14px',
  },
  tokenType: {
    fontSize: '12px',
    color: colors.philippineSilver,
  },
  tableHeadMid: {
    minWidth: '115px',
  },
  tableHeadWide: {
    minWidth: '170px',
  },
  tableHeadSmall: {
    minWidth: '45px',
  },
  emptyArrayText: {
    textAlign: 'center',
  },
}))

const CustomRow = ({
  classes, token, onClickDownload, onClickEdit,
  onClickEditAdditionalInfo, infoDialogFunction,
  onClickNotify, onClickCopy, onClickArchive,
  onClickOffers, onClickInvite, onClickMarketplace,
  onClickPromotionCodes,
}) => {
  const [ open, setOpen ] = useState(false)
  const theme = useTheme()

  return (
    <>
      <TableRow className={ classes.root }>

        <StyledTableCell>
          <div>
            <CustomTypography value={ token?.token_name } />
            <CustomTypography
              value={ token.collectible_type }
              className={ classes.tokenType }
            />
          </div>
        </StyledTableCell>

        <StyledTableCell align='center'>
          {`${ getCurrentPriceToken(token) }`}
        </StyledTableCell>

        <StyledTableCell align='center'>
          {`${ getLabelFromValue(token?.currency, currencySelectValues)
          }${ numberWithCommas(token?.money_raised) }`}
        </StyledTableCell>

        <StyledTableCell align='center'>
          <IconButton
            size='small'
            onClick={ () => setOpen(!open) }
          >
            <ExpandMore
              className={ `${ classes.expand } ${ open ? classes.expandOpen : {} }` }
            />
          </IconButton>
        </StyledTableCell>

      </TableRow>

      <TableRow className={ classes.root }>
        <TableCell style={ { padding: 0 } } colSpan={ 4 }>
          <Collapse in={ open } timeout={ theme.transitions.duration.standard }>
            <Table>
              <TableBody>

                <TableRow>
                  <TableCell>
                    <TokenIconRenderer
                      imageSize='x50'
                      tokenObj={ token }
                      containerStyles={ { height: '50px', width: '50px' } }
                    />
                  </TableCell>
                </TableRow>

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

                <TableRow />
                <TableRow>
                  <StyledTableCell className={ classes.detailsHead } />
                  <StyledTableCell className={ classes.detailsHead } />
                </TableRow>

                <TableRow>
                  <StyledTableCell className={ classes.tableHeadMid }>Allocated</StyledTableCell>
                  <StyledTableCell className={ classes.tableHeadMid }>
                    <CustomTypography
                      noWrap
                      value={ numberWithCommas(token?.available_tokens) }
                    />
                  </StyledTableCell>
                </TableRow>
                <TableRow>
                  <StyledTableCell className={ classes.tableHeadMid }>Sold</StyledTableCell>
                  <StyledTableCell className={ classes.tableHeadMid }>
                    <CustomTypography
                      noWrap
                      value={ numberWithCommas(token?.tokens_sold) }
                    />
                  </StyledTableCell>
                </TableRow>
                <TableRow>
                  <StyledTableCell className={ classes.tableHeadMid }>Status</StyledTableCell>
                  <StyledTableCell style={ { minWidth: '150px' } } className={ classes.tableHead }>
                    <CustomTypography
                      noWrap
                      value={ token?.transaction_status === 'confirmed'
                        ? getLabelFromValue(token?.status, nftMeStatusValues) : 'Deploying' }
                    />
                  </StyledTableCell>
                </TableRow>

              </TableBody>
            </Table>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

const StyledRow = withStyles((theme) => ({
  root: {
    '&:nth-child(4n+1)': {
      backgroundColor: colors.ghostWhite,
    },
    '&:nth-child(4n+2)': {
      backgroundColor: colors.ghostWhite,
    },
    '&:nth-child(4n + 3)': {
      backgroundColor: colors.white,
    },
    '&:nth-child(4n + 4)': {
      backgroundColor: colors.white,
    },
  },
  detailsHead: {
    minWidth: '115px',
    borderBottom: 'none',
    paddingRight: '0px',
  },
  detailsHeadSmall: {
    minWidth: '45px',
    borderBottom: 'none',
    paddingRight: '0px',
  },
  tokenType: {
    fontSize: '12px',
    color: colors.philippineSilver,
  },
  customButton: {
    borderRadius: '44px',
    height: '32px',
    lineHeight: '2',
  },
  tableHeadMid: {
    minWidth: '115px',
  },
  tableHeadWide: {
    minWidth: '170px',
  },
  tableHeadSmall: {
    minWidth: '45px',
  },
  expand: {
    marginLeft: '5px',
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.standard,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}))(CustomRow)

const MobileTokenList = ({
  maxPages, setCurrentPage, currentPage, tokenCount, onClickDownload, onClickEdit,
  onClickEditAdditionalInfo, onClickNotify, onClickCopy, onClickArchive, onClickOffers,
  onClickInvite, onClickMarketplace, onClickPromotionCodes,
}) => {
  const classes = useStyles()
  const [ infoDialog, setInfoDialog ] = useState(false)
  const [ tokenDetail, setTokenDetail ] = useState({})
  const { tokenData: tokenDetails, totalTokenCount } = useSelector((state) => state.getCompanyTokens)

  const infoDialogFunction = (detail) => {
    setInfoDialog((prevState) => !prevState)
    setTokenDetail(detail)
  }

  const emptyArrayMessage = () => {
    if (!totalTokenCount) return `No ${ TOKEN_REFER_NAME }s created by your company`
    return `No ${ TOKEN_REFER_NAME }s satisfying this filter combination`
  }

  return (
    <div>
      <CustomTypography value={ `Company ${ TOKEN_REFER_NAME }s` } className={ classes.title } />
      <Divider />
      {infoDialog && (
      <TokenInfoDialog
        open={ infoDialog }
        tokenData={ tokenDetail }
        onClose={ () => infoDialogFunction(tokenDetail) }
        fullScreen
      />
      )}

      {tokenDetails?.length
        ? (
          <>
            <CustomTypography
              value={ `Showing ${ tokenDetails?.length } of ${ tokenCount } ${ TOKEN_REFER_NAME }s` }
              className={ classes.textFieldLabel }
            />
            <CustomPagination
              count={ maxPages }
              page={ currentPage }
              onChange={ (_, value) => setCurrentPage(value) }
            />

            <TableContainer className={ classes.tableWrapper }>
              <Table className={ classes.table }>
                <TableHead className={ classes.tableHead }>
                  <TableRow className={ classes.tableHead }>
                    <StyledTableCell className={ classes.tableHeadFirst }>Name</StyledTableCell>
                    <StyledTableCell className={ classes.tableHeadSmall } align='center'>Current Price</StyledTableCell>
                    <StyledTableCell className={ classes.tableHeadSmall } align='center'>Total Sales</StyledTableCell>
                    <StyledTableCell className={ classes.tableHeadLast } />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tokenDetails.map((token) => (
                    <StyledRow
                      key={ token?.token_id }
                      token={ token }
                      onClickDownload={ onClickDownload }
                      infoDialogFunction={ infoDialogFunction }
                      onClickEdit={ onClickEdit }
                      onClickEditAdditionalInfo={ onClickEditAdditionalInfo }
                      onClickNotify={ onClickNotify }
                      onClickCopy={ onClickCopy }
                      onClickArchive={ onClickArchive }
                      onClickOffers={ onClickOffers }
                      onClickInvite={ onClickInvite }
                      onClickMarketplace={ onClickMarketplace }
                      onClickPromotionCodes={ onClickPromotionCodes }
                    />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        ) : <CustomTypography value={ emptyArrayMessage() } className={ classes.emptyArrayText } />}
    </div>
  )
}

export default MobileTokenList

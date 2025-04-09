'use client'

import React from 'react'
import PageContentWrapper from '@/app/PageContentWrapper'
import { useMediaQuery } from '@mui/material'
// import { useHistory, useLocation } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import moment from 'moment'
// import { capitalize } from 'lodash'
// import SuccessDialog from './SuccessDialog'
// import {
//   archiveTokenRequestStart,
//   closeSuccessDialog, duplicateTokenRequestStart,
//   getBuyerEmailsStart,
//   getScansDetailStart,
//   resetBuyerEmails,
//   resetScansDetail,
// } from '../../redux-saga/redux/token'
// import CompanyTokensDesktop from './CompanyTokensDesktop'
// import CompanyTokensMobile from './CompanyTokensMobile'
// import PageContentWrapper from '../../components/layout/PageContentWrapper'
// import { ROUTE_PATH_SHORTHANDS } from '../../routes/routesPath'
// import PassPreviewDialog from '../../components/sections/PassPreviewDialog'
// import { unParseAndDownloadCSV } from '../../utils/helper'
// import DownloadConfirmDialog from './DownloadConfirmDialog'
// import { PREVIEW_TOKEN_TYPES } from '../../utils/constants'
// import PassNotificationDialog from '../../components/sections/PassNotificationDialog'

const CompanyTokens = () => {
  // const history = useHistory()
  // const location = useLocation()
  // const dispatch = useDispatch()
  // const rowsPerPage = 10
  // const [ maxPages, setMaxPages ] = useState(1)
  // const [ currentPage, setCurrentPage ] = useState(1)
  // const [ dialogOpen, setDialogOpen ] = useState(false)
  // const [ previewDialogOpen, setPreviewDialogOpen ] = useState({ open: false, token: null })
  // const [ notificationDialogOpen, setNotificationDialogOpen ] = useState({ open: false, token: null })

  // const [ openDownload, setOpenDownload ] = useState(false)
  // const [ downloadType, setDownloadType ] = useState()
  // const buyerEmailList = useSelector((state) => state.buyerEmails.buyerEmailList)
  // const scansList = useSelector((state) => state.scansDetail.scansList)

  // const { companyData } = useSelector((state) => state.companyInfo)

  // const { openSuccessDialogState, tokenCount } = useSelector((state) => state.getCompanyTokens)
  const isMobileView = useMediaQuery((theme) => theme.breakpoints.down('xs'))

  // useEffect(() => {
  //   if (tokenCount) {
  //     setMaxPages(Math.ceil(tokenCount / rowsPerPage))
  //   }
  // }, [ tokenCount ])

  // useEffect(() => {
  //   if (location.state?.fromCreateToken && openSuccessDialogState) {
  //     setDialogOpen(true)
  //   }
  // }, [ location, openSuccessDialogState ])

  // const onCloseDialog = () => {
  //   setDialogOpen(false)
  //   dispatch(closeSuccessDialog())
  // }

  // const onClickDownload = (e, token) => {
  //   e.stopPropagation()
  //   setPreviewDialogOpen({ open: true, token })
  // }

  // const onClickEdit = (e, token) => {
  //   e.stopPropagation()
  //   if (token.editable) {
  //     history.push(`${ ROUTE_PATH_SHORTHANDS.EDIT_TOKEN }/${ token.custom_token_id }`)
  //   } else {
  //     history.push(`${ ROUTE_PATH_SHORTHANDS.EDIT_PUBLISHED_TOKEN }/${ token.custom_token_id }`)
  //   }
  // }

  // const onClickEditAdditionalInfo = (e, token) => {
  //   e.stopPropagation()

  //   history.push(`${ ROUTE_PATH_SHORTHANDS.EDIT_ADDITIONAL_INFO }/${ token.custom_token_id }`)
  // }

  // const onClickMarketplace = (token) => {
  //   history.push(`${ ROUTE_PATH_SHORTHANDS.EDIT_SECONDARY_MARKETPLACE }/${ token.custom_token_id }`)
  // }

  // const onClickPromotionCodes = (token) => {
  //   history.push(`${ ROUTE_PATH_SHORTHANDS.PROMOTION_CODES }/${ token.custom_token_id }`)
  // }

  // const onClickNotify = (token) => {
  //   setNotificationDialogOpen({ open: true, token })
  // }

  // const onClosePreviewDialog = () => {
  //   setPreviewDialogOpen({ open: false, token: null })
  // }

  // const onCloseNotificationDialog = () => {
  //   setNotificationDialogOpen({ open: false, token: null })
  // }

  // const onClickCopy = (token) => {
  //   dispatch(duplicateTokenRequestStart({
  //     custom_token_id: token.custom_token_id,
  //   }))
  // }

  // const onClickArchive = (token) => {
  //   dispatch(archiveTokenRequestStart({
  //     custom_token_id: token.custom_token_id,
  //     archived: token?.archived,
  //   }))
  // }

  // const onClickOffers = (token) => {
  //   history.push(`${ ROUTE_PATH_SHORTHANDS.OFFERS }/${ token.custom_token_id }`)
  // }

  // const onClickInvite = (token) => {
  //   history.push(`${ ROUTE_PATH_SHORTHANDS.SEND_INVITE }/${ token.custom_token_id }`)
  // }

  // const handleDownloadCsv = ({ selectedTokenIds }) => {
  //   if (downloadType === 'scans') {
  //     dispatch(getScansDetailStart({
  //       company_id: companyData.company_id,
  //       selected_token_ids: selectedTokenIds,
  //       loader: true,
  //     }))
  //   }

  //   if (downloadType === 'purchases') {
  //     dispatch(getBuyerEmailsStart({
  //       company_id: companyData.company_id,
  //       selected_token_ids: selectedTokenIds,
  //       loader: true,
  //     }))
  //   }
  // }

  // Download the purchases csv file
  // useEffect(() => {
  //   if (buyerEmailList?.length) {
  //     const correctTimezoneList = buyerEmailList.map((purchase) => ({
  //       ...purchase,
  //       Date: moment(purchase?.Date).format('L'),
  //       Time: moment(purchase?.Time).format('hh:mm:ss a'),
  //       'Scan Date': purchase?.[ 'Scan Date' ] ? moment(purchase?.[ 'Scan Date' ]).format('L') : '',
  //       'Scan Time': purchase?.[ 'Scan Time' ] ? moment(purchase?.[ 'Scan Time' ]).format('hh:mm:ss a') : '',
  //     }))

  //     unParseAndDownloadCSV({
  //       buyerEmailList: correctTimezoneList,
  //       fileName: 'customer-purchases',
  //     })
  //     dispatch(resetBuyerEmails())
  //     setOpenDownload(false)
  //   }

  //   return () => {
  //     const eleLink = document.getElementById('download-csv-email')
  //     if (eleLink) eleLink.remove()
  //   }
  // }, [ buyerEmailList ])

  // // Download the scans csv file
  // useEffect(() => {
  //   if (scansList?.length) {
  //     const correctTimezoneList = scansList.map((scan) => {
  //       const { 'Scan Date': scanDate, 'Scan Time': scanTime, ...rest } = scan
  //       return ({
  //         'Scan Date': moment(scanDate).format('L'),
  //         'Scan Time': moment(scanTime).format('hh:mm:ss a'),
  //         ...rest,
  //       })
  //     })

  //     unParseAndDownloadCSV({
  //       buyerEmailList: correctTimezoneList,
  //       fileName: 'customer-scans',
  //     })
  //     dispatch(resetScansDetail())
  //     setOpenDownload(false)
  //   }

  //   return () => {
  //     const eleLink = document.getElementById('download-csv-email')
  //     if (eleLink) eleLink.remove()
  //   }
  // }, [ scansList ])

  // const openDownloadConfirm = (type) => {
  //   setDownloadType(type)
  //   setOpenDownload((prev) => !prev)
  // }

  return (
    <PageContentWrapper hasVariablePath={ !isMobileView }>
      <div>asdsad</div>
      {/* {openDownload && (
      <DownloadConfirmDialog
        open={ openDownload }
        onClose={ () => openDownloadConfirm() }
        title={ `Export ${ capitalize(downloadType) } List` }
        onDownload={ handleDownloadCsv }
        setDownloadType={ setDownloadType }
        downloadType={ downloadType }
      />
      )} */}
{/* 
      {isMobileView ? (
        <CompanyTokensMobile
          maxPages={ maxPages }
          currentPage={ currentPage }
          setCurrentPage={ setCurrentPage }
          rowsPerPage={ rowsPerPage }
          tokenCount={ tokenCount }
          onClickDownload={ onClickDownload }
          onClickEdit={ onClickEdit }
          onClickEditAdditionalInfo={ onClickEditAdditionalInfo }
          openDownloadConfirm={ openDownloadConfirm }
          onClickNotify={ onClickNotify }
          onClickCopy={ onClickCopy }
          onClickArchive={ onClickArchive }
          onClickOffers={ onClickOffers }
          onClickInvite={ onClickInvite }
          onClickMarketplace={ onClickMarketplace }
          onClickPromotionCodes={ onClickPromotionCodes }
        />
      ) : (
        <CompanyTokensDesktop
          maxPages={ maxPages }
          currentPage={ currentPage }
          setCurrentPage={ setCurrentPage }
          rowsPerPage={ rowsPerPage }
          onClickDownload={ onClickDownload }
          onClickEdit={ onClickEdit }
          onClickEditAdditionalInfo={ onClickEditAdditionalInfo }
          openDownloadConfirm={ openDownloadConfirm }
          onClickNotify={ onClickNotify }
          onClickCopy={ onClickCopy }
          onClickArchive={ onClickArchive }
          onClickOffers={ onClickOffers }
          onClickInvite={ onClickInvite }
          onClickMarketplace={ onClickMarketplace }
          onClickPromotionCodes={ onClickPromotionCodes }
        />
      )}
      <SuccessDialog
        open={ dialogOpen }
        onClose={ onCloseDialog }
        tokenData={ location.state?.token }
        fullScreen={ !!isMobileView }
      />
      {previewDialogOpen.open && (
        <PassPreviewDialog
          open={ previewDialogOpen.open }
          onClose={ onClosePreviewDialog }
          selectedToken={ previewDialogOpen.token }
          fullScreen={ !!isMobileView }
          type={ PREVIEW_TOKEN_TYPES.CUSTOM_TOKEN }
        />
      )}

      {notificationDialogOpen.open && (
      <PassNotificationDialog
        open={ notificationDialogOpen.open }
        onClose={ onCloseNotificationDialog }
        selectedToken={ notificationDialogOpen.token }
        fullScreen={ !!isMobileView }
      />
      )} */}
    </PageContentWrapper>
  )
}

export default CompanyTokens

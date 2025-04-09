import React, { useEffect, useState } from 'react'
import {
  makeStyles, useMediaQuery,
} from '@material-ui/core'
import { useSelector } from 'react-redux'
import { DataGrid } from '@material-ui/data-grid'
import { colors } from '../../themes/default'
import CustomDialog from '../../components/ui/CustomDialog'

import CustomButton from '../../components/ui/CustomButton'
import CustomTypography from '../../components/ui/CustomTypography'
import { TOKEN_REFER_NAME } from '../../utils/constants'

const useStyles = makeStyles((theme) => ({
  dialogTitle: {
    fontSize: '30px',
    fontWeight: '700',
    lineHeight: '1.27',
    letterSpacing: '1.2px',
    color: colors.yellow,
  },
  tokenList: {
    margin: '10px',
    height: '520px',
    width: '100%',
  },
  dialogPaper: {
    width: '34%',
    borderRadius: '10px',
    padding: '0px 10px',
    [ theme.breakpoints.down('sm') ]: {
      width: '80%',
      height: 'auto',
    },
    [ theme.breakpoints.down('xs') ]: {
      width: '100%',
      borderRadius: '0px',
      padding: '0px',
      margin: 0,
      height: '100%',
    },
    display: 'flex',
    justifyContent: 'center',
  },
  nextButton: {
    margin: '10px 5px',
  },
  description: {
    marginBottom: '20px',
  },
}))

const DownloadConfirmDialog = ({
  open, onClose, onDownload, title, downloadType,
}) => {
  const classes = useStyles()
  const isMobileView = useMediaQuery((theme) => theme.breakpoints.down('xs'))
  const { tokenNamesList } = useSelector((state) => state.getCompanyTokens)
  const [ griRows, setGridRows ] = useState([])
  const [ selectedTokenIds, setSelectedTokenIds ] = useState([])

  useEffect(() => {
    if (tokenNamesList) {
      const tokenGridList = tokenNamesList.map((token) => ({
        id: token?.custom_token_id,
        tokenName: token?.token_name,
      }))

      setGridRows(tokenGridList)
    }
  }, [ tokenNamesList ])

  const columns = [
    {
      field: 'tokenName',
      headerName: `${ TOKEN_REFER_NAME } Name`,
      width: 500,
      editable: false,
    },
  ]

  return (
    <CustomDialog
      open={ open }
      titleClassName={ classes.dialogTitle }
      title={ title }
      onClose={ onClose }
      PaperProps={ { className: classes.dialogPaper } }
      hasCloseButton
      fullScreen={ !!isMobileView }
    >

      <CustomTypography
        variant='body1'
        className={ classes.description }
        value={ `Please scroll thorugh and select all the ${ TOKEN_REFER_NAME.toLowerCase() }s
        that you want to export the users ${ downloadType } list. ` }
      />

      <div style={ { height: 420, width: '100%' } }>
        <DataGrid
          rows={ griRows }
          columns={ columns }
          checkboxSelection
          pageSize={ 6 }
          rowsPerPageOptions={ [ 6 ] }
          disableColumnMenu
          onSelectionModelChange={ (selectedIds) => { setSelectedTokenIds(selectedIds) } }
        />
      </div>

      <div style={ { display: 'flex', justifyContent: 'flex-end', marginTop: '20px' } }>
        <CustomButton
          disabled={ selectedTokenIds.length < 1 }
          className={ classes.nextButton }
          onClick={ () => onDownload({ selectedTokenIds }) }
        >
          {`Export ${ downloadType } List`}
        </CustomButton>
      </div>
    </CustomDialog>
  )
}

export default DownloadConfirmDialog

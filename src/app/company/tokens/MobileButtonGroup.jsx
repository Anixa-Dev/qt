import React, { useState, useEffect } from 'react'
import { Button, makeStyles } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import ROUTE_PATHS from '../../routes/routesPath'
import { colors } from '../../themes/default'
import MobileFilterDialog from './MobileFilterDialog'
import { companyTokensRequestStart } from '../../redux-saga/redux/token'
import { TOKEN_REFER_NAME } from '../../utils/constants'

const useStyles = makeStyles(() => ({
  button: {
    textTransform: 'none',
    width: '100% !important',
    marginBottom: '16px',
  },
  paperProps: {
    textAlign: 'left',
  },
  backButton: {
    backgroundColor: colors.blackBase,
    color: colors.white,
  },
}))

const MobileButtonGroup = ({
  currentPage, rowsPerPage, setCurrentPage, openDownloadConfirm,
}) => {
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()
  const initialFilter = {
    status: 'all', type: 'all', end_date: 'all', start_date: 'all',
  }
  const [ openFilters, setOpenFilters ] = useState(false)
  const [ filterValue, setFilterValue ] = useState(initialFilter)
  const { companyData } = useSelector((state) => state.companyInfo)

  const onClickReset = () => {
    setFilterValue(initialFilter)
  }

  useEffect(() => {
    setCurrentPage(1)
  }, [ filterValue ])

  useEffect(() => {
    if ((JSON.stringify(filterValue) === JSON.stringify(initialFilter)) && companyData) {
      const companyId = companyData.company_id
      dispatch(companyTokensRequestStart({
        ...initialFilter,
        company_id: companyId,
        page_no: currentPage,
        limit: rowsPerPage,
      }))
    }
  }, [ filterValue, companyData ])

  return (
    <div>
      <Button
        className={ classes.button }
        classes={ { root: 'custom-black-button', label: 'custom-black-button-label' } }
        onClick={ () => history.push(ROUTE_PATHS.CREATE_TOKEN) }
      >
        {`Create ${ TOKEN_REFER_NAME }`}
      </Button>
      <Button
        className={ classes.button }
        classes={ {
          root: 'custom-black-button',
          label: 'custom-black-button-label',
        } }
        onClick={ () => openDownloadConfirm('purchases') }
      >
        Purchases
      </Button>

      <Button
        className={ classes.button }
        classes={ {
          root: 'custom-black-button',
          label: 'custom-black-button-label',
        } }
        onClick={ () => openDownloadConfirm('scans') }
      >
        Scans
      </Button>
      <Button
        className={ classes.button }
        classes={ { root: 'custom-black-button-reversed', label: 'custom-black-button-label-reversed' } }
        onClick={ () => setOpenFilters(true) }
      >
        Filters
      </Button>
      <Button
        className={ classes.button }
        classes={ { root: 'custom-black-button-reversed', label: 'custom-black-button-label-reversed' } }
        onClick={ onClickReset }
      >
        Reset
      </Button>
      <MobileFilterDialog
        open={ openFilters }
        onClose={ () => setOpenFilters(false) }
        setFilterValue={ setFilterValue }
        filterValue={ filterValue }
        currentPage={ currentPage }
        rowsPerPage={ rowsPerPage }
      />
    </div>
  )
}

export default MobileButtonGroup

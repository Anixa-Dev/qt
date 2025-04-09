import React, { useEffect, useState } from 'react'
import { Button, makeStyles } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import CustomSelect from '../../components/ui/CustomSelect'
import ROUTE_PATHS from '../../routes/routesPath'
import { companyTokensStatusValues, typeFilterSelectValues } from '../../utils/selectValues'
import {
  companyTokensRequestStart,
} from '../../redux-saga/redux/token'
import { TOKEN_REFER_NAME } from '../../utils/constants'

const useStyles = makeStyles((theme) => ({
  divStyle: {
    display: 'flex',
    [ theme.breakpoints.down(1040) ]: {
      display: 'block',
      width: '456px',
    },
  },
  customSelect: {
    height: '56px',
    width: '220px',
    padding: '0px',
    borderRadius: '6px',
    marginRight: '16px',
  },
  tokenButton: {
    marginLeft: 'auto',
  },
  filterContainer: {
    display: 'flex',
  },
  buttonContainer: {
    display: 'inline-flex',
    justifyContent: 'space-between',
    width: '100%',
    [ theme.breakpoints.down(1040) ]: {
      marginTop: '16px',
    },
  },
  dFlex: {
    display: 'inline-flex',
  },
  buttonMargin: {
    marginLeft: '5px',
  },
  filterButton: {
    minWidth: '120px !important',
    padding: '16px 30px !important',
  },
}))

const TokenFilters = ({
  currentPage, rowsPerPage, setCurrentPage, openDownloadConfirm,
}) => {
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()
  const initialFilter = {
    status: 'all', type: 'all', end_date: 'all', start_date: 'all',
  }
  const [ filterValue, setFilterValue ] = useState(initialFilter)
  const { companyData } = useSelector((state) => state.companyInfo)
  const { success: copyTokenSuccess } = useSelector((state) => state.duplicateToken)
  const { success: archiveTokenSuccess } = useSelector((state) => state.archiveToken)

  useEffect(() => {
    setCurrentPage(1)
  }, [ filterValue ])

  useEffect(() => {
    if (companyData) {
      const companyId = companyData.company_id
      dispatch(companyTokensRequestStart({
        ...filterValue,
        company_id: companyId,
        page_no: currentPage,
        limit: rowsPerPage,
      }))
    }
  }, [ filterValue, companyData, currentPage ])

  useEffect(() => {
    if (copyTokenSuccess === true || archiveTokenSuccess === true) {
      const companyId = companyData.company_id
      dispatch(companyTokensRequestStart({
        ...filterValue,
        company_id: companyId,
        page_no: currentPage,
        limit: rowsPerPage,
      }))
    }
  }, [ filterValue, companyData, currentPage, copyTokenSuccess, archiveTokenSuccess ])

  const pollingTimer = 40

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (companyData) {
      const companyId = companyData.company_id
      const timer = setTimeout(
        () => companyTokensRequestStart({
          ...filterValue, company_id: companyId, page_no: currentPage, limit: rowsPerPage,
        }),
        pollingTimer * 1000,
      )
      return () => { clearTimeout(timer) }
    }
  }, [])

  return (
    <div className={ classes.divStyle }>
      <div className={ classes.filterContainer }>
        <div>
          <CustomSelect
            label='Status'
            height='56px'
            disableHelperIcon
            className={ classes.customSelect }
            value={ filterValue.status }
            menuItems={ companyTokensStatusValues }
            onChange={ (e) => setFilterValue((prevValue) => ({ ...prevValue, status: e.target.value })) }
          />
        </div>

        <div>
          <CustomSelect
            label='Type'
            height='56px'
            disableHelperIcon
            className={ classes.customSelect }
            value={ filterValue.type }
            menuItems={ typeFilterSelectValues }
            onChange={ (e) => setFilterValue((prevValue) => ({ ...prevValue, type: e.target.value })) }
          />
        </div>
      </div>

      <div className={ classes.buttonContainer }>
        <Button
          classes={ {
            root: 'custom-reset-button',
            label: 'custom-reset-button-label',
          } }
          onClick={ () => setFilterValue(initialFilter) }
          className={ classes.filterButton }
        >
          Reset
        </Button>
        <div className={ classes.dFlex }>
          <div className={ classes.buttonMargin }>
            <Button
              style={ { float: 'right' } }
              classes={ {
                root: 'custom-black-button',
                label: 'custom-black-button-label',
              } }
              className={ classes.filterButton }
              onClick={ () => openDownloadConfirm('purchases') }
            >
              Purchases
            </Button>
          </div>

          <div className={ classes.buttonMargin }>
            <Button
              style={ { float: 'right' } }
              classes={ {
                root: 'custom-black-button',
                label: 'custom-black-button-label',
              } }
              className={ classes.filterButton }
              onClick={ () => openDownloadConfirm('scans') }
            >
              Scans
            </Button>
          </div>
          <div className={ classes.buttonMargin }>
            <Button
              style={ { float: 'right' } }
              classes={ {
                root: 'custom-black-button',
                label: 'custom-black-button-label',
              } }
              onClick={ () => history.push(ROUTE_PATHS.CREATE_TOKEN) }
            >
              {`Create ${ TOKEN_REFER_NAME }`}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TokenFilters

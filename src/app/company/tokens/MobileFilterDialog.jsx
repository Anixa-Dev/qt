import React from 'react'
import { Divider, makeStyles, SwipeableDrawer } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import CustomButton from '../../components/ui/CustomButton'
import CustomTypography from '../../components/ui/CustomTypography'
import { colors } from '../../themes/default'
import CustomSelect from '../../components/ui/CustomSelect'
import { companyTokensStatusValues, typeFilterSelectValues } from '../../utils/selectValues'
import { companyTokensRequestStart } from '../../redux-saga/redux/token'

const useStyles = makeStyles(() => ({
  drawerContainer: {
    height: '100vh',
    padding: '20px',
    display: 'block',
  },
  backButton: {
    marginTop: '40px',
    backgroundColor: colors.blackBase,
    color: colors.white,
  },
  filtersText: {
    marginTop: '64px',
    fontWeight: '700',
    fontSize: '24px',
    lineHeight: '29px',
  },
  divider: {
    margin: '16px 0px',
  },
  customSelect: {
    marginBottom: '32px',
  },
  applyButton: {
    height: '46px',
  },
}))

const MobileFilterDialog = ({
  open, onClose, filterValue, setFilterValue, currentPage, rowsPerPage,
}) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { companyData } = useSelector((state) => state.companyInfo)
  const onClickApply = () => {
    if (companyData) {
      const companyId = companyData.company_id
      dispatch(companyTokensRequestStart({
        ...filterValue,
        company_id: companyId,
        page_no: currentPage,
        limit: rowsPerPage,
      }))
    }
    onClose()
  }

  return (
    <SwipeableDrawer
      open={ open }
      onClose={ onClose }
      anchor='top'
      classes={ { paper: classes.drawerContainer } }
    >
      <CustomButton
        className={ classes.backButton }
        onClick={ onClose }
      >
        Back
      </CustomButton>
      <CustomTypography value='Filters' className={ classes.filtersText } />
      <Divider className={ classes.divider } />
      <CustomSelect
        label='Status'
        height='56px'
        disableHelperIcon
        className={ classes.customSelect }
        value={ filterValue.status }
        menuItems={ companyTokensStatusValues }
        onChange={ (e) => setFilterValue((prevValue) => ({ ...prevValue, status: e.target.value })) }
      />
      <CustomSelect
        label='Type'
        height='56px'
        disableHelperIcon
        className={ classes.customSelect }
        value={ filterValue.type }
        menuItems={ typeFilterSelectValues }
        onChange={ (e) => setFilterValue((prevValue) => ({ ...prevValue, type: e.target.value })) }
      />
      <CustomButton className={ classes.applyButton } fullWidth onClick={ onClickApply }>
        Apply Filters
      </CustomButton>
    </SwipeableDrawer>
  )
}

export default MobileFilterDialog

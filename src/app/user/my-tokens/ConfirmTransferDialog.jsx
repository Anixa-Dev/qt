import React, { useEffect, useState } from 'react'
import {
  Collapse,
  FormControlLabel,
  List, ListItem, ListItemText, makeStyles, Radio, RadioGroup,
} from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import CustomButton from '../../components/ui/CustomButton'
import CustomDialog from '../../components/ui/CustomDialog'
import CustomTypography from '../../components/ui/CustomTypography'
import { colors } from '../../themes/default'
import { fetchWalletAddressRequestStart, fetchWalletAddressReset } from '../../redux-saga/redux/userProfile'
import { addressFormatter, getLabelFromValue } from '../../utils/helper'
import { tokenTypeSelectValues, walletOptions } from '../../utils/dropdown'
import AddBlockchainForm from '../../components/sections/AddBlockchainForm'
import { resetTransferToken, transferTokenRequestStart } from '../../redux-saga/redux/tradeToken'
import CustomBox from '../../components/ui/CustomBox'
import { TOKEN_REFER_NAME } from '../../utils/constants'

const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    width: '34%',
    borderRadius: '10px',
    padding: '0px 10px',
    [ theme.breakpoints.down('md') ]: {
      width: '50%',
    },
    [ theme.breakpoints.down('sm') ]: {
      width: '80%',
    },
    [ theme.breakpoints.down('xs') ]: {
      width: '100%',
      borderRadius: '0px',
      padding: '0px',
    },
  },
  dialogTitle: {
    fontSize: '24px',
    fontWeight: '700',
    lineHeight: '1.27',
    letterSpacing: '1.2px',
    color: colors.yellow,
    marginRight: '26px',
  },
  dialogContainer: {
    textAlign: 'center',
  },
  transferButton: {
    margin: '20px 0px',
    background: colors.blackRussian,
    color: colors.white,
    '&:hover': {
      color: colors.black,
      background: colors.yellow,
    },
  },
  cardOptions: {
    padding: '8px 5px',
  },
  listItem: {
    border: `solid 1px ${ colors.ghostWhite }`,
    borderRadius: '12px',
    margin: '5px 0px',
    '&:hover': {
      border: `solid 1px ${ colors.yellow }`,
    },
  },
  listContainer: {
    maxHeight: '40vh',
    overflow: 'auto',
  },
  headingFirstItem: {
    fontWeight: '600',
  },
  headingItem: {
    padding: '6px',
    marginLeft: '12px',
    fontWeight: '600',
  },
  headingItemStyle: {
    fontWeight: '600',
    marginLeft: 'auto',
  },
  listItemStyles: {
    margin: '5px 0px',
    marginLeft: 'auto',
  },
  emptyArrayText: {
    fontSize: '14px',
    color: colors.doveGray,
    padding: '10px',
    textAlign: 'center',
  },
  addAddressWrapper: {
    paddingTop: '20px',
  },
  errorText: {
    color: colors.helperGray,
    fontSize: '11px',
  },
  titleText: {
    margin: '10px 0px 0px',
  },
}))

const validationSchema = () => (
  yup.object().shape({
    wallet_address: yup.string().required('You must choose an address'),
  })
)

const ConfirmTransferDialog = ({
  open, onClose, tokenObj,
}) => {
  const dispatch = useDispatch()
  const isMobile = window.innerWidth <= 600
  const classes = useStyles()
  const [ openBlockchainSublist, setOpenBlockchainSublist ] = useState({ saved: true, new: false })
  const { data: userWallets } = useSelector((state) => state.fetchWalletAddress)
  const { success: transferSuccess } = useSelector((state) => state.transferToken)

  useEffect(() => {
    if (tokenObj && !userWallets) {
      dispatch(fetchWalletAddressRequestStart({ wallet_type: tokenObj.TokenDetail.blockchain_type }))
    }
    return () => dispatch(fetchWalletAddressReset())
  }, [])

  useEffect(() => {
    if (userWallets && !userWallets.length) {
      setOpenBlockchainSublist({ saved: false, new: true })
    }
  }, [ userWallets ])

  useEffect(() => {
    if (transferSuccess) {
      onClose('transfer-start')
      dispatch(resetTransferToken())
    }
  }, [ transferSuccess ])

  const {
    handleSubmit, values, touched, errors, setFieldValue,
  } = useFormik({
    validationSchema,
    initialValues: {
      wallet_address: '',
    },
    onSubmit: (formValues) => {
      dispatch(transferTokenRequestStart(
        { wallet_address: formValues.wallet_address, user_token_id: tokenObj.user_token_id },
      ))
    },
  })

  return (
    <CustomDialog
      hasCloseButton
      title={ `Transfer ${ TOKEN_REFER_NAME } to Digital Wallet` }
      titleClassName={ classes.dialogTitle }
      PaperProps={ { className: classes.dialogPaper } }
      titlePlacement='center'
      open={ open }
      onClose={ onClose }
      fullScreen={ isMobile }
    >
      {userWallets && (
      <div className={ classes.dialogContainer }>
        {tokenObj && (
        <CustomBox
          title={ `${ tokenObj.TokenDetail.token_name } -
                ${ getLabelFromValue(tokenObj?.TokenDetail.token_type, tokenTypeSelectValues) }
                #${ tokenObj?.token_serial_no }` }
          icon={ tokenObj.TokenDetail.icon_value }
          color={ tokenObj.TokenDetail.icon_color }
          customIcon={ tokenObj.TokenDetail.token_custom_icon }
          iconType={ tokenObj.TokenDetail.token_icon_type }
        />
        )}
        <CustomTypography
          value={ `Choose an address to which this ${ TOKEN_REFER_NAME } will be transferred ` }
          className={ classes.titleText }
        />
        <form onSubmit={ handleSubmit }>
          <List>
            <ListItem
              button
              className={ classes.cardOptions }
              onClick={ () => setOpenBlockchainSublist((prev) => ({ new: !prev.new, saved: !prev.saved })) }
            >
              <ListItemText>Use saved addresses</ListItemText>
              {openBlockchainSublist.saved ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={ openBlockchainSublist.saved }>
              {userWallets.length ? (
                <List className={ classes.listContainer }>
                  <ListItem className={ classes.listItem }>
                    <CustomTypography value='Select' className={ classes.headingFirstItem } />
                    <CustomTypography value='Address' className={ classes.headingItem } />
                    <CustomTypography value='Chain' className={ classes.headingItemStyle } />
                  </ListItem>
                  <RadioGroup value={ values.wallet_address }>
                    {userWallets.map((wallet) => (
                      <ListItem
                        onClick={ () => setFieldValue('wallet_address', wallet.wallet_address) }
                        button
                        key={ wallet.user_wallet_id }
                        className={ classes.listItem }
                      >
                        <FormControlLabel
                          style={ { pointerEvents: 'none' } }
                          value={ wallet.wallet_address }
                          control={ <Radio color='primary' /> }
                          label={ addressFormatter(wallet.wallet_address) }
                        />
                        <CustomTypography
                          value={ getLabelFromValue(wallet.wallet_type, walletOptions) }
                          className={ classes.listItemStyles }
                        />
                      </ListItem>
                    ))}
                  </RadioGroup>
                </List>
              ) : (
                <CustomTypography
                  value='No wallets added! You must add one from your blockchain settings'
                  className={ classes.emptyArrayText }
                />
              )}
            </Collapse>
            <ListItem
              button
              className={ classes.cardOptions }
              onClick={ () => setOpenBlockchainSublist((prev) => ({ new: !prev.new, saved: !prev.saved })) }
            >
              <ListItemText>Add a new address</ListItemText>
              {openBlockchainSublist.new ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={ openBlockchainSublist.new }>
              <div className={ classes.addAddressWrapper }>
                <AddBlockchainForm
                  disableSelect
                  buttonLabel='Add Address'
                  initialSelectValue={ tokenObj[ 'TokenDetail.blockchain_type' ] }
                  onSuccess={ (address) => {
                    setOpenBlockchainSublist({ saved: true, new: false })
                    setFieldValue('wallet_address', address)
                  } }
                  fetchWalletValue={ tokenObj[ 'TokenDetail.blockchain_type' ] }
                />
              </div>
            </Collapse>
          </List>
          {touched.wallet_address && errors.wallet_address
                  && <CustomTypography value={ errors.wallet_address } className={ classes.errorText } />}
          <CustomButton
            className={ classes.transferButton }
            fullWidth={ isMobile }
            type='submit'
          >
            Transfer
          </CustomButton>
        </form>
      </div>
      )}
    </CustomDialog>
  )
}

export default ConfirmTransferDialog

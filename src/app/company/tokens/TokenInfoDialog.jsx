import React, { useState } from 'react'
import {
  Button, Collapse, IconButton, Link, makeStyles,
} from '@material-ui/core'
import CopyToClipboard from 'react-copy-to-clipboard'
import { FacebookShareButton, TwitterShareButton } from 'react-share'
import { ExpandMore } from '@material-ui/icons'
import { colors } from '../../themes/default'
import CustomDialog from '../../components/ui/CustomDialog'
import CustomTypography from '../../components/ui/CustomTypography'
import CustomButton from '../../components/ui/CustomButton'
import {
  CopyIcon,
  FacebookIcon,
  TwitterIcon,
} from '../../assets'
import CustomTextField from '../../components/ui/CustomTextField'
import config from '../../utils/config'
import { getEmbedTokenIframe } from '../../utils/constants'

const useStyles = makeStyles((theme) => ({
  dialogTitle: {
    fontSize: '30px',
    fontWeight: '700',
    lineHeight: '1.27',
    letterSpacing: '1.2px',
    color: colors.yellow,
  },
  dialogQueryContainer: {
    marginBottom: '32px',
  },
  queryName: {
    fontFamily: 'Inter',
    color: colors.lightGray,
    wordBreak: 'break-word',
  },
  collapseWrapper: {
    maxWidth: '60%',
  },
  collapseWrapperIframe: {
    maxWidth: '70%',
  },
  socialIconContainer: {
    display: 'flex',
    gap: '24px',
    marginTop: '13px',
  },
  doneButton: {
    marginBottom: '32px',
    textTransform: 'none',
  },
  scriptTextField: {
    marginTop: '12px',
  },
  queryTitle: {
    fontWeight: '600',
  },
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
  shareButtons: {
    padding: '5px',
    border: `2px solid ${ colors.black }`,
  },
  shareIcons: {
    width: '20px',
    height: '20px',
    color: colors.black,
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shorter,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}))

const TokenInfoDialog = ({
  open, onClose, tokenData, fullScreen,
}) => {
  const classes = useStyles()
  const [ urlCopied, setUrlCopied ] = useState(false)
  const [ tokenCopied, setTokenCopied ] = useState(false)
  // const [ marketplaceCopied, setMarketplaceCopied ] = useState(false)
  const [ collapseState, setCollapseState ] = useState({ marketplace: true, embed: false, token: true })

  const handleCollapseState = (selected) => {
    setCollapseState((prevState) => ({
      ...prevState,
      [ selected ]: !prevState[ selected ],
    }))
  }

  const onUrlCopy = () => {
    setUrlCopied(true)
    setTokenCopied(false)
  }

  const onTokenCopy = () => {
    setUrlCopied(false)
    setTokenCopied(true)
  }

  const embedToken = getEmbedTokenIframe({ tokenId: tokenData?.custom_token_id })

  return (
    <CustomDialog
      open={ open }
      titleClassName={ classes.dialogTitle }
      title={ `${ tokenData.collectible_type } Info` }
      onClose={ onClose }
      PaperProps={ { className: classes.dialogPaper } }
      hasCloseButton
      fullScreen={ fullScreen }
    >
      <div className={ classes.dialogQueryContainer }>
        <div className='display-inline-flex w-100 align-items-center justify-between '>
          <div className='display-inline-flex align-items-center'>
            <CustomTypography value={ `Share ${ tokenData.collectible_type } URL` } className={ classes.queryTitle } />
            <IconButton
              className={ `${ classes.expand } ${ collapseState.token ? classes.expandOpen : {} }` }
              onClick={ () => handleCollapseState('token') }
            >
              <ExpandMore />
            </IconButton>
          </div>
          <CopyToClipboard text={ tokenData?.token_url } onCopy={ onUrlCopy }>
            <CustomButton startIcon={ <CopyIcon /> } variant='text'>{urlCopied ? 'Copied' : 'Copy'}</CustomButton>
          </CopyToClipboard>
        </div>
        <Collapse in={ collapseState.token } unmountOnExit className={ classes.collapseWrapper }>
          <Link
            underline='always'
            href={ tokenData?.token_url }
            className={ classes.queryName }
          >
            {tokenData?.token_url}
          </Link>
        </Collapse>
      </div>
      <div className={ classes.dialogQueryContainer }>
        <div className='display-inline-flex w-100 align-items-center justify-between '>
          <div className='display-inline-flex align-items-center'>
            <CustomTypography
              value={ `Embed ${ tokenData.collectible_type } on your site` }
              className={ classes.queryTitle }
            />
            <IconButton
              className={ `${ classes.expand } ${ collapseState.embed ? classes.expandOpen : {} }` }
              onClick={ () => handleCollapseState('embed') }
            >
              <ExpandMore />
            </IconButton>
          </div>
          <CopyToClipboard text={ embedToken } onCopy={ onTokenCopy }>
            <CustomButton startIcon={ <CopyIcon /> } variant='text'>{tokenCopied ? 'Copied' : 'Copy'}</CustomButton>
          </CopyToClipboard>
        </div>
        <Collapse in={ collapseState.embed } unmountOnExit className={ classes.collapseWrapperIframe }>
          <CustomTypography
            value={ `Easily embed your ${ tokenData.collectible_type } on your own site` }
            className={ classes.queryName }
          />
          <CustomTextField
            className={ classes.scriptTextField }
            multiline
            rows={ 3 }
            disabled
            disableHelperIcon
            value={ embedToken }
          />
        </Collapse>
      </div>
      <div className={ classes.dialogQueryContainer }>
        <CustomTypography value='Share on Social' className={ classes.queryTitle } />
        <div className={ classes.socialIconContainer }>

          <TwitterShareButton
            url={ `${ config.APP_BASE_URL }/token/${ tokenData?.custom_token_id }` }
            onClick={ (e) => e.stopPropagation() }
          >
            <IconButton className={ classes.shareButtons }>
              <TwitterIcon className={ classes.shareIcons } />
            </IconButton>
          </TwitterShareButton>

          <FacebookShareButton
            url={ `${ config.APP_BASE_URL }/token/${ tokenData?.custom_token_id }` }
            onClick={ (e) => e.stopPropagation() }
          >
            <IconButton className={ classes.shareButtons }>
              <FacebookIcon className={ classes.shareIcons } />
            </IconButton>
          </FacebookShareButton>

        </div>
      </div>
      <Button
        className={ classes.doneButton }
        classes={ { root: 'custom-black-button', label: 'custom-black-button-label' } }
        onClick={ onClose }
      >
        Done!
      </Button>
    </CustomDialog>
  )
}

export default TokenInfoDialog

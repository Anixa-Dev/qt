import React, { useState } from 'react'
import { IconButton, makeStyles } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPenToSquare, faMagnifyingGlass, faBell, faCircleInfo,
  faLink, faEnvelope, faEllipsis
  ,
} from '@fortawesome/free-solid-svg-icons'
import CustomTooltip from '../../components/ui/CustomTooltip'
import { colors } from '../../themes/default'
import MoreOptionMenu from './MoreOptionMenu'
import { ADDITIONAL_INFO_REFER_NAME } from '../../utils/constants'

const useStyles = makeStyles((theme) => ({
  iconContainer: {
    width: '380px',
    maxWidth: '40vw',
    display: 'flex',
    float: 'right',
    [ theme.breakpoints.down('sm') ]: {
      minWidth: 'none',
    },
  },
  fontHover: {
    fontSize: '18px',
    '&:hover': {
      '&:first-child': {
        fontSize: '21px',
      },
    },
  },
}))

const CompanyTokenWidgets = ({
  onClickEdit, onClickDownload, onClickEditAdditionalInfo, token,
  onClickShare, onClickInvite, onClickNotify, onClickCopy, onClickArchive,
  onClickOffers, onClickMarketplace, onClickPromotionCodes,

}) => {
  const classes = useStyles()
  const [ moreOptionAnchor, setMoreOptionAnchor ] = useState(null)

  return (
    <div className={ classes.iconContainer }>

      {/* Preview */}
      <CustomTooltip title='Preview'>
        <IconButton
          className={ classes.fontHover }
          onClick={ (e) => onClickDownload(e, token) }
        >
          <FontAwesomeIcon
            icon={ faMagnifyingGlass }
            style={ {
              color: colors.darkGrey,
            } }
          />
        </IconButton>
      </CustomTooltip>

      {/* Edit */}
      <CustomTooltip title='Edit'>
        <IconButton
          className={ classes.fontHover }
          onClick={ (e) => onClickEdit(e, token) }
        >
          <FontAwesomeIcon
            icon={ faPenToSquare }
            style={ {
              color: token.editable
                ? colors.lightBlue
                : colors.darkGrey,
            } }
          />
        </IconButton>
      </CustomTooltip>

      {/* Share */}
      <CustomTooltip title='Share'>
        <IconButton
          className={ classes.fontHover }
          onClick={ (e) => onClickShare(e, token) }
        >
          <FontAwesomeIcon
            icon={ faLink }
            style={ {
              color: colors.darkGrey,
            } }
          />
        </IconButton>
      </CustomTooltip>

      {/* Digital Experience */}
      <CustomTooltip title={ `${ ADDITIONAL_INFO_REFER_NAME }` } disabled={ !token?.has_additional_info }>
        <IconButton
          onClick={ (e) => onClickEditAdditionalInfo(e, token) }
          className={ classes.fontHover }
          disabled={ !token?.has_additional_info }
        >
          <FontAwesomeIcon
            icon={ faCircleInfo }
            style={ {
              color: !token?.has_additional_info
                ? colors.border
                : colors.darkGrey,
            } }
          />
        </IconButton>
      </CustomTooltip>

      {/* Invite */}
      <CustomTooltip title='Invite'>
        <IconButton
          className={ classes.fontHover }
          onClick={ (e) => onClickInvite(e, token) }
        >
          <FontAwesomeIcon
            icon={ faEnvelope }
            style={ {
              color: colors.darkGrey,
            } }
          />
        </IconButton>
      </CustomTooltip>

      {/* Notify */}
      <CustomTooltip title='Notify'>
        <IconButton
          className={ classes.fontHover }
          onClick={ () => onClickNotify(token) }
        >
          <FontAwesomeIcon
            icon={ faBell }
            style={ {
              color: colors.darkGrey,
            } }
          />
        </IconButton>
      </CustomTooltip>

      <CustomTooltip title='More'>
        <IconButton
          className={ classes.fontHover }
          onClick={ (e) => setMoreOptionAnchor(e.target) }
        >
          <FontAwesomeIcon
            icon={ faEllipsis }
            style={ {
              color: colors.darkGrey,
            } }
          />
        </IconButton>
      </CustomTooltip>
      <MoreOptionMenu
        token={ token }
        anchor={ moreOptionAnchor }
        setAnchor={ setMoreOptionAnchor }
        onClickCopy={ onClickCopy }
        onClickArchive={ onClickArchive }
        onClickOffers={ onClickOffers }
        onClickMarketplace={ onClickMarketplace }
        onClickPromotionCodes={ onClickPromotionCodes }
      />
    </div>
  )
}

export default CompanyTokenWidgets

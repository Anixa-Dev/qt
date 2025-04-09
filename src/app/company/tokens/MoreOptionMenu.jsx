import React from 'react'
import {
  Divider, List, ListItem, makeStyles,
} from '@material-ui/core'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCopy, faGift, faStore, faTrashCan, faTrashCanArrowUp, faTags,
} from '@fortawesome/free-solid-svg-icons'
import CustomMenu from '../../components/ui/CustomMenu'
import CustomTypography from '../../components/ui/CustomTypography'
import { colors } from '../../themes/default'

const useStyles = makeStyles(() => ({
  menuContainer: {
    margin: '0px 10px',
    borderRadius: '7px',
    width: '200px',
  },
  menuList: {
    paddingBottom: '0px',
    paddingTop: '0px',
  },
  listContainer: {
    padding: '0px',
  },
  listItems: {
    display: 'inline-flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
  },
  itemLabel: {
    fontSize: '15px',
    marginRight: '10px',
    marginLeft: '10px',
  },
}))

const MoreOptionMenu = ({
  anchor, setAnchor, token, onClickCopy, onClickArchive, onClickOffers,
  onClickMarketplace, onClickPromotionCodes,
}) => {
  const classes = useStyles()

  return (
    <CustomMenu
      anchorEl={ anchor }
      onClose={ () => setAnchor(null) }
      paperClassName={ classes.menuContainer }
      listClassName={ classes.menuList }
    >
      <List className={ classes.listContainer }>
        {/* Clone Card */}
        <ListItem
          button
          onClick={ () => {
            onClickCopy(token)
            setAnchor(null)
          } }
          className={ classes.listItems }
        >
          <CustomTypography value='Clone Card' className={ classes.itemLabel } />
          <FontAwesomeIcon
            icon={ faCopy }
            style={ {
              color: colors.darkGrey,
            } }
          />
        </ListItem>

        {/* Offers & Gift Cards */}
        <ListItem
          button
          onClick={ (e) => {
            onClickOffers(e, token)
            setAnchor(null)
          } }
          className={ classes.listItems }
        >
          <CustomTypography value='Offers & Gift Cards' className={ classes.itemLabel } />
          <FontAwesomeIcon
            icon={ faGift }
            style={ {
              color: colors.darkGrey,
            } }
          />
        </ListItem>

        {/* Promotion Codes */}
        <ListItem
          button
          onClick={ (e) => {
            onClickPromotionCodes(e, token)
            setAnchor(null)
          } }
          className={ classes.listItems }
        >
          <CustomTypography value='Promotion Codes' className={ classes.itemLabel } />
          <FontAwesomeIcon
            icon={ faTags }
            style={ {
              color: colors.darkGrey,
            } }
          />
        </ListItem>

        {/* Secondary Market */}
        <ListItem
          disabled={ !token?.has_secondary_market }
          button
          onClick={ () => {
            onClickMarketplace(token)
            setAnchor(null)
          } }
          className={ classes.listItems }
        >
          <CustomTypography value='Secondary Market' className={ classes.itemLabel } />
          <FontAwesomeIcon
            icon={ faStore }
            style={ {
              color: !token?.has_secondary_market
                ? colors.border
                : colors.darkGrey,
            } }
          />
        </ListItem>

        {/* Archive */}
        <ListItem
          button
          onClick={ () => {
            onClickArchive(token)
            setAnchor(null)
          } }
          className={ classes.listItems }
        >
          <CustomTypography value={ token?.archived ? 'Unarchive' : 'Archive' } className={ classes.itemLabel } />
          <FontAwesomeIcon
            icon={ token?.archived ? faTrashCanArrowUp : faTrashCan }
            style={ {
              color: token?.archived ? colors.tabBlue : colors.darkRed,
            } }
          />
        </ListItem>
        <Divider />
      </List>
    </CustomMenu>
  )
}

MoreOptionMenu.defaultProps = {
  anchor: null,
  setAnchor: () => null,
}

MoreOptionMenu.propTypes = {
  anchor: PropTypes.instanceOf(Element),
  setAnchor: PropTypes.func,
}

export default MoreOptionMenu

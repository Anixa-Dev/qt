'use client';

import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Avatar,
  styled,
} from '@mui/material';
import { useRouter, usePathname } from 'next/navigation';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import PropTypes from 'prop-types';

import UserMenu from './UserMenu';
import { colors } from '../../themes/default';
import { ROUTE_PATHS } from '../../routes/routesPath';
import { numberWithCommas } from '../../utils/helper';

const TabButtonContainer = styled(Box)({
  display: 'flex',
  alignItems: 'baseline',
  gap: '28px',
  marginLeft: '6.5%',
});

const TabContainer = styled(Box)({
  '&:hover': {
    '& .dropdown': {
      display: 'block',
    },
    '& .expand-icon': {
      transform: 'rotate(180deg)',
    },
    '& .tab-button': {
      color: colors.yellow,
    },
  },
});

const TabButton = styled(Button)({
  color: colors.white,
  paddingLeft:'2px',
  paddingRight:'2px',
  '&:hover': {
    color: colors.yellow,
  },
});

const CreditLabel = styled('span')({
  color: colors.yellow,
  paddingLeft:'2px',
  paddingRight:'2px',
  minWidth: '0px',
  margin: '0px 5px',
  fontSize: '16px',
  fontWeight: 600,
});

const StyledDivider = styled(Divider)({
  backgroundColor: colors.white,
  height: '2px',
});

const Dropdown = styled(Box)({
  display: 'none',
  position: 'absolute',
  backgroundColor: colors.white,
  minWidth: '160px',
  boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
  zIndex: 2,
  marginTop: '0px',
  borderRadius: '7px',
});

const ListContainer = styled(List)({
  padding: '0px',
});

const ListItemStyled = styled(ListItem)({
  padding: '10px 25px',
});

const ItemLabel = styled(ListItemText)({
  '& .MuiListItemText-primary': {
    fontSize: '14px',
  },
});

const ExpandIcon = styled(ArrowDropDownIcon)({
  transform: 'rotate(0deg)',
  fontSize: '26px !important',
  transition: 'transform 0.2s',
});

const StyledAvatar = styled(Avatar)({
  margin: '0px auto',
  color: colors.black,
  backgroundColor: colors.disabledGray,
  width: '36px',
  height: '36px',
});

const UserOptions = styled(Box)({
  display: 'flex',
  marginLeft: 'auto',
  gap: '24px',
});

const NavOptions = ({ tabsToShow }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [openUserMenu, setOpenUserMenu] = useState(null);
  const { userData } = useSelector((state) => state.userInfo);
  console.log('userData', userData);
  const { companyData } = useSelector((state) => state.companyInfo);
  const firstName = userData?.first_name;
  const lastName = userData?.last_name;

  const onClickTab = (_, tab) => {
    if (tab.link) router.push(tab.link);
  };

  return (
    <>
      <TabButtonContainer>
        {tabsToShow.map((tab) => (
          <TabContainer key={tab.id}>
            <TabButton
              onClick={(e) => onClickTab(e, tab)}
              endIcon={
                tab?.subItems ? (
                  <ExpandIcon className="expand-icon" />
                ) : null
              }
              className="tab-button"
              variant="text"
            >
              {tab.label}
            </TabButton>
            {pathname === tab.link && <StyledDivider />}
            <Dropdown className="dropdown">
              {tab?.subItems?.map((item, index) => (
                <div key={item.id}>
                  <ListContainer>
                    <ListItemStyled
                      button="true"
                      onClick={() => router.push(item.link)}
                    >
                      <ItemLabel primary={item.label} />
                    </ListItemStyled>
                    {index !== tab?.subItems.length - 1 && <Divider />}
                  </ListContainer>
                </div>
              ))}
            </Dropdown>
          </TabContainer>
        ))}
      </TabButtonContainer>

      <UserOptions>
        {companyData && (
          <TabButton
            variant="text"
            onClick={() => {
              router.push(ROUTE_PATHS.COMPANY_CREDITS);
            }}
          >
            {'CREDITS: '}
            <CreditLabel>
              {numberWithCommas(companyData?.credits) || 0}
            </CreditLabel>
          </TabButton>
        )}
        <IconButton
          onClick={(e) => setOpenUserMenu(e.target)}
          sx={{ padding: 0 }}
        >
          {userData && (
            <StyledAvatar>
              {userData?.profile_pic ? (
                <Image
                  src={userData.profile_pic}
                  alt="profile-pic"
                  width={36}
                  height={36}
                />
              ) : (
                firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase()
              )}
            </StyledAvatar>
          )}
        </IconButton>
        <UserMenu
          anchor={openUserMenu}
          setAnchor={setOpenUserMenu}
          userData={userData}
        />
      </UserOptions>
    </>
  );
};

NavOptions.propTypes = {
  tabsToShow: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      link: PropTypes.string,
      subItems: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          link: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
};

export default NavOptions; 
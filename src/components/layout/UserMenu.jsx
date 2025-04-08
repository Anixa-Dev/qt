'use client';

import React, { useState, useEffect } from 'react';
import {
  Avatar,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Box,
  Typography,
  styled,
  IconButton,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { AccountCircle } from '@mui/icons-material';
import { logoutRequestStart } from '../../redux-saga/redux/actions';
import { getToken, getUserDetails, removeToken } from '../../utils/helper';
import { colors } from '../../themes/default';
import { ROUTE_PATHS } from '@/routes/routesPath';

const PROFILE_PIC_SIZE = 70;

const StyledMenu = styled(Menu)({
  '& .MuiPaper-root': {
    margin: '10px 0px 0px 15px',
    borderRadius: '7px',
    width: '200px',
  },
});

const MenuList = styled(List)({
  paddingBottom: '0px',
});

const LogoutButton = styled(Button)({
  width: '100%',
  padding: '12px 25px',
  backgroundColor: colors.ghostWhite,
  '&:hover': {
    backgroundColor: colors.ghostWhite,
  },
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

const UserInfoContainer = styled(Box)({
  textAlign: 'center',
  padding: '10px',
});

const StyledAvatar = styled(Avatar)({
  margin: '0px auto',
  color: colors.black,
  backgroundColor: colors.disabledGray,
  width: `${PROFILE_PIC_SIZE}px`,
  height: `${PROFILE_PIC_SIZE}px`,
  cursor: 'pointer',
  position: 'relative',
  border: `1px solid ${colors.disabledGray}`,
});

const UserNameText = styled(Typography)({
  fontWeight: '500',
  marginTop: '10px',
  wordBreak: 'break-word',
});

const EmailText = styled(Typography)({
  fontSize: '12px',
});

const ChangePicOverlay = styled(Typography)({
  position: 'absolute',
  fontSize: '12px',
  fontWeight: 'bold',
  textAlign: 'center',
  background: '#ffffffdd',
  bottom: '0px',
  width: '100%',
  height: '25%',
});

const sampleData = {
  companyListItems: [
    {
      id: 1,
      label: 'My Profile',
      href: ROUTE_PATHS.USER_PROFILE,
    },
    {
      id: 2,
      label: 'My Company',
      href: ROUTE_PATHS.COMPANY_HOME,
    },
    {
      id: 3,
      label: 'Financial Settings',
      href: ROUTE_PATHS.COMPANY_BANKING_DETAILS,
    },
    {
      id: 4,
      label: 'Activity',
      href: ROUTE_PATHS.USER_TRANSACTIONS,
    },
  ],
  userListItems: [
    {
      id: 1,
      label: 'My Profile',
      href: ROUTE_PATHS.USER_PROFILE,
    },
    {
      id: 2,
      label: 'Financial Settings',
      href: ROUTE_PATHS.USER_BANKING_DETAILS,
    },
    {
      id: 3,
      label: 'Activity',
      href: ROUTE_PATHS.USER_TRANSACTIONS,
    },
  ],
};

const UserMenu = ({ anchor, setAnchor, userData }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [itemsToShow, setItemsToShow] = useState([]);
  const { userListItems, companyListItems } = sampleData;
  const { companyData } = useSelector((state) => state.companyInfo);
  const firstName = userData?.first_name;
  const lastName = userData?.last_name;

  const onLogout = () => {
    dispatch(logoutRequestStart());
    removeToken();
    router.push(ROUTE_PATHS.LOGIN);
  };

  useEffect(() => {
    if (companyData) {
      setItemsToShow(companyListItems);
    } else {
      setItemsToShow(userListItems);
    }
  }, [companyData]);

  return (
    <StyledMenu
      anchorEl={anchor}
      onClose={() => setAnchor(null)}
      open={Boolean(anchor)}
    >
      {userData && (
        <UserInfoContainer>
          <StyledAvatar onClick={() => router.push(ROUTE_PATHS.USER_PROFILE)}>
            {userData?.profile_pic ? (
              <Image
                src={userData.profile_pic}
                alt="profile-pic"
                width={PROFILE_PIC_SIZE}
                height={PROFILE_PIC_SIZE}
              />
            ) : (
              firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase()
            )}
            <ChangePicOverlay>Edit</ChangePicOverlay>
          </StyledAvatar>
          <UserNameText>{`${firstName} ${lastName}`}</UserNameText>
          <EmailText>{userData?.email}</EmailText>
        </UserInfoContainer>
      )}
      <Divider />
      <MenuList>
        {itemsToShow.map((item) => (
          <div key={item.id}>
            <ListItemStyled
              button='true'
              onClick={() => router.push(item.href)}
            >
              <ItemLabel primary={item.label} />
            </ListItemStyled>
            <Divider />
          </div>
        ))}
      </MenuList>
      <LogoutButton onClick={onLogout}>
        <ItemLabel primary="Logout" />
      </LogoutButton>
    </StyledMenu>
  );
};

UserMenu.defaultProps = {
  anchor: null,
  setAnchor: () => null,
  userData: null,
};

export default UserMenu; 
'use client';

import React, { useState } from 'react';
import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Drawer,
  Box,
  Typography,
  styled,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { Close, ExpandMore, Menu } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import PropTypes from 'prop-types';

import { CounterTenMobileDark } from '../../assets';
import { ROUTE_PATHS } from '../../routes/routesPath';
import { logoutRequestStart } from '../../redux-saga/redux/user';
import { isLoggedIn } from '../../utils/helper';
import { colors } from '../../themes/default';

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: 'calc(100% - 32px)',
    padding: '16px',
  },
}));

const DrawerWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: typeof window !== 'undefined' && window.innerHeight > 700 ? '100%' : 'auto',
  justifyContent: 'space-between',
  gap: '100px',
}));

const ListContainer = styled(List)({
  fontFamily: 'Inter',
  marginBottom: '50px',
});

const StyledListItem = styled(ListItem)({
  fontWeight: '600',
  justifyContent: 'flex-end',
  fontSize: '20px',
  lineHeight: '24px',
});

const SubListItem = styled(ListItem)({
  justifyContent: 'flex-end',
  marginRight: '20px',
  fontSize: '18px',
});

const ListItemContainer = styled(Box)({
  marginBottom: '25px',
});

const ExpandIcon = styled(ExpandMore)(({ theme, expanded }) => ({
  marginLeft: '5px',
  transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const UserInfoContainer = styled(Box)({
  textAlign: 'right',
  padding: '10px',
});

const StyledAvatar = styled(Avatar)({
  marginLeft: 'auto',
  color: colors.black,
  backgroundColor: colors.disabledGray,
  width: '100px',
  height: '100px',
  position: 'relative',
  border: `1px solid ${colors.disabledGray}`,
});

const UserNameText = styled(Typography)({
  fontWeight: '500',
  marginTop: '10px',
  wordBreak: 'break-word',
  color: colors.black,
});

const EmailText = styled(Typography)({
  fontSize: '12px',
});

const ChangePicOverlay = styled(Typography)({
  position: 'absolute',
  fontSize: '0.8rem',
  fontWeight: 'bold',
  textAlign: 'center',
  background: '#ffffffdd',
  bottom: '0px',
  width: '100%',
  height: '25%',
  alignSelf: 'center',
});

const MobileHeader = ({ tabsToShow, isEmbedToken = false }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [collapseState, setCollapseState] = useState({});
  const { userData } = useSelector((state) => state.userInfo);
  const firstName = userData?.first_name;
  const lastName = userData?.last_name;

  const onClickItems = (link) => {
    if (link) {
      router.push(link);
      setMobileMenu(false);
    }
  };

  const onLogout = () => {
    dispatch(logoutRequestStart());
    router.push(ROUTE_PATHS.LOGIN);
  };

  const onClickExpand = (id) => {
    setCollapseState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const onHeaderLogoClick = () => {
    if (isLoggedIn()) {
      router.push(ROUTE_PATHS.HOME);
    } else {
      router.push(ROUTE_PATHS.LOGIN);
    }
  };

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <IconButton onClick={onHeaderLogoClick}>
          <Image 
            src="/images/CounterTenMobileDark.png"
            alt="CounterTen Logo" 
            width={120} 
            height={40} 
          />
        </IconButton>

        {!isEmbedToken && (
          <IconButton onClick={() => setMobileMenu((prevState) => !prevState)}>
            <Menu />
          </IconButton>
        )}
      </Box>

      {!isEmbedToken && (
        <StyledDrawer
          anchor="right"
          open={mobileMenu}
          onClose={() => setMobileMenu(false)}
        >
          <DrawerWrapper>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <IconButton onClick={onHeaderLogoClick}>
                <Image 
                  src="/images/CounterTenMobileDark.png"
                  alt="CounterTen Logo" 
                  width={120} 
                  height={40} 
                />
              </IconButton>
              <IconButton onClick={() => setMobileMenu((prevState) => !prevState)}>
                <Close />
              </IconButton>
            </Box>

            <Box>
              {isLoggedIn() && userData && (
                <UserInfoContainer>
                  <StyledAvatar onClick={() => router.push(ROUTE_PATHS.USER_PROFILE)}>
                    {userData?.profile_pic ? (
                      <Image
                        src={userData.profile_pic}
                        alt="profile-pic"
                        width={100}
                        height={100}
                      />
                    ) : (
                      firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase()
                    )}
                    <ChangePicOverlay>Edit</ChangePicOverlay>
                  </StyledAvatar>
                  <UserNameText>
                    {`${firstName} ${lastName}`}
                  </UserNameText>
                  <EmailText>{userData?.email}</EmailText>
                </UserInfoContainer>
              )}

              <ListContainer>
                {isLoggedIn() ? (
                  <>
                    {tabsToShow.map((tab) => (
                      <ListItemContainer key={tab.id}>
                        <StyledListItem
                          component="div"
                          onClick={() => (tab.link ? onClickItems(tab.link) : onClickExpand(tab.id))}
                        >
                          <ListItemText primary={tab.label} />
                          {tab.subItems && (
                            <ExpandIcon expanded={collapseState[tab.id]} />
                          )}
                        </StyledListItem>
                        {tab.subItems && tab.subItems.length > 0 && (
                          <Collapse in={collapseState[tab.id]}>
                            <List>
                              {tab.subItems.map((subItem) => (
                                <SubListItem
                                  component="div"
                                  key={subItem.id}
                                  onClick={() => onClickItems(subItem.link)}
                                >
                                  <ListItemText primary={subItem.label} />
                                </SubListItem>
                              ))}
                            </List>
                          </Collapse>
                        )}
                      </ListItemContainer>
                    ))}
                    <StyledListItem
                      component="div"
                      onClick={onLogout}
                    >
                      <ListItemText primary="Sign Out" />
                    </StyledListItem>
                  </>
                ) : (
                  <>
                    <StyledListItem
                      component="div"
                      onClick={() => onClickItems(ROUTE_PATHS.LOGIN)}
                    >
                      <ListItemText primary="Login" />
                    </StyledListItem>
                    <StyledListItem
                      component="div"
                      onClick={() => onClickItems(ROUTE_PATHS.SIGNUP)}
                    >
                      <ListItemText primary="Sign Up" />
                    </StyledListItem>
                  </>
                )}
              </ListContainer>
            </Box>
          </DrawerWrapper>
        </StyledDrawer>
      )}
    </>
  );
};

MobileHeader.propTypes = {
  tabsToShow: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      link: PropTypes.string,
      subItems: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          label: PropTypes.string.isRequired,
          link: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
  isEmbedToken: PropTypes.bool,
};

MobileHeader.defaultProps = {
  isEmbedToken: false,
};

export default MobileHeader; 
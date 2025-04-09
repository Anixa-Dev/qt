"use client"
import React from 'react'
import { Breadcrumbs, IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useLocation, useNavigate } from 'react-router-dom'
import { HomeIcon } from '../../assets'
import { colors } from '../../themes/default'
import CustomTypography from './CustomTypography'
import { PURCHASE_REFER_NAME, TOKEN_REFER_NAME } from '../../utils/constants'
import { ROUTE_PATHS } from '@/routes/routesPath'

const RouteContainer = styled('div')({
  color: colors.dimGray,
  display: 'flex',
  alignItems: 'center',
})

const StyledIconButton = styled(IconButton)({
  marginRight: '12px',
  padding: '0px',
})

const RouteLink = styled(CustomTypography)({
  fontSize: '14px',
  fontWeight: '600',
  margin: '0px 20px',
  lineHeight: '22px',
  color: '#0000008a',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  },
})

const ActiveRoute = styled(CustomTypography)({
  fontSize: '14px',
  fontWeight: '700',
  color: colors.yellow,
  margin: '0px 20px',
  lineHeight: '22px',
})

const linkMapper = {
  '': ROUTE_PATHS.USER_HOME,
  user: ROUTE_PATHS.USER_HOME,
  company: ROUTE_PATHS.COMPANY_HOME,
  tokens: ROUTE_PATHS.COMPANY_TOKENS,
  'my-tokens': ROUTE_PATHS.MY_TOKENS,
  marketplace: ROUTE_PATHS.MARKETPLACE,
  transactions: ROUTE_PATHS.USER_TRANSACTIONS,
  token: ROUTE_PATHS.COMPANY_TOKENS,
  'send-invite/:id': ROUTE_PATHS.SEND_INVITE,
  'promotion-codes/:id': ROUTE_PATHS.PROMOTION_CODES,
  'offers/:id': ROUTE_PATHS.OFFERS,
}

const pathName = {
  '': 'Home',
  user: 'User',
  company: 'Company',
  tokens: `${TOKEN_REFER_NAME}s`,
  'my-tokens': `${PURCHASE_REFER_NAME}s`,
  trade: 'Trade',
  marketplace: 'Marketplace',
  profile: 'Profile',
  'banking-details': 'Banking Details',
  credits: 'Purchase Credits',
  'primary-contact': 'Primary Contact',
  'blockchain-details': 'Blockchain Settings',
  transactions: 'Transactions',
  'nft-me': `${TOKEN_REFER_NAME} Me Collections`,
  token: 'Token',
  'send-invite': 'Send Invite',
  'promotion-codes': 'Promotion Codes',
  offers: 'Offers',
}

const VariablePath = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const path = pathname.split('/')
  
  const arrayToShow = () => {
    const result = []
    path.map((route, index) => (
      result.push({ path: pathName[route], id: index + 1, href: linkMapper[route] })
    ))
    return result
  }

  return (
    <RouteContainer>
      <StyledIconButton><HomeIcon /></StyledIconButton>
      <Breadcrumbs>
        {arrayToShow().map((route) => (
          route.id !== path.length ? (
            <RouteLink
              value={route.path}
              key={route.id}
              onClick={() => navigate(route.href)}
            />
          ) : (
            <ActiveRoute
              value={route.path}
              key={route.id}
            />
          )
        ))}
      </Breadcrumbs>
    </RouteContainer>
  )
}

export default VariablePath

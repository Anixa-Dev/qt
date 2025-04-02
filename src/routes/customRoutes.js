'use client'
/* eslint-disable complexity */
import React, { useEffect, useState } from 'react'
import { useMediaQuery } from '@mui/material'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import CustomPageLoader from '../components/ui/CustomPageLoader'
import { getToken, getUserDetails } from '../utils/helper'
import routes from './routeList'
import { ROUTE_PATH_SHORTHANDS as ROUTE_PATHS } from './routesPath'
import {
  userInfoRequestStart, companyInfoRequestStart, showErrorMessage,
} from '../redux-saga/redux/actions'
import config from '../utils/config'

const HeaderAndFooter = ({
  component: Component, noHeader, navType, noMobileFooter, noFooter = false,
}) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  const { tokenDetail: editData, loading } = useSelector((state) => state.getTokenDetail)
  const { passData, loading: passDataLoading } = useSelector((state) => state.getPassDetails)
  const [ hideHeader, setHideHeader ] = useState(false)
  const [ hideFooter, setHideFooter ] = useState(false)
  const pathname = usePathname()
  const isPurchasePage = pathname.split('/')[ 2 ] === ROUTE_PATHS.CONFIRM_PURCHASE.split('/')[ 2 ]
  const isAdditionalInfoPage = pathname.split('/')[ 1 ] === ROUTE_PATHS.ADDITIONAL_INFO.split('/')[ 1 ]

  useEffect(() => {
    if (isAdditionalInfoPage) {
      if ((passDataLoading !== null && !passDataLoading)) {
        setHideFooter(!passData?.userPassDetail?.[ 'CustomTokenDetail.additional_info_default_layout' ])
        setHideHeader(!passData?.userPassDetail?.[ 'CustomTokenDetail.additional_info_default_layout' ])
      } else {
        setHideFooter(true)
        setHideHeader(true)
      }
    }
  }, [ passData ])

  useEffect(() => {
    if (isPurchasePage) {
      if ((loading !== null && !loading)) {
        setHideFooter(editData?.hide_footer)
        setHideHeader(editData?.hide_header)
      } else {
        setHideFooter(true)
        setHideHeader(true)
      }
    }
  }, [ editData ])

  return (
    <>
      {(!hideHeader) && !noHeader && <Header navType={ navType } />}
      <CustomPageLoader><Component /></CustomPageLoader>
      {!hideFooter && !noFooter && (!noMobileFooter || !isMobile) && <Footer navType={ navType } />}
    </>
  )
}

const getUserAndCompanyDetails = () => {
  const userDetails = getUserDetails()
  const dispatch = useDispatch()
  const { loading: userInfoLoading, userData, error: userDataError } = useSelector((state) => state.userInfo)
  const {
    loading: companyInfoLoading,
    companyData, error: companyLoadError,
  } = useSelector((state) => state.companyInfo)
  if ([ 'login', 'guest' ].includes(userDetails?.type)
  && !userInfoLoading && !userData && !userDataError) dispatch(userInfoRequestStart())
  if ([ 'login', 'guest' ].includes(userDetails?.type)
  && !companyInfoLoading && !companyData && !companyLoadError) dispatch(companyInfoRequestStart())
}

const NewValidator = ({ component: Component, path, ...rest }) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const token = getToken()
  let userDetails
  let pathToComponent = path

  // to manage array path viz. user profile settings pages
  if (path instanceof Array) [ pathToComponent ] = path

  if (token) {
    userDetails = getUserDetails()
    getUserAndCompanyDetails(userDetails)
  }
  const { companyData } = useSelector((state) => state.companyInfo)
  const dispatch = useDispatch()

  if (!token) {
    router.push(`${ ROUTE_PATHS.LOGIN }?return_url=${ pathname }`)
    return null
  } else if (
    userDetails?.type !== 'guest'
    && !userDetails.emailVerified
    && pathToComponent !== ROUTE_PATHS.EMAIL_VERIFICATION
  ) {
    router.push(ROUTE_PATHS.EMAIL_VERIFICATION)
    return null
  } else if (pathToComponent.split('/')[ 1 ] === 'company' && !userDetails.hasCompany) {
    router.push(ROUTE_PATHS.ADD_COMPANY)
    return null
  } else {
    switch (pathToComponent) {
      case ROUTE_PATHS.ADD_COMPANY: {
        if (userDetails.hasCompany) {
          router.push(ROUTE_PATHS.COMPANY_HOME)
          return null
        }
        return <HeaderAndFooter { ...rest } component={ Component } />
      }

      case ROUTE_PATHS.CREATE_TOKEN: {
        if (config.REACT_APP_USE_SQUARE_PAYMENT_GATEWAY === 'true') {
          if (companyData && !companyData?.plaid_account_id) {
            router.push(ROUTE_PATHS.COMPANY_BANKING_DETAILS)
            dispatch(showErrorMessage({
              msg: 'Please add company Banking Details to Create a Token',
            }))
            return null
          }
          return <HeaderAndFooter { ...rest } component={ Component } />
        } else {
          if (companyData && !companyData.stripe_acc_status) {
            router.push(ROUTE_PATHS.COMPANY_BANKING_DETAILS)
            dispatch(showErrorMessage({
              msg: 'Please add company Banking Details to Create a Token',
            }))
            return null
          }
          return <HeaderAndFooter { ...rest } component={ Component } />
        }
      }

      case ROUTE_PATHS.EMAIL_VERIFICATION: {
        if (userDetails.emailVerified) {
          router.push(ROUTE_PATHS.USER_HOME)
          return null
        }
        return <HeaderAndFooter { ...rest } component={ Component } />
      }

      default: {
        if (userDetails.type === 'signup') {
          router.push(ROUTE_PATHS.LOGIN)
          return null
        }
        return <HeaderAndFooter { ...rest } component={ Component } />
      }
    }
  }
}

const Redirector = ({
  component: Component, path, redirectToDashboard, ...rest
}) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const isReturnTo = searchParams?.get('return_url')
  const token = getToken()
  const userDetails = getUserDetails()
  const { tokenData, loading } = useSelector((state) => state.getSingleToken)
  const [ hideHeader, setHideHeader ] = useState(false)
  const [ hideFooter, setHideFooter ] = useState(false)
  const isSalePage = path === ROUTE_PATHS.BUY_TOKEN || ROUTE_PATHS.EMBED_TOKEN

  useEffect(() => {
    if (isSalePage) {
      setHideHeader(tokenData?.hide_header)
      setHideFooter(tokenData?.hide_footer)
    }
  }, [ ROUTE_PATHS, tokenData ])

  if (token) {
    getUserAndCompanyDetails(userDetails)
  }
  const userType = userDetails?.type

  if (path === ROUTE_PATHS.HOME && userType === 'login') {
    if (userDetails?.hasCompany) {
      router.push(ROUTE_PATHS.COMPANY_TOKENS)
      return null
    }
    router.push(ROUTE_PATHS.MY_TOKENS)
    return null
  }
  if ((path === ROUTE_PATHS.LOGIN || path === ROUTE_PATHS.SIGNUP) && isReturnTo && userType === 'login') {
    router.push(isReturnTo)
    return null
  }
  if (token && userType === 'login' && redirectToDashboard) {
    router.push(ROUTE_PATHS.HOME)
    return null
  }

  if (isSalePage && loading) {
    return (
      <HeaderAndFooter
        { ...rest }
        component={ Component }
        noHeader
        noFooter
      />
    )
  }

  return (
    <HeaderAndFooter
      { ...rest }
      component={ Component }
      noHeader={ hideHeader || rest?.noHeader }
      noFooter={ hideFooter || rest?.noFooter }
    />
  )
}

const CustomRoutes = ({ children }) => {
  const router = useRouter()
  const pathname = usePathname()
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  const [currentRoute, setCurrentRoute] = useState(null)

  useEffect(() => {
    const route = routes.find((r) => {
      if (Array.isArray(r.path)) {
        return r.path.includes(pathname)
      }
      return r.path === pathname
    })

    setCurrentRoute(route)
  }, [pathname])

  if (!currentRoute) {
    return null
  }

  const { noHeader, noFooter, noMobileFooter } = currentRoute

  return (
    <div>
      {!noHeader && <Header />}
      <main>{children}</main>
      {!noFooter && (!isMobile || !noMobileFooter) && <Footer />}
    </div>
  )
}

export default CustomRoutes

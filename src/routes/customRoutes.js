/* eslint-disable complexity */
import React, { useEffect, useState } from 'react'
import { useMediaQuery } from '@material-ui/core'
import {
  Redirect, Route, Switch, useLocation,
} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/header'
import CustomPageLoader from '../components/ui/CustomPageLoader'
import { getToken, getUserDetails } from '../utils/helper'
import routes from './routeList'
import ROUTE_PATHS from './routesPath'
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
  const location = useLocation()
  const isPurchasePage = location.pathname.split('/')[ 2 ] === ROUTE_PATHS.CONFIRM_PURCHASE.split('/')[ 2 ]
  const isAdditionalInfoPage = location.pathname.split('/')[ 1 ] === ROUTE_PATHS.ADDITIONAL_INFO.split('/')[ 1 ]

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

const CustomRoutes = () => (
  <Switch>
    {routes.map(({
      path, exact, auth, ...rest
    }) => (
      <Route
        key={ path }
        path={ path }
        exact={ exact }
        render={ () => (auth ? <NewValidator { ...rest } path={ path } />
          : <Redirector path={ path } { ...rest } />) }
      />
    ))}
  </Switch>
)

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
  const location = useLocation()

  const token = getToken()
  let userDetails
  let component
  let pathToComponent = path
  const defaultComponent = <HeaderAndFooter { ...rest } component={ Component } />

  // to manage array path viz. user profile settings pages
  if (path instanceof Array) [ pathToComponent ] = path

  if (token) {
    userDetails = getUserDetails()
    getUserAndCompanyDetails(userDetails)
  }
  const { companyData } = useSelector((state) => state.companyInfo)
  const dispatch = useDispatch()

  if (!token) {
    component = <Redirect to={ `${ ROUTE_PATHS.LOGIN }?return_url=${ location.pathname }` } />
  } else if (
    userDetails?.type !== 'guest'
    && !userDetails.emailVerified
    && pathToComponent !== ROUTE_PATHS.EMAIL_VERIFICATION
  ) {
    component = <Redirect to={ ROUTE_PATHS.EMAIL_VERIFICATION } />
  } else if (pathToComponent.split('/')[ 1 ] === 'company' && !userDetails.hasCompany) {
    component = <Redirect to={ ROUTE_PATHS.ADD_COMPANY } />
  } else {
    switch (pathToComponent) {
      case ROUTE_PATHS.ADD_COMPANY: {
        if (userDetails.hasCompany) component = <Redirect to={ ROUTE_PATHS.COMPANY_HOME } />
        else component = defaultComponent
        break
      }

      case ROUTE_PATHS.CREATE_TOKEN: {
        if (config.REACT_APP_USE_SQUARE_PAYMENT_GATEWAY === 'true') {
          if (companyData && !companyData?.plaid_account_id) {
            component = <Redirect to={ ROUTE_PATHS.COMPANY_BANKING_DETAILS } />
            dispatch(showErrorMessage({
              msg: 'Please add company Banking Details to Create a Token',
            }))
          } else component = defaultComponent
          break
        } else {
          if (companyData && !companyData.stripe_acc_status) {
            component = <Redirect to={ ROUTE_PATHS.COMPANY_BANKING_DETAILS } />
            dispatch(showErrorMessage({
              msg: 'Please add company Banking Details to Create a Token',
            }))
          } else component = defaultComponent
          break
        }
      }

      case ROUTE_PATHS.EMAIL_VERIFICATION: {
        if (userDetails.emailVerified) component = <Redirect to={ ROUTE_PATHS.USER_HOME } />
        else component = defaultComponent
        break
      }

      default: {
        if (userDetails.type === 'signup') component = <Redirect to={ ROUTE_PATHS.LOGIN } />

        else component = defaultComponent
      }
    }
  }
  return component
}

const Redirector = ({
  component: Component, path, redirectToDashboard, ...rest
}) => {
  const token = getToken()
  const userDetails = getUserDetails()
  const { search } = useLocation()
  const isReturnTo = search?.split('?return_url=')
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
      return <Redirect to={ ROUTE_PATHS.COMPANY_TOKENS } />
    }
    return <Redirect to={ ROUTE_PATHS.MY_TOKENS } />
  }
  if ((path === ROUTE_PATHS.LOGIN || path === ROUTE_PATHS.SIGNUP) && isReturnTo && userType === 'login') {
    return <Redirect to={ isReturnTo && isReturnTo?.[ 1 ] } />
  }
  if (token && userType === 'login' && redirectToDashboard) {
    return (<Redirect to={ ROUTE_PATHS.HOME } />)
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

export default CustomRoutes

'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { usePathname, useRouter } from 'next/navigation'
import { userInfoRequestStart, companyInfoRequestStart } from '../redux-saga/redux/actions'
import { getToken, getUserDetails } from '../utils/helper'
import appConfig from '../utils/config'
import { ROUTE_PATH_SHORTHANDS, ROUTE_PATHS } from '@/routes/routesPath'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const pathname = usePathname()
  console.log("pathname ==> ", pathname);
  const [token, setToken] = useState(null)
  const [userDetails, setUserDetails] = useState(null)

  const { userInfo, companyInfo } = useSelector((state) => ({
    userInfo: state.userInfo,
    companyInfo: state.companyInfo,
  }))

  // Fetch user/company details if needed
  useEffect(() => {
    if (!userDetails) return

    const { loading: userLoading, userData, error: userError } = userInfo
    console.log("userInfo ==> ", userInfo);
    const { loading: companyLoading, companyData, error: companyError } = companyInfo
    console.log("companyInfo ==> ", companyInfo);

    if (['login', 'guest'].includes(userDetails?.type) && !userLoading && !userData && !userError) {
      dispatch(userInfoRequestStart({}))
    }

    if (['login', 'guest'].includes(userDetails?.type) && !companyLoading && !companyData && !companyError) {
      dispatch(companyInfoRequestStart({}))
    }
  }, [userDetails])

  // Handle redirects
  useEffect(() => {
    const token = getToken() // Probably from localStorage or cookies
    const userDetails = getUserDetails()
    setToken(token)
    setUserDetails(userDetails)
    if (!pathname || !userDetails) return
    console.log("pathname ==> ", pathname);
    console.log("userDetails ==> ", userDetails);
    console.log("token ==> ", token);

    if ((pathname.startsWith('/company') || pathname.startsWith('/user')) && !token) {
      router.replace(`${ROUTE_PATHS.LOGIN || ''}?return_url=${pathname}`)
      return
    }

    if (userDetails?.type !== 'guest' && !userDetails?.emailVerified && pathname !== ROUTE_PATHS.EMAIL_VERIFICATION) {
      console.log("userDetails?.type !== 'guest' && !userDetails?.emailVerified && pathname !== ROUTE_PATHS.EMAIL_VERIFICATION");
      console.log(userDetails, pathname);
      router.replace(ROUTE_PATHS.EMAIL_VERIFICATION || '')
      return
    }

    if (pathname.startsWith('/company') && !userDetails?.hasCompany) {
      router.replace(ROUTE_PATHS.ADD_COMPANY || '')
      return
    }

    if (ROUTE_PATH_SHORTHANDS && pathname === ROUTE_PATH_SHORTHANDS.ADD_COMPANY && userDetails?.hasCompany) {
      router.replace(ROUTE_PATH_SHORTHANDS.COMPANY_HOME || '')
      return
    }

    if (pathname === ROUTE_PATHS.CREATE_TOKEN) {
      const companyData = userDetails?.companyData
      if (appConfig.REACT_APP_USE_SQUARE_PAYMENT_GATEWAY === 'true') {
        if (companyData && !companyData?.plaid_account_id) {
          router.replace(ROUTE_PATHS.COMPANY_BANKING_DETAILS || '')
          return
        }
      } else {
        if (companyData && !companyData?.stripe_acc_status) {
          router.replace(ROUTE_PATHS.COMPANY_BANKING_DETAILS || '')
          return
        }
      }
    }

    if (pathname === ROUTE_PATHS.EMAIL_VERIFICATION && userDetails?.emailVerified) {
      router.replace(ROUTE_PATHS.USER_HOME || '')
      return
    }

    if (userDetails?.type === 'signup' && pathname !== ROUTE_PATHS.EMAIL_VERIFICATION) {
      router.replace(ROUTE_PATHS.LOGIN || '')
    }
  }, [pathname])

  return (
    <AuthContext.Provider value={{ token, userDetails }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
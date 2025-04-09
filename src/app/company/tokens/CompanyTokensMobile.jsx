import React from 'react'
import MobileButtonGroup from './MobileButtonGroup'
import MobileTokenList from './MobileTokenList'

const CompanyTokensMobile = (props) => (
  <>
    <MobileButtonGroup { ...props } />
    <MobileTokenList { ...props } />
  </>
)

export default CompanyTokensMobile

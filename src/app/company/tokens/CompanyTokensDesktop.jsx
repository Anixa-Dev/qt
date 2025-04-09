import React from 'react'
import TokenFilters from './TokenFilters'
import TokenTable from './TokenTable'

const CompanyTokensDesktop = (props) => (
  <>
    <TokenFilters { ...props } />
    <TokenTable { ...props } />
  </>
)

export default CompanyTokensDesktop

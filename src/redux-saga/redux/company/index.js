import addCompanyReducer from './addCompanyReducer'
import companyInfoReducer from './companyInfoReducer'
import passPreviewReducer from './passPreviewReducer'
import rookieCardsSetReducer from './rookieCardSetReducer'
import companyCreditReducer from './getCompanyCreditReducer'
import approvePaypalReducer from './approvePaypalReducer'

const companyReducers = {
  addCompany: addCompanyReducer,
  companyInfo: companyInfoReducer,
  passPreview: passPreviewReducer,
  rookieCardSet: rookieCardsSetReducer,
  companyCredit: companyCreditReducer,
  approvePaypal: approvePaypalReducer,
}

export default companyReducers
export * from './addCompanyReducer'
export * from './companyInfoReducer'
export * from './passPreviewReducer'
export * from './rookieCardSetReducer'
export * from './getCompanyCreditReducer'
export * from './approvePaypalReducer'

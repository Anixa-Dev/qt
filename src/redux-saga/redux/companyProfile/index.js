import updateCompanyProfileReducer from './updateCompanyProfileReducer'
import getBankDetailReducer from './getBankDetailReducer'

const companyProfileReducers = {
  updateCompanyProfile: updateCompanyProfileReducer,
  bankDetail: getBankDetailReducer,
}

export default companyProfileReducers
export * from './updateCompanyProfileReducer'
export * from './getBankDetailReducer'

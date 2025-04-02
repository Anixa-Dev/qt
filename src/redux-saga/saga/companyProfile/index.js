import updateCompanyProfileWatcher from './updateCompanyProfileWatcher'
import getBankDetailWatcher from './getBankDetailWatcher'

const companyProfileWatcherFunctions = [
  () => updateCompanyProfileWatcher(),
  () => getBankDetailWatcher(),
]

export default companyProfileWatcherFunctions

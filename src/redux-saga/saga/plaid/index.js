import createLinkTokenWatcher from './createLinkTokenWatcher'
import exchangePublicTokenWatcher from './exchangePublicTokenWatcher'

const plaidWatcherFunctions = [
  () => createLinkTokenWatcher(),
  () => exchangePublicTokenWatcher(),
]

export default plaidWatcherFunctions

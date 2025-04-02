import createLinkTokenReducer from './createLinkTokenReducer'
import exchangePublicTokenReducer from './exchangePublicTokenReducer'

const plaidReducers = {
  createLinkToken: createLinkTokenReducer,
  exchangePublicToken: exchangePublicTokenReducer,
}

export default plaidReducers
export * from './createLinkTokenReducer'
export * from './exchangePublicTokenReducer'

import {
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import LogRocket from 'logrocket'
import reducer from './redux'
import saga from './saga'
import config from '../utils/config'

const sagaMiddleware = createSagaMiddleware()
const middleware = [
  ...getDefaultMiddleware({ thunk: false }),
  sagaMiddleware ]

if (config.NODE_ENV === 'production') {
  const logRocketMiddleware = LogRocket.reduxMiddleware()
  middleware.push(logRocketMiddleware)
}

const store = configureStore({
  reducer,
  middleware,
})

sagaMiddleware.run(saga)

export default store

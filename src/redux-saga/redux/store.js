import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import LogRocket from 'logrocket'
import reducer from '../redux'
import saga from '../saga'
import config from '../../utils/config'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ thunk: false }),
    sagaMiddleware,
    ...(config.NODE_ENV === 'production' ? [LogRocket.reduxMiddleware()] : []),
  ],
})

sagaMiddleware.run(saga)

export default store
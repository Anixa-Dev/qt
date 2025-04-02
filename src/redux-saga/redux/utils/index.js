import snackbarReducer from './snackbarReducer'
import pageLoaderReducer from './pageLoaderReducer'
import formTimerReducer from './formTimerReducer'

const utilsReducers = {
  snackbar: snackbarReducer,
  pageLoader: pageLoaderReducer,
  formTimer: formTimerReducer,
}

export default utilsReducers
export * from './snackbarReducer'
export * from './pageLoaderReducer'
export * from './formTimerReducer'

import React from 'react'
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import CustomSnackbar from '../components/ui/CustomSnackbar'
import CustomRoutes from './customRoutes'

const Routes = () => (
  <Router>
    <CustomRoutes />
    <CustomSnackbar />
  </Router>
)

export default Routes

import Cookies from 'js-cookie'

import apiClient from '../../utils/apiClient'

class User {
  static async signup(data) {
    const response = await apiClient.postRequest('/user/signup', data)
    return response
  }

  static async guestSignup(data) {
    const response = await apiClient.postRequest('/user/guest-signup', data)
    return response
  }

  // demo service for testing step forms
  static async editSignup() {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
    await sleep(2000)
    const data = {
      first_name: 'Sachin',
      last_name: 'Tendulkar',
      email: 'sachin@yopmail.com',
      pass: '0987',
      date_of_birth: '1999-12-11',
      mobile_phone: '+917389602833',
    }
    return data
  }

  static async login(data) {
    const response = await apiClient.postRequest('/user/login', data)
    // setToken(token)
    Cookies.set('access_token', response.data.data?.token)
    return response
  }

  static async verifyEmail(data) {
    const response = await apiClient.postRequest('/user/email-verification', data)
    return response
  }

  static async resendOtp() {
    const response = await apiClient.getRequest('/user/resend-otp')
    return response
  }

  static async getUserInfo() {
    const response = await apiClient.getRequest('/user/user-detail')
    return response
  }

  static async transactionInfo(data) {
    const response = await apiClient.getRequest('/user/user-transactions', null, data)
    return response
  }

  static async forgotPassword(data) {
    const response = await apiClient.postRequest('/auth/reset-password-mail', data)
    return response
  }

  static async verifyToken(data) {
    const response = await apiClient.postRequest('/auth/verify-token', data)
    return response
  }

  static async resetPassword(data) {
    const response = await apiClient.postRequest('/auth/reset-password', data)
    return response
  }

  static async isEmailRegistered(data) {
    const response = await apiClient.postRequest('/user/find-user', data)
    return response
  }

  static async getTransactionDetails(data, cancelToken) {
    const response = await apiClient.getRequest('/user/transaction-detail', null, data, cancelToken)
    return response
  }
}

export default User

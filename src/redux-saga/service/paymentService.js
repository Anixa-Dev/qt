import apiClient, { axiosInst } from '../../utils/apiClient'
import { formDataFormatter } from '../../utils/helper'

class Payment {
  static async createPaymentIntent(data) {
    const response = await apiClient.getRequest('/user/create-payment-intent', null, data)
    return response
  }

  static async createBankToken() {
    const response = await apiClient.postRequest('/user/create-bank-token')
    return response
  }

  static async addNewCard(data) {
    const response = await apiClient.postRequest('/user/add-new-card', data)
    return response
  }

  static async addCompanyCredit(data) {
    const response = await apiClient.postRequest('/company/add-company-credit-card', data)
    return response
  }

  static async deleteCard(data) {
    const response = await apiClient.postRequest('/user/delete-card', data)
    return response
  }

  static async confirmPurchase(data) {
    const formData = formDataFormatter({ data })

    const response = await axiosInst({
      method: 'post',
      url: '/token/confirm-token-purchase',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    return response
  }

  static async getStripeSetupIntent(data) {
    const response = await apiClient.getRequest('/user/get-setup-intent', null, data)
    return response
  }

  static async createSubscription(data) {
    const response = await apiClient.postRequest('/user/create-subscription', data)
    return response
  }

  static async getUserSubscriptions(data) {
    const response = await apiClient.getRequest('/user/get-subscriptions', null, data)
    return response
  }

  static async cancelSubscription(data) {
    const response = await apiClient.postRequest('/user/cancel-subscription', data)
    return response
  }

  static async getSubscriptionDetail(data) {
    const response = await apiClient.getRequest('/user/subscription-detail', null, data)
    return response
  }

  static async retrievePaymentIntent(data) {
    const response = await apiClient.getRequest('/user/get-payment-id', null, data)
    return response
  }

  static async addNewSquareCard(data) {
    const response = await apiClient.postRequest('user/add-new-square-card', data)
    return response
  }

  static async initiateBankingDetailsEntry(data) {
    const response = await apiClient.postRequest('user/initiate_banking_details_entry', data)
    return response
  }
}

export default Payment

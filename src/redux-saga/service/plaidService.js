import apiClient from '../../utils/apiClient'

class PlaidService {
  static async createLinkToken() {
    const response = await apiClient.postRequest('/user/create_link_token')
    return response
  }

  static async exchangePublicToken(data) {
    const response = await apiClient.postRequest('/user/exchange_public_token', data)
    return response
  }
}

export default PlaidService

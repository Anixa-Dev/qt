import apiClient from '../../utils/apiClient'

class Marketplace {
  static async addToken(data) {
    const response = await apiClient.postRequest('/marketplace/add-token', data)
    return response
  }

  static async fetchTokens(data) {
    const response = await apiClient.getRequest('/marketplace/get-tokens', null, data)
    return response
  }

  static async getFilterValues(data) {
    const response = await apiClient.getRequest('/marketplace/get-filters', null, data)
    return response
  }
}

export default Marketplace

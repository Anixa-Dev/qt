import apiClient from '../../utils/apiClient'

class WalletPass {
  static async getPassDetails(data) {
    const response = await apiClient.getRequest('/user/pass-detail', null, data)
    return response
  }

  static async addToWallet(data) {
    const response = await apiClient.getRequest('/user/token-pass', null, data)
    return response
  }
}

export default WalletPass

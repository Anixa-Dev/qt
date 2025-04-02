import apiClient, { axiosInst } from '../../utils/apiClient'
import { formDataFormatter } from '../../utils/helper'

class updateUserProfile {
  static async updatePersonalSettings(data) {
    const formData = formDataFormatter({ data })

    const response = await axiosInst({
      method: 'post',
      url: '/user/update-user',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    return response
  }

  static async addWalletAddress(data) {
    const response = await apiClient.postRequest('/user/add-wallet-address', data)
    return response
  }

  static async getUserBankDetails(data) {
    const response = await apiClient.getRequest('/user/get-bank-details', null, data)
    return response
  }

  static async fetchWalletAddress(data) {
    const response = await apiClient.getRequest('/user/wallet-addresses', null, data)
    return response
  }

  static async removeWalletAddress(data) {
    const response = await apiClient.deleteRequest('/user/remove-wallet-address', data)
    return response
  }
}

export default updateUserProfile

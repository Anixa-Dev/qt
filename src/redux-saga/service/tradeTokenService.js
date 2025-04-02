import apiClient, { axiosInst } from '../../utils/apiClient'
import { formDataFormatter } from '../../utils/helper'

class TradeToken {
  static async tmpPurchase(data) {
    const response = await apiClient.postRequest('/token/create-tmp-purchase', data)
    return response
  }

  static async tmpPurchaseInfo(data) {
    const response = await apiClient.getRequest('/token/tmp-purchase-detail', null, data)
    return response
  }

  static async cancelTmpPurchase(data) {
    const response = await apiClient.deleteRequest('/token/cancel-purchase', data)
    return response
  }

  static async createUserToken(data) {
    const response = await apiClient.postRequest('/token/create-user-token', data)
    return response
  }

  static async getAllUserTokens(data) {
    const response = await apiClient.getRequest('/token/user-token', null, data)
    return response
  }

  static async getAllSoldUserTokens(data) {
    const response = await apiClient.getRequest('/token/sold-token', null, data)
    return response
  }

  static async getSingleTradeToken(data) {
    const response = await apiClient.getRequest('/token/trade-token-detail', null, data)
    return response
  }

  static async sellToken(data) {
    const response = await apiClient.postRequest('/token/trade-token-detail', data)
    return response
  }

  static async transferToken(data) {
    const response = await apiClient.postRequest('/user/transfer-token', data)
    return response
  }

  static async getNftMeTokenDetail(data) {
    const response = await apiClient.getRequest('/token/nft-me-token-detail', null, data)
    return response
  }

  static async retryTokenMinting(data) {
    const response = await apiClient.postRequest('/token/retry-token-minting', data)
    return response
  }

  static async uploadCSV(data) {
    const response = await apiClient.postRequest('/token/upload-CSV', data)
    return response
  }

  static async nftMeTokenDetail(data) {
    const response = await apiClient.getRequest('/nftme/nft-me-detail', null, data)
    return response
  }

  static async updateNftMeCollectionDetail(data) {
    const formData = formDataFormatter({ data })

    const response = await axiosInst({
      method: 'post',
      url: '/nftme/update-Nft-me-collection',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    return response
  }

  static async addNewNftMeEntryCollection(data) {
    const response = await apiClient.postRequest('/nftme/add-Nft-me', data)
    return response
  }

  static async publishNftMeCollection(data) {
    const response = await apiClient.postRequest('/nftme/publish-collection', data)
    return response
  }

  static async deleteNftMe(data) {
    const response = await apiClient.deleteRequest('/nftme/delete-nft', data)
    return response
  }

  static async getCollectionDetail(data) {
    const response = await apiClient.getRequest('/nftme/collection-detail', null, data)
    return response
  }

  static async resendCustomizeNftInviteEmail(data) {
    const response = await apiClient.postRequest('/nftme/resend-customize-nft-email', data)
    return response
  }

  static async sendTokenViaEmail(data) {
    const response = await apiClient.postRequest('/token/confirm-user-token', data)
    return response
  }
}

export default TradeToken

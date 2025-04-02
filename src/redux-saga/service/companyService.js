import apiClient, { axiosInst } from '../../utils/apiClient'
import { formDataFormatter } from '../../utils/helper'

class Company {
  static async addCompany(data) {
    const formData = formDataFormatter({ data })

    const response = await axiosInst({
      method: 'post',
      url: '/company/add-company',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    return response
  }

  static async getCompanyInfo() {
    const response = await apiClient.getRequest('/company/company-detail')
    return response
  }

  static async getCompanyCredit(data) {
    const response = await apiClient.getRequest('/company/get-company-credit', null, data)
    return response
  }

  static async createToken(data) {
    const formData = formDataFormatter({ data })

    const response = await axiosInst({
      method: 'post',
      url: '/token/create-token',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    return response
  }

  static async createRetailer(data) {
    const formData = formDataFormatter({ data })

    const response = await axiosInst({
      method: 'post',
      url: '/token/add-retailer',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    return response
  }

  static async createPromotionCode(data) {
    const response = await apiClient.postRequest('/token/add-promotion-code', data)
    return response
  }

  static async applyPromotionCode(data) {
    const response = await apiClient.postRequest('/token/apply-promotion-code', data)
    return response
  }

  static async createOffer(data) {
    const response = await apiClient.postRequest('/token/add-offer', data)
    return response
  }

  static async getRetailers(data) {
    const response = await apiClient.getRequest('/token/retailers', null, data)
    return response
  }

  static async getOffers(data) {
    const response = await apiClient.getRequest('/token/offers', null, data)
    return response
  }

  static async getPromotionCodes(data) {
    const response = await apiClient.postRequest('/token/fetch-promotion-codes', data)
    return response
  }

  static async getUserOffers(data) {
    const response = await apiClient.getRequest('/token/user-offers', null, data)
    return response
  }

  static async uploadCkImage(data) {
    const formData = formDataFormatter({ data })

    const response = await axiosInst({
      method: 'post',
      url: '/token/upload-ckimage',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    return response
  }

  static async saveNftLayoutChanges(data) {
    const formData = formDataFormatter({ data })

    const response = await axiosInst({
      method: 'put',
      url: '/token/save-nft-layout-changes',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    return response
  }

  static async updateTokenDetail(data) {
    const formData = formDataFormatter({ data })

    const response = await axiosInst({
      method: 'put',
      url: '/token/update-token-detail',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    return response
  }

  static async updateOldTokenDetail(data) {
    const formData = formDataFormatter({ data })

    const response = await axiosInst({
      method: 'put',
      url: '/token/update-old-token-detail',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    return response
  }

  static async getCompanyTokens(data) {
    const response = await apiClient.getRequest('/token/token-detail', null, data)
    return response
  }

  static async getSingleToken(data) {
    const response = await apiClient.getRequest('/token/token', null, data)
    return response
  }

  static async getBankDetail() {
    const response = await apiClient.postRequest('/user/accounts_detail')
    return response
  }

  static async duplicateToken(data) {
    const response = await apiClient.postRequest('/token/duplicate-token', data)
    return response
  }

  static async archiveToken(data) {
    const response = await apiClient.postRequest('/token/archive-token', data)
    return response
  }

  static async getTokenDetail(data) {
    const response = await apiClient.getRequest('/token/single-token-detail', null, data)
    return response
  }

  static async getHighImpactCardDetail(data) {
    const response = await apiClient.getRequest('/token/high-impact-card-detail', null, data)
    return response
  }

  static async nftPassPreview(data) {
    const response = await apiClient.getRequest('/token/demo-pass', null, data)
    return response
  }

  static async nftMePassPreview(data) {
    const response = await apiClient.getRequest('/nftme/send-nftme-demo-pass', null, data)
    return response
  }

  static async sendCustomizeNftInviteApi(data) {
    const response = await apiClient.postRequest('/token/customize-nft-invites', data)
    return response
  }

  static async getTokenCompanyDetails(data) {
    const response = await apiClient.getRequest('/token/company-logo', null, data)
    return response
  }

  static async validateCustomizationOtp(data) {
    const response = await apiClient.getRequest('/token/customize-detail', null, data)
    return response
  }

  static async saveCustomizationValues(data) {
    const formData = formDataFormatter({ data })

    const response = await axiosInst({
      method: 'post',
      url: '/token/customize-nft-detail',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    return response
  }

  static async createNFTMe(data) {
    const formData = formDataFormatter({ data })

    const response = await axiosInst({
      method: 'post',
      url: '/token/create-nft-me',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    return response
  }

  static async getCompanyNftMe(data) {
    const response = await apiClient.getRequest('/token/company-nft-me', null, data)
    return response
  }

  static async addNewNftMeEntry(data) {
    const response = await apiClient.postRequest('/nftme/add-entry-to-nftme', data)
    return response
  }

  static async getSingleNftMeToken(data) {
    const response = await apiClient.getRequest('/token/customize-detail', null, data)
    return response
  }

  static async getBuyerEmail(data) {
    const response = await apiClient.postRequest('/company/nft-user-detail-dowload', data)
    return response
  }

  static async buyCreditsPaypal(data) {
    const response = await apiClient.postRequest('/company/add-company-credit-paypal', data)
    return response
  }

  static async approvePaypalOrder(data) {
    const response = await apiClient.postRequest('/company/approve-paypal-order', data)
    return response
  }

  static async sendTokenNotification(data) {
    const response = await apiClient.postRequest('/token/send-notification', data)
    return response
  }
}

export default Company

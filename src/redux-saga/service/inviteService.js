import apiClient from '../../utils/apiClient'

class Invite {
  static async createGroup(data) {
    const response = await apiClient.postRequest('/invite/create-group', data)
    return response
  }

  static async fetchGroups(data) {
    const response = await apiClient.postRequest('/invite/fetch-groups', data)
    return response
  }

  static async sendInvites(data) {
    const response = await apiClient.postRequest('/invite/send-invites', data)
    return response
  }

  static async getUserInvite(id) {
    const response = await apiClient.getRequest(`/invite/fetch-user-invite?user_invite_id=${ id }`)
    return response
  }

  static async sendTestMail(data) {
    const response = await apiClient.postRequest('/invite/send-test-mail', data)
    return response
  }
}

export default Invite

import { axiosInst } from '../../utils/apiClient'
import { formDataFormatter } from '../../utils/helper'

class updateCompanyProfile {
  static async updateBasicSettings(data) {
    const formData = formDataFormatter({ data })

    const response = await axiosInst({
      method: 'post',
      url: '/company/update-company',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    return response
  }
}

export default updateCompanyProfile

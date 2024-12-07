import type { AxiosInstance } from 'axios'
import type { getMessageParams } from './type'

export class MessageService {
  private axiosInstance: AxiosInstance
  private name: string

  constructor(axios: AxiosInstance, name: string) {
    this.axiosInstance = axios
    this.name = name
  }

  async getMessage(params?: getMessageParams) {
    try {
      const response = await this.axiosInstance.get(`/${this.name}`, { params })

      if (response.data) return response.data

      return response
    } catch (error) {
      console.log(error)
    }
  }

  async getDetail(body: any) {
    try {
      const response = await this.axiosInstance.get(`/${this.name}/detail`, {
        data: body,
      })

      if (response.data) return response.data

      return response
    } catch (error) {
      console.log(error)
    }
  }
}

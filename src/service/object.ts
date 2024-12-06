import type { AxiosInstance } from 'axios'
import api from './api'

class ObjectService {
  private axiosInstance: AxiosInstance

  constructor(axios: AxiosInstance) {
    this.axiosInstance = axios
  }

  async getObject() {
    try {
      const response = await this.axiosInstance.get(`/object`)

      if (response.data) return response.data

      return response
    } catch (error) {
      console.log(error)
    }
  }

  async getDetail(body: any) {
    try {
      const response = await this.axiosInstance.get(`/object/detail`, {
        data: body,
      })

      if (response.data) return response.data

      return response
    } catch (error) {
      console.log(error)
    }
  }
}

export const objectService = new ObjectService(api)

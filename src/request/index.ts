import axios, { AxiosInstance, AxiosResponse } from 'axios'

const createAxiosInstance = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response
    },
    (error) => {
      if (error.response) {
        console.error('Error response:', error.response)
      } else if (error.request) {
        console.error('No response received:', error.request)
      } else {
        console.error('Axios setup error:', error.message)
      }
      return Promise.reject(error)
    }
  )

  return instance
}

const axiosInstance = createAxiosInstance()

export default axiosInstance

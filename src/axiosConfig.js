import axios from 'axios'

const apiClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  // If the request is FormData (multipart/form-data), update Content-Type header
  if (config.data instanceof FormData) {
    config.headers['Content-Type'] = 'multipart/form-data'
  }

  return config
}, error => {
  return Promise.reject(error)
})

export default apiClient

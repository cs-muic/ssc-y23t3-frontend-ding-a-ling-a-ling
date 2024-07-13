import axios from 'axios'

const API_URL = 'http://your-server-url/api'

export const getData = async () => {
  try {
    const response = await axios.get(`${API_URL}/data`)
    return response.data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

export const postData = async (data: any) => {
  try {
    const response = await axios.post(`${API_URL}/data`, data)
    return response.data
  } catch (error) {
    console.error('Error posting data:', error)
    throw error
  }
}

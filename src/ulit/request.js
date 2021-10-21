import axios from 'axios'

const service = axios.create({
  timeout: 5000,
  baseURL: 'http://api.com'
})

export default service

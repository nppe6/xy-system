import Axios from './axios'

const html = new Axios({
  baseURL: '/api',
  timeout: 10000,
  headers: {}
})

export default html

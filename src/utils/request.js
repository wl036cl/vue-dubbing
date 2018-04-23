/**
 * Author:ll36
 * Create Time:2018/04/17 15:27
 * Descripttion:
 */
import axios from 'axios'
import store from '@/store'

// create an axios instance
const service = axios.create({
  // baseURL: 'http://dubbingshow.com',
  baseURL: process.env.BASE_API, // api的base_url
  headers: {'plat': 'peiyinxiu'},
  timeout: 10000 // request timeout
})

// request interceptor
service.interceptors.request.use(config => {
  // Do something before request is sent
  // if (store.getters.token) {
  //   config.headers['X-Token'] = getToken() // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
  // }
  //  全局进度条
  let progress = {type: 'info', percent: Number(Math.random(1) * 0.4 + 0.05).toFixed(2)}
  store.dispatch('setHeaderProgress', progress)
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone interceptor
service.interceptors.response.use(
  (res) => {
    let progress = {type: 'success', percent: 1}
    store.dispatch('setHeaderProgress', progress)
    return res
  },
  (err) => {
    let progress = {type: 'error', percent: 1}
    store.dispatch('setHeaderProgress', progress)
    console.log('err' + err) // for debug
    return Promise.reject(err)
  }
)

export default service

import axios from 'axios'
import CacheUtils from '../utils/CacheUtils'

// 请求地址
axios.defaults.baseURL = process.env.VUE_APP_API_URL
// 超时时间
axios.defaults.timeout = 10000

/**
 * axios请求拦截器
 */
axios.interceptors.request.use(config => {
  // 在发送请求之前做些什么，添加token等
  const currentUser = CacheUtils.getObject(CacheUtils.key.USER_INFO)
  if (currentUser !== null && currentUser.token) {
    config.headers.token = currentUser.token
  }
  return config
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error)
})

/**
 * axios响应拦截器
 */
axios.interceptors.response.use(response => {
  return response.data
}, () => {
  // 这里我们把错误信息扶正, 后面就不需要写 catch 了
  return {
    code: 999,
    msg: '网络异常'
  }
})

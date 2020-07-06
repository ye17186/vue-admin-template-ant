import axios from 'axios'

export default {
  /**
   * GET请求
   *
   * @param url 请求地址
   * @param params 请求参数
   * @param flag 是否根据code自动提取其中的data
   * @returns {Promise<>}
   */
  get: function (url, params, flag) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'GET',
        url: url,
        params: params
      }).then(res => {
        if (!flag) {
          if (res.code === 0) {
            resolve(res.data)
          } else {
            reject(res)
          }
        } else {
          resolve(res)
        }
      })
    })
  },
  /**
   * POST请求
   * @param url 请求地址
   * @param params 请求参数
   * @param flag 是否根据code自动提取其中的data
   * @returns {Promise<>}
   */
  post: function (url, params, flag) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'POST',
        url: url,
        data: params
      }).then(res => {
        if (!flag) {
          if (res.code === 0) {
            resolve(res.data)
          } else {
            reject(res)
          }
        } else {
          resolve(res.data)
        }
      })
    })
  }
}

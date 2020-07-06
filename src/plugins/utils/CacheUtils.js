export default {
  /**
   * 保存对象缓存
   * @param key 主键
   * @param value 值
   */
  setObject: function (key, value) {
    sessionStorage.setItem(key, JSON.stringify(value))
  },
  /**
   * 获取对象缓存
   * @param key 主键
   * @return {*}
   */
  getObject: function (key) {
    const value = sessionStorage.getItem(key)
    if (value !== null) {
      return JSON.parse(value)
    } else {
      return null
    }
  },

  /**
   * 清楚所有缓存
   */
  clearAll: function () {
    sessionStorage.clear()
  },
  clear: function (key) {
    sessionStorage.removeItem(key)
  },
  key: {
    USER_MENUS: 'user_menus',
    USER_INFO: 'USER_INFO',
    USER_ROUTES: 'USER_ROUTES',
    LOCK_PWD: 'LOCK_PWD',
    LOCK_ROUTER: 'LOCK_ROUTER',
    ACTIVE_KEY: 'ACTIVE_KEY'
  }
}

import CacheUtils from '../../plugins/utils/CacheUtils'

export default {
  state: {
    info: {}, // 用户信息
    menus: [] // 用户菜单
  },
  mutations: {
    setInfo: (state, info) => {
      state.info = info
      CacheUtils.setObject('userInfo', info)
    },
    setMenus: (state, menus) => {
      state.menus = menus
      CacheUtils.setObject('menus', menus)
    }
  },
  actions: {
  }
}

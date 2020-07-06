import CacheUtils from '../../plugins/utils/CacheUtils'

export default {
  state: {
    sideCollapsed: false, // 侧边菜单栏是否折叠
    lang: 'zh-CN', // 语言,
    lockedBefore: undefined // 锁屏前页面路由（用于解锁后恢复现场）
  },
  mutations: {
    setSideCollapsed: (state, collapsed) => {
      state.sideCollapsed = collapsed
      localStorage.setItem('sideCollapsed', collapsed)
    },
    setLang: (state, lang) => {
      state.lang = lang
      localStorage.setItem('lang', lang)
    },
    setLockBefore: (state, route) => {
      const before = {
        path: route.path,
        params: route.params,
        query: route.query
      }
      state.lockedBefore = before
      CacheUtils.setObject(CacheUtils.key.LOCK_ROUTER, before)
    }
  },
  actions: {
  }
}

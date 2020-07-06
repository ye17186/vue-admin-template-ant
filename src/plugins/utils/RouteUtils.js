import VueRouter from 'vue-router'
import router from '../../router/index'
import { generator, staticRouters } from '../../config/config.router'
import MenuUtils from './MenuUtils'
import CacheUtils from './CacheUtils'

export default {
  resetRouter: function () {
    return new VueRouter({ routes: staticRouters })
  },
  isStatic: (to) => {
    const staticPaths = ['/404', '/login', '/lock']
    return staticPaths.includes(to.path)
  },
  isLocked: () => {
    return CacheUtils.getObject(CacheUtils.key.LOCK_PWD) !== null
  },
  /**
   * 加载用户路由
   * @param permissions 用户权限数组
   */
  loadUserRouters: (permissions) => {
    const menus = MenuUtils.getUserMenus(permissions) // 计算用户菜单
    CacheUtils.setObject(CacheUtils.key.USER_MENUS, menus) // 将用户菜单存入缓存
    const dyRouters = generator(menus) // 根据菜单计算用户动态路由
    const empty = new VueRouter({ routes: [] })
    router.matcher = empty.matcher
    router.addRoutes(dyRouters) // 添加基于用户权限的动态路由
    router.addRoutes(staticRouters) // 添加静态路由，如Login，404等
  },
  goto: (to) => {
    const type = typeof to // 参数类型
    if (type === 'string') { // String类型，则当做name路由
      router.push({
        path: to
      })
    } else if (type === 'object') { // Object类型的路由方式
      router.push(to)
    }
  },
  gotoByKey: function (key) {
    const to = MenuUtils.getMenuByKey(key)
    router.push({ path: to.path })
  }
}

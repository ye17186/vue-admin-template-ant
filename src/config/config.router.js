const RouterTable = {
  UserLayout: () => import('../components/layout/ILayoutUser'),
  Login: () => import('../views/user/Login'),
  Lock: () => import('../views/lock/Lock'),
  E404: () => import('../views/error/Page404'),
  Layout: () => import('../components/layout/ILayout'),
  RouterView: () => import('../components/layout/IRouterView'),
  Home: () => import('../views/Home'),
  M101001: () => import('../views/Home')
}

/**
 * 根路由，不要修改
 */
const rootRouter = { path: '/', name: 'Root', component: RouterTable.Layout, redirect: '/home', children: [] }

/**
 *
 * 静态路由，不要删除，可根据业务进行新增
 */
export const staticRouters = [
  {
    path: '/',
    component: RouterTable.UserLayout,
    children: [
      {
        path: 'login',
        component: RouterTable.Login
      }
    ]
  },
  { path: '/lock', component: RouterTable.Lock },
  { path: '/*', component: RouterTable.E404 }
]

/**
 * 根据菜单生成路由
 * @param menus 菜单
 * @returns {[{path: string, component: (function(): *), children: [], name: string}]}
 */
export const generator = (menus) => {
  // 根据菜单，生成动态路由
  rootRouter.children = generatorRouter(menus)
  return [rootRouter]
}

const generatorRouter = (menus) => {
  return menus.map(item => {
    const { key, title, path, icon, titles } = item || {}
    const currentRouter = {
      name: key,
      path: path,
      component: (RouterTable[key] || RouterTable.RouterView),
      meta: {
        key: key,
        title: title,
        icon: icon,
        titles: titles
      }
    }
    item.redirect && (currentRouter.redirect = item.redirect)
    // 是否有子菜单，并递归处理
    if (item.children) {
      currentRouter.children = generatorRouter(item.children, item)
    }
    return currentRouter
  })
}

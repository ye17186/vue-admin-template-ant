/**
 * 系统菜单表
 * name:：菜单名
 * code：菜单唯一编码
 * title：菜单标题
 * path：菜单路径
 * icon：图标class
 * hidden：左侧菜单中是否隐藏
 * permission: 是否需要权限（code就是对应的权限码）
 */
import CacheUtils from '../plugins/utils/CacheUtils'

// 首页展示，该菜单不要删除和修改
export const indexMenu = {
  key: 'Home',
  name: 'Home',
  title: '首页',
  path: '/home',
  icon: 'i-icon-dashboard'
}

export const getIndexTab = {
  path: indexMenu.path,
  params: {},
  query: {},
  meta: {
    key: indexMenu.key,
    title: indexMenu.title
  }
}

const menuMap = [
  indexMenu,
  {
    key: 'E001',
    title: 'IT小跟班',
    path: 'https://blog.it-follower.com',
    target: '_blank',
    icon: 'i-icon-desktop',
    permission: true
  }, {
    key: 'M101',
    title: '站点管理',
    path: '/site-config',
    icon: 'i-icon-desktop',
    children: [
      {
        key: 'M101001',
        title: '模块管理',
        path: 'module',
        icon: 'i-icon-desktop'
      }, {
        key: 'M101002',
        title: '友情链接',
        path: 'friend-link',
        icon: 'i-icon-desktop'
      }
    ]
  }, {
    key: 'M102',
    title: '新闻动态',
    path: '/news',
    icon: 'i-icon-news',
    children: [
      {
        key: 'M102001',
        title: '发布新闻',
        path: 'add',
        icon: 'i-icon-desktop'
      }
    ]
  }, {
    key: 'M103',
    title: '重点工作',
    path: '/key-work',
    icon: 'i-icon-desktop',
    children: [
      {
        key: 'M103001',
        title: '分类管理',
        path: 'category',
        icon: 'i-icon-desktop'
      }
    ]
  }
]

/**
 * 获取用户菜单
 * @param permissionArr
 */
export const getUserMenus = (permissionArr) => {
  let userMenus = menuMap.slice(0) // 复制原始全菜单
  userMenus = filterMenu(permissionArr, userMenus)
  return userMenus
}

const filterMenu = (permissionArr, srcMenus, parent) => {
  srcMenus = srcMenus.filter(item => {
    // 无需权限或者登陆用户拥有全部权限或者已拥有菜单所需权限
    return !item.permission ||
      permissionArr.indexOf('ALL') >= 0 || permissionArr.indexOf(item.code) >= 0
  })
  return srcMenus.map(item => {
    calcMenuExtends(item, parent)
    if (item.children && item.children.length >= 0) {
      item.children = filterMenu(permissionArr, item.children, item)
    }
    return item
  })
}

/**
 * 根据菜单key，查询菜单对象
 * @param key 菜单唯一key
 * @returns {*}
 */
export const getMenuByKey = (key) => {
  const menus = CacheUtils.getObject(CacheUtils.key.USER_MENUS)
  return findMenuObj(key, menus)
}

const findMenuObj = (key, menus) => {
  let target = menus.find(item => {
    return item.key === key
  })
  if (!target) {
    const length = menus.length
    for (let i = 0; i < length; i++) {
      if (menus[i].children) {
        target = findMenuObj(key, menus[i].children)
        if (target) {
          break
        }
      }
    }
  }
  return target
}

const calcMenuExtends = (item, parent) => {
  if (parent) {
    item.path = (item.path.startsWith('/') ? item.path : parent.path + '/' + item.path).replace('//', '/')
    item.titles = [...parent.titles, item.title]
  } else {
    item.titles = [item.title]
  }
}

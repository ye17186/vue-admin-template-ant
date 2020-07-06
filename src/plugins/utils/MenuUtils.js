import { getUserMenus, getMenuByKey, indexMenu, getIndexTab } from '../../config/config.menu'
export default {
  isIndex: function (key) {
    return key === indexMenu.key
  },
  getIndexKey: function () {
    return indexMenu.key
  },
  getIndexTab: function () {
    return getIndexTab
  },
  getUserMenus: (permissions) => {
    return getUserMenus(permissions)
  },
  getMenuByKey: (key) => {
    return getMenuByKey(key)
  }
}

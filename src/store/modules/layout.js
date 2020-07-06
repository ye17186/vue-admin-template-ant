import CacheUtils from '../../plugins/utils/CacheUtils'
import MenuUtils from '../../plugins/utils/MenuUtils'

export default {
  state: {
    activeKey: '', // 当前页面Key
    /**
     * 展开的tab，元素示例：
     * {
     *   path: '/home',
     *   params: {},
     *   query: {}
     * }
     */
    openedTabs: [MenuUtils.getIndexTab()], // 展开的tab
    sortedTabKeys: [] // 带顺序的展开tab key
  },
  mutations: {
    setActiveKey: (state, key) => {
      state.activeKey = key
      CacheUtils.setObject(CacheUtils.key.ACTIVE_KEY, key)
    },
    addOpenedTabs: (state, tab) => {
      const key = tab.meta.key
      const oldIndex = state.openedTabs.findIndex(item => {
        return item.meta.key === key
      })
      if (oldIndex > -1) {
        state.openedTabs.splice(oldIndex, 1, tab)
      } else {
        state.openedTabs.push(tab)
      }
      doRemoveKey(state, key)
      state.sortedTabKeys.push(key)
    },
    removeOpenedTabs: (state, key) => {
      const index = state.openedTabs.findIndex(item => {
        return item.meta.key === key
      })
      if (index > -1) {
        state.openedTabs.splice(index, 1)
      }
      doRemoveKey(state, key)
    },
    removeOtherOpenedTabs: function (state, key) {
      doRemoveOpenedTabs(state, key)
    },
    removeAllOpenedTabs: function (state) {
      doRemoveOpenedTabs(state)
    }
  },
  actions: {
    setActiveKey: function ({ commit }, value) {
      commit('setActiveKey', value)
    }
  }
}

const doRemoveKey = (state, key) => {
  const index = state.sortedTabKeys.indexOf(key)
  if (index > -1) {
    state.sortedTabKeys.splice(index, 1)
  }
}

const doRemoveOpenedTabs = (state, excludeKey) => {
  const indexKey = MenuUtils.getIndexKey()
  state.openedTabs = state.openedTabs.filter(item => item.meta.key === excludeKey || item.meta.key === indexKey)
  state.sortedTabKeys = state.sortedTabKeys.filter(item => item === excludeKey || item === indexKey)
}

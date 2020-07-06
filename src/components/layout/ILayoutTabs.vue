<template>
  <a-tabs class="i-layout-tabs" type="editable-card" size="small" hideAdd :tabBarGutter="2"
          :activeKey="activeKey" @change="handleChange" @edit="handleEdit">
    <a-tab-pane v-for="item in openedTabs" :key="item.meta.key"
                :closable="item.meta.key !== indexKey">
      <i-icon slot="tab" :type="item.meta.icon" :title="item.meta.title"></i-icon>
    </a-tab-pane>
  </a-tabs>
</template>

<script>
import MenuUtils from '../../plugins/utils/MenuUtils'
import RouteUtils from '../../plugins/utils/RouteUtils'
import IIcon from '../IIcon'

export default {
  name: 'ILayoutTabs',
  components: { IIcon },
  computed: {
    activeKey: function () {
      return this.$store.state.layout.activeKey
    },
    isIndex: function () {
      return MenuUtils.isIndex(this.$store.state.layout.activeKey)
    },
    openedTabs: function () {
      return this.$store.state.layout.openedTabs
    },
    data () {
      return {
        indexKey: MenuUtils.getIndexKey()
      }
    }
  },
  data () {
    return {
      indexKey: MenuUtils.getIndexKey()
    }
  },
  methods: {
    /**
     * tab切换之后，路由到对应页面
     * @param key tab的key
     */
    handleChange: function (key) {
      const to = this.$store.state.layout.openedTabs.find(item => {
        return item.meta.key === key
      })
      RouteUtils.goto(to)
    },
    handleEdit: function (key, action) {
      if (action === 'remove') {
        this.doRemove(key)
      }
    },
    /**
     * 移除tab
     * @param key tab的key
     */
    doRemove: function (key) {
      const activeKey = this.$store.state.layout.activeKey
      this.$store.commit('removeOpenedTabs', key)
      if (activeKey === key) {
        const len = this.$store.state.layout.sortedTabKeys.length
        if (len > 1) {
          const to = this.$store.state.layout.sortedTabKeys[len - 1]
          RouteUtils.gotoByKey(to)
        } else {
          RouteUtils.gotoByKey(MenuUtils.getIndexKey())
        }
      }
    }
  }
}
</script>

<style lang="less">
  @import "../../assets/css/layout-style";
  .i-layout-tabs {
    .ant-tabs-bar {
      margin: 0 !important;
    }
    .ant-tabs-nav-container {
      height: @h-tabs !important;
    }
    .ant-tabs-tab {
      height: @h-tabs !important;
      line-height: calc(@h-tabs - 2px) !important;
    }
    .ant-tabs-tab-active {
      background-color: @primary-color !important;
      color: #ffffff !important;
      .ant-tabs-close-x {
        color: #ffffff !important;
      }
    }
  }
</style>

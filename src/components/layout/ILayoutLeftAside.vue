<template>
  <a-layout-sider style="height: 100vh;" collapsible v-model="collapsed" :trigger="null">
    <div style="height: 64px; width: 100%; background-color: #cccccc;">logo</div>
    <a-menu class="i-menu" theme="dark" mode="inline" :selected-keys="[activeKey]">
      <template v-for="menuA in menus">
        <template v-if="!menuA.hidden">
          <a-menu-item v-if="!menuA.children" :key="menuA.key" @click="handleClick">
            <i-icon :type="menuA.icon" :title="menuA.key + menuA.title"></i-icon>
          </a-menu-item>
          <a-sub-menu v-else :key="menuA.key">
            <span slot="title"><i-icon :type="menuA.icon" :title="menuA.title"></i-icon></span>
            <template v-for="menuB in menuA.children">
              <template v-if="!menuB.hidden">
                <a-menu-item v-if="!menuB.children" :key="menuB.key" @click="handleClick">
                  <i-icon :type="menuB.icon" :title="menuB.title"></i-icon>
                </a-menu-item>
                <a-sub-menu v-else :key="menuB.key">
                  <span slot="title"><i-icon :type="menuB.icon" :title="menuB.title"></i-icon></span>
                  <template v-for="menuC in menuB.children">
                    <a-menu-item v-if="!menuC.hidden" :key="menuC.key" @click="handleClick">
                      <i-icon :type="menuC.icon" :title="menuC.title"></i-icon>
                    </a-menu-item>
                  </template>
                </a-sub-menu>
              </template>
            </template>
          </a-sub-menu>
        </template>
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script>
import CacheUtils from '../../plugins/utils/CacheUtils'
import IIcon from '../IIcon'
import MenuUtils from '../../plugins/utils/MenuUtils'
import RouteUtils from '../../plugins/utils/RouteUtils'

export default {
  name: 'ILayoutLeftAside',
  components: { IIcon },
  computed: {
    collapsed: function () {
      return this.$store.state.app.sideCollapsed
    },
    activeKey: function () {
      return this.$store.state.layout.activeKey
    }
  },
  created () {
    this.menus = CacheUtils.getObject(CacheUtils.key.USER_MENUS)
  },
  data: function () {
    return {
      menus: []
    }
  },
  methods: {
    handleClick: function ({ key }) {
      const menu = MenuUtils.getMenuByKey(key)
      if (menu.target === '_blank') {
        window.open(menu.path)
      } else if (this.activeKey !== key) {
        RouteUtils.goto(menu.path)
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/scroll-style";
@import "../../assets/css/layout-style";
.i-menu {
  height: calc(100vh - @h-header - @h-trigger);
  overflow-y: auto;
  overflow-x: hidden;
  .scroll-style();
}
</style>

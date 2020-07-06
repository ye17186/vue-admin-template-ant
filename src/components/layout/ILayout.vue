<template>
  <a-layout class="i-layout">
    <i-layout-left-aside></i-layout-left-aside>
    <a-layout class="i-layout-right">
      <i-layout-right-header></i-layout-right-header>
      <i-layout-right-body></i-layout-right-body>
      <i-layout-right-footer></i-layout-right-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import ILayoutLeftAside from './ILayoutLeftAside'
import ILayoutRightHeader from './ILayoutRightHeader'
import ILayoutRightBody from './ILayoutRightBody'
import ILayoutRightFooter from './ILayoutRightFooter'
export default {
  name: 'ILayout',
  components: { ILayoutRightFooter, ILayoutRightBody, ILayoutRightHeader, ILayoutLeftAside },
  created () {
    const collapsed = localStorage.getItem('sideCollapsed')
    this.$store.commit('setSideCollapsed', collapsed === 'true')
  }
}
</script>

<style lang="less">
  @import "../../assets/css/scroll-style";
  @import "../../assets/css/layout-style";
  .i-layout {
    .i-layout-right {
      height: 100vh;
      overflow: hidden;
    }
    .ant-layout-footer {
      height: @h-footer;
      padding: 0 !important;
    }
  }
</style>

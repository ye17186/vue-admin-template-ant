<template>
  <a-breadcrumb class="i-layout-breadcrumb">
    <a-breadcrumb-item v-for="(item, index) in titles" :key="index">{{ item }}</a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script>
import MenuUtils from '../../plugins/utils/MenuUtils'

export default {
  name: 'ILayoutRightHeaderBarBreadcrumb',
  computed: {
    titles: function () {
      const activeKey = this.$store.state.layout.activeKey
      const menu = MenuUtils.getMenuByKey(activeKey)
      return menu.titles
    }
  }
}
</script>

<style scoped>
  .i-layout-breadcrumb {
    line-height: 100%;
    height: 100%;
    display: inline-block;
  }
</style>

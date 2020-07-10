<template>
  <i :class="font + ' ' + type">
    <span v-if="title">{{ title }}</span>
    <slot v-else></slot>
  </i>
</template>

<script>
export default {
  name: 'IIcon',
  props: {
    type: String,
    font: {
      type: String,
      default: 'iconfont'
    },
    title: String
  }
}
</script>

<style lang="less">
  .collapsed-style {
    display: inline-block;
    max-width: 0;
    opacity: 0;
  }
  .ant-menu-item i  {
    font-size: 14px;
    > span {
      margin-left: 5px;
      transition: width .3s, opacity .3s;
    }
  }
  .ant-menu-submenu i  {
    font-size: 14px;
    > span {
      margin-left: 5px;
      transition: width .3s, opacity .3s;
    }
  }
  .ant-menu-inline-collapsed .ant-menu-item i > span {
    .collapsed-style
  }
  .ant-menu-inline-collapsed .ant-menu-submenu i > span {
    .collapsed-style
  }
</style>

<template>
  <span>
    <i :class="font + ' ' + type" :style="style"></i>
    <span v-if="title" :style="{'margin-left': span + 'px'}">{{ title }}</span>
  </span>
</template>

<script>
export default {
  name: 'IIcon',
  props: {
    font: {
      type: String,
      default: 'iconfont'
    },
    type: String,
    title: String,
    span: {
      type: Number,
      default: 5
    },
    iconSize: {
      type: Number,
      default: 16
    }
  },
  data () {
    return {
      style: {
        'font-size': this.iconSize + 'px'
      }
    }
  }
}
</script>

<style lang="less">
  .collapsed-style {
    display: inline-block;
    max-width: 0;
    opacity: 0;
  }
  .ant-menu-inline-collapsed .ant-menu-item i + span {
    .collapsed-style
  }
  .ant-menu-inline-collapsed .ant-menu-submenu i + span {
    .collapsed-style
  }
</style>

<template>
  <span class="i-collapse-btn" :class="{ 'is-active': !collapse }" @click="handleClick">
    <i-icon type="i-icon-menu" :icon-size="32"></i-icon>
  </span>
</template>

<script>
import IIcon from '../IIcon'
export default {
  name: 'ILayoutRightHeaderBarCollapse',
  components: { IIcon },
  computed: {
    collapse: function () {
      return this.$store.state.app.sideCollapsed
    }
  },
  methods: {
    handleClick: function () {
      this.$store.commit('setSideCollapsed', !this.collapse)
    }
  }
}
</script>

<style lang="less">
  @import "../../assets/css/layout-style";

  .i-collapse-btn {
    cursor: pointer;
    i {
      display: inline-block;
      font-size: 32px !important;
      transform: rotate(0deg);
      transition: 0.3s;
      transform-origin: 50% 50%;
    }

    &.is-active i {
      transform: rotate(90deg);
    }
  }
</style>

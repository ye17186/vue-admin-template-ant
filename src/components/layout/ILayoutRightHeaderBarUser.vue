<template>
  <a-dropdown placement="bottomRight">
    <span style="display: inline-block;">
      <img class="i-user-avatar" src="../../assets/image/logo/wx_logo.jpg" alt="用户头像"/>
      <a class="ant-dropdown-link">admin<a-icon type="down" /></a>
    </span>
    <a-menu slot="overlay" size="small">
      <a-menu-item>
        <i-icon type="i-icon-logout" title="安全退出"></i-icon>
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
import IIcon from '../IIcon'
export default {
  name: 'ILayoutRightHeaderBarUser',
  components: { IIcon }
}
</script>

<style scoped>
  .i-user-avatar {
    width: 32px;
    height: 32px;
    border-radius: 4px;
    border: 1px solid #eee;
    padding: 2px;
    margin: 0 5px;
  }
</style>

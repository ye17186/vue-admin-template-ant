<template>
  <a-layout-header class="i-layout-header">
    <ul class="i-left-bar">
      <li style="padding: 0 10px;"><i-layout-right-header-bar-collapse></i-layout-right-header-bar-collapse></li>
      <li><i-layout-right-header-bar-breadcrumb></i-layout-right-header-bar-breadcrumb></li>
    </ul>
    <ul class="i-right-bar">
      <li><i-layout-right-header-bar-lock :icon-size="28"></i-layout-right-header-bar-lock></li>
      <li><i-lang-switcher :icon-size="28"></i-lang-switcher></li>
      <li style="padding: 0 10px 0 5px;"><i-layout-right-header-bar-user style="cursor: pointer; margin-right: 10px;"></i-layout-right-header-bar-user></li>
    </ul>
  </a-layout-header>
</template>

<script>
import ILangSwitcher from '../ILangSwitcher'
import ILayoutRightHeaderBarLock from './ILayoutRightHeaderBarLock'
import ILayoutRightHeaderBarUser from './ILayoutRightHeaderBarUser'
import ILayoutRightHeaderBarCollapse from './ILayoutRightHeaderBarCollapse'
import ILayoutRightHeaderBarBreadcrumb from './ILayoutRightHeaderBarBreadcrumb'

export default {
  name: 'ILayoutRightHeader',
  components: { ILayoutRightHeaderBarBreadcrumb, ILayoutRightHeaderBarCollapse, ILayoutRightHeaderBarUser, ILayoutRightHeaderBarLock, ILangSwitcher }
}
</script>

<style lang="less">
  @import "../../assets/css/layout-style";
  .i-layout-header {
    background: #fff;
    padding: 0;

    ul.i-left-bar {
      float: left;
      list-style: none;
      padding: 0;
      li {
        height: @h-header;
        line-height: @h-header;
        float: left;
        padding: 0 5px;
        &:hover {
          background: rgba(0,0,0,.025);
        }
      }
    }

    ul.i-right-bar {
      float: right;
      list-style: none;
      padding: 0;
      li {
        height: @h-header;
        line-height: @h-header;
        float: left;
        padding: 0 5px;
        &:hover {
          background: rgba(0,0,0,.025);
        }
      }
    }
  }
</style>

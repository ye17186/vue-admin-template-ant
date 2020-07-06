<template>
  <a-layout-content class="i-layout-right-body">
    <i-layout-tabs></i-layout-tabs>
    <div class="i-layout-right-body-main">
      <router-view/>
    </div>
  </a-layout-content>
</template>

<script>
import ILayoutTabs from './ILayoutTabs'
export default {
  name: 'ILayoutRightBodyMain',
  components: { ILayoutTabs }
}
</script>

<style lang="less" scoped>
  @import "../../assets/css/scroll-style";
  @import "../../assets/css/layout-style";

  .i-layout-right-body {
    height: calc(100vh - @h-header);

    .i-layout-right-body-main {
      height: calc(100vh - @h-header - @h-tabs - @h-footer);
      overflow: auto;
      .scroll-style();
    }
  }
</style>

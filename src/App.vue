<template>
  <a-config-provider :locale="zhCN">
    <div id="app">
      <router-view></router-view>
    </div>
  </a-config-provider>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'

export default {
  name: 'app',
  data () {
    return {
      zhCN
    }
  }
}
</script>

<style lang="less">
html body {
  #app {
    height: 100%;
    width: 100%;
  }
  #nprogress .bar {
    background-color: @primary-color;
  }
}
</style>

<template>
  <a-result status="404" title="404" sub-title="对不起，您访问的页面不存在。">
    <template #extra>
      <a-button type="primary">返回首页</a-button>
    </template>
  </a-result>
</template>

<script>
export default {
  name: 'Page404'
}
</script>

<style scoped>

</style>

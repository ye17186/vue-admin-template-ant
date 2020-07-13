<template>
  <a-result
    :isSuccess="true"
    :content="false"
    :title="email"
    :sub-title="description">
    <template #extra>
      <a-button type="primary">查看邮箱</a-button>
      <a-button style="margin-left: 8px" @click="goLogin">返回登录</a-button>
    </template>

  </a-result>
</template>

<script>
import RouteUtils from '../../plugins/utils/RouteUtils'

export default {
  name: 'RegisterResult',
  data () {
    return {
      description: '激活邮件已发送到你的邮箱中，邮件有效期为24小时。请及时登录邮箱，点击邮件中的链接激活帐户。',
      form: {}
    }
  },
  computed: {
    email () {
      const v = this.form && (this.form.email || 'xxx')
      return `你的账户：${v} 注册成功`
    }
  },
  created () {
    this.form = this.$route.params
  },
  methods: {
    goLogin: function () {
      RouteUtils.goto('/login')
    }
  }
}
</script>

<style scoped>

</style>

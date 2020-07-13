<template>
  <a-button :disabled="disabled" @click="handleClick">
    {{ !disabled && '获取验证码' || textTemplate.replace('%t', this.time) }}
  </a-button>
</template>

<script>
export default {
  name: 'ISmsSendButton',
  props: {
    interval: {
      type: Number,
      default: 15
    },
    textTemplate: {
      type: String,
      default: '已发送（%ts）'
    }
  },
  data () {
    return {
      disabled: false,
      time: this.interval,
      smsCode: ''
    }
  },
  methods: {
    handleClick: function () {
      this.disabled = true
      const interval = window.setInterval(() => {
        if (--this.time <= 0) {
          this.time = 30
          this.disabled = false
          window.clearInterval(interval)
        }
      }, 1000)

      const _this = this
      window.setTimeout(() => {
        this.smsCode = Math.random().toFixed(6).slice(-6)
        this.$notification.success({
          message: '验证码获取成功',
          description: '您的验证码为：' + this.smsCode
        })
        _this.$emit('success', this.smsCode)
      }, 1500)
    }
  }
}
</script>

<style scoped>

</style>

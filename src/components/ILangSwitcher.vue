<template>
  <a-dropdown style="cursor: pointer;">
    <i-icon type="i-icon-zhongyingwen"></i-icon>
    <a-menu slot="overlay" @click="handleClick">
      <a-menu-item :disabled="lang === 'zh-CN'" key="zh-CN">中文</a-menu-item>
      <a-menu-item :disabled="lang === 'en'" key="en">English</a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
import IIcon from './IIcon'
export default {
  name: 'ILangSwitcher',
  components: { IIcon },
  props: {
    iconSize: {
      type: Number,
      default: 16
    }
  },
  computed: {
    lang: function () {
      return this.$store.state.app.lang
    }
  },
  methods: {
    handleClick: function ({ key }) {
      this.$i18n.locale = key
      this.$store.commit('setLang', key)
    }
  }
}
</script>

<style scoped>

</style>

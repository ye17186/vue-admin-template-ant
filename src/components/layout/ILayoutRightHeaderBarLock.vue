<template>
  <span>
    <a-tooltip style="cursor: pointer;">
      <span slot="title">{{ $t('headerBar.lock.tip') }}</span>
      <i-icon type="i-icon-lock" :icon-size="iconSize" @click.native="visible = true"></i-icon>
    </a-tooltip>

    <a-modal :visible="visible" title="设置锁屏密码" @ok="handleOk" @cancel="handleCancel">
      <a-input v-model="lockPwd"></a-input>
    </a-modal>
  </span>

</template>

<script>
import IIcon from '../IIcon'
import CacheUtils from '../../plugins/utils/CacheUtils'
import RouteUtils from '../../plugins/utils/RouteUtils'
export default {
  name: 'ILayoutRightHeaderBarLock',
  components: { IIcon },
  props: {
    iconSize: {
      type: Number,
      default: 16
    }
  },
  data () {
    return {
      visible: false,
      lockPwd: ''
    }
  },
  methods: {
    handleOk: function () {
      CacheUtils.setObject(CacheUtils.key.LOCK_PWD, this.lockPwd)
      this.$store.commit('setLockBefore', this.$route)
      RouteUtils.goto('/lock')
    },
    handleCancel: function () {
      this.lockPwd = ''
      this.visible = false
    }
  }
}
</script>

<style scoped>

</style>

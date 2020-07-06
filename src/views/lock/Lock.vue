<template>
  <div class="lock-container">
    <div class="lock-form">
      <div class="animate__animated" :class="{'animate__shakeX': pwdError, 'animate__bounceOut': pass}">
        <a-input :placeholder="$t('lock.inputPlaceholder')" v-model="pwd">
          <span slot="addonAfter">
            <a-tooltip style="cursor: pointer;">
              <span slot="title">{{ $t('lock.unlockTip') }}</span>
              <i-icon type="i-icon-unlock" style="margin-right: 10px;" @click.native="handleUnlock"></i-icon>
            </a-tooltip>
            <a-tooltip>
              <span slot="title">{{ $t('lock.logoutTip') }}</span>
              <i-icon type="i-icon-logout" @click.native="handleLogout"></i-icon>
            </a-tooltip>
          </span>
        </a-input>
      </div>
    </div>
  </div>

</template>

<script>
import IIcon from '../../components/IIcon'
import CacheUtils from '../../plugins/utils/CacheUtils'
import RouteUtils from '../../plugins/utils/RouteUtils'
export default {
  name: 'Lock',
  components: { IIcon },
  computed: {
    locked: function () {
      return this.$store.state.app.lockedBefore
    }
  },
  data: function () {
    return {
      pwd: '',
      pwdError: false,
      pass: false
    }
  },
  methods: {
    handleUnlock: function () {
      const lockPwd = CacheUtils.getObject(CacheUtils.key.LOCK_PWD)
      if (this.pwd === lockPwd) {
        this.pass = true
        setTimeout(() => {
          CacheUtils.clear(CacheUtils.key.LOCK_PWD)
          const to = this.locked || CacheUtils.getObject(CacheUtils.key.LOCK_ROUTER)
          RouteUtils.goto(to)
        }, 300)
      } else {
        this.pwd = ''
        this.$message.error('解锁密码错误')
        this.pwdError = true
        setTimeout(() => {
          this.pwdError = false
        }, 1000)
      }
    },
    handleLogout: function () {
      // 清空缓存
      CacheUtils.clearAll()
      window.location.reload()
    }
  }
}
</script>

<style lang="less" scoped>
  .lock-container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .title {
      margin-bottom: 8px;
      color: #333;
    }
  }

  .lock-container::before {
    z-index: -999;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url("../../assets/image/bg/lock.png");
    background-size: cover;
  }

  .lock-form {
    width: 300px;
  }
</style>

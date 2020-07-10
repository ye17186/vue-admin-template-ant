<template>
  <div class="i-user-login">
    <a-form-model class="login-form" ref="loginForm" :rules="rules" :model="request">
      <a-tabs v-model="activeTab">
        <a-tab-pane key="E" :tab="$t('login.tab1.tabName')">
          <a-alert v-if="errors.e" style="margin-bottom: 24px;" type="error" show-icon :message="errors.e" />
          <a-form-model-item prop="email">
            <a-input :placeholder="$t('login.tab1.emailPlaceholder')" size="large"
                     v-model="request.email">
              <i-icon slot="prefix" type="i-icon-mail" style="color:rgba(0,0,0,.25)" />
            </a-input>
          </a-form-model-item>
          <a-form-model-item prop="password">
            <a-input type="password" :placeholder="$t('login.tab1.passwordPlaceholder')" size="large"
                     v-model="request.password">
              <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
            </a-input>
          </a-form-model-item>
        </a-tab-pane>
        <a-tab-pane key="M" :tab="$t('login.tab2.tabName')">
          <a-alert v-if="errors.m" style="margin-bottom: 24px;" type="error" show-icon :message="errors.m" />
          <a-form-model-item prop="mobile" v-model="request.mobile">
            <a-input :placeholder="$t('login.tab2.mobilePlaceholder')" size="large"
                     v-model="request.mobile">
              <i-icon slot="prefix" type="i-icon-mobile" style="color:rgba(0,0,0,.25)"></i-icon>
            </a-input>
          </a-form-model-item>
          <a-row :gutter="16">
            <a-col class="gutter-row" :span="16">
              <a-form-model-item prop="sms">
                <a-input type="password" :placeholder="$t('login.tab2.smsPlaceholder')" size="large"
                         v-model="request.sms">
                  <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
                </a-input>
              </a-form-model-item>
            </a-col>
            <a-col class="gutter-row" :span="8">
              <a-form-model-item>
                <a-button class="smsSendBtn" :disabled="smsSendBtn.disabled" @click="doSendSms">
                  {{ !smsSendBtn.disabled && '获取验证码' || smsSendBtn.time + 's' }}
                </a-button>
              </a-form-model-item>
            </a-col>
          </a-row>
        </a-tab-pane>
        <i-lang-switcher slot="tabBarExtraContent"></i-lang-switcher>
      </a-tabs>
      <a-form-model-item>
        <a-button class="login-btn" type="primary" :loading="loading"
                  @click="doLogin">{{ $t('login.loginBtn') }}</a-button>
      </a-form-model-item>

      <div class="user-login-other">
        <span>其他登录方式</span>
        <a><i-icon class="item-icon" type="i-icon-alipay" :icon-size="24"></i-icon></a>
        <a><i-icon class="item-icon" type="i-icon-wechat-fill" :icon-size="24"></i-icon></a>
        <router-link class="user-register-link" :to="{ path: 'register' }">注册账户</router-link>
      </div>
    </a-form-model>
  </div>
</template>

<script>
import ILangSwitcher from '../../components/ILangSwitcher'
import IIcon from '../../components/IIcon'
import FormUtils from '../../plugins/utils/FormUtils'
import HttpUtils from '../../plugins/utils/HttpUtils'
import CacheUtils from '../../plugins/utils/CacheUtils'
import RouteUtils from '../../plugins/utils/RouteUtils'
import MenuUtils from '../../plugins/utils/MenuUtils'
export default {
  name: 'Login',
  components: { IIcon, ILangSwitcher },
  data () {
    return {
      activeTab: 'E',
      request: {
        email: 'ye001@163.com',
        password: '123456',
        mobile: '13200000001',
        sms: ''
      },
      loading: false,
      errors: {
        e: '',
        m: ''
      },
      smsSendBtn: {
        disabled: false,
        time: 15
      },
      rules: {
        email: [
          { required: true, message: this.$i18n.t('login.tab1.emailEmpty') },
          { type: 'email', message: this.$i18n.t('login.tab1.emailInvalid') }
        ],
        password: [
          { required: true, message: this.$i18n.t('login.tab1.passwordEmpty') }
        ],
        mobile: [
          { required: true, message: this.$i18n.t('login.tab2.mobileEmpty') },
          { validator: this.$validator.mobile, message: this.$i18n.t('login.tab2.mobileInvalid') }
        ],
        sms: [
          { required: true, message: this.$i18n.t('login.tab2.smsEmpty') }
        ]
      }
    }
  },
  methods: {
    doSendSms: function () {
      this.smsSendBtn.disabled = true
      const _this = this
      const interval = window.setInterval(() => {
        if (_this.smsSendBtn.time-- <= 0) {
          _this.smsSendBtn.time = 15
          _this.smsSendBtn.disabled = false
          window.clearInterval(interval)
        }
      }, 1000)
    },
    doLogin: function () {
      this.errors.e = ''
      this.errors.m = ''
      const _request = this.request
      FormUtils.validForm(this.$refs.loginForm, () => {
        this.loading = true
        const param = this.activeTab === 'E' ? {
          loginType: this.activeTab,
          email: _request.email,
          password: _request.password
        } : {
          loginType: this.activeTab,
          mobile: _request.mobile,
          sms: _request.sms
        }
        HttpUtils.post(this.$API.user.login, param).then(res => {
          // 缓存用户信息
          CacheUtils.setObject(CacheUtils.key.USER_INFO, res)
          // 构建用户路由表
          RouteUtils.loadUserRouters(res.authCodes)
          // 登录成功，跳转至首页
          RouteUtils.goto(MenuUtils.getIndexTab())
        }).catch(err => {
          if (this.activeTab === 'E') {
            this.errors.e = err.msg
          } else {
            this.errors.m = err.msg
          }
        }).finally(() => {
          this.loading = false
        })
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .i-user-login {
    .login-form {
      width: 328px;
      margin: 0 auto;
    }
    .smsSendBtn {
      display: block;
      width: 100%;
      height: 40px;
    }
    .login-btn {
      padding: 0 15px;
      font-size: 16px;
      height: 40px;
      width: 100%;
    }
    .user-login-other {
      text-align: left;
      margin-top: 24px;
      line-height: 22px;
      .item-icon {
        font-size: 24px;
        color: rgba(0, 0, 0, 0.2);
        margin-left: 16px;
        vertical-align: middle;
        cursor: pointer;
        transition: color 0.3s;
        &:hover {
          color: @primary-color;
        }
      }
      .user-register-link {
        float: right;
      }
    }
  }

</style>

<template>
  <div class="i-user-register">
    <a-form-model class="register-form" ref="registerForm" :rules="rules" :model="request">
      <a-alert v-if="errorMsg" style="margin-bottom: 24px;" type="error" show-icon :message="errorMsg" />
      <a-form-model-item prop="email">
        <a-input size="large" placeholder="邮箱" v-model="request.email">
          <i-icon slot="prefix" class="el-input__icon" type="i-icon-mail"></i-icon>
        </a-input>
      </a-form-model-item>
      <a-form-model-item prop="password">
        <a-input size="large" type="password" placeholder="密码" v-model="request.password">
          <i-icon slot="prefix" class="el-input__icon" type="i-icon-key"></i-icon>
        </a-input>
      </a-form-model-item>
      <a-form-model-item prop="checkPass">
        <a-input size="large" type="password" placeholder="确认密码" v-model="request.checkPass">
          <i-icon slot="prefix" class="el-input__icon" type="i-icon-key"></i-icon>
        </a-input>
      </a-form-model-item>
      <a-form-model-item prop="mobile">
        <a-input size="large" placeholder="手机号" v-model="request.mobile">
          <i-icon slot="prefix" class="el-input__icon" type="i-icon-mobile"></i-icon>
        </a-input>
      </a-form-model-item>
      <a-row :gutter="20">
        <a-col :span="14">
          <a-form-model-item prop="sms">
            <a-input size="large" type="password" placeholder="短信验证码" v-model="request.sms">
              <i-icon slot="prefix" class="el-input__icon" type="i-icon-key"></i-icon>
            </a-input>
          </a-form-model-item>
        </a-col>
        <a-col :span="10">
          <a-form-model-item>
            <i-sms-send-button class="smsSendBtn" @success="handleSmsSuccess">获取验证码</i-sms-send-button>
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row :gutter="20">
        <a-col :span="14">
          <a-form-model-item>
            <a-button size="large" class="register-btn" type="primary" :loading="loading"
                       @click="doRegister">注册</a-button>
          </a-form-model-item>
        </a-col>
        <a-col :span="10" style="text-align: right;">
          <a-form-model-item>
            <router-link :to="{ path: 'login' }">已有账号</router-link>
          </a-form-model-item>
        </a-col>
      </a-row>
    </a-form-model>
  </div>
</template>

<script>

import IIcon from '../../components/IIcon'
import HttpUtils from '../../plugins/utils/HttpUtils'
import FormUtils from '../../plugins/utils/FormUtils'
import ISmsSendButton from '../../components/ISmsSendButton'
import RouteUtils from '../../plugins/utils/RouteUtils'
// import RouteUtils from '../../plugins/utils/RouteUtils'
export default {
  name: 'Register',
  components: { ISmsSendButton, IIcon },
  data: function () {
    return {
      smsCode: '',
      request: {
        email: 'ye001@163.com',
        password: '123456',
        checkPass: '',
        mobile: '13200000001',
        sms: ''
      },
      loading: false,
      errorMsg: '',
      smsSendBtn: {
        disabled: false,
        time: 30
      },
      rules: {
        email: [
          { required: true, message: '请输入邮箱' },
          { type: 'email', message: '邮箱格式不正确' }
        ],
        password: [
          { required: true, message: '请输入密码' }
        ],
        checkPass: [
          { required: true, message: '请输入确认密码' },
          { validator: this.checkPassValidator, message: '两次输入的密码不一致' }
        ],
        mobile: [
          { required: true, message: '请输入手机号' },
          { validator: this.$validator.mobile, message: '手机号格式不正确' }
        ],
        sms: [
          { required: true, message: '请输入短信验证码' }
        ]
      }
    }
  },
  methods: {
    checkPassValidator: function (rule, value, callback) {
      if (this.request.password !== this.request.checkPass) {
        callback(new Error())
      } else {
        callback()
      }
    },
    handleSmsSuccess: function (smsCode) {
      this.request.smsCode = smsCode
    },
    doRegister: function () {
      this.errorMsg = ''
      FormUtils.validForm(this.$refs.registerForm, () => {
        this.loading = true
        HttpUtils.post(this.$API.user.register, this.request).then(res => {
          this.$message.success('账号注册成功')
          RouteUtils.goto({
            name: 'RegisterResult',
            params: {
              email: this.request.email,
              mobile: this.request.mobile
            }
          })
        }).catch(err => {
          this.errorMsg = err.msg
        }).finally(() => {
          this.loading = false
        })
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .i-user-register {
    .register-form {
      width: 368px;
      margin: 0 auto;
      .i-lang-btn {
        position: relative;
        top: 34px;
        right: -310px;
        cursor: pointer;
        z-index: 999
      }
      .smsSendBtn {
        display: block;
        width: 100%;
        height: 40px;
      }
      .register-btn {
        padding: 0 15px;
        font-size: 16px;
        height: 40px;
        width: 100%;
      }
      .user-register-footer {
        text-align: right;
        margin-top: 24px;
        line-height: 22px;
        .user-options {
          float: right;
        }
      }
    }
  }
</style>

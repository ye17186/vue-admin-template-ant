import Vue from 'vue'
import './modules/ant-design-vue' // ant
import './modules/axios-config' // axios配置
import validator from './modules/validator' // 表单校验
import api from '../config/api' // 加载API
import 'animate.css' // 加载animate动画

if (process.env.VUE_APP_ENV === 'dev' || process.env.VUE_APP_ENV === 'preview') { // 加载mock
  require('../mock')
}

Vue.prototype.$validator = validator
Vue.prototype.$API = api

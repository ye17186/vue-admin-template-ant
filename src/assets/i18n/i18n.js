import Vue from 'vue'

import VueI18n from 'vue-i18n'
import en from './lang/en'
import zhCN from './lang/zh-CN'
Vue.use(VueI18n)

const messages = {
  en: { ...en },
  'zh-CN': { ...zhCN }
}
const i18n = new VueI18n({
  locale: 'zh-CN', // 设置默认语言
  messages
})
export default i18n

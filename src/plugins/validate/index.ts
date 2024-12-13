import * as veeValidate from 'vee-validate'
import { all } from '@vee-validate/rules'
import { localize } from '@vee-validate/i18n'
import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json'
import yup from './yup'

veeValidate.configure({
  generateMessage: localize('zh_CN', zh_CN)
})

// 这一步操作就是将所有的验证规则默认都加载上 这一步是使用的官方文档
Object.entries(all).forEach(([name, rule]) => {
  veeValidate.defineRule(name, rule)
})
const modules = { yup, ...veeValidate }

export default modules

import "./scss/index.scss"
import jfButton from './button'
import jfDialog from './dialog'
import jfFloatFrame from './floatFrame'
import { jfInput, jfPwdInput } from './input'
import jfPassword from './password'
import jfShadow from './shadow'
import jfSmsVerifyCode from './smsVerifyCode'
import jfToast from './toast'

const components = [
  jfButton,
  jfDialog,
  jfFloatFrame,
  jfInput,
  jfPwdInput,
  jfPassword,
  jfShadow,
  jfSmsVerifyCode,
  jfToast
]
const install = function (Vue, opts = {}) {
  components.map((component) => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  jfButton,
  jfDialog,
  jfFloatFrame,
  jfInput,
  jfPwdInput,
  jfPassword,
  jfShadow,
  jfSmsVerifyCode,
  jfToast
}

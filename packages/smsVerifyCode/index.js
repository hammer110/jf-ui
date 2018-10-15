// 获取验证码
import JfSmsVerifyCode from './src/main'

JfSmsVerifyCode.install = function (Vue) {
  Vue.component(JfSmsVerifyCode.name, JfSmsVerifyCode)
}

export default JfSmsVerifyCode

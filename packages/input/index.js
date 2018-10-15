// input
import jfInput from './src/main'
import jfPwdInput from './src/pwdInput'

jfInput.install = function (Vue) {
  Vue.component(jfInput.name, jfInput)
}
jfPwdInput.install = function (Vue) {
  Vue.component(jfPwdInput.name, jfPwdInput)
}

export { jfPwdInput, jfInput }

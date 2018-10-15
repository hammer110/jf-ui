// toast框
import JfToast from './src/main'

JfToast.install = function (Vue) {
  Vue.component(JfToast.name, JfToast)
}

export default JfToast

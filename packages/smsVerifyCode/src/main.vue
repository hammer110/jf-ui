<template>
    <jfShadow
      alpha =".5"
    >
      <div :class="['jf-validcode-wrap', {'jf-validcode-error': isError, 'jf-validcode-over': timeDownOver}]" @click.stop="">
        <header class="jf-validcode-header flex">
            <i class="cell_1 iconfont icon-float_off_n" @click="close"></i>
        </header>
        <article class="jf-validcode-content">
          <p><slot></slot></p>
          <section class="jf-validcode-input flex">
              <jf-pwd-input
                 readonly="readonly"
                 type="text"
                 :maxlength="1"
                 disabled="disabled"
                 v-for="(item, key) in len"
                 :curForcus="inputArr.length === key"
                 :key="item"
                 :value="inputArr[item-1]"
              />
          </section>
        </article>
        <footer class="jf-validcode-footer" @click="achieveCode">{{footerText}}</footer>
      </div>
    </jfShadow>
</template>
<script>

import jfShadow from '../../shadow/'
import jfButton from '../../button/'
// import jfInput from '../../input/';
import jfPwdInput from '../../input/src/pwdInput'

let time = 0
export default {
  name: 'jfSmsVerifyCode',
  data () {
    return {
      footerText: '获取验证码',
      timeDownOver: false, // 倒计时是否结束
      curIndex: 0
    }
  },
  props: {
    len: {
      type: Number,
      require: false,
      default: 4
    },
    inputArr: {
      type: Array,
      require: true,
      default: function () {
        return []
      }
    },
    time: {
      type: Number,
      require: true,
      default: 60
    },
    isError: Boolean,
    isReload: Boolean,
    resetInterval: Boolean
  },
  watch: {
    // 重置倒计时获取
    resetInterval (newVal, oldVal) {
      if (newVal !== oldVal) {
        clearInterval(window.timeoutId)
        this.timeDownOver = true
        this.footerText = '获取验证码'
        this.$emit('timeDown')
      }
    },
    inputArr (newVal) {
      if (!newVal) { return false }
      // 用户输入完成以后通知父级组件
      if (newVal.length >= this.len) {
        this.$emit('complete', this.inputArr)
      }
    },
    // 点击重新获取
    isReload (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.startTimeDown(this.time || 60)
      }
    },
    isError (newVal) {
      if (newVal) {
        clearInterval(window.timeoutId)
        this.footerText = '获取验证码'
      }
    }
  },
  computed: {
  },
  methods: {
    leftCallBack () {
      // 点击左侧按钮
      this.$emit('dialogLeftBtnFn')
    },
    rightCallBack () {
      // 点击右侧按钮
      this.$emit('dialogRightBtnFn')
    },
    // 点击关闭按钮
    close () {
      this.$emit('close')
    },
    // 获取验证码
    achieveCode () {
      // 只有倒计时结束以后才能重新获取验证码
      if (this.timeDownOver) {
        this.$emit('achieveCode')
      }
    },
    // 开始倒计时
    startTimeDown (diyTime) {
      clearInterval(window.timeoutId)
      this.timeDownOver = false
      time = parseInt(diyTime, 10)
      this.footerText = `${time}s`
      window.timeoutId = setInterval(() => {
        if (time <= 1) {
          this.timeDownOver = true
          this.footerText = '获取验证码'
          this.$emit('timeDown')
          clearInterval(window.timeoutId)
        } else {
          time -= 1
          this.footerText = `${time}s`
        }
      }, 1000)
    }
  },
  components: {
    jfShadow,
    jfButton,
    jfPwdInput
  },
  beforeDestroy () {
    // 离开页面之前销毁倒计时
    clearInterval(window.timeoutId)
  },
  created () {
    if (this.isReload) {
      this.startTimeDown(this.time || 60)
    } else {
      this.timeDownOver = true
    }
  }

}
</script>

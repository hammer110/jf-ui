<template>
    <div class="jf-pwd-wrap" v-show="visible">
        <div class="jf-keyboard-notify">
          <p class="keyboard-notify__content flex">
            <i class="keyboard-notify__icon iconfont icon-float_keybordsafe_ic"></i>
            <span>玖富万卡安全键盘</span>
          </p>
          <i class="keyboard-notify__icon iconfont icon-float_unflod_icon keyboard-notify__icon--toggle" @click="hideKeyboard" v-if="showDownBtn"></i>
        </div>
        <ul class="jf-keyboard">
          <li class="flex">
            <span class="cell_1" @click="tapKeyBoard(1)">
              <a href="javascript:;">
                <font color="#000000">1</font>
                <i></i>
              </a>
            </span>
            <span class="cell_1 borlr" @click="tapKeyBoard(2)">
              <a href="javascript:;">
                <font color="#000000">2</font>
                <i>ABC</i>
              </a>
            </span>
            <span class="cell_1" @click="tapKeyBoard(3)">
              <a href="javascript:;">
                <font color="#000000">3</font>
                <i>DEF</i>
              </a>
            </span>
          </li>
          <li class="flex">
            <span class="cell_1" @click="tapKeyBoard(4)">
              <a href="javascript:;">
                <font color="#000000">4</font>
                <i>GHI</i>
              </a>
            </span>
            <span class="cell_1" @click="tapKeyBoard(5)">
              <a href="javascript:;">
                <font color="#000000">5</font>
                <i>JKL</i>
              </a>
            </span>
            <span class="cell_1" @click="tapKeyBoard(6)">
              <a href="javascript:;">
                <font color="#000000">6</font>
                <i>MNO</i>
              </a>
            </span>
          </li>
          <li class="flex">
            <span class="cell_1" @click="tapKeyBoard(7)">
              <a href="javascript:;">
                <font color="#000000">7</font>
                <i>PQRS</i>
                </a>
            </span>
            <span class="cell_1" @click="tapKeyBoard(8)">
              <a href="javascript:;">
                <font color="#000000">8</font>
                <i>TUV</i>
              </a>
            </span>
            <span class="cell_1" @click="tapKeyBoard(9)">
              <a href="javascript:;">
                <font color="#000000">9</font>
                <i>WXYZ</i>
              </a>
            </span>
          </li>
          <li class="flex">
            <span class="cell_1 jf-empty-bg"></span>
            <span class="cell_1" @click="tapKeyBoard(0)">
              <a href="javascript:;" class="jf-keyboard-center">
                <font color="#000000">0</font>
              </a>
            </span>
            <span class="cell_1 jf-empty-bg jf-icon-delete" @click="tapDelete">
              <a href="javascript:;" class="jf-keyboard-center">
                <!-- <span class="iconfont icon-float_numberkeyboard"></span> -->
                <b class="iconfont icon-float_numberkeyboard"></b>
              </a>
            </span>
          </li>
        </ul>
    </div>
</template>
<script>

export default {
  name: 'JfPassWord',
  data () {
    return {
    }
  },
  methods: {
    // 点击键盘
    tapKeyBoard (num) {
      this.$emit('click', num)
    },
    // 点击删除按钮
    tapDelete () {
      this.$emit('delete')
    },
    hideKeyboard () {
      this.$emit('hide')
    }
  },
  props: {
    visible: {
      type: Boolean,
      require: true,
      default: false
    },
    showDownBtn: {
      type: Boolean,
      default: true
    }
  },
  components: {
    // jfShadow,
  },
  created () {}
}
</script>

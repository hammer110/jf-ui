<template>
  <div id="app">
      <h2 class="title">demo</h2>
      <jf-toast
        :visible="isShowToast"
        @callBack="toastCallBack"
        :time = '1500'
      >
        对话框内容对话框内容，对话框内容对话框内容
      </jf-toast>
    <jf-dialog
        :visible="false"
        content="对话框内容对话框内容，对话框内容对话框内容"
        :showClose="false"
        title="提示"
        @tapClose="tapClose"
        @dialogLeftBtnFn="dialogLeftBtnFn"
        @dialogRightBtnFn="dialogRightBtnFn"
        leftBtnText="取消"
        rightBtnText="确定"
    />
  <!--手机验证码弹框 start -->
    <jf-sms-verify-code
      :inputArr="inputArr"
      @close="closeSmsVerif"
      @complete="smsComplete"
      v-if="isShowSMSValidCode"
      :isError="false"
      :isReload="isReload"
      :resetInterval = "resetInterval"
      @achieveCode="achieveCode"
    >请输入银行预留手机，尾号0978交易验证码</jf-sms-verify-code>
    <jf-pass-word
      :visible="isShowSMSValidCode"
      @click="tapKeyBoard"
      @delete="tapDelete"
    />
<!--手机验证码弹框 end -->
    <!--底部列表 start -->
    <jf-float-frame
      v-if="false"
      @click="clickBtn"
      @clickItem="clickItem"
      :list="boxList"
      loopkey="id"
      :showBtn="true"
      tick
      defaultValue="内容1"
      @close="triggerClick('isShowJfFloatFrame')"
    >
      <h1 slot="header">标题</h1>
    </jf-float-frame>
     <jf-input
      type="tel"
      placeholder="默认提示信息"
      :maxlength="1"
    />
  <br/>
    <div class="test_input flex">
      <jf-pwd-input
          class="cell_1 demo-input-file"
          type="text"
          :error="false"
          placeholder="默认数据"
          ref="input"
          :curForcus="true"
          @input="inputChange"
          @change="changeChange"
          @keyUp="inputkeyUp"
          @keyDown="inputkeyDown"
      />
    </div>
    <!--底部列表 end -->
    <footer class="footer-btn">
        <jf-button
        @click="triggerClick('isShowDialog')"
        curStyle="highlight"
        model="big"
        class="demo_btn"
        :disabled="false"
      >
        显示dialog
      </jf-button>
      <jf-button
        model="big"
        @click="triggerClick('isShowToast')"
        class="demo_btn"
      >
        显示Toast
      </jf-button>
      <div class="wrapbtn flex">
          <jf-button
          model="big"
          class="wrapbtn"
        >
          button disbaled
        </jf-button>
      </div>
      <jf-button
        model="big"
        @click="triggerClick('isShowSMSValidCode')"
        class="demo_btn"
      >
        显示手机验证码
      </jf-button>
      <jf-button
         model="big"
         @click="triggerClick('isShowJfFloatFrame')"
         class="demo_btn"
      >
        显示底部列表
      </jf-button>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      resetInterval: false,
      // 是否显示dialog
      isShowDialog: false,
      // 是否显示toast
      isShowToast: false,
      // 是否显示手机验证码弹框
      isShowSMSValidCode: false,
      // 键盘点击统计
      inputArr: [],
      // 是否需要重新获取手机验证码
      isReload: false,
      // 是否显示底部弹框
      isShowJfFloatFrame: false,
      boxList: [
        {
          id: '内容1'
        },
        {
          id: '内容2'
        },
        {
          id: '内容3'
        },
        {
          id: '内容4'
        },
        {
          id: '内容5'
        }
      ]
    }
  },
  components: {
    // jfToast,
    // jfDialog,
    // jfButton,
    // jfSmsVerifyCode,
    // jfPassword,
    // jfFloatFrame,
    // jfPwdInput,
  },
  methods: {
    // 键盘事件
    // 点击键盘
    tapKeyBoard (num) {
      this.inputArr.push(num)
    },
    // 点击删除按钮
    tapDelete () {
      this.inputArr.pop()
    },
    // 输入完短信验证码
    smsComplete (inputNum) {
      this.resetInterval = true
    },
    // 短信验证码弹框事件
    closeSmsVerif () {
      this.triggerClick('isShowSMSValidCode')
    },
    // 重新获取手机验证码
    achieveCode () {
      this.isReload = !this.isReload
    },
    // 点击关闭按钮
    tapClose () {
      this.triggerClick('isShowDialog')
    },
    // 底部列表弹框
    clickBtn () {
      console.log('click button')
      this.triggerClick('isShowJfFloatFrame')
    },
    clickItem () {
      console.log('click clickItem')
    },
    // input 事件列表
    inputChange () {
      console.log('inputChange')
    },
    changeChange (el) {
      console.log('changeChange', el)
    },
    inputkeyUp () {
      console.log('inputkeyUp')
    },
    inputkeyDown () {
      console.log('inputkeyDown')
    },
    triggerClick (type) {
      this[type] = !this[type]
    },
    toastCallBack () {
      this.isShowToast = !this.isShowToast
    },
    // dialog弹框左侧按钮
    dialogLeftBtnFn () {
      console.log('点击左侧按钮')
      setTimeout(() => {
        this.triggerClick('isShowDialog')
      }, 2000)
    },
    // dialog弹框右侧按钮
    dialogRightBtnFn () {
      console.log('点击右侧按钮')
      setTimeout(() => {
        this.triggerClick('isShowDialog')
      }, 2000)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: PingFangSC-Medium;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
// 这么写优先级会高于button内的样式
// button.jf-btn{
//   width: 78%;
//   margin: 0 auto;
//   height: 40px;
//   border-radius: 10px;
//   color: #fff;
//   line-height: 40px;
//   margin-top: 25px;
// }
// 这么写优先级会低于button内定义的样式
// .jf-btn{
//   width: 80%;
//   margin: 0 auto;
//   background: #409eff;
//   height: 40px;
//   border-radius: 10px;
//   color: #fff;
//   line-height: 40px;
//   margin-top: 25px;
// }
.test_input{
  width: 90%;
  height: .8rem;
  margin: 0 auto;
}
button.demo_btn {
  width: 90%;
  margin: 0 auto;
  line-height: 1.3333rem;
  margin-top: .6667rem;
}
#app .title {
  font-weight: bold;
  font-size: 30px;
  color: #000;
  padding-bottom: .2667rem;
}


body {
 -moz-user-select: none;
 user-select: none;
 -webkit-user-select: none;
}
.wrapbtn{
  height: 100px;
  background: gray;
}
</style>

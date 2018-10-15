<template>
    <jfShadow
      alpha =".5"
      @click="clickShadow"
      v-if="visible"
      :isAddHide="isAddHide"
    >
      <div class="jf-dialog-wrap" @click.stop="">
          <template id="dialog-header">
             <slot name="header" v-if="$slots['header']"></slot>
             <header v-else-if="title" class="jf-dialog-header">{{title}}</header>
          </template>
          <template id="dialog-content">
             <slot name="content" v-if="$slots['content']"></slot>
             <article
               v-else-if="content"
               :class="['jf-dialog-content', {'jf-pd40': !title}]"
             >
              {{content}}
             </article>
          </template>
          <template id="dialog-footer">
             <slot name="footer" v-if="$slots['footer']"></slot>
             <footer v-else-if="leftBtnText || rightBtnText" class="jf-dialog-footer flex">
                <jf-button
                  class="jf-btn-cancel"
                  @click="leftCallBack"
                  v-show="leftBtnText"
                >
                  {{leftBtnText}}
                </jf-button>
                <jf-button
                  class="jf-btn-active"
                  @click="rightCallBack"
                  v-show="rightBtnText"
                >
                {{rightBtnText}}
                </jf-button>
             </footer>
             <div class="jf-dialog-close flex" v-show="showClose" @click.stop.prevent="tapClose">
               <i class="iconfont icon-pop_off_n"></i>
             </div>
          </template>
      </div>
    </jfShadow>
</template>
<script>

import jfShadow from '../../shadow/'
import jfButton from '../../button/'

export default {
  name: 'jfDialog',
  data () {
    return {
    }
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
    // 点击底部关闭按钮
    tapClose () {
      this.$emit('tapClose')
    },
    // 点击遮罩层
    clickShadow () {
      console.log('点击遮罩层')
    }
  },
  props: {
    visible: {
      type: Boolean,
      require: true,
      default: false
    },
    content: {
      type: String,
      require: false
    },
    title: {
      type: String,
      require: false,
      default: "提示"
    },
    leftBtnText: {
      type: String,
      require: false
    },
    rightBtnText: {
      type: String,
      require: false
    },
    showClose: {
      type: Boolean,
      require: false,
      default: false
    },
    isAddHide: {
      type: Boolean,
      require: false,
      default: true
    }
  },
  components: {
    jfShadow,
    jfButton
  },
  created () {
  }
}
</script>

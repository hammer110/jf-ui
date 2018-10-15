<template>
  <jfShadow
    :alpha= .5
    @click="closeBox"
  >
    <div class="jf-floatframe-wrap" @click.stop="">
      <header class="jf-floatframe-header">
        <slot name="header"></slot>
        <i class="iconfont icon-float_off_n" @click="closeBox"></i>
      </header>
      <article class="jf-floatframe-content">
        <ul v-if="!$slots['loopContent']">
          <li
            v-for="(item, key) in list"
            :key="key"
            @click="clickItem(item, key)"
            :class="[
              'flex jf-justify-between',
              {'jf-icon-selected': ((item[loopkey] || item) === defaultValue)}]"
          >
            <span class="">{{item[loopkey] || item}}</span>
            <i

              :class="['iconfont',
                {
                'icon-public_selected_h': circle && ((item[loopkey] || item) === defaultValue),
                'icon-public_selected_d': circle && ((item[loopkey] || item) !== defaultValue),
                'icon-public_selected_icon': tick
                }
              ]"
              v-show="circle || ((item[loopkey] || item) === defaultValue)"
            >
            </i>
          </li>
        </ul>
        <slot v-else name="loopContent"></slot>
      </article>
      <footer class="jf-floatframe-footer flex" v-show="showBtn">
         <jf-button @click="triggerClick" model="big">{{btnText}}</jf-button>
      </footer>
    </div>
  </jfShadow>

</template>
<script>
import jfShadow from '../../shadow'
import jfButton from '../../button'

export default {
  name: 'JfFloatFrame',
  data () {
    return {
      curInfo: null,
      curIndex: 0
    }
  },
  components: {
    jfShadow,
    jfButton
  },
  props: {
    list: {
      type: [Array, Object],
      require: false
    },
    // 循环json对象的key
    loopkey: {
      type: [String],
      require: false
    },
    circle: Boolean,
    tick: Boolean,
    showBtn: Boolean,
    btnText: {
      type: [String],
      require: false,
      default: '确定'
    },
    defaultValue: {
      type: [String, Number],
      require: false
    }
  },
  watch: {
    defaultIndex: {
      handler (newVal, oldVal) {
        if (newVal === oldVal) return false
        this.curIndex = newVal
      },
      immediate: true
    }
  },
  methods: {
    // 触发button点击事件
    triggerClick () {
      this.$emit('click')
    },
    // 点击选项
    clickItem (item, key) {
      this.curInfo = item
      // 点击单个元素通知父组件
      this.$emit('click-item', { item, key })
      this.curIndex = key
    },
    // 关闭当前列表
    closeBox () {
      this.$emit('close')
    }
  }
}
</script>

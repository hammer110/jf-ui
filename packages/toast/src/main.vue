<template>
    <transition name="toast-fade">
        <div class="jf-shadow" v-show="visible">
          <div class="jf-toast">
              <div class="jf-toast_info">
                <slot></slot>
              </div>
          </div>
        </div>
    </transition>
</template>
<script>
let timeoutId = null
export default {
  name: 'JfToast',
  data () {
    return {
    }
  },
  props: {
    info: {
      type: String,
      require: true,
      default: ''
    },
    visible: {
      type: Boolean,
      require: true,
      default: false
    },
    time: {
      type: Number, String,
      require: false,
      default: 1500
    }
  },
  watch: {
    visible (val) {
      if (val) {
        this.$nextTick(() => {
          timeoutId = setTimeout(() => {
            this.$emit('callBack')
          }, this.time)
        })
      } else {
        // 当值为false的时候清空timeout id
        clearTimeout(timeoutId)
      }
    }
  },
  created () {
  }
}
</script>

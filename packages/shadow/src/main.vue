<template>
  <section
    class="jf-shadow-wrap"
    :style="{background: `rgba(0, 0, 0, ${alpha})`}"
    @click="clickShadow"
  >
    <slot></slot>
  </section>
</template>
<script>
export default {
  name: 'jfShadow',
  props: {
    alpha: {
      require: false,
      default: 0
    },
    isAddHide: {
      require: false,
      default: true
    }
  },
  created () {
    if (this.isAddHide) {
      document.getElementsByTagName('body')[0].className = 'oh'
      document.getElementsByTagName('html')[0].className = 'oh'
    }
    
  },
  destroyed () {
    if (this.isAddHide) {
      document.getElementsByTagName('body')[0].className = ''
      document.getElementsByTagName('html')[0].className = ''
    }
    
  },
  methods: {
    clickShadow () {
      this.$emit('click')
    }
  }
}
</script>

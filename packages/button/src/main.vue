<template>
  <button
    :disabled="disabled"
    @click.stop.prevent="triggerClick"
    :class="[
      'cell_1',
       assembleStyle
    ]"
  >
    <slot></slot>
  </button> 
</template>
<script>
export default {
  name: 'JfButton',
  props: {
    curStyle: {
      require: false,
      type: [String, Array],
      default: 'normal'
    },
    model: {
      require: false,
      type: String
      // default: 'big',
    },
    disabled: Boolean
  },
  methods: {
    // 点击button
    triggerClick () {
      this.$emit('click')
    }
  },
  computed: {
    assembleStyle () {
      let { curStyle, model, disabled } = this
      let assembleStyle = model ? `jf-btn-${model}` : 'jf-btns'
      if (typeof curStyle === 'string') {
        if (disabled) {
          assembleStyle += ` jf-btn-${model}-${curStyle} jf-btn-${model}-disabled`
        } else {
          assembleStyle += ` jf-btn-${model}-${curStyle}`
        }
      } else if (Array.isArray(curStyle)) {
        if (disabled) {
          curStyle.push('disabled')
        }
        curStyle.forEach((item) => {
          assembleStyle += ` jf-btn-${model}-${item}`
        })
      }
      return assembleStyle
    }
  }
}
</script>

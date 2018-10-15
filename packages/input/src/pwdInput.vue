<template>
  <span :class="[
      'cell_1',
      'jf-input',
     { 'jf-input-forcus': curForcus,
     'jf-input-border-bottom': error}
     ]"
  >
    <input
      :type="type"
      :placeholder="placeholder"
      class="jf-input-pwd"
      @input="onInput"
      @change="onChange"
      @keyup="onkeyUp"
      @keyDown="onKeyDown"
      @blur="onBlur"
      @focus="onFocus"
      ref="jfInputRef"
      :value="value"
      :readonly="readonly"
      :disabled="disabled"
      :maxlength="maxlength"
      :checked="checked"
    >
  </span>
</template>
<script>
export default {
  name: 'jfPwdInput',
  props: {
    type: {
      required: false,
      type: String,
      default: 'text'
    },
    placeholder: {
      required: false,
      type: String,
      default: ''
    },
    maxlength: {
      required: false,
      type: Number
    },
    disabled: Boolean,
    readonly: Boolean,
    checked: Boolean,
    required: Boolean,
    error: Boolean,
    curForcus: Boolean,
    value: {
      type: [String, Number]
    }
  },
  methods: {
    onInput () {
      this.$emit('input', this.$refs.jfInputRef)
    },
    onChange () {
      this.$emit('change', this.$refs.jfInputRef)
    },
    onkeyUp () {
      this.$emit('keyUp', this.$refs.jfInputRef)
    },
    onBlur () {
      this.$emit('blur', this.$refs.jfInputRef)
    },
    onFocus () {
      this.$emit('focus', this.$refs.jfInputRef)
    },
    onKeyDown () {
      this.$emit('keyDown', this.$refs.jfInputRef)
    }
  }
}
</script>

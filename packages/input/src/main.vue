<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :class="['jf-input', {'jf-input-border-bottom': error}]"
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
</template>
<script>
export default {
  name: 'JfInput',
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

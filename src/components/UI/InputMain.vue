<template>
  <input
      :value="modelValue"
      @input="updateInput"
      type="text" >
</template>

<script>
export default {
  name: "InputMain",
  props: {
    modelValue: [String]
  },
  data () {
    return {

    }
  },
  methods: {
    updateInput(e) {
      this.$emit('update:modelValue', e.target.value)
    }
  }
}
</script>

<style scoped>
input {
  font-size: 18px;
  padding: 6px;
  border-radius: 8px;
  outline: none;
}
</style>
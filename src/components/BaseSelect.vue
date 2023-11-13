<script setup lang="ts">
defineProps<{
  label: string
  modelValue: string | number
  options: string[]
}>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
const onChange = (e: any) => emit('update:modelValue', e.target.value)
</script>
<template>
  <label v-if="label">{{ label }}</label>
  <select :value="modelValue" class="field" v-bind:="$attrs" @change="onChange">
    <option
      v-for="option in options"
      :value="option"
      :key="option"
      :selected="option === modelValue"
    >
      {{ option }}
    </option>
  </select>
</template>

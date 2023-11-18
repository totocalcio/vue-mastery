<script setup lang="ts">
const props = defineProps<{
  label: string
  modelValue: string | number
  value: string | number
}>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()
const onChange = () => emit('update:modelValue', props.value)
</script>

<template>
  <input v-bind="$attrs" :checked="modelValue === value" :value="value" @change="onChange" />
  <label v-if="label">{{ label }}</label>
</template>

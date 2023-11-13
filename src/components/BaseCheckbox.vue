<script setup lang="ts">
defineProps<{
  label: string
  modelValue: boolean
}>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
const onChange = (e: any) => emit('update:modelValue', e.target.checked)
</script>

<template>
  <input :="$attrs" :checked="modelValue" class="field" @change="onChange" />
  <label v-if="label">{{ label }}</label>
</template>

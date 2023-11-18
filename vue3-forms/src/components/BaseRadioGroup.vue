<script setup lang="ts">
import BaseRadio from './BaseRadio.vue'

type Options = {
  label: string
  value: string | number
}

defineProps<{
  options: Options[]
  name: string
  modelValue: string | number
  vertical?: boolean
}>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
const onUpdate = (e: any) => emit('update:modelValue', e)
</script>

<template>
  <component
    v-for="option in options"
    :key="option.value"
    :is="vertical ? 'div' : 'span'"
    :class="{ horizontal: !vertical }"
  >
    <BaseRadio
      :label="option.label"
      :value="option.value"
      :name="name"
      :modelValue="modelValue"
      @update:modelValue="onUpdate"
      type="radio"
    />
  </component>
</template>

<style scoped>
.horizontal {
  margin-right: 20px;
}
</style>

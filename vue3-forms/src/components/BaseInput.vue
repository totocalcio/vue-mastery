<script setup lang="ts">
import UniqueID from '../../features/UniqueID'

const uuid = UniqueID().getID().toString()

defineProps<{
  label: string
  modelValue: string | number
  error?: string
}>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
const onInput = (e: any) => emit('update:modelValue', e.target.value)
</script>

<template>
  <label :for="uuid">{{ label }}</label>
  <input
    :="$attrs"
    :placeholder="label"
    class="field"
    :value="modelValue"
    @input="onInput"
    :id="uuid"
    :aria-describedby="error ? `${uuid}-error` : undefined"
    :aria-invalid="error ? true : undefined"
  />
  <p v-if="error" class="errorMessage" :id="`${uuid}-error`" aria-live="assertive">{{ error }}</p>
</template>

<style scoped>
.errorMessage {
  color: red;
}
</style>

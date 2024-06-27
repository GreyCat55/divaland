<template>
  <div>
    <label :for="id" class="font-zyzol block text-violet-200 text-lg">{{ label }}</label>
    <input
      :id="id"
      :value="value"
      :type="type"
      :placeholder="placeholder"
      @input="onInput"
      class="py-2 px-2.5 appearance-none border rounded w-full text-violet-800 mb-3 focus:outline-none focus:shadow-outline focus:ring-violet-300 focus:ring-4"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Input',
  props: {
    label: {
      type: String,
      required: false,
      default: ''
    },
    id: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: false,
      default: 'text'
    },
    placeholder: {
      type: String,
      required: false,
      default: ''
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const onInput = (event: Event) => {
      const target = event.target as HTMLInputElement
      emit('update:modelValue', target.value)
    }

    return {
      onInput
    }
  }
})
</script>

<style scoped></style>

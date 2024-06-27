<template>
  <button
    :type="type"
    class="w-full text-violet-100 bg-violet-600 hover:bg-violet-500 font-bold py-2 px-2.5 rounded"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PrimaryButton',
  props: {
    type: {
      type: String as () => 'button' | 'submit' | 'reset',
      required: true,
      default: 'button'
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>

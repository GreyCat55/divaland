<script setup lang="ts">
import Clock from './Clock.vue'
import AccountID from './AccountID.vue'
</script>

<template>
  <div
    class="grid grid-cols-3 gap-x-4 gap-y-0 bg-gradient-to-t from-blue-500 to-violet-500 items-end"
  >
    <div>
      <img src="../assets/logo_splash.png" width="75%" />
    </div>
    <div class="flex justify-center my-auto">
      <Clock />
    </div>
    <div>
      <AccountID />
    </div>
  </div>
</template>

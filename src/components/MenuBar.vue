<script setup lang="ts">
import Clock from './Clock.vue'
import AccountID from './AccountID.vue'
</script>

<style>
.zyzol {
  font-family: 'Zyzol';
  src: url('../assets/zyzol-font/ZyzolOutline-OVr46.otf');
  text-shadow:
    #000 0px 0px 1px,
    #000 0px 0px 1px,
    #000 0px 0px 1px,
    #000 0px 0px 1px,
    #000 0px 0px 1px,
    #000 0px 0px 1px;
}
</style>

<template>
  <div class="bg-blend-multiply bg-gradient-to-t from-blue-500 to-violet-500">
    <div class="grid grid-cols-3 gap-x-4 gap-y-0 items-end bg-[url('src/assets/star_overlay.png')]">
      <div>
        <img src="../assets/logo_splash.png" width="75%" />
      </div>
      <div class="flex justify-center my-auto">
        <Clock />
      </div>
      <div class="flex justify-center m-auto">
        <AccountID />
      </div>
    </div>
  </div>
</template>

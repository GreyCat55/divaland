<script setup lang="ts"></script>

<template>
  <div class="h-screen w-screen bg-gradient-to-t from-blue-500 to-violet-500">
    <div class="flex justify-center items-center">
      <img class="m-4" src="../assets/icons/loading.gif" />
    </div>
    <p class="zyzol text-white my-4 text-center">Loading...</p>
  </div>
</template>

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

<script lang="ts">
export default {
  name: 'LoadingOverlay',
  data() {
    return {}
  },
  methods: {},
  mounted() {}
}
</script>

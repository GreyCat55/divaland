<script setup lang="ts"></script>

<style>
.zyzol {
  font-family: 'Zyzol';
  src: url('../assets/zyzol-font/ZyzolOutline-OVr46.otf');
}
</style>

<template>
  <main>
    <div
      class="zyzol text-white flex grid grid-cols-1 gap-x-4 gap-y-0 items-center m-auto bg-gradient-to-t from-blue-500 to-violet-500 h-screen pb-20"
    >
      <div class="flex justify-center m-auto">
        <div class="w-full max-w-xs mx-auto" width="400%">
          <p>Smell ya later...</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SignOutView',
  data() {
    return {}
  },
  methods: {},
  mounted() {
    //note to self: always use setTimeout to call exported methods in axios' then. Asynchronous functions be like...
    console.log('ayo?')
    axios
      .get('http://localhost:3000/logout', {
        headers: {
          'ngrok-skip-browser-warning': '1'
        }
      })
      .then((response) => {
        setTimeout(this.$router.push, 3000, '/')
      })
  }
}
</script>

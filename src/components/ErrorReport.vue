<script setup lang="ts"></script>

<style>
.zyzol {
  font-family: 'Zyzol';
  src: url('../assets/zyzol-font/ZyzolOutline-OVr46.otf');
}
</style>

<template>
  <main>
    <p class="text-red-300 text-sm italic pt-5">{{ responseMessage }}</p>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ErrorReport',
  data() {
    return {
      responseMessage: ''
    }
  },
  methods: {},
  mounted() {
    //note to self: always use setTimeout to call exported methods in axios' then. Asynchronous functions be like...
    axios
      .get('http://localhost:3000/reportErrors', {
        headers: {
          'ngrok-skip-browser-warning': '1'
        }
      })
      .then((response) => {
        if (typeof response['data'] == 'undefined') {
          this.responseMessage = ''
        } else {
          this.responseMessage = response['data']
        }
      })
  }
}
</script>

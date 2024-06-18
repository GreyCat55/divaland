<script setup lang="ts">
import MenuBar from '../components/MenuBar.vue'
import LoadingOverlay from '../components/LoadingOverlay.vue'
</script>

<style>
.zyzol {
  font-family: 'Zyzol';
  src: url('../assets/zyzol-font/ZyzolOutline-OVr46.otf');
}
</style>

<template>
  <span v-if="role >= 1">
    <MenuBar />
    <div
      class="zyzol text-white text-4xl flex grid grid-cols-2 gap-x-4 gap-y-0 items-center m-auto bg-violet-300 h-screen pb-20"
    >
      <div
        class="flex border bg-violet-500 hover:bg-violet-400 py-2 px-4 border-b-4 border-violet-800 hover:border-violet-500 rounded justify-center m-auto"
      >
        <a href="/shopworker/upload"
          ><div class="w-full max-w-xs mx-auto" width="400%">Upload a new item</div></a
        >
      </div>
      <div
        class="flex border bg-violet-500 hover:bg-violet-400 py-2 px-4 border-b-4 border-violet-800 hover:border-violet-500 rounded justify-center m-auto"
      >
        <a href="/shopworker/edit">
          <div class="w-full max-w-xs mx-auto" width="400%">View/Edit existing item</div>
        </a>
      </div>
    </div></span
  >
  <span v-else><LoadingOverlay /></span>
</template>

<script lang="ts">
import axios from 'axios'

export default {
  name: 'ShopWorkerView',
  data() {
    return {
      role: 0
    }
  },
  methods: {},
  mounted() {
    //note to self: always use setTimeout to call exported methods in axios' then. Asynchronous functions be like...
    axios
      .get('http://localhost:3000/myDiva', {
        headers: {
          'ngrok-skip-browser-warning': '1'
        }
      })
      .then((response) => {
        this.role = response['data'][0]['diva_role']
        if (this.role < 1 || typeof this.role === 'undefined') {
          this.$router.push('/')
        }
      })
  }
}
</script>

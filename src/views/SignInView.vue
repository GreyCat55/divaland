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
      class="zyzol flex grid grid-cols-1 gap-x-4 gap-y-0 items-center m-auto bg-gradient-to-t from-blue-500 to-violet-500 h-screen pb-20"
    >
      <div class="flex justify-center m-auto">
        <div class="w-full max-w-xs mx-auto" width="400%">
          <img src="../assets/logo_splash.png" width="400%" />
          <form
            class="bg-gray-500 shadow-md rounded px-8 pt-6 pb-8 mb-4"
            ref="loginForm"
            @submit.prevent="login"
            method="post"
            action="http://localhost:3000/validateLogin"
          >
            <div class="mb-4">
              <label class="block text-violet-200 text-xl mb-2" for="username"> Username </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-violet-800 leading-tight focus:outline-none focus:shadow-outline"
                id="u"
                type="text"
                placeholder=""
                v-model="u"
              />
            </div>
            <div class="mb-6">
              <label class="block text-violet-200 text-xl mb-2" for="password"> Password </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-violet-800 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="p"
                type="password"
                placeholder=""
                v-model="p"
              />
            </div>
            <div class="flex items-center justify-between">
              <button
                class="text-violet-200 zyzol bg-violet-600 hover:bg-violet-400 text-violet-200 font-bold py-2 px-4 rounded"
                type="submit"
              >
                Sign In
              </button>
              <a
                class="inline-block align-baseline text-violet-200 text-sm text-violet-200 hover:text-white"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
            <p class="text-red-300 text-sm italic pt-5">{{ responseMessage }}</p>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SignInView',
  data() {
    return {
      u: '',
      p: '',
      responseMessage: ''
    }
  },
  methods: {
    async login() {
      await axios
        .post('http://localhost:3000/validateLogin', {
          headers: {
            'ngrok-skip-browser-warning': '1'
          },
          u: this.u,
          p: this.p
        })
        .then((response) => {
          //TODO redirect to successfulsignup if account is unverified
          this.$router.push('/')
        })
        .catch((error) => {
          this.$router.go()
        })
    }
  },
  mounted() {
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

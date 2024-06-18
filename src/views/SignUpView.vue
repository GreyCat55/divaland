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
      <div class="my-8">
        <p class="block text-violet-200 text-8xl mb-2 text-center text-white">
          Become a Diva Today!
        </p>
      </div>
      <div class="flex justify-center m-auto">
        <div class="w-full max-w-xs mx-auto" width="400%">
          <img src="../assets/logo_splash.png" width="400%" />
          <form
            class="bg-gray-500 shadow-md rounded px-8 pt-6 pb-8 mb-4"
            ref="registrationForm"
            @submit.prevent="register"
            method="post"
            action="http://localhost:3000/register"
          >
            <div class="mb-4">
              <label class="block text-violet-200 text-xl mb-2" for="username"> Username </label>
              <input
                ref="u"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-violet-800 leading-tight focus:outline-none focus:shadow-outline"
                id="u"
                type="text"
                placeholder=""
                v-on:change="usernameValidation"
                v-model="u"
              />
            </div>
            <div class="mb-4">
              <label class="block text-violet-200 text-xl mb-2" for="email"> Email </label>
              <input
                ref="e"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-violet-800 leading-tight focus:outline-none focus:shadow-outline"
                id="e"
                type="text"
                placeholder=""
                v-on:change="emailValidation"
                v-model="e"
              />
            </div>
            <div class="mb-4">
              <label class="block text-violet-200 text-xl mb-2" for="password"> Password </label>
              <input
                ref="p"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-violet-800 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="p"
                type="password"
                placeholder=""
                v-on:change="pwValidation"
                v-model="p"
              />
            </div>
            <div class="mb-4">
              <label class="block text-violet-200 text-xl mb-2" for="confirmpassword">
                Confirm Password
              </label>
              <input
                ref="cnfp"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-violet-800 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="cnfp"
                type="password"
                placeholder=""
                v-on:change="confirmPasswordValidation"
                v-model="cnfp"
              />
            </div>
            <div class="flex items-center justify-between">
              <button
                class="text-violet-200 zyzol bg-violet-600 hover:bg-violet-400 text-violet-200 font-bold py-2 px-4 rounded"
                type="submit"
              >
                Register Account
              </button>
            </div>
            <p class="text-red-300 text-sm italic pt-5">{{ responseMessage }}</p>
            <div>
              <p ref="err_u" class="invisible text-red-400 text-xs italic">
                - Your username must be 1-25 characters long
              </p>
              <p ref="err_e" class="invisible text-red-400 text-xs italic">
                - Your email must be in a valid format
              </p>
              <p ref="err_p" class="invisible text-red-400 text-xs italic">
                - Your password must be at least 9 characters long and contain at least 1 uppercase
                letter, 1 lowercase letter, and 1 number or special character
              </p>
              <p ref="err_cnfp" class="invisible text-red-400 text-xs italic">
                - Passwords do not match
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import axios from 'axios'

export default {
  name: 'SignUpView',
  data() {
    return {
      u: '',
      e: '',
      p: '',
      cnfp: '',
      errors: { u: true, e: true, p: true, cnfp: true },
      responseMessage: ''
    }
  },
  methods: {
    async register() {
      await axios
        .post('http://localhost:3000/register', {
          headers: {
            'ngrok-skip-browser-warning': '1'
          },
          u: this.u,
          e: this.e,
          p: this.p
        })
        .then((response) => {
          this.$router.push('/signupsuccess')
        })
        .catch((error) => {
          this.$router.go()
        })
    },
    usernameValidation(e: Event) {
      if (this.u.length < 1 || this.u.length > 25) {
        e.target.classList.add('border-red-500')
        ;(this.$refs.err_u as HTMLInputElement).classList.remove('invisible')
        this.errors.u = true
      } else {
        e.target.classList.remove('border-red-500')
        ;(this.$refs.err_u as HTMLInputElement).classList.add('invisible')
        this.errors.u = false
      }
    },
    emailValidation(e: Event) {
      const emailRegex = new RegExp(
        "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
      )

      if (!emailRegex.test(this.e)) {
        e.target.classList.add('border-red-500')
        ;(this.$refs.err_e as HTMLInputElement).classList.remove('invisible')
        this.errors.e = true
      } else {
        e.target.classList.remove('border-red-500')
        ;(this.$refs.err_e as HTMLInputElement).classList.add('invisible')
        this.errors.e = false
      }
    },
    pwValidation(e: Event) {
      const pwRegex = new RegExp('^(?=.*[A-Z!@#$&*])(?=.*[0-9])(?=.*[a-z]).{9,}$')

      if (!pwRegex.test(this.p)) {
        e.target.classList.add('border-red-500')
        ;(this.$refs.err_p as HTMLInputElement).classList.remove('invisible')
        this.errors.p = true
      } else {
        e.target.classList.remove('border-red-500')
        ;(this.$refs.err_p as HTMLInputElement).classList.add('invisible')
        this.errors.p = false
      }

      if (this.p != this.cnfp) {
        ;(this.$refs.cnfp as HTMLInputElement).classList.add('border-red-500')
        ;(this.$refs.err_cnfp as HTMLInputElement).classList.remove('invisible')
        this.errors.cnfp = true
      } else {
        ;(this.$refs.cnfp as HTMLInputElement).classList.remove('border-red-500')
        ;(this.$refs.err_cnfp as HTMLInputElement).classList.add('invisible')
        this.errors.cnfp = false
      }
    },
    confirmPasswordValidation(e: Event) {
      if (this.p != this.cnfp) {
        e.target.classList.add('border-red-500')
        ;(this.$refs.err_cnfp as HTMLInputElement).classList.remove('invisible')
        this.errors.cnfp = true
      } else {
        e.target.classList.remove('border-red-500')
        ;(this.$refs.err_cnfp as HTMLInputElement).classList.add('invisible')
        this.errors.cnfp = false
      }
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

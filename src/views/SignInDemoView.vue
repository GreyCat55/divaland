<template>
  <main>
    <div
      class="flex w-screen h-screen items-center justify-center m-auto bg-gradient-to-t from-blue-500 to-violet-500"
    >
      <div class="w-full mx-10 md:max-w-md">
        <img src="../assets/logo_splash.png" width="100%" />
        <form
          class="bg-gray-500 shadow-md rounded-md px-8 pt-6 pb-8 mb-4"
          ref="loginForm"
          @submit.prevent="onSubmit"
        >
          <div class="mb-5">
            <h1 class="text-4xl text-violet-200 font-bold font-zyzol">Welcome back</h1>
            <h2 class="text-lg text-white">Please enter your information</h2>
          </div>
          <Input label="Username" v-model="username" id="username" :value="username" />
          <Input
            type="password"
            label="Password"
            v-model="password"
            id="password"
            :value="password"
          />
          <div class="flex justify-end pb-2.5">
            <a
              class="inline-block align-baseline text-violet-200 font-bold text-sm hover:text-violet-300 hover:underline"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          <PrimaryButton type="submit">Sign in</PrimaryButton>
          <div class="text-sm flex justify-center pt-4 text-gray-300">
            Not a member? &nbsp;
            <a
              class="inline-block align-baseline text-violet-200 font-bold hover:text-violet-300 hover:underline"
              href="#"
            >
              Create an account
            </a>
          </div>
          <!-- <p class="text-red-300 text-sm italic pt-5">{{ responseMessage }}</p> -->
        </form>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'
import Input from '@/components/inputs/Input.vue'
import axios from 'axios'
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  name: 'SignInDemoView',
  components: {
    Input,
    PrimaryButton
  },
  setup() {
    const username = ref('')
    const password = ref('')
    const responseMessage = ref(null)

    const onSubmit = async () => {
      console.log(username.value)
      console.log(password.value)
      // await axios
      //   .post('http://localhost:3000/validateLogin', {
      //     headers: {
      //       'ngrok-skip-browser-warning': '1'
      //     },
      //     u: username.value,
      //     p: password.value
      //   })
      //   .then((response) => {
      //     //TODO redirect to successfulsignup if account is unverified
      //     this.$router.push('/')
      //   })
      //   .catch((error) => {
      //     this.$router.go()
      //   })
    }
    return {
      username,
      password,
      onSubmit,
      responseMessage
    }
  }
  // mounted() {
  //   axios
  //     .get('http://localhost:3000/reportErrors', {
  //       headers: {
  //         'ngrok-skip-browser-warning': '1'
  //       }
  //     })
  //     .then((response) => {
  //       if (typeof response['data'] == 'undefined') {
  //         responseMessage = ''
  //       } else {
  //         responseMessage = response['data']
  //       }
  //     })
  // }
})
</script>

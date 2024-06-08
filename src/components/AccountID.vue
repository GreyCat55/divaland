<script setup lang="ts"></script>

<template>
  <span
    v-if="signedIn"
    ref="canvasContainer"
    class="inline-grid grid-cols-2 gap-6 justify-items-start"
    ><canvas ref="idCanvas" class="h-full"></canvas>
    <a href="/signout">
      <button
        class="text-violet-200 zyzol border bg-violet-500 hover:bg-violet-400 text-white font-bold py-2 px-4 border-b-4 border-violet-800 hover:border-violet-500 rounded"
      >
        Sign out
      </button></a
    >
  </span>
  <span class="inline-grid grid-cols-1 justify-items-center" v-else>
    <a href="/signup">
      <button
        class="text-violet-200 zyzol border bg-violet-500 hover:bg-violet-400 text-white font-bold py-2 px-4 border-b-4 border-violet-800 hover:border-violet-500 rounded"
      >
        Join Divaland
      </button></a
    >
    <a href="/signin">
      <button
        class="text-violet-200 zyzol border bg-violet-500 hover:bg-violet-400 text-white font-bold py-2 px-4 border-b-4 border-violet-800 hover:border-violet-500 rounded"
      >
        Sign in
      </button></a
    >
  </span>
</template>

<style>
@font-face {
  font-family: 'Zyzol';
  src: url('../assets/zyzol-font/ZyzolRound-DOe9D.otf');
}

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
import axios from 'axios'
import idBodyAsset from '../assets/id_badge.png'
import defaultpfpAsset from '../assets/default_pfp.png'

export default {
  name: 'AccountID',
  data() {
    return {
      username: '',
      signedIn: true
    }
  },
  methods: {
    assembleID(userName: string) {
      let cvn: any = this.$refs.idCanvas
      console.log(cvn)
      let ctx = cvn.getContext('2d')
      let pfp = new Image()
      let idBody = new Image()

      idBody.src = idBodyAsset
      pfp.src = defaultpfpAsset

      cvn.width = idBody.width * 0.75
      cvn.height = idBody.height * 0.75

      pfp.onload = function () {
        ctx.drawImage(pfp, 20, 25, pfp.width * 0.75, pfp.height * 0.75)

        idBody.onload = function () {
          ctx.drawImage(idBody, 0, 0, idBody.width * 0.75, idBody.height * 0.75)
          ctx.strokeStyle = 'black'
          ctx.lineWidth = 2
          ctx.font = '18px Zyzol'
          ctx.strokeText('Name: ' + userName, 20, 145)
          ctx.strokeText('Club: ', 95, 25)
          ctx.font = '14px Zyzol'
          ctx.strokeText('Occupation: ', 105, 50)
          ctx.strokeText('DOB: ', 105, 70)
          ctx.strokeText('Pronouns: ', 105, 90)
          ctx.strokeText('Level: ', 105, 110)
          ctx.fillStyle = '#f5f3ff'
          ctx.font = '18px Zyzol'
          ctx.fillText('Name: ' + userName, 20, 145)
          ctx.fillText('Club: ', 95, 25)
          ctx.font = '14px Zyzol'
          ctx.fillText('Occupation: ', 105, 50)
          ctx.fillText('DOB: ', 105, 70)
          ctx.fillText('Pronouns: ', 105, 90)
          ctx.fillText('Level: ', 105, 110)
        }
        setTimeout(idBody.onload, 100)
      }
    }
  },
  mounted() {
    //note to self: always use setTimeout to call exported methods in the axios' then. Asynchronous functions be like...
    axios
      .get('http://localhost:3000/myDiva', {
        headers: {
          'ngrok-skip-browser-warning': '1'
        }
      })
      .then((response) => {
        this.username = response['data'][0]['diva_username']
        if (this.username) {
          this.signedIn = true
          this.assembleID(this.username)
        } else {
          this.signedIn = false
        }
      })
  }
}
</script>

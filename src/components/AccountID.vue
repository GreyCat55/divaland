<script setup lang="ts"></script>

<template>
  <canvas ref="idCanvas" height="100%"></canvas>
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

<script>
import axios from 'axios'
import idBodyAsset from '../assets/id_badge.png'
import defaultpfpAsset from '../assets/default_pfp.png'

export default {
  name: 'AccountID',
  data() {
    return {
      signInStatus: {}
    }
  },
  methods: {
    assembleID(userName) {
      let cvn = this.$refs.idCanvas
      let ctx = cvn.getContext('2d')
      let pfp = new Image()
      let idBody = new Image()

      idBody.src = idBodyAsset
      pfp.src = defaultpfpAsset

      cvn.width = idBody.width * 0.75
      cvn.height = idBody.height * 0.75

      pfp.onload = function () {
        ctx.drawImage(pfp, 20, 25, pfp.width * 0.75, pfp.height * 0.75)
      }
      idBody.onload = function () {
        ctx.drawImage(idBody, 0, 0, idBody.width * 0.75, idBody.height * 0.75)
        ctx.strokeStyle = 'black'
        ctx.lineWidth = 2
        ctx.font = '18px Zyzol'
        ctx.strokeText('Name: ' + userName, 20, 145)
        ctx.strokeText('Club Dickenballs', 95, 25)
        ctx.font = '14px Zyzol'
        ctx.strokeText('Unemployed fuckup', 105, 50)
        ctx.strokeText('DOB: 04/28/2024', 105, 70)
        ctx.strokeText('Pronouns: He/Him', 105, 90)
        ctx.strokeText('Level: 1', 105, 110)
        ctx.fillStyle = '#f5f3ff'
        ctx.font = '18px Zyzol'
        ctx.fillText('Name: ' + userName, 20, 145)
        ctx.fillText('Club Dickenballs', 95, 25)
        ctx.font = '14px Zyzol'
        ctx.fillText('Unemployed fuckup', 105, 50)
        ctx.fillText('DOB: 04/28/2024', 105, 70)
        ctx.fillText('Pronouns: He/Him', 105, 90)
        ctx.fillText('Level: 1', 105, 110)
      }
      setTimeout(pfp.onload, 50)
      setTimeout(idBody.onload, 100)
    }
  },
  mounted() {
    //sync clock with real time
    axios
      .get('http://localhost:3000/diva/4', {
        headers: {
          'ngrok-skip-browser-warning': '1'
        }
      })
      .then((response) => {
        this.signInStatus = response['data'][0]['diva_username']
        this.assembleID(this.signInStatus)
      })
  }
}
</script>

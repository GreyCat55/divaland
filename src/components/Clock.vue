<script setup lang="ts"></script>

<template>
  <canvas ref="clockCanvas" height="100%"></canvas>
</template>

<style>
@font-face {
  font-family: 'Zyzol';
  src: url('../assets/zyzol-font/ZyzolRound-DOe9D.otf');
}
</style>

<script lang="ts">
import axios from 'axios'
import clockBodyAsset from '../assets/clock_body.png'
import clockOverlayAsset from '../assets/clock_overlay.png'

export default {
  name: 'ClockComponent',
  data() {
    return {
      interval: 0,
      theTime: '',
      clockCanvas: this.$refs.clockCanvas
    }
  },
  methods: {
    setUpClock(time: string) {
      var cvn: any = this.$refs.clockCanvas
      var ctx = cvn.getContext('2d')

      var clockBody = new Image()
      var clockOverlay = new Image()

      clockBody.src = clockBodyAsset
      clockOverlay.src = clockOverlayAsset

      clockBody.onload = function () {
        ctx.drawImage(clockBody, 0, cvn.height / 2 - 50)
        ctx.font = '42px Zyzol'
        ctx.fillText(time, 35, cvn.height / 2 + 13)
        clockOverlay.onload = function () {
          ctx.drawImage(clockOverlay, 0, cvn.height / 2 - 50)
        }
      }
    }
  },
  mounted() {
    //sync clock with real time
    axios
      .get('http://localhost:3000/clock', {
        headers: {
          'ngrok-skip-browser-warning': '1'
        }
      })
      .then((response) => {
        //console.log(response)
        this.theTime = response.data['info'].split(' ')[0]
        this.setUpClock(this.theTime)
        this.interval = setInterval(() => {
          this.theTime = new Date(Date.now()).toString().split(' ')[4]
          this.setUpClock(this.theTime)
        }, 1000)
      })
  }
}
</script>

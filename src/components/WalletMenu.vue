<script setup lang="ts">
import Clock from './Clock.vue'
import AccountID from './AccountID.vue'
</script>

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

<template>
  <div
    ref="walletTab"
    v-on:click="openWallet"
    class="fixed right-0 top-0 zyzol text-white p-4 bg-violet-950 border border-white border-2 rounded overflow-x-hidden duration-500"
  >
    <i class="fi fi-sr-wallet"></i>
    My Bag
  </div>

  <div
    v-on:click="closeWallet"
    ref="sideBar"
    class="fixed top-0 right-0 bg-transparent w-0 h-1/2 overflow-x-hidden duration-500 z-10"
  >
    <div
      ref="sideNav"
      class="fixed top-0 right-0 bg-violet-950 text-black w-0 h-1/2 flex justify-center items-center overflow-x-hidden duration-500 font-bold z-50 border border-white border-2 rounded"
    >
      <ul class="text-2xl sm:text-3xl">
        <li class="p-4">
          <Clock />
        </li>
        <li class="p-4">
          <AccountID />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'WalletMenu',
  data() {
    return
  },
  methods: {
    openWallet(e: any) {
      this.$refs.walletTab.style.width = '40%'
      this.$refs.sideBar.style.width = '100%'
      this.$refs.sideNav.style.width = '30%'
    },
    closeWallet(e: any) {
      this.$refs.walletTab.style.width = '10%'
      this.$refs.sideBar.style.width = '0'
      this.$refs.sideNav.style.width = '0'
    }
  }
}
</script>

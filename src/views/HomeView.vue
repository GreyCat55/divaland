<script setup lang="ts">
import MenuBar from '../components/MenuBar.vue'
import NavBar from '../components/NavBar.vue'
import HomePage from '../components/HomePage.vue'
import WalletMenu from '../components/WalletMenu.vue'
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
  <div class="bg-gradient-to-b from-violet-900 to-violet-500">
    <div
      class="flex flex-col overflow-hidden-x h-screen bg-[url('src/assets/star_overlay.png')] bg-repeat"
    >
      <MenuBar />
      <WalletMenu />
      <img class="w-screen" src="../assets/city.svg" />
      <div class="flex-grow bg-black">
        <div class="container mx-auto text-center h-full justify-items-center">
          <div class="grid grid-cols-2 lg:grid-cols-3 gap-4 zyzol text-white">
            <a href="/closet">
              <div
                class="h-64 align-baseline bg-[linear-gradient(to_bottom,rgba(0,0,0,1),rgba(16,0,52,0.8)),url('src/assets/testing/closet-lgbt.gif')] rounded m-12"
              >
                Closet<br /><i class="fi fi-br-clothes-hanger text-4xl lg:text-8xl"></i>
              </div>
            </a>
            <a href="/shops">
              <div
                class="h-64 align-baseline bg-[linear-gradient(to_bottom,rgba(0,0,0,1),rgba(16,0,52,0.8)),url('src/assets/testing/piffle-black-friday.gif')] rounded m-12"
              >
                Stores<br /><i class="fi fi-ss-bags-shopping text-4xl lg:text-8xl"></i>
              </div>
            </a>
            <a href="/clubs">
              <div
                class="h-64 align-baseline bg-[linear-gradient(to_bottom,rgba(0,0,0,1),rgba(16,0,52,0.8)),url('src/assets/testing/clubs.gif')] rounded m-12"
              >
                Clubs<br /><i class="fi fi-ss-speakers text-4xl lg:text-8xl"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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
      <p class="w-screen zyzol text-black text-center text-2xl md:text-4xl lg:text-8xl mt-16">
        Diva City
      </p>
      <img class="w-screen" src="../assets/city.svg" />
      <div class="flex-grow bg-black">
        <div class="container mx-auto text-center h-full justify-items-center">
          <div class="grid grid-cols-2 lg:grid-cols-3 gap-4 zyzol text-white">
            <a href="/closet">
              <div
                class="grid [grid-template-columns:1fr] rounded m-12 h-32 lg:h-64 align-baseline"
              >
                <span class="flex justify-center md:block [grid-column:1] [grid-row:1]">
                  <img
                    class="w-full h-32 lg:h-64 rounded-2xl"
                    src="../assets/testing/closet-lgbt.gif"
                    alt=""
                  />
                </span>
                <div
                  class="[grid-column:1] [grid-row:1] place-self-center text-md lg:text-xl text-white overflow-hidden w-full h-32 lg:h-64 bg-gradient-to-b from-black to-[rgba(16,0,52,0.8)_100%] opacity-100 hover:opacity-50 transition-all duration-300 ease-in-out"
                >
                  <p>Closet<br /><i class="fi fi-br-clothes-hanger text-4xl lg:text-8xl"></i></p>
                </div>
              </div>
            </a>
            <a href="/shops">
              <div
                class="grid [grid-template-columns:1fr] rounded m-12 h-32 lg:h-64 align-baseline"
              >
                <span class="flex justify-center md:block [grid-column:1] [grid-row:1]">
                  <img
                    class="w-full h-32 lg:h-64 rounded-2xl"
                    src="../assets/testing/piffle-black-friday.gif"
                    alt=""
                  />
                </span>
                <div
                  class="[grid-column:1] [grid-row:1] place-self-center text-md lg:text-xl text-white overflow-hidden w-full h-32 lg:h-64 bg-gradient-to-b from-black to-[rgba(16,0,52,0.8)_100%] opacity-100 hover:opacity-50 transition-all duration-300 ease-in-out"
                >
                  <p>Stores<br /><i class="fi fi-ss-bags-shopping text-4xl lg:text-8xl"></i></p>
                </div>
              </div>
            </a>
            <a href="/clubs">
              <div
                class="grid [grid-template-columns:1fr] rounded m-12 h-32 lg:h-64 align-baseline"
              >
                <span class="flex justify-center md:block [grid-column:1] [grid-row:1]">
                  <img
                    class="w-full h-32 lg:h-64 rounded-2xl"
                    src="../assets/testing/clubs.gif"
                    alt=""
                  />
                </span>
                <div
                  class="[grid-column:1] [grid-row:1] place-self-center text-md lg:text-xl text-white overflow-hidden w-full h-32 lg:h-64 bg-gradient-to-b from-black to-[rgba(16,0,52,0.8)_100%] opacity-100 hover:opacity-50 transition-all duration-300 ease-in-out"
                >
                  <p>Clubs<br /><i class="fi fi-ss-speakers text-4xl lg:text-8xl"></i></p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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
        The Shopping District
      </p>
      <img class="w-screen" src="../assets/testing/stores_placeholder.svg" />
      <div class="flex-grow bg-black">
        <div class="container mx-auto text-center h-full justify-items-center">
          <div class="grid grid-cols-2 lg:grid-cols-3 gap-4 zyzol text-white">
            <a href="/shops/thedivalandclothingco">
              <div
                class="grid [grid-template-columns:1fr] rounded m-12 h-32 lg:h-64 align-baseline"
              >
                <span class="flex justify-center md:block [grid-column:1] [grid-row:1]">
                  <img
                    class="w-full h-32 lg:h-64 rounded-2xl"
                    src="../assets/testing/default_pathicon.png"
                    alt=""
                  />
                </span>
                <div
                  class="[grid-column:1] [grid-row:1] place-self-center text-xs lg:text-xl text-white overflow-hidden w-full h-32 lg:h-64 bg-gradient-to-b from-black to-[rgba(16,0,52,0.8)_100%] opacity-100 hover:opacity-50 transition-all duration-300 ease-in-out"
                >
                  <p>
                    The Divaland Clothing Co.<br /><i
                      class="fi fi-ss-shirt-long-sleeve text-4xl lg:text-8xl"
                    ></i
                    ><i class="fi fi-ss-shirt-tank-top text-4xl lg:text-8xl"></i>
                  </p>
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
                    src="../assets/testing/default_pathicon.png"
                    alt=""
                  />
                </span>
                <div
                  class="[grid-column:1] [grid-row:1] place-self-center text-xs lg:text-xl text-white overflow-hidden w-full h-32 lg:h-64 bg-gradient-to-b from-black to-[rgba(16,0,52,0.8)_100%] opacity-100 hover:opacity-50 transition-all duration-300 ease-in-out"
                >
                  <p>
                    [NPC Name]'s Hair Salon<br /><i
                      class="fi fi-sr-barber-shop text-4xl lg:text-8xl"
                    ></i>
                  </p>
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
                    src="../assets/testing/default_pathicon.png"
                    alt=""
                  />
                </span>
                <div
                  class="[grid-column:1] [grid-row:1] place-self-center text-xs lg:text-xl text-white overflow-hidden w-full h-32 lg:h-64 bg-gradient-to-b from-black to-[rgba(16,0,52,0.8)_100%] opacity-100 hover:opacity-50 transition-all duration-300 ease-in-out"
                >
                  <p>
                    [NPC Name]'s Beauty Parlor<br /><i
                      class="fi fi-ss-lipstick text-4xl lg:text-8xl"
                    ></i
                    ><i class="fi fi-ss-makeup-brush text-4xl lg:text-8xl"></i>
                  </p>
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
                    src="../assets/testing/default_pathicon.png"
                    alt=""
                  />
                </span>
                <div
                  class="[grid-column:1] [grid-row:1] place-self-center text-xs lg:text-xl text-white overflow-hidden w-full h-32 lg:h-64 bg-gradient-to-b from-black to-[rgba(16,0,52,0.8)_100%] opacity-100 hover:opacity-50 transition-all duration-300 ease-in-out"
                >
                  <p>
                    [NPC Name]'s Tattoos and Piercings<br /><i
                      class="fi fi-sr-skull text-4xl lg:text-8xl"
                    ></i
                    ><i class="fi fi-ss-pen-clip text-4xl lg:text-8xl"></i>
                  </p>
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
                    src="../assets/testing/default_pathicon.png"
                    alt=""
                  />
                </span>
                <div
                  class="[grid-column:1] [grid-row:1] place-self-center text-xs lg:text-xl text-white overflow-hidden w-full h-32 lg:h-64 bg-gradient-to-b from-black to-[rgba(16,0,52,0.8)_100%] opacity-100 hover:opacity-50 transition-all duration-300 ease-in-out"
                >
                  <p>
                    [NPC Name]'s Overpriced Jewelry and Accessories<br /><i
                      class="fi fi-sr-gem text-4xl lg:text-8xl"
                    ></i
                    ><i class="fi fi-sr-headphones text-4xl lg:text-8xl"></i>
                  </p>
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
                    src="../assets/testing/default_pathicon.png"
                    alt=""
                  />
                </span>
                <div
                  class="[grid-column:1] [grid-row:1] place-self-center text-xs lg:text-xl text-white overflow-hidden w-full h-32 lg:h-64 bg-gradient-to-b from-black to-[rgba(16,0,52,0.8)_100%] opacity-100 hover:opacity-50 transition-all duration-300 ease-in-out"
                >
                  <p>
                    [NPC Name]'s VIP Boutique<br /><i
                      class="fi fi-ss-crown text-4xl lg:text-8xl"
                    ></i>
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

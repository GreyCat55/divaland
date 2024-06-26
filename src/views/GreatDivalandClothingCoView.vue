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
    #000 0px 0px 3px,
    #000 0px 0px 3px,
    #000 0px 0px 3px,
    #000 0px 0px 3px,
    #000 0px 0px 3px,
    #000 0px 0px 3px;
}

.circledottedborder {
  border: 10px dotted #fff;
}
</style>

<template>
  <div class="text-white zyzol">
    <div class="overflow-hidden-x h-screen">
      <WalletMenu />
      <div
        class="w-full h-max bg-violet-700 circledottedborder text-center text-2xl pt-1 lg:text-4xl lg:pt-4"
      >
        The Great Divaland Clothing Co.
      </div>
      <div class="w-full h-3/6 bg-violet-200">
        <div class="grid grid-cols-3 zyzol h-full text-white text-center justify-items-center">
          <div class="flex items-center justify-center w-full h-full">
            <div class="grid grid-cols-1 w-full h-full">
              <div class="bg-red-400 p-2 rounded-md">Clothing Search Component goes here</div>
              <div class="flex items-center justify-center w-full h-full">
                <div class="grid grid-cols-4 w-full h-full">
                  <div class="bg-red-400 p-2 rounded-md">
                    <i class="fi fi-br-clothes-hanger text-4xl"></i>
                  </div>
                  <div class="bg-red-400 p-2 rounded-md">
                    <i class="fi fi-br-clothes-hanger text-4xl"></i>
                  </div>
                  <div class="bg-red-400 p-2 rounded-md">
                    <i class="fi fi-br-clothes-hanger text-4xl"></i>
                  </div>
                  <div class="bg-red-400 p-2 rounded-md">
                    <i class="fi fi-br-clothes-hanger text-4xl"></i>
                  </div>
                  <div class="bg-red-400 p-2 rounded-md">
                    <i class="fi fi-br-clothes-hanger text-4xl"></i>
                  </div>
                  <div class="bg-red-400 p-2 rounded-md">
                    <i class="fi fi-br-clothes-hanger text-4xl"></i>
                  </div>
                  <div class="bg-red-400 p-2 rounded-md">
                    <i class="fi fi-br-clothes-hanger text-4xl"></i>
                  </div>
                  <div class="bg-red-400 p-2 rounded-md">
                    <i class="fi fi-br-clothes-hanger text-4xl"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            Outfit Editor
            <div class="relative top-10" id="outfitPreview"></div>
          </div>
          <div>Cart and Checkout</div>
          <div>Outfit Browser</div>
          <div>Layer Editor</div>
          <div>Cart and Checkout</div>
        </div>
      </div>
      <div
        class="w-full h-3/6 bg-violet-100 bg-[url('/src/assets/testing/stores/floor_lavenderTiles.svg')] bg-cover"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import Konva from 'konva'
import runway from '../assets/testing/stores/runwayplatform.svg'
import baseAsset from '../assets/shopbases/1_-_Pale.png'

export default {
  name: 'GreatDivalandClothingCoView',
  data() {
    return {}
  },
  methods: {},
  mounted() {
    var outfitStage = new Konva.Stage({
      container: 'outfitPreview',
      width: 300,
      height: 550
    })

    var runwayLayer = new Konva.Layer()
    outfitStage.add(runwayLayer)

    var runwayImage = new Image()
    runwayImage.src = runway

    runwayImage.onload = function () {
      var runway = new Konva.Image({
        x: 0,
        y: 425,
        image: runwayImage,
        width: 300,
        height: 100
      })

      outfitLayer.add(runway)
    }

    var outfitLayer = new Konva.Layer()
    outfitStage.add(outfitLayer)

    var baseImage = new Image()
    baseImage.src = baseAsset

    baseImage.onload = function () {
      var base = new Konva.Image({
        x: 0,
        y: 0,
        image: baseImage,
        width: 300,
        height: 500
      })

      outfitLayer.add(base)
    }
  }
}
</script>

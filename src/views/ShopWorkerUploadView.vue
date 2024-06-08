<script setup lang="ts">
import MenuBar from '../components/MenuBar.vue'
import ColourPalette from '../components/ColourPalette.vue'
import ErrorReport from '../components/ErrorReport.vue'
</script>

<style>
.zyzol {
  font-family: 'Zyzol';
  src: url('../assets/zyzol-font/ZyzolOutline-OVr46.otf');
}

.shopoverlay {
  position: absolute;
  z-index: 1;
}
</style>

<template>
  <main>
    <span v-if="role >= 1">
      <MenuBar />
      <div
        class="zyzol text-white flex grid grid-cols-3 gap-x-4 gap-y-0 items-center m-auto bg-gradient-to-t from-blue-500 to-violet-500 h-screen pb-20 align-top"
      >
        <div class="flex justify-center m-auto h-screen pt-12">
          <div class="w-full max-w-xs mx-auto" width="400%">
            <p class="text-3xl text-center">Upload a new item</p>
            <form
              class="bg-gray-500 shadow-md rounded px-8 pt-6 pb-8 mb-4"
              @submit.prevent="shopSubmission"
              method="post"
            >
              <div class="mb-4">
                <label class="block text-violet-200 text-xl mb-2"> Image File </label>
                <input type="file" @change="preview" accept="image/*" capture />
              </div>
              <div class="mb-4">
                <label class="block text-violet-200 text-xl mb-2"> Item Name </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-violet-800 leading-tight focus:outline-none focus:shadow-outline"
                  id="n"
                  type="text"
                  placeholder=""
                  v-model="n"
                />
              </div>
              <div class="mb-4">
                <label class="block text-violet-200 text-xl mb-2"> Price </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-violet-800 leading-tight focus:outline-none focus:shadow-outline"
                  id="p"
                  type="number"
                  placeholder="150"
                  v-model="pr"
                />
              </div>
              <div class="mb-4">
                <label class="block text-violet-200 text-xl mb-2"> Colour Tag </label>
                <ColourPalette @colourPicked="applyColourTag" />
              </div>
              <div class="mb-4">
                <label class="block text-violet-200 text-xl mb-2"> Category </label>
                <select
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-violet-800 leading-tight focus:outline-none focus:shadow-outline"
                  id="n"
                  v-model="c"
                >
                  <option value="clothes">Clothes</option>
                  <option value="hairstyles">Hairstyles</option>
                  <option value="makeup">Makeup</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div class="mb-6">
                <label class="block text-violet-200 text-xl mb-2"> Sub-Category </label>
                <select
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-violet-800 leading-tight focus:outline-none focus:shadow-outline"
                  id="s"
                  v-model="s"
                >
                  <option value="dresses">Dresses</option>
                  <option value="tops">Tops</option>
                  <option value="bottoms">Bottoms</option>
                  <option value="socks">Socks</option>
                  <option value="shoes">Shoes</option>
                  <option value="jewelery">Jewelry</option>
                  <option value="glasses">Glasses</option>
                  <option value="coats">Coats</option>
                  <option value="scarves">Scarves</option>
                  <option value="gloves">Gloves</option>
                  <option value="hats">Hats</option>
                  <option value="bags">Bags</option>
                  <option value="belts">Belts</option>
                  <option value="masks">Masks</option>
                </select>
              </div>
              <div class="flex items-center justify-between">
                <button
                  class="text-violet-200 zyzol bg-violet-600 hover:bg-violet-400 text-violet-200 font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Upload Item
                </button>
              </div>
              <ErrorReport />
            </form>
          </div>
        </div>
        <div class="flex justify-center m-auto h-screen pt-12">
          <div class="w-full max-w-xs mx-auto my-6" width="400%">
            <p class="text-3xl text-center">Item Preview</p>
            <div class="w-full max-w-xs mx-auto mb-6 bg-white border rounded" width="400%">
              <div id="shopPreview"></div>
              <!--<img class="shopoverlay" :src="previewImage" />-->
            </div>
          </div>
        </div>
        <div class="flex justify-center m-auto h-screen pt-12">
          <div class="w-full max-w-xs mx-auto my-6" width="400%">
            <p class="text-3xl text-center">Thumbnail Preview</p>
            <div class="w-full max-w-xs mx-auto mb-6 bg-white border rounded" width="400%">
              <div id="thumbnailPreview"></div>
              <!--<img class="shopoverlay" :src="previewImage" />-->
            </div>
          </div>
        </div>
      </div>
    </span>
    <span v-else><p>The shop is restricted to staff only</p></span>
  </main>
</template>

<script lang="ts">
import axios from 'axios'
import Konva from 'konva'
import baseAsset from '../assets/shopbases/1_-_Pale.png'

export default {
  name: 'ShopWorkerUploadView',
  data() {
    return {
      role: 0,
      previewImage: '',
      shopUpload: new Blob(),
      n: '',
      pr: 0,
      c: '',
      s: '',
      ct: 'white'
    }
  },
  methods: {
    applyColourTag(selectedColour: string) {
      this.ct = selectedColour
    },
    preview(e: any) {
      const image = e.target.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(image)

      reader.onload = (e) => {
        this.previewImage = e.target.result
        this.shopUpload = image

        var shopStage = new Konva.Stage({
          container: 'shopPreview',
          width: 300,
          height: 500
        })

        var thumbnailStage = new Konva.Stage({
          container: 'thumbnailPreview',
          width: 300,
          height: 300
        })

        var baseLayer = new Konva.Layer()
        shopStage.add(baseLayer)

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

          baseLayer.add(base)
        }

        var itemLayer = new Konva.Layer()

        shopStage.add(itemLayer)

        var itemImage = new Image()
        itemImage.src = this.previewImage
        itemImage.onload = function () {
          var item = new Konva.Image({
            x: 0,
            y: 0,
            image: itemImage,
            width: 300,
            height: 500
          })
          itemLayer.add(item)
        }

        var thumbnailLayer = new Konva.Layer()
        thumbnailStage.add(thumbnailLayer)
        var thumbnailImage = new Image()
        thumbnailImage.src = this.previewImage
        thumbnailImage.onload = function () {
          var thumbnail = new Konva.Image({
            x: 0,
            y: 0,
            image: thumbnailImage,
            width: 300,
            height: 500,
            draggable: true
          })
          thumbnailLayer.add(thumbnail)
        }

        var scaleBy = 1.01
        thumbnailStage.on('wheel', (e) => {
          // stop default scrolling
          e.evt.preventDefault()

          var oldScale = thumbnailStage.scaleX()
          var pointer = thumbnailStage.getPointerPosition()

          var mousePointTo = {
            x: (pointer.x - thumbnailStage.x()) / oldScale,
            y: (pointer.y - thumbnailStage.y()) / oldScale
          }

          let direction = e.evt.deltaY > 0 ? 1 : -1

          if (e.evt.ctrlKey) {
            direction = -direction
          }

          var newScale = direction > 0 ? oldScale * scaleBy : oldScale / scaleBy

          thumbnailStage.scale({ x: newScale, y: newScale })

          var newPos = {
            x: pointer.x - mousePointTo.x * newScale,
            y: pointer.y - mousePointTo.y * newScale
          }
          thumbnailStage.position(newPos)
        })
      }
    },
    async shopSubmission() {
      let formData = new FormData()
      formData.append('file', this.shopUpload)
      formData.append('n', this.n)
      formData.append('pr', this.pr)
      formData.append('category', this.c + '/' + this.s + '/')
      formData.append('colour', this.ct)

      await axios
        .postForm('http://localhost:3000/uploadClothing', formData)
        .then((response) => {
          this.$router.push('/')
        })
        .catch((error) => {
          this.$router.go()
        })

      console.log('>> formData >> ', formData)
    }
  },
  mounted() {
    axios
      .get('http://localhost:3000/myDiva', {
        headers: {
          'ngrok-skip-browser-warning': '1'
        }
      })
      .then((response) => {
        this.role = response['data'][0]['diva_role']
        if (this.role < 1 || typeof this.role === 'undefined') {
          this.$router.push('/')
        }
      })
  }
}
</script>

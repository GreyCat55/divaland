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
</style>

<template>
  <main>
    <div class="bg-gradient-to-t from-blue-500 to-violet-500 h-auto">
      <span v-if="role >= 1">
        <MenuBar />
        <div class="zyzol m-auto pt-12">
          <form
            class="bg-gray-500 shadow-md rounded mb-4 h-fit max-w-md mx-auto w-auto"
            @submit.prevent="shopSearch"
            method="post"
          >
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >Search</label
            >
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for a shop item..."
                required
              />
              <button
                type="submit"
                class="text-white absolute end-2.5 bottom-2.5 bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div
          v-if="itemSelected"
          class="zyzol text-white flex grid grid-cols-2 gap-x-2 gap-y-0 items-center m-auto h-full pb-20 align-top"
        >
          <div class="zyzol text-white flex justify-center m-auto h-screen pt-12">
            <div class="w-full max-w-xs mx-auto" width="400%">
              <p class="text-3xl text-center">Editing {{ n }}</p>
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
          <div class="flex justify-center m-auto h-screen pt-12" v-if="itemSelected">
            <div class="w-full max-w-xs mx-auto my-6" width="400%">
              <!-- For later, when you make the editor and render images with it... <canvas ref="shopPreview"></canvas>-->
              <p class="text-3xl text-center">Item Preview</p>
              <div class="w-full max-w-xs mx-auto mb-6 bg-white border rounded" width="400%">
                <img :src="previewImage" />
              </div>
            </div>
          </div>
        </div>
      </span>
      <span v-else><p>The shop is restricted to staff only</p></span>
    </div>
  </main>
</template>

<script lang="ts">
import axios from 'axios'

export default {
  name: 'ShopWorkerEditView',
  data() {
    return {
      q: '',
      itemSelected: true,
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
    shopSearch() {},
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

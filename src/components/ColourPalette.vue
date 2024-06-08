<script setup lang="ts"></script>

<template>
  <div class="grid grid-cols-6 gap-4">
    <div
      ref="white"
      id="white"
      v-on:click="pickColour"
      class="rounded border border-white bg-white text-center"
    >
      <p>✓</p>
    </div>
    <div
      ref="pink"
      id="pink"
      v-on:click="pickColour"
      class="rounded border border-white bg-pink-500 text-center"
    >
      <p class="invisible">✓</p>
    </div>
    <div
      ref="red"
      id="red"
      v-on:click="pickColour"
      class="rounded border border-white bg-red-600 text-center"
    >
      <p class="invisible">✓</p>
    </div>
    <div
      ref="orange"
      id="orange"
      v-on:click="pickColour"
      class="rounded border border-white bg-orange-500 text-center"
    >
      <p class="invisible">✓</p>
    </div>
    <div
      ref="yellow"
      id="yellow"
      v-on:click="pickColour"
      class="rounded border border-white bg-yellow-500 text-center"
    >
      <p class="invisible">✓</p>
    </div>
    <div
      ref="green"
      id="green"
      v-on:click="pickColour"
      class="rounded border border-white bg-green-500 text-center"
    >
      <p class="invisible">✓</p>
    </div>
    <div
      ref="cyan"
      id="cyan"
      v-on:click="pickColour"
      class="rounded border border-white bg-cyan-500 text-center"
    >
      <p class="invisible">✓</p>
    </div>
    <div
      ref="blue"
      id="blue"
      v-on:click="pickColour"
      class="rounded border border-white bg-blue-500 text-center"
    >
      <p class="invisible">✓</p>
    </div>
    <div
      ref="purple"
      id="purple"
      v-on:click="pickColour"
      class="rounded border border-white bg-purple-500 text-center"
    >
      <p class="invisible">✓</p>
    </div>
    <div
      ref="brown"
      id="brown"
      v-on:click="pickColour"
      class="rounded border border-white bg-amber-900 text-center"
    >
      <p class="invisible">✓</p>
    </div>
    <div
      ref="gray"
      id="gray"
      v-on:click="pickColour"
      class="rounded border border-white bg-gray-400 text-center"
    >
      <p class="invisible">✓</p>
    </div>
    <div
      ref="black"
      id="black"
      v-on:click="pickColour"
      class="rounded border border-white bg-black text-center"
    >
      <p class="invisible">✓</p>
    </div>
  </div>
</template>

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

<script lang="ts">
export default {
  name: 'ColourPalette',
  data() {
    return {
      selectedColour: document.createElement('div'),
      colourFormData: 'white'
    }
  },
  methods: {
    pickColour(e: any) {
      if (this.selectedColour.children[0]) {
        this.selectedColour.children[0].classList.add('invisible')
      }
      this.selectedColour = e.target
      this.colourFormData = e.target.id
      //console.log(this.colourFormData)
      this.selectedColour.children[0].classList.remove('invisible')
      this.$emit('colourPicked', this.colourFormData)
    }
  },
  mounted() {
    this.selectedColour = <HTMLDivElement>this.$refs.white
  }
}
</script>

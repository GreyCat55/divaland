<script setup lang="ts"></script>

<style>
.parallax {
  display: grid;
  grid-template-areas: 'stack';
}

.parallax > * {
  grid-area: stack;
}

.parallax__cover {
  background: #0f1222;
}

.parallax-speed-1 {
  transform: translateY(var(--parallax-speed-1, 0px));
}
.parallax-speed-2 {
  transform: translateY(var(--parallax-speed-2, 0px));
}
.parallax-speed-3 {
  transform: translateY(var(--parallax-speed-3, 0px));
}
.parallax-speed-4 {
  transform: translateY(var(--parallax-speed-4, 0px));
}
.parallax-speed-5 {
  transform: translateY(var(--parallax-speed-5, 0px));
}
.parallax-speed-6 {
  transform: translateY(var(--parallax-speed-6, 0px));
}
</style>

<template>
  <div
    class="parallax h-[100vh] grid grid-rows-1 bg-white overflow-x-hidden overflow-y-visible bg-gradient-to-b from-violet-900 to-violet-500"
  >
    <div class="bg-[url('src/assets/landing/stars.png')] bg-cover w-full"></div>
    <div
      v-for="(layer, index) in layers"
      :key="index"
      :class="`parallax-layer parallax-speed-${index + 1} absolute top-[10vh] bottom-[10vh]  overflow-visible`"
    >
      <img :src="layer.src" class="w-full" style="height: auto" />
    </div>

    <div
      class="parallax__cover parallax-layer parallax-speed-6 absolute top-[90vh] h-[110vh] w-full text-white text-2xl p-10 z-40"
    >
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum saepe deleniti
      animi unde? Eius ipsa distinctio labore perferendis culpa possimus reiciendis exercitationem,
      tempora ratione similique architecto cum sunt facilis consectetur quae aliquam. Consequuntur
      ea dignissimos mollitia eligendi architecto officia pariatur explicabo fugit doloribus quod
      obcaecati et tenetur sed, corporis porro accusantium quasi, nostrum ipsa quo? Molestiae
      obcaecati facere quos earum culpa atque nemo explicabo laborum quod, error dicta amet eligendi
      a pariatur esse sint hic dolores eius!
    </div>
  </div>
</template>

<script lang="ts">
import building1 from '../assets/landing/building_1.png'
import building2 from '../assets/landing/building_2.png'
import building3 from '../assets/landing/building_3.png'
import building4 from '../assets/landing/building_4.png'
import clouds from '../assets/landing/clouds.png'

export default {
  data() {
    return {
      layers: [
        {
          src: clouds
        },
        {
          src: building4
        },
        {
          src: building3
        },
        {
          src: building2
        },
        {
          src: building1
        }
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const parallaxLayers = document.querySelectorAll('.parallax-layer')
      parallaxLayers.forEach((layer, index) => {
        const speed = (index + 1) * 0.5
        ;(layer as HTMLElement).style.setProperty(
          `--parallax-speed-${index + 1}`,
          `-${window.scrollY * speed}px`
        )
      })
    }
  }
}
</script>

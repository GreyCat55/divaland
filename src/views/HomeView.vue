<script setup lang="ts">
import MenuBar from '../components/MenuBar.vue'
import NavBar from '../components/NavBar.vue'
import HomePage from '../components/HomePage.vue'
</script>

<template>
  <main>
    <div class="container mx-auto text-center bg-violet-200 h-screen justify-items-center">
      <MenuBar />
      <NavBar />
      <HomePage />
    </div>
  </main>
</template>

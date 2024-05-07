<script setup lang="ts"></script>

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
  <ul class="flex zyzol bg-gradient-to-t from-violet-600 to-violet-700">
    <li class="px-6 py-2 hover:bg-violet-500">
      <a class="text-center text-violet-200" href="/">Home</a>
    </li>
    <li class="px-6 py-2 hover:bg-violet-500">
      <a class="text-center text-violet-200" href="/mycloset">Closet</a>
    </li>
    <li class="px-6 py-2 hover:bg-violet-500">
      <a class="text-center text-violet-200" href="/divacity">City</a>
    </li>
    <li class="px-6 py-2 hover:bg-violet-500">
      <a class="text-center text-violet-200" href="/forum">Forum</a>
    </li>
    <li class="px-6 py-2 hover:bg-violet-500">
      <a class="text-center text-violet-200" href="/battle">Battle</a>
    </li>
  </ul>
</template>

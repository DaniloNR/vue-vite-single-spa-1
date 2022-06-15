<template lang="pug">
h1 Esse é o APP numero 1
h4 teste 
img(alt="Vue logo", :src="parsePublicAssetsPath(LogoUrl)")
HelloWorld(msg="Hello Vue 3 + TypeScript + Vite")
</template>

<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import LogoUrl from "./assets/logo.png";
import parsePublicAssetsPath from "./utils/parse-public-assets-path";
</script>

<style>
h4 {
  color: blue;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

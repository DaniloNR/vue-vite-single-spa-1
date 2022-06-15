<template lang="pug">
div
  button(@click="showClick") Botao importado {{ count }}
  p Oi esse texto é interpolado {{ count }}
</template>

<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);
const showClick = () => {
  count.value += 1;
  console.log("clicked!");
};
</script>

<style scoped></style>

<template>
    <div>
      <h2>watch计算属性</h2>
      <h3>{{ total }}</h3>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
let total = ref(0);

</script>

<style scoped></style>
<template>
  <div>
    <h2>新闻详情</h2>
    <p>{{ id }}</p>
    <p>{{ title }}</p>
    <p>{{ content }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs } from 'vue';
defineProps(['id', 'title', 'content']);

</script>

<style scoped></style>
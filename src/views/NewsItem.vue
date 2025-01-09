<template>
  <div>
    <h2>新闻详情</h2>
    <p>{{ query.id }}</p>
    <p>{{ query.title }}</p>
    <p>{{ query.content }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
let { query } = toRefs(route); // toRefs解构保持响应式

</script>

<style scoped></style>
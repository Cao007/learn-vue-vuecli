<template>
  <div>
    <h2>新闻详情</h2>
    <p>{{ params.id }}</p>
    <p>{{ params.title }}</p>
    <p>{{ params.content }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
let { params } = toRefs(route); // toRefs解构保持响应式

</script>

<style scoped></style>
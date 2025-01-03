<template>
  <div>Child子组件</div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';

onBeforeMount(() => {
  console.log('Child子组件 onBeforeMount');
});

onMounted(() => {
  console.log('Child子组件 onMounted');
});

onBeforeUpdate(() => {
  console.log('Child子组件 onBeforeUpdate');
});

onUpdated(() => {
  console.log('Child子组件 onUpdated');
});

onBeforeUnmount(() => {
  console.log('Child子组件 onBeforeUnmount');
});

onUnmounted(() => {
  console.log('Child子组件 onUnmounted');
});
</script>

<style scoped></style>
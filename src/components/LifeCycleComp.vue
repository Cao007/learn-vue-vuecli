<template>
  <div>
    <h2>生命周期钩子</h2>

    <!-- 更新组件 -->
    <p>{{ message }}</p>
    <button @click="message = 'Hello Vue3'">Change Message</button>

    <!-- 销毁组件 -->
    <ChildComp v-if="isShow" />
    <button @click="isShow = !isShow">显示/隐藏</button>
  </div>
  <hr>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';
import ChildComp from './ChildComp.vue';

const message = ref('Hello World');
let isShow = ref(true);

onBeforeMount(() => {
  console.log('父组件 onBeforeMount');
});

onMounted(() => {
  console.log('父组件 onMounted');
});

onBeforeUpdate(() => {
  console.log('父组件 onBeforeUpdate');
});

onUpdated(() => {
  console.log('父组件 onUpdated');
});

onBeforeUnmount(() => {
  console.log('父组件 onBeforeUnmount');
});

onUnmounted(() => {
  console.log('父组件 onUnmounted');
});



</script>

<style scoped></style>
<template>
  <div>
    <h3>Child2子组件</h3>
    <button @click="count++">Child2子组件的count++</button>
    <p>Child2子组件的count: {{ count }}</p>
  </div>
  <hr>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
let num = 999;
let count = ref(0);

const countDec = () => {
  count.value--;
}

// 子组件的数据和方法暴露给父组件
defineExpose({
  num,
  count,
  countDec
})
</script>

<style scoped></style>
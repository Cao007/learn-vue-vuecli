<template>
  <div>
    <h2 ref="h2Ref">ref获取h2元素</h2>
  </div>
  <hr>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
const h2Ref = ref<HTMLElement | null>(null);
// DOM挂载后执行
onMounted(() => {
  console.log(h2Ref.value.innerHTML);
})
</script>

<style scoped></style>
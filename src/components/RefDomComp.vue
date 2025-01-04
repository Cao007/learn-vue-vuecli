<template>
  <div>
    <h2 ref="h2Ref">ref获取h2元素</h2>
    <ul>
      <li ref="lisRef" v-for="(item, index) in 10" :key="index">{{ index }}</li>
    </ul>
  </div>
  <hr>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
const h2Ref = ref<HTMLElement | null>(null);
const lisRef = ref<HTMLElement[]>([]);

// DOM挂载后执行
onMounted(() => {
  console.log(h2Ref.value.innerHTML);
  console.log(lisRef.value);
  for (let index = 0; index < lisRef.value.length; index++) {
    if (index % 2) {
      lisRef.value[index].style.color = 'red';
    }
  }
})
</script>

<style scoped></style>
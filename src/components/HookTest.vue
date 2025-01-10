<template>
  <div>
    <h2>hook自定义customRef</h2>
    <p>{{ count }}</p>
    <button @click="count++">+1</button>
    <input type="text" placeholder="输入标题" ref="inputRef" />
    <button @click="handleClick">修改标题</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import useMyRef from '@/hooks/useMyRef';
import useTitle from '@/hooks/useTitle';
let count = useMyRef(0);

let title = useTitle('标题');
let inputRef = ref();
function handleClick() {
  title.value = inputRef.value.value;
  inputRef.value.value = '';
}

</script>

<style scoped></style>
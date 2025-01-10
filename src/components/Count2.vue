<template>
  <div class="countContainer">
    <h2>Count2计数</h2>
    <h3>当前求和为：{{ sum }}</h3>
    <select name="" id="" v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(num)">+</button>
    <button @click="decrement(num)">-</button>
  </div>
  <hr>
</template>

<script setup lang="ts">
import { useCount2Store } from '@/store/Count2';
import { storeToRefs } from 'pinia';

const countStore = useCount2Store();
const { sum, num } = storeToRefs(countStore);
const { increment, decrement } = countStore;

</script>

<style scoped>
.countContainer {
  background-color: orange;
  padding: 10px;
  border: 1px solid orange;
}

button {
  width: 50px;
  height: 30px;
  margin: 0 10px
}
</style>
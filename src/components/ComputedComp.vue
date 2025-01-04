<template>
  <div>
    <h2>computed计算属性</h2>
    <p>只读的计算属性</p>
    <p>firstName: {{ firstName }}</p>
    <p>lastName: {{ lastName }}</p>
    <p>fullName: {{ fullName }}</p>
    <hr>
    <p>可读可写的计算属性</p>
    <p>price: {{ price }}</p>
    <p>quantity: {{ quantity }}</p>
    <p>total: {{ total }}</p>
    <button @click="total = 100">修改total</button>
    <hr>
    <p>计算属性传参</p>
    <p>arr1: {{ arr1 }}</p>
    <p>arr2: {{ arr2 }}</p>
    <p>sum(arr1): {{ sum(arr1) }}</p>
    <p>sum(arr2): {{ sum(arr2) }}</p>
  </div>
  <hr>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue';

// 1.只读的计算属性
const firstName = ref('张');
const lastName = ref('三');
const fullName = computed(() => {
  return firstName.value + lastName.value;
})

// 2.可读可写的计算属性
const price = ref(100);
const quantity = ref(2);
const total = computed({
  get() {
    return price.value * quantity.value;
  },
  set(newValue) {
    quantity.value = newValue / price.value;
  }
})

// 3.计算属性传参
const arr1 = ref([1, 2, 3, 4, 5]);
const arr2 = ref([6, 7, 8, 9, 10]);
const sum = computed(() => {
  return (arr) => {
    return arr.reduce((prev, cur) => {
      return prev + cur;
    }, 0);
  }
})
</script>

<style scoped></style>
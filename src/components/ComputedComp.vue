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

</script>

<style scoped></style>
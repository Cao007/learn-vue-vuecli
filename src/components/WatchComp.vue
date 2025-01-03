<template>
  <div>
    <h2>侦听器watch与watchEffect</h2>
    <button @click="stopWatch1">stopWatch1取消侦听</button>
    <button @click="stopWatch2">stopWatch2取消侦听</button>
    <button @click="stopWatch3">stopWatch3取消侦听</button>
    <button @click="stopWatch4">stopWatch4取消侦听</button>
    <ul>
      <li @click="num++">{{ num }}</li>
      <li @click="obj.age++">{{ obj.age }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch, watchEffect } from 'vue';

// 1.监听ref等响应式对象
let num = ref(0);
const stopWatch1 = watch(num, (newVal, oldVal) => {
  console.log('num newVal', newVal, 'num oldVal', oldVal);
}, {
  immediate: true
})


// 2.监听对象的某个属性
let obj = reactive({
  name: '张三',
  age: 18
})

const stopWatch2 = watch(() => obj.age, (newVal, oldVal) => {
  console.log('obj.age newVal', newVal, 'obj.age oldVal', oldVal);
}, {
  immediate: true,
  deep: true
})


// 3.监听多个响应式对象
const stopWatch3 = watch([num, () => obj.age], ([newNum, newAge], [oldNum, oldAge]) => {
  console.log('newNum', newNum, 'oldNum', oldNum, 'newAge', newAge, 'oldAge', oldAge);
}, {
  immediate: true
})

// 4.副作用清理
const stopWatch4 = watchEffect(() => {
  console.log('watchEffect', num.value, obj.age);
})

</script>

<style scoped>
ul li {
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border: 1px solid #000;
}
</style>
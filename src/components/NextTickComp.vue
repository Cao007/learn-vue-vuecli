<template>
  <div>
    <h2>nextTick函数的使用</h2>
    <input class="inputText" type="text" v-if="isEdit" v-model="message">
    <span v-else>{{ message }}</span>
    <button @click="handleCheck">{{ isEdit ? '保存' : '编辑' }}</button>
  </div>
  <hr>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue';
let isEdit = ref(false);
let message = ref('hello world');

const handleCheck = () => {
  isEdit.value = !isEdit.value;
  if (isEdit.value) {
    // 在DOM更新后执行，获取焦点
    nextTick(() => {
      document.querySelector('.inputText')?.focus();
    });
  }
}

</script>

<style scoped></style>
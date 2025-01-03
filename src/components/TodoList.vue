<template>
  <h2>todolist</h2>
  <div class="todoList-container">
    <input type="text" @keypress.enter="addItem" placeholder="请输入内容" />
    <ul>
      <li v-for="item in arr" :key="item.id" :class="[item.done ? 'active' : '', 'ellipsis']">
        <div class="box-left">
          <input type="checkbox" @change="item.done = !item.done" :checked="item.done" />
          <span>{{ item.title }}</span>
        </div>
        <button @click="handleDelete(item.id)">删除</button>
      </li>
    </ul>
    <div class="footer">
      <div class="left-box">
        <input type="checkbox" @change="handleCheckAll" :checked="doneNum === total" />
        <span>全选</span>
      </div>
      <div class="right-box">
        <span>已完成{{ doneNum }}</span>
        <span>/</span>
        <span>全部{{ total }}</span>
        <button @click="handleDeleteDone">删除已完成</button>
      </div>
    </div>
  </div>
  <hr>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from 'vue';

// 定义一个数组
type Item = {
  id: number,
  title: string,
  done: boolean
}
let arr = ref<Item[]>([]);

// 计算已完成
let doneNum = computed(() => {
  return arr.value.filter(item => item.done).length;
})

// 计算总数
let total = computed(() => {
  return arr.value.length;
})

// 添加item
const addItem = (e: KeyboardEvent) => {
  let item_info: Item = {
    id: Date.now(),
    title: e.target.value,
    done: false
  }

  if (e.target.value.trim() === '') {
    alert('请输入内容');
    return;
  }

  if (arr.value.some(item => item.title === item_info.title)) {
    alert('内容已存在');
    return;
  }

  // 添加到数组中
  arr.value.push(item_info);
  e.target.value = '';
}

// 删除item
const handleDelete = (id: number) => {
  arr.value.splice(arr.value.findIndex(item => item.id === id), 1);
}

// 删除已完成
const handleDeleteDone = () => {
  arr.value = arr.value.filter(item => !item.done);
}

// 全选
const handleCheckAll = (e: Event) => {
  arr.value.forEach(item => {
    item.done = (e.target as HTMLInputElement).checked;
  })
}

// 监听数组的变化
watch(arr, (newVal, oldVal) => {
  localStorage.setItem('todoList', JSON.stringify(newVal));
}, { deep: true })

// 从本地存储中获取数据
arr.value = JSON.parse(localStorage.getItem('todoList') || '[]');
</script>

<style scoped>
.active {
  color: #999;
  text-decoration: line-through;
}

/* 单行文本省略号 */
.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.todoList-container {
  width: 500px;
  margin: 0 auto;
}

.todoList-container>input {
  width: 100%;
  outline: none;
  height: 50px;
  line-height: 50px;
  padding: 10px;
}

.todoList-container>ul {
  list-style: none;
}

.todoList-container>ul li {
  display: flex;
  justify-content: space-between;
  height: 50px;
  line-height: 50px;
  border: 1px solid #000;
  padding-left: 10px;
  margin: 5px 0px;
}

.todoList-container>.footer {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  line-height: 50px;
  border: 1px solid #000;
  padding-left: 10px;

}

.todoList-container>.footer button {
  height: 50px;
}
</style>

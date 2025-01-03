<template>
  <TodoList />
  <WatchComp />
  <ComputedComp />
  <LifeCycleComp />
</template>

<script lang="ts" setup>
import TodoList from './components/TodoList.vue';
import WatchComp from './components/WatchComp.vue'
import ComputedComp from './components/ComputedComp.vue'
import LifeCycleComp from './components/LifeCycleComp.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  background-color: pink;
}
</style>

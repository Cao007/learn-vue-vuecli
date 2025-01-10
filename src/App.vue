<template>
  <TodoList />
  <WatchComp />
  <ComputedComp />
  <LifeCycleComp />
  <RefDomComp />
  <RefCompComp />
  <NextTickComp />
  <VueRouterExample />
  <Count />
  <Count2 />
  <HookTest />
</template>

<script lang="ts" setup>
import CustomRef from './components/CustomRef.vue';


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

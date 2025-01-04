<template>
  <div>
    <h2>ref获取Child2组件实例</h2>
    <button @click="child2Ref?.countDec">RefCompComp组件的count--</button>
    <Child2Comp ref="child2Ref" />
  </div>
  <hr>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Child2Comp from './Child2Comp.vue';

const child2Ref = ref<InstanceType<typeof Child2Comp>>();
onMounted(() => {
  console.log('在RefCompComp中获取Child2组件实例', child2Ref.value);
});

</script>

<style scoped></style>
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCount2Store = defineStore("count2", () => {
  const sum = ref(0);
  const num = ref(1);

  function increment(val: number) {
    sum.value += val;
  }

  function decrement(val: number) {
    sum.value -= val;
  }

  const doubleCount = computed(() => sum.value * 2);

  return {
    sum,
    num,
    increment,
    decrement,
    doubleCount,
  }
})
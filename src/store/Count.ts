import { defineStore } from "pinia";

export const useCountStore = defineStore("count", {
  state: () => ({
    sum: 0, // 求和
    num: 1  // 下拉框双向数据绑定的值
  }),
  actions: {
    increment(val: number) {
      this.sum += val;
    },
    decrement(val: number) {
      this.sum -= val;
    },
  },
  getters: {
    doubleCount: (state) => state.sum * 2,
  },
})
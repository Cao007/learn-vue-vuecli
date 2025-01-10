import { isRef, ref, watch } from 'vue'

export default function (titleValue: string) {
  const titleRef = ref(titleValue)

  // 监听title改变
  watch(titleRef, (newValue) => {
    document.title = newValue
  }, {
    immediate: true
  })

  // 向外部暴露数据
  return titleRef
}
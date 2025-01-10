import { customRef } from 'vue'

export default function useMyRef<T>(value: T, delay = 300) {
  let _value = value
  return customRef((track, trigger) => {
    let timer: number;
    return {
      get() {
        track()
        return _value
      },
      set(newValue: any) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          _value = newValue
          trigger()
        }, delay)
      }
    }
  })
}
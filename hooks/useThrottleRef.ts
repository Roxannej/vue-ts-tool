import { Ref, customRef } from 'vue-demi'

 function useThrottleRef<T>(value: T, wait = 0): Ref<T> {
  let rawValue = value
  let timer:any = null

  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return rawValue
      },
      set(val) {
        if (!timer) {
          rawValue = val
          trigger()
          timer = setTimeout(() => {
            timer = null
          }, wait)
        }
      }
    }
  })
}

export default useThrottleRef




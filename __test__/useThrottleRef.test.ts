// import { useThrottleRef } from '../hooks'
import { useThrottleRef } from '../hooks/index'

type noop = (...args: any[]) => any

describe('test useThrottleRef', () => {
  const nextTask = (fn: noop, wait: number) => setTimeout(fn, wait)

  test('should be run first time when run', () => {
    const throttleValue = useThrottleRef(0, 500)
    throttleValue.value = 1
  })
})
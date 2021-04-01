import {useStorage} from '../hooks/useStorage'

const KEY = 'test'

describe('test useStorage', () => {
  const nextTick = () => Promise.resolve().then()

  afterEach(() => {
    // localStorage.clear()
  })

  test('storage will sync', async () => {
    const sv = useStorage(localStorage, KEY, 1)
    expect(sv.value).toBe(1)
    sv.value = 2
    await nextTick()
    expect(localStorage.setItem).toBeCalled()
    expect(localStorage.setItem).toBeCalledWith(KEY, JSON.stringify(2))
  })
})


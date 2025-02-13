import { describe, it, expect, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import SeatSelector from '../SeatSelector.vue'
import { createPinia, setActivePinia } from 'pinia'

describe('HelloWorld', () => {
  beforeEach(() => {
    // 每次測試前都建立新的 Pinia 實例，並設為活躍
    setActivePinia(createPinia())
    mount(SeatSelector, {
      props: { msg: 'Hello Vitest' },
      // global: {
      //   plugins: [createPinia()],
      // },
    })
  })
  // let wrapper
  // beforeEach(() => {
  //   mount(SeatSelector, {
  //     props: { msg: 'Hello Vitest' },
  //     global: {
  //       plugins: [createPinia()],
  //     },
  //   })
  // })
  // it('renders properly', () => {
  //   expect(wrapper.text()).toContain('請選擇觀看電影的座位您的座位未售出已售出 螢幕')
  // })

  it('dsas', () => {
    expect(true).toBeTruthy()
  })
})

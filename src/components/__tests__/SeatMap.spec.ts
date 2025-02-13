import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import SeatMap from '../SeatMap.vue'
import { createPinia } from 'pinia'
import { beforeEach } from 'node:test'

describe('HelloWorld', () => {
  const wrapper = mount(SeatMap, {
    props: { msg: 'Hello Vitest' },
    global: {
      plugins: [createPinia()],
    },
  })
  beforeEach(() => {})
  it('renders properly', () => {
    expect(wrapper.text()).toContain('請選擇觀看電影的座位您的座位未售出已售出 螢幕')
  })

  it('should get input data', () => {
    expect(true).toBeTruthy()
  })
})

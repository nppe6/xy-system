// test.ts

import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/get',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: '请求成功',
        types: 'success',
        data: {
          name: '萧先生',
          age: 19
        }
      }
    }
  }
] as MockMethod[]

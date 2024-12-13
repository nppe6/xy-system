import http from '@/plugins/axios'

interface UserInterface {
  name: string
  age: number
}
export function getUser() {
  return http.request<UserInterface>({
    url: 'get'
  })
}

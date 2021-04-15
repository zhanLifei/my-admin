import request from '@/ulit/request'

export function userLogin(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}
import request from '@/ulit/request'

export function screenList(data) {
  return request({
    url: '/screenList',
    method: 'post',
    data
  })
}
import request from '@/ulit/request'

export function dataList(data) {
  return request({
    url: '/dataList',
    method: 'post',
    data
  })
}
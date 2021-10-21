import request from '@/ulit/request'

export function banners(data) {
  return request({
    url: '/banners',
    method: 'post',
    data
  })
}

export function productDataList(data) {
  return request({
    url: '/productDataList',
    method: 'post',
    data
  })
}
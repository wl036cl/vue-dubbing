/**
 * Author:ll36
 * Create Time:2018/04/19 19:15
 * Descripttion:
 */
import request from '@/utils/request'
export function signIn (query) {
  return request({
    url: '/pc/signIn',
    method: 'get',
    params: query
  })
}
export function signUp (query) {
  return request({
    url: '/pc/signUp',
    method: 'post',
    params: query
  })
}
export function signOut (query) {
  return request({
    url: '/pc/signOut',
    method: 'post',
    params: query
  })
}

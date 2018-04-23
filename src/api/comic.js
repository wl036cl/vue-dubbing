/**
 * Author:ll36
 * Create Time:2018/04/17 15:43
 * Descripttion:
 */
import request from '@/utils/request'
export function getComicList (query) {
  return request({
    url: '/pc/getComicList',
    method: 'get',
    params: query
  })
}
export function getComicChapterList (query) {
  return request({
    url: '/pc/getComicChapterList',
    method: 'get',
    params: query
  })
}
export function getComicImgList (query) {
  return request({
    url: '/pc/getComicImgList',
    method: 'get',
    params: query
  })
}
//
// export function test (query) {
//   return request({
//     url: 'http://localhost:28168/api/user/loginin?oauthUId=10000&oauthToken=07005702&type=2',
//     method: 'get',
//     params: query
//   })
// }

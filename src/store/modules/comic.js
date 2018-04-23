/**
 * Author:ll36
 * Create Time:2018/04/17 19:38
 * Descripttion:
 */
import {getComicList} from '@/api/comic'

export default {
  state: {
    list: [], //  {page:1,data:[]}
    finished: false,
    totalPage: 0
  },
  mutations: {
    SET_COMIC_FINISHED: (state, finished) => {
      state.finished = finished
    },
    SET_COMIC_TOTALPAGE: (state, totalPage) => {
      state.totalPage = totalPage
    },
    PUSH_COMIC_LIST: (state, list) => {
      if (list) {
        state.list.push(list)
      }
    }
  },
  actions: {
    // getComic ({state}, {page, id}) {
    //   if (state.totalPage < page || !state.list.length) {
    //     return null
    //   }
    //   const list = state.list.find(i => {
    //     return i.page === page
    //   })
    //   if (!list || !list.hasOwnProperty('data')) {
    //     return null
    //   }
    //   return list.data.find(i => {
    //     return i.Id === id
    //   })
    // },
    getComicList ({commit, state}, page) {
      try {
        return new Promise((resolve, reject) => {
          if (page < 0 || (state.totalPage > 0 && page > state.totalPage)) {
            reject(new Error('参数错误'))
          } else if (state.finished && page > state.totalPage) {
            reject(new Error('没有更多数据'))
          } else {
            let data = null
            if (state.list.length) {
              data = state.list.find((i) => {
                return i.page === page
              })
            }
            if (data) {
              resolve(data.data)
            } else {
              getComicList({page}).then((res) => {
                res = res.data
                if (res.code === 1) {
                  commit('SET_COMIC_FINISHED', res.finished) // 是否最后一页
                  commit('SET_COMIC_TOTALPAGE', res.totalPage) //  总页数
                  commit('PUSH_COMIC_LIST', {page, data: res.data}) //  数据 //  {page:1,data:[]}
                  resolve(res.data)
                } else {
                  reject(new Error(res.hasOwnProperty('msg') ? res.msg : res))
                }
              }).catch(err => {
                console.log(err)
                reject(new Error('服务器返回错误！'))
              })
            }
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
